import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/student';
import { ValidationResult } from 'src/app/model/validationResult';
import { Contributor } from '../../../model/contributor';

@Component({
  selector: 'assign-contributor',
  templateUrl: './assign-contributor.component.html',
  styleUrls: ['./assign-contributor.component.scss']
})
export class AssignContributorComponent implements OnInit {

  
  @Input() contributorList: Contributor[] = [];
  @Input() studentRole: String;
  @Output() onStudentRoleUpdated = new EventEmitter<String>();
  @Output() onContributorListUpdated = new EventEmitter<Contributor[]>();
  @Output() onClose = new EventEmitter();

  contributor:Contributor = {};
  localContributorList :Contributor[] = [];
  localStudentRole: String;

  isInviteFormVisible: Boolean = false;
  confirmDicardIsVisible: Boolean = false;
  inviteeEmail: String;
  validationResult: ValidationResult = {
    hasError:false,
    messageList:[]
  }

  
  contributorValidationResult: ValidationResult = {
    hasError:false,
    messageList:[]
  }
  
  constructor() { }


  ngOnInit(): void {
    this.localStudentRole = this.studentRole;
    this.contributorList.forEach((currentContributorListItem: Contributor) => {
      this.localContributorList.push(currentContributorListItem);
    })
  }

  close(){
    this.onClose.emit();
  }

  cancel(){
    if(this.isChanged()){
      this.confirmDicardIsVisible = true;
    }else{
     this.close();
    }
  }


  studentRoleChanged():void{
    this.onStudentRoleUpdated.emit(this.localStudentRole);
  }

  remove(contributor: Contributor){
    this.localContributorList = this.localContributorList.filter(current => {
      if(current.student._id.toString() != contributor.student._id.toString()){
        return current;
      }
    })
  }

  validate(): ValidationResult{
    let validationResult: ValidationResult ={
      hasError: false,
      messageList: []
    };

    if (this.isInviteFormVisible){
      validationResult.hasError = true;
      validationResult.messageList.push("Complete Invitaion Process or Cancel it");
    }

    return validationResult;
  }

  save(){
    let validationResult = this.validate();
    if(!validationResult.hasError){
      this.onContributorListUpdated.emit(this.localContributorList);
      this.onClose.emit();
    }else{
      this.validationResult = validationResult;
    }
  }

  isChanged():Boolean{
    let result: Boolean = false;

    if(this.localContributorList.length != this.contributorList.length){
      result = true;
    }
    //else{
    //   this.linkUrlList.forEach((cuurentOrginalLinkUrl:LinkUrl) => {
        
    //   })
    // }
    return result;
  }

  hideConfirmDiscardModal(){
    this.confirmDicardIsVisible = false;
  }

  addContributorToList(addedContributor: Contributor):void{
    this.localContributorList.push(addedContributor)
  }
}


