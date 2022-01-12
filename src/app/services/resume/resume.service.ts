import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  studentId: String;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
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
      .put(url.toString(),body, {headers})
      .toPromise();
  }

  async getUploadUrl(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .getResumeUploadUrl({Bucket:"flastio"})
    return result;
  }

  async setTranscriptFile(resumeFileName: String, resumeFileUrl: String){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .setResumeFileName(this.studentId,resumeFileName, resumeFileUrl);
  }

  async requestFeedback(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .requestResumeFeedback(this.studentId);
  }

}
