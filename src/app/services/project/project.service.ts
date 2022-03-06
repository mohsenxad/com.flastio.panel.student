import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Project } from 'src/app/model/project';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  studentId :String;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){
    this.studentId = this.localStorageService.getStudent()._id;
  }

  async upload( url: String, file:any, contentType: String): Promise<any>{
    let body: any =file;
    var headers: HttpHeaders = new HttpHeaders(
      {
        "conte": "application/x-www-form-urlencoded",
        "ContentType": contentType.toString()
      });
    return this.http
      .put(url.toString(),body, {headers}).toPromise();
  }

  async getUploadUrl(){
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let result: any  = await user.functions
      .getProjectSupportingFileUploadUrl({Bucket:"flastio"})
    return result;
  }

  async getProjectUploadUrl(){
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let result: any  = await user.functions
      .getProjectUploadUrl({Bucket:"flastio"})
    return result;
  }

  async add(project: Project): Promise<Project>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let result: Project  = await user.functions.addProject(
      this.studentId,
      project.baseInfo,
      project.isPublished,
      project.linkUrlList,
      project.supportingFileList,
      project.contributorList,
      project.assignedCertification,
      project.role
    );

    // let functionArgs:any[]=
    // [this.studentId,
    // project.baseInfo,
    // project.isPublished,
    // project.linkUrlList,
    // project.supportingFileList,
    // project.contributorList,
    // project.assignedCertification,
    // project.role];

    // let result: Project  = await user.functions.callFunction("addProject",functionArgs);
    return result;
  }

  

  
  async edit(project: Project): Promise<Project>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let result: Project  = await user.functions.editProject(
      this.studentId,
      project._id.toString(),
      project.baseInfo || undefined,
      project.isPublished|| undefined,
      project.linkUrlList|| undefined,
      project.supportingFileList|| undefined,
      project.contributorList|| undefined,
      project.assignedCertification|| undefined,
      project.role|| undefined,
    );
    return result;
  }

  async remove(project: Project):Promise<any>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let result:any  = await user.functions
      .removeProject(
        this.studentId,
        project._id.toString()
      );
    return result;
  }
}
