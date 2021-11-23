import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../model/student';
import * as Realm from "realm-web";

@Component({
  selector: 'add-detail-student',
  templateUrl: './add-detail-student.component.html',
  styleUrls: ['./add-detail-student.component.scss']
})
export class AddDetailStudentComponent implements OnInit {

  profilePicture: any;
  student: Student;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  

  constructor(
    private localStorageService: LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }

  ngOnInit(): void {
  }

  onProfileImageChanged(file:any){

  }

  setGender(gender:String){
    this.student.gender = gender;
  }

  setEthnicity(ethnicity:String){
    this.student.ethnicity = ethnicity;
  }

  setCountryRegion(countryRegion:String){
    this.student.countryRegion = countryRegion;
    console.log(this.student.countryRegion);
    
  }

  setCollegeStatus(collegeStatus: String){
    this.student.collegeStatus = collegeStatus;
  }

  async onSubmit(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .updateStudentDetail(
        this.student._id,
        this.student.countryRegion,
        this.student.postalCode,
        this.student.gender,
        this.student.isGenderSharable,
        this.student.ethnicity,
        this.student.isEthnicitySharable,
        this.student.collegeStatus,
      )
    this.student = result;
    this.localStorageService.setStudent(this.student);
  }

}
