import { Injectable } from '@angular/core';
import { Transcript } from 'src/app/model/transcript';
import { RealmService } from '../realm/realm.service';
import { AwsService } from '../aws/aws.service';

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {

  constructor(
    private awsService: AwsService,
    private realmService: RealmService,
  ) {}

  async upload( url: String, file:any, contentType: String): Promise<any>{
    return this.awsService.upload(url, file, contentType);
  }

  async getUploadUrl():Promise<any>{
    const bucket = {
      Bucket:"flastio"
    };
    const result: any  = await this.realmService.callFunction(
      "getTranscriptUploadUrl",
      bucket
    )
    return result;
  }

  async setTranscript(transcript:Transcript){
    const result: any  = await this.realmService.callFunction(
      "setTranscriptFileName",
      transcript
    );
    return result
      
  }

}
