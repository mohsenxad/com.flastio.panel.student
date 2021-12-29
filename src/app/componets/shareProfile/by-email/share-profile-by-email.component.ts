import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { ValidationResult } from 'src/app/model/validationResult';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'share-profile-by-email',
  templateUrl: './share-profile-by-email.component.html',
  styleUrls: ['./share-profile-by-email.component.scss']
})
export class ShareProfileByEmailComponent implements OnInit {

  @Input() student : Student;
  
  currentEmail: String;
  message:String;
  emailList: String[] = [];
  validationResult: ValidationResult = {
    hasError: false,
    messageList:[]
  };

  constructor(
    private studentService:StudentService
  ) { }

  ngOnInit(): void {
  }

  validate(emailList:String[], message: String): ValidationResult{
    let validationResult: ValidationResult = {
      hasError: false,
      messageList:[]
    };
    if(!emailList || emailList.length == 0){
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
    this.validationResult = this.validate(this.emailList, this.message);
    if(!this.validationResult.hasError){
      // send message to email List
      this.emailList.forEach(async (currentEmail:String)=>{
        await this.studentService.share(this.student,currentEmail, this.message)
      })
      this.emailList = [];
      this.message = '';
      this.validationResult.hasError = true;
      this.validationResult.messageList.push("Your Profile Will be Shared!")
    }
  }

  remove(email:String):void{
    console.log('ere to remove');
    
    this.emailList = this.emailList.filter((currentEmail) => {
      if(currentEmail != email){
        return currentEmail
      }
    })
  }

}
