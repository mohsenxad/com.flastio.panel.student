import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Project } from 'src/app/componets/model/project';
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

  upload( url: String, file:any, contentType: String): any{
    let body: any =file;
    var headers: HttpHeaders = new HttpHeaders(
      {
        "conte": "application/x-www-form-urlencoded",
        "ContentType": contentType.toString()
      });
    return this.http
      .put(url.toString(),body, {headers});
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

  async add(project: Project){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions.addProject(
      this.studentId,
      project.summeryFileUrl,
      project.projectType,
      project.name,
      project.course,
      project.description,
      project.skillList,
      project.yearCompleted,
      project.isPublished,
      project.linkUrlList,
      project.supportingFileList,
      project.contributorList,
    );
    console.log(result);
  }
}
