import { Injectable } from '@angular/core';
import { Resume } from 'src/app/model/resume';
import { AwsService } from '../aws/aws.service';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(
    private realmService: RealmService,
    private awsService: AwsService,
  ) {}

   async upload( url: String, file:any, contentType: String): Promise<any>{
    return this.awsService.upload(url, file, contentType);
  }

  async getUploadUrl():Promise<any>{
    const bucket = {
      Bucket:"flastio"
    };
    const result: any  = await this.realmService.callFunction(
      "getResumeUploadUrl",
      bucket
    )
    return result;
  }

  async setTranscript(resume:Resume){
    const result: any  = await this.realmService.callFunction(
      "setResumeFileName",
      resume
    );
    return result;
  }


}
