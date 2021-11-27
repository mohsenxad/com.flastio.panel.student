import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { ResumeService } from 'src/app/services/resume/resume.service';
import { Student } from '../../model/student';
import * as Realm from "realm-web";

@Component({
  selector: 'resume-panel',
  templateUrl: './resume-panel.component.html',
  styleUrls: ['./resume-panel.component.scss']
})
export class ResumePanelComponent implements OnInit {

  student: Student;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  transcriptFile: File ;
  uniqFileName: String;
  fileUrl: String;

  constructor(
    private resumeService:ResumeService,
    private localStorageService: LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }
  

    

  ngOnInit(): void {
  }

  async handleFileInput(files: FileList) {
    this.transcriptFile = files.item(0);
    let response:any = await this.getUploadUrl()
    this.uniqFileName = response.fileName.toString();
    let signedUploadUr = response.presignedUrl;
    this.uploadFile(signedUploadUr)
  }

  async getUploadUrl(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .getResumeUploadUrl({Bucket:"flastio"})
    console.log(result);
    return result;
  }

  uploadFile(uploadPresignUrl: string){
    const contentType = this.transcriptFile.type;
    this.resumeService.upload(uploadPresignUrl,this.transcriptFile, contentType)
      .subscribe(data=>{
        console.log('uploaded');
        console.log(data);
        this.setTranscriptFile();
      });
  }

  async setTranscriptFile(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .setResumeFileName(this.student._id,this.uniqFileName)
    console.log(result);
    this.fileUrl = result;
  }


}
