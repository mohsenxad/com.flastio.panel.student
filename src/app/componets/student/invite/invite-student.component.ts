import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UniversityEmailValidator } from 'src/app/helper/validators/universityEmail.validator';
import { Student } from 'src/app/model/student';
import { ValidationResult } from 'src/app/model/validationResult';
import { StudentService } from 'src/app/services/student/student.service';


@Component({
  selector: 'invite-student',
  templateUrl: './invite-student.component.html',
  styleUrls: ['./invite-student.component.scss']
})
export class InviteStudentComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  @Output() onInvited = new EventEmitter<Student>();
  @Input() email: String;
  title:String;
  isLoading: Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };

  constructor(
    private studentService: StudentService,
    private universityEmailValidator: UniversityEmailValidator
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.onClose.emit();
  }

  validate(email:String, title:String): ValidationResult{
    let result: ValidationResult = {
      hasError:false,
      messageList: []
    };

    if(!email){
      result.hasError = true;
      result.messageList.push("Add Email");
    }

    if(!title){
      result.hasError = true;
      result.messageList.push("Add Title");
    }

    if(email){
      const emailValidationResult = this.universityEmailValidator.validate(email);
      if(emailValidationResult.hasError){
        result.hasError = true;
        result.messageList.push(...emailValidationResult.messageList);
      }
    }

    if(title && title.toString().trim().length < 2){
      result.hasError = true;
      result.messageList.push("Add valid Title");
    }

    return result;
  }

  invite(){
    this.validationResult = this.validate(this.email, this.title);
    if(!this.validationResult.hasError){
      this.isLoading = true;
      this.studentService
        .invite(this.email, this.title)
        .then( (newStudent:Student) => {
          this.isLoading = false;
          this.onInvited.emit(newStudent)
        })
        .catch(err => {
          this.isLoading = false;
          console.log(err);
        })
    }
    
  }

}
