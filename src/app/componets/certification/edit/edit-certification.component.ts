import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignedCertification } from 'src/app/model/assignedCertification';
import { Certification } from 'src/app/model/certification';
import { ValidationResult } from 'src/app/model/validationResult';
import { AssignedCertificationService } from 'src/app/services/assignedCertification/assigned-certification.service';
import { CertificationService } from 'src/app/services/certification/certification.service';

@Component({
  selector: 'edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.scss']
})
export class EditCertificationComponent implements OnInit {

  @Input() assignedCertification: AssignedCertification;
  @Output() onAssignedCertificationEdited = new EventEmitter<AssignedCertification>();
  @Output() onClose = new EventEmitter();

  
  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError:false,
    messageList:[]
  }

  constructor(
    private certificationService:CertificationService,
    private assignedCertificationService: AssignedCertificationService
  ) {}

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
      await this.assignedCertificationService.edit(this.assignedCertification);
      this.isLoading = false;
      this.onAssignedCertificationEdited.emit(this.assignedCertification);
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
