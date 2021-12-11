import { Component, OnInit } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'share-profile-by-email',
  templateUrl: './share-profile-by-email.component.html',
  styleUrls: ['./share-profile-by-email.component.scss']
})
export class ShareProfileByEmailComponent implements OnInit {

  currentEmail: String;
  message:String;
  emailList: String[] = [];
  validationResult: ValidationResult = {
    hasError: false,
    messageList:[]
  };

  constructor() { }

  ngOnInit(): void {
  }

  validate(email:String, message: String): ValidationResult{
    let validationResult: ValidationResult = {
      hasError: false,
      messageList:[]
    };
    if(!email){
      validationResult.hasError = true;
      validationResult.messageList.push("Enter email address")
    }
    if(!message){
      validationResult.hasError = true;
      validationResult.messageList.push("Enter a message")
    }
    return validationResult;
  }

  setEamil(email:String):void{
    this.currentEmail = email;
  }

  addEmailToList(){
    if(this.currentEmail){
      this.emailList.push(this.currentEmail);
      this.currentEmail = '';
    }
  }

  send(){
    this.validationResult = this.validate(this.currentEmail, this.message);
    if(!this.validationResult.hasError){
      // send message to email List
    }
  }

}
