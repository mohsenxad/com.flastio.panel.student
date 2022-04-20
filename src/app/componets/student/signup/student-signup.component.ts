import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Realm from "realm-web";
import { ValidationResult } from 'src/app/model/validationResult';
import { LocalStorageService } from "src/app/services/localStorage/local-storage.service"
import { StudentService } from 'src/app/services/student/student.service';
import { Major } from '../../../model/major';
import { School } from '../../../model/school';
import { Student } from '../../../model/student';

@Component({
  selector: 'student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent implements OnInit {

  student : Student = {};
  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  onMajorSet(major: Major):void{
    this.student.major = major;
  }

  removeMajor(){
    this.student.major = undefined;
  }

  onSchoolSet(school: School):void{
    this.student.school = school;
  }

  onSetMobileNumber(mobileNumber: String):void{
	  console.log('Hello ');
	  
    this.student.countryMobileNumberCode = 1;
    this.student.mobileNumber = mobileNumber;
  }

  selectedGraduationMonth(graduationMonth: Number){
    this.student.graduationMonth = graduationMonth;

  }

  selectedGraduationYear(graduationYear: Number){
    this.student.graduationYear = graduationYear;
  }

  validate(student: Student): ValidationResult{
    let result: ValidationResult = {
      hasError:false,
      messageList: []
    };

    if(!student.firstName){
      result.hasError = true;
      result.messageList.push("Enter your first name");
    }

	if(
		student.firstName &&
		student.firstName.trim().toString().length < 2
	){
		result.hasError = true;
		result.messageList.push("Enter valid first name");
	}

	if(!student.lastName){
		result.hasError = true;
		result.messageList.push("Enter your last name");
	}

	if(
		student.lastName &&
		student.lastName.trim().toString().length < 2
	){
		result.hasError = true;
		result.messageList.push("Enter valid last name");
	}

	if(!student.mobileNumber){
		result.hasError = true;
		result.messageList.push("Enter your Mobile Number");
	}

	if(
		student.mobileNumber &&
		student.mobileNumber.trim().toString().length < 5
	){
		result.hasError = true;
		result.messageList.push("Enter valid Mobile Number");
	}

	if(!student.school){
		result.hasError = true;
		result.messageList.push("Select your School");
	}

	if(!student.major){
		result.hasError = true;
		result.messageList.push("Select your Major");
	}

	if(!student.graduationYear){
		result.hasError = true;
		result.messageList.push("Select your Graduation Year");
	}

	if(!student.graduationMonth){
		result.hasError = true;
		result.messageList.push("Select your Graduation Month");
	}

    return result;
  }

	async save(){
		this.validationResult = this.validate(this.student);
		if(!this.validationResult.hasError){
			this.isLoading = true;
			this.student = await this.studentService.create(this.student);
			this.localStorageService.setStudent(this.student);
			this.isLoading = false;
			this.router.navigateByUrl('/student/editDetail');
		}
	}

}
