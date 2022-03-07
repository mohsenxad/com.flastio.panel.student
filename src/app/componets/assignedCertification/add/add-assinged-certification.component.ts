import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignedCertification } from 'src/app/model/assignedCertification';
import { Certification } from 'src/app/model/certification';
import { ValidationResult } from 'src/app/model/validationResult';
import { AssignedCertificationService } from 'src/app/services/assignedCertification/assigned-certification.service';
import { CertificationService } from 'src/app/services/certification/certification.service';

@Component({
  selector: 'add-assinged-certification',
  templateUrl: './add-assinged-certification.component.html',
  styleUrls: ['./add-assinged-certification.component.scss']
})
export class AddAssingedCertificationComponent implements OnInit {

  @Output() onAssignedCertificationAdded = new EventEmitter<AssignedCertification>();
  @Output() onClose = new EventEmitter();

  assignedCertification: AssignedCertification = {
    issuedDateMonth: 0
  };

  //certificationFile: File ;
  confirmDicardIsVisible: Boolean = false;
  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError:false,
    messageList:[]
  }

  constructor(
    private certificationService: CertificationService,
    private assignedCertificationService: AssignedCertificationService,
  ) {}

  ngOnInit(): void {}

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
    this.validationResult = this.validate(this.assignedCertification);
    
    if(!this.validationResult.hasError){
      this.isLoading = true;
      this.assignedCertification = await this.assignedCertificationService.save(this.assignedCertification);
      this.isLoading = false;
      this.onAssignedCertificationAdded.emit(this.assignedCertification);
    }
    
  }

  setCertificationFile(uploadResponse: any, fileUrl:String){
    this.assignedCertification.fileName = uploadResponse.fileName;
    this.assignedCertification.fileUrl = uploadResponse.fileUrl;
  }

  isChanged():Boolean{
    let result: Boolean = false;

    if(this.assignedCertification.certification){
      result = true;
    }

    if(this.assignedCertification.issuedDateMonth != 0){
      result = true;
    }

    if(this.assignedCertification.issuedDateYear){
      result = true;
    }

    if(this.assignedCertification.organization){
      result = true;
    }

    if(this.assignedCertification.fileUrl){
      result = true;
    }
 
    return result;
  }

  hideConfirmDiscardModal(){
    this.confirmDicardIsVisible = false;
  }
  
  cancel(){
    if(this.isChanged()){
      this.confirmDicardIsVisible = true;
    }else{
     this.close();
    }
  }

  close(){
    this.onClose.emit();
  }

}
