import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'public-email-input',
  templateUrl: './public-email-input.component.html',
  styleUrls: ['./public-email-input.component.scss']
})
export class PublicEmailInputComponent implements OnInit {

  @Output() onSetEmail = new EventEmitter();
  @Input() email: String;

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
    }
    console.log('asdf');
    console.log(validationResult);
    
    
    return validationResult;
  }

}
