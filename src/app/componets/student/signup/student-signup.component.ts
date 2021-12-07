import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Realm from "realm-web";
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

  selectedGraduationMonth(graduationMonth: Number){
    this.student.graduationMonth = graduationMonth;

  }

  selectedGraduationYear(graduationYear: Number){
    this.student.graduationYear = graduationYear;
  }

  async save(){
    this.isLoading = true;
    this.student = await this.studentService.create(this.student);
    this.localStorageService.setStudent(this.student);
    this.isLoading = false;
    this.router.navigateByUrl('/student/editDetail');
  }

}
