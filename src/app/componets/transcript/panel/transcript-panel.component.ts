import { Component, OnInit } from '@angular/core';
import * as Realm from "realm-web";
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { TranscriptService } from 'src/app/services/transcript/transcript.service';
import { Student } from '../../model/student';

@Component({
  selector: 'transcript-panel',
  templateUrl: './transcript-panel.component.html',
  styleUrls: ['./transcript-panel.component.scss']
})
export class TranscriptPanelComponent implements OnInit {

  student: Student;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  transcriptFile: File ;
  uniqFileName: String;
  fileUrl: String;

  constructor(
    private transcriptService:TranscriptService,
    private localStorageService: LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }
  

    

  ngOnInit(): void {
  }

  async handleFileInput(files: FileList) {
    console.log('here');
    this.transcriptFile = files.item(0);
    let response:any = await this.getUploadUrl()
    this.uniqFileName = response.fileName.toString();
    let signedUploadUr = response.presignedUrl;
    this.uploadFile(signedUploadUr)
  }

  async getUploadUrl(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .getTranscriptUploadUrl({Bucket:"flastio"})
    console.log(result);
    return result;
  }

  uploadFile(uploadPresignUrl: string){
    console.log(this.transcriptFile);
    const contentType = this.transcriptFile.type;
    this.transcriptService.upload(uploadPresignUrl,this.transcriptFile, contentType)
      .subscribe(data=>{
        console.log('uploaded');
        console.log(data);
        this.setTranscriptFile();
      });
  }

  async setTranscriptFile(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .setTranscriptFileName(this.student._id,this.uniqFileName)
    console.log(result);
    this.fileUrl = result;
  }

}
