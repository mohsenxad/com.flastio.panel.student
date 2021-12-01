import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Certification } from '../../model/certification';
import * as Realm from "realm-web";
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../model/student';
import { AssignedCertification } from '../../model/assignedCertification';
import { CertificationService } from 'src/app/services/certification/certification.service';

@Component({
  selector: 'assign-certifiction',
  templateUrl: './assign-certifiction.component.html',
  styleUrls: ['./assign-certifiction.component.scss']
})
export class AssignCertifictionComponent implements OnInit {

  @Output() onClose = new EventEmitter();

  student: Student = {};
  assignedCertification: AssignedCertification = {};

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  certificationFile: File ;
  uniqFileName: String;
  fileUrl: String;
  isLoading:Boolean = false;

  constructor(
    private localStorageService:LocalStorageService,
    private certificationService:CertificationService
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

  async save(){
    this.isLoading = true;
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions
      .assignCertification(
        this.student._id,
        this.assignedCertification.certification,
        this.assignedCertification.issuedDateYear,
        this.assignedCertification.issuedDateMonth,
        this.uniqFileName,
        this.assignedCertification.fileUrl
      );
    this.assignedCertification = result;
    this.isLoading = false;
  }
  
  cancel(){
    // remove certification files from s3
    console.log('cancel');
    
    this.onClose.emit();
  }

  close(){
    console.log('close');
    
    this.onClose.emit();
  }

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    this.certificationFile = files.item(0);
    let response:any = await this.getUploadUrl()
    this.uniqFileName = response.fileName.toString();
    let signedUploadUr:String = response.presignedUrl;
    this.assignedCertification.fileUrl = signedUploadUr.split('?')[0];
    this.uploadFile(signedUploadUr)
    this.isLoading = false;
  }

  async getUploadUrl(){
    this.isLoading = true;
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .getCertificationUploadUrl({Bucket:"flastio"})
    this.isLoading = false;
    return result;
  }

  uploadFile(uploadPresignUrl: String){
    this.isLoading = true;
    const contentType = this.certificationFile.type;
    this.certificationService.upload(uploadPresignUrl,this.certificationFile, contentType)
      .subscribe(data=>{
        console.log('uploaded');
        this.isLoading = false;
      });

  }


}
