import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Certification } from '../../../model/certification';
import { AssignedCertification } from '../../../model/assignedCertification';
import { CertificationService } from 'src/app/services/certification/certification.service';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'assign-certifiction',
  templateUrl: './assign-certifiction.component.html',
  styleUrls: ['./assign-certifiction.component.scss']
})
export class AssignCertifictionComponent implements OnInit {

  @Output() onAssignedCertificationAdded = new EventEmitter<AssignedCertification>();
  @Output() onClose = new EventEmitter();

  assignedCertification: AssignedCertification = {
    issuedDateMonth: 0
  };

  certificationFile: File ;
  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError:false,
    messageList:[]
  }

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

  selectedIssuedDateMonth(issuedDateMonth: Number){
    this.assignedCertification.issuedDateMonth = issuedDateMonth;

  }

  selectedIssuedDateYear(issuedDateYear: Number){
    this.assignedCertification.issuedDateYear = issuedDateYear;

  }

  validate(assignedCertification: AssignedCertification): ValidationResult{
    let validationResult: ValidationResult ={
      hasError: false,
      messageList: []
    };

    if (!assignedCertification.certification){
      validationResult.hasError = true;
      validationResult.messageList.push("Chose Certification Name from List");
    }

    if(!assignedCertification.issuedDateMonth){
      validationResult.hasError = true;
      validationResult.messageList.push("Set Month of IssueDate");
    }


    if(!assignedCertification.issuedDateYear){
      validationResult.hasError = true;
      validationResult.messageList.push("Set Year of IssueDate");
    }

    return validationResult;
  }

  async save(){
    let validationResult = this.validate(this.assignedCertification);
    
    if(!validationResult.hasError){
      this.isLoading = true;
      this.assignedCertification = await this.certificationService.save(this.assignedCertification);
      this.isLoading = false;
      this.onAssignedCertificationAdded.emit(this.assignedCertification);
      this.onClose.emit();
    }else{
      this.validationResult = validationResult;
    }
    
  }

  setCertificationFile(uploadResponse: any, fileUrl:String){
    this.assignedCertification.fileName = uploadResponse.fileName;
    this.assignedCertification.fileUrl = uploadResponse.fileUrl;
  }
  
  cancel(){
    // remove certification files from s3
    this.onClose.emit();
  }

  close(){
    this.onClose.emit();
  }

}
