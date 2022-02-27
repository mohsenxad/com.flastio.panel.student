import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contributor } from 'src/app/model/contributor';
import { Student } from 'src/app/model/student';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'select-or-add-contributor',
  templateUrl: './select-or-add-contributor.component.html',
  styleUrls: ['./select-or-add-contributor.component.scss']
})
export class SelectOrAddContributorComponent implements OnInit {

  @Output() onContributorAdded = new EventEmitter<Contributor>();
  isInviteFormVisible: Boolean = true;
  contributor:Contributor = {};
  contributorValidationResult: ValidationResult = {
    hasError:false,
    messageList:[]
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

  validateContributor(contributor: Contributor): ValidationResult{
    let validationResult: ValidationResult ={
      hasError: false,
      messageList: []
    };

    if (!contributor){
      validationResult.hasError = true;
      validationResult.messageList.push("Select or Invite Contributor");
    }

    if (
      contributor &&
      !contributor.student
    ){
      validationResult.hasError = true;
      validationResult.messageList.push("Select or Invite Contributor");
    }

    if (
      contributor &&
      !contributor.role
    ){
      validationResult.hasError = true;
      validationResult.messageList.push("Set Contributor Specific contribution");
    }

    return validationResult;
  }

  add(){
    this.contributorValidationResult = this.validateContributor(this.contributor);
    console.log(this.contributorValidationResult);
    
    if(!this.contributorValidationResult.hasError){
      this.onContributorAdded.emit(this.contributor);
      this.contributor = {};
    }
  }

  setStudent(student: Student):void{
    this.contributor.student = student;
  }

}
