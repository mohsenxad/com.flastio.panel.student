import { Component, OnInit } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';
import { UserService } from 'src/app/auth/services/user/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  email: String;
  password: String;
  reEnterPassword: String;

  isLoading : Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };

  isCheckMailVisible: Boolean = false;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  setEmail(email){
    this.email = email;
  }

  validate():ValidationResult{
    let result: ValidationResult = {
      hasError : false,
      messageList: []
    };

    if(!this.email){
      result.hasError = true;
      result.messageList.push("Enter Email Address");
    }

    if(!this.password){
      result.hasError = true;
      result.messageList.push("Enter Password");
    }

    if(!this.reEnterPassword){
      result.hasError = true;
      result.messageList.push("Reenter Password");
    }
    
    if(
      this.password &&
      this.reEnterPassword &&
      this.password.toString().trim() != this.reEnterPassword.toString().trim()
    ){
      result.hasError = true;
      result.messageList.push("Password and Reenter Password are Not the Same");
    }

    return result;
  }

  async signup():Promise<void> {
   this.validationResult = this.validate();
   if(!this.validationResult.hasError){
    this.isLoading = true;
    try {
      await this.userService.signup(this.email.toString().trim(), this.password.toString().trim());  
      this.isCheckMailVisible = true;
    } catch (error) {
      this.validationResult = {
        hasError : true,
        messageList: [error.error]
      }
    }
    this.isLoading = false;
   }
    
    
  }



}
