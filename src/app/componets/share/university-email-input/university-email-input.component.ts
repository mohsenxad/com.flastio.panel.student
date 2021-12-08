import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'university-email-input',
  templateUrl: './university-email-input.component.html',
  styleUrls: ['./university-email-input.component.scss']
})
export class UniversityEmailInputComponent implements OnInit {

  @Output() onSetEmail = new EventEmitter();

  email: String;
  validationResult: ValidationResult = {
    hasError: false,
    messageList: []
  };

  constructor() { }

  ngOnInit(): void {
  }

  onKeyup($event){
    this.validationResult = this.validate(this.email);
    if(!this.validationResult.hasError){
      this.onSetEmail.emit(this.email);
    }else{
      this.onSetEmail.emit(undefined);
    }
  }

  validate(email: String):ValidationResult{
    let validationResult: ValidationResult = {
      hasError: false,
      messageList: []
    };
    if(!email){
      validationResult.hasError = true;
      validationResult.messageList.push("Enter Email Address");
    }else{
      if(
        email.length <= 5 ||
        !email.includes('@')

      ){
        validationResult.hasError = true;
        validationResult.messageList.push("Enter Valid Email Address");
      }

      if(!email.endsWith(".edu")){
        validationResult.hasError = true;
        validationResult.messageList.push("Enter Valid University Email Address");
      }
    }
    return validationResult;
  }

}
