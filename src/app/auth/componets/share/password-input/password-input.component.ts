import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

  @Output() onSetPassword = new EventEmitter();
  @Input() password: String;

  validationResult: ValidationResult = {
    hasError: false,
    messageList: []
  };

  simplePasswordList : string[] = ['123123','123456','qweqwe','qwerty','password']

  constructor() { }

  ngOnInit(): void {
  }

  onKeyup($event){
    this.validationResult = this.validate(this.password);
    if(!this.validationResult.hasError){
      this.onSetPassword.emit(this.password);
    }else{
      this.onSetPassword.emit(undefined);
    }
  }

  validate(password: String):ValidationResult{
    let validationResult: ValidationResult = {
      hasError: false,
      messageList: []
    };
    if(!password){
      validationResult.hasError = true;
      validationResult.messageList.push("Enter Password");
    }else{
      if(password.length < 6)
      {
        validationResult.hasError = true;
        validationResult.messageList.push("Password should be at least 6 character");
      }

      if(this.simplePasswordList.includes(password.toString())){
        validationResult.hasError = true;
        validationResult.messageList.push("Password is too simple");
      }

    }
    return validationResult;
  }
}
