import { Component, OnInit } from '@angular/core';
import * as Realm from "realm-web";
import { LocalStorageService } from "src/app/services/localStorage/local-storage.service"
import { Major } from '../../model/major';
import { School } from '../../model/school';
import { Student } from '../../model/student';

@Component({
  selector: 'student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent implements OnInit {

  student : Student = {};
  major : Major = {};
  school : School = {};

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  onMajorSet(major: Major):void{
    console.log(major);
    this.major = major;
  }

  onSchoolSet(school: School):void{
    console.log(school);
    this.school = school;
  }

  
  async onSubmit(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .addStudent(
        this.student.firstName,
        this.student.lastName,
        this.student.countryMobileNumberCode,
        this.student.mobileNumber,
        this.school,
        this.major,
        this.student.graduationYear,
        this.student.graduationMonth
      )
    this.student._id = result.insertedId.toString();
    this.localStorageService.setStudent(this.student);
  }

}
