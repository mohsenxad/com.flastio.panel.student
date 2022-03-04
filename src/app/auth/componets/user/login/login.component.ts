import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationResult } from 'src/app/model/validationResult';

import { LocalStorageService } from "src/app/services/localStorage/local-storage.service"
import { StudentService } from 'src/app/services/student/student.service';
import { UserService } from 'src/app/auth/services/user/user.service';
import { Student } from '../../../../model/student';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;
  isLoading : Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private userService:UserService,
    private studentService: StudentService

  ) { }

  ngOnInit(): void {
    this.isLogedIn()
  }

  setEmail(email:string):void{
    this.email = email;
  }

  setPassword(password:string):void{
    this.password = password;
  }

  isLogedIn(){
    let student: Student = this.localStorageService.getStudent();
    if(student){
      this.router.navigateByUrl('/student/panel');
    }
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

    return result;
  }

  async login():Promise<void> {
    this.validationResult = this.validate();
    if(!this.validationResult.hasError){
      this.isLoading = true;
      try {
        await this.userService.login(this.email, this.password); 
        let student: Student = await this.studentService.getStudentInfo();
        this.isLoading = false;
        
        if(student){
          this.router.navigateByUrl('/student/panel');
        }else{
          this.router.navigateByUrl('/student/signup');
        }
      } catch (error) {
        this.isLoading = false;
        if(
          error.statusCode == 401 &&
          error.error == "invalid username/password"
        ){
          this.validationResult = {
            hasError : true,
            messageList: [error.error]
          };
        }
        console.log(error);
        
      }
    }
    
    
    
  }

}
