import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'university-email-input',
  templateUrl: './university-email-input.component.html',
  styleUrls: ['./university-email-input.component.scss']
})
export class UniversityEmailInputComponent implements OnInit {

  @Output() onSetEmail = new EventEmitter();
  @Input() email: String;

  

  validationResult: ValidationResult = {
    hasError: false,
    messageList: []
  };

  whiteListEmail: String[] = [
    'max@flekswork.com',
    'hello@flekswork.com',
    'support@flekswork.com',
    'max@flastio.com',
    'hello@flastio.com',
    'support@flastio.com',
    'mehdizmm@gmail.com',
    'mxzadeh@gmail.com',
    'mhzm1981@yahoo.com',
    'maryam.sarab@gmail.com',
    'nateglazer@yahoo.com',
    'sirena@flastio.com',
    'mohsenxad@gmail.com',
    'xad@flekswork.com',
    'mohamadshamsi76@gmail.com',
    's.farajnezam@gmail.com'
  ]

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


      if(
        !this.whiteListEmail.includes(email) &&
        !(
          email.endsWith(".edu")||
          email.endsWith(".org")
        )
      ){
        validationResult.hasError = true;
        validationResult.messageList.push("Enter Valid University Email Address");
      }
    }
    return validationResult;
  }

}
