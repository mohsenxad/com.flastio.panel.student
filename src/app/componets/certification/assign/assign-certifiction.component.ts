import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Certification } from '../../../model/certification';
import { AssignedCertification } from '../../../model/assignedCertification';
import { CertificationService } from 'src/app/services/certification/certification.service';

@Component({
  selector: 'assign-certifiction',
  templateUrl: './assign-certifiction.component.html',
  styleUrls: ['./assign-certifiction.component.scss']
})
export class AssignCertifictionComponent implements OnInit {

  @Output() onAssignedCertificationAdded = new EventEmitter<AssignedCertification>();
  @Output() onClose = new EventEmitter();

  assignedCertification: AssignedCertification = {};

  certificationFile: File ;
  isLoading:Boolean = false;

  constructor(
    private certificationService:CertificationService
  ) { 
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
    this.assignedCertification = await this.certificationService.save(this.assignedCertification);
    this.isLoading = false;
    this.onAssignedCertificationAdded.emit(this.assignedCertification);
    this.onClose.emit();
  }
  
  cancel(){
    // remove certification files from s3
    this.onClose.emit();
  }

  close(){
    this.onClose.emit();
  }

  async handleFileInput(files: FileList) {
    this.isLoading = true;
    this.certificationFile = files.item(0);
    let response:any = await this.certificationService.getUploadUrl()
    let signedUploadUr:String = response.presignedUrl;

    this.assignedCertification.fileName = response.fileName.toString();
    this.assignedCertification.fileUrl = signedUploadUr.split('?')[0];
    this.uploadFile(signedUploadUr)
    this.isLoading = false;
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
