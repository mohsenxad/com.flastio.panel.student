import { Component, OnInit } from '@angular/core';
import { Certification } from '../../model/certification';
import * as Realm from "realm-web";
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../model/student';
import { AssignedCertification } from '../../model/assignedCertification';

@Component({
  selector: 'assign-certifiction',
  templateUrl: './assign-certifiction.component.html',
  styleUrls: ['./assign-certifiction.component.scss']
})
export class AssignCertifictionComponent implements OnInit {

  student: Student = {};
  assignedCertification: AssignedCertification = {};

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  certificationFile: File ;
  uniqFileName: String;
  fileUrl: String;

  constructor(
    private localStorageService:LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }

  ngOnInit(): void {
  }

  onCertificationSet(certification: Certification):void{
    this.assignedCertification.certification = certification;
  }

  removeCertification(){
    this.assignedCertification.certification = undefined;
  }

  async onSubmit(){
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions.assignCertification(this.student._id, this.assignedCertification.certification, this.assignedCertification.issuedDateYear, this.assignedCertification.issuedDateMonth);
    this.assignedCertification = result;
    console.log(this.assignedCertification);
  }

  async handleFileInput(files: FileList) {
    this.certificationFile = files.item(0);
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
    const contentType = this.certificationFile.type;
    // this.resumeService.upload(uploadPresignUrl,this.transcriptFile, contentType)
    //   .subscribe(data=>{
    //     console.log('uploaded');
    //     console.log(data);
    //     this.setCertificationFile();
    //   });
  }

  async setCertificationFile(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .setResumeFileName(this.student._id,this.uniqFileName)
    console.log(result);
    this.fileUrl = result;
  }

}
