import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Realm from "realm-web";
import { Transcript } from 'src/app/model/transcript';

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {

  constructor(
    private http: HttpClient
  ) {}

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
      .getTranscriptUploadUrl({Bucket:"flastio"})
    return result;
  }

  async setTranscript(transcript:Transcript){
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let result: any  = await user.functions
      .setTranscriptFileName(transcript);
  }

}
