import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Project } from 'src/app/model/project';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
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
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .getProjectSupportingFileUploadUrl({Bucket:"flastio"})
    return result;
  }

  async getProjectUploadUrl(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .getProjectUploadUrl({Bucket:"flastio"})
    return result;
  }

  async add(project: Project): Promise<Project>{
    const user: Realm.User = this.app.currentUser;
    let result: Project  = await user.functions.addProject(
      this.studentId,
      project.baseInfo.summeryFileUrl,
      project.baseInfo.projectType,
      project.baseInfo.name,
      project.baseInfo.course,
      project.baseInfo.company,
      project.baseInfo.description,
      project.baseInfo.skillList,
      project.baseInfo.yearCompleted,
      project.isPublished,
      project.linkUrlList,
      project.supportingFileList,
      project.contributorList,
      project.assignedCertification
    );
    return result;
  }

  
  async edit(project: Project): Promise<Project>{
    const user: Realm.User = this.app.currentUser;
    let result: Project  = await user.functions.editProject(
      this.studentId,
      project._id.toString(),
      project.baseInfo.summeryFileUrl|| undefined,
      project.baseInfo.projectType|| undefined,
      project.baseInfo.name|| undefined,
      project.baseInfo.course|| undefined,
      project.baseInfo.company|| undefined,
      project.baseInfo.description|| undefined,
      project.baseInfo.skillList|| undefined,
      project.baseInfo.yearCompleted|| undefined,
      project.isPublished|| undefined,
      project.linkUrlList|| undefined,
      project.supportingFileList|| undefined,
      project.contributorList|| undefined,
      project.assignedCertification|| undefined,
    );
    return result;
  }

  async remove(project: Project):Promise<any>{
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions
      .removeProject(
        this.studentId,
        project._id.toString()
      );
    return result;
  }
}
