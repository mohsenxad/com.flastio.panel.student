import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Student } from 'src/app/model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  constructor(
    private http: HttpClient
  ) { }

  upload( url: string, file:any, contentType: String): any{
    let body: any =file;
    var headers: HttpHeaders = new HttpHeaders(
      {
        "conte": "application/x-www-form-urlencoded",
        "ContentType": contentType.toString()
      });
    return this.http
      .put(url,body, {headers});
  }

  async getUploadUrl():Promise<any>{
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .getPictureUploadUrl({Bucket:"flastio"})
    return result;
  }

  async getStudentInfo(): Promise<Student>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let student: Student = await user.functions.getStudent();
    return student;
  }

  async create(student:Student){
    const user: Realm.User = this.app.currentUser;
    let newStudent: Student  = await user.functions
      .addStudent(
        student.firstName,
        student.lastName,
        student.countryMobileNumberCode,
        student.mobileNumber,
        student.school,
        student.major,
        student.graduationYear,
        student.graduationMonth
      )
    return newStudent;
  }

  async updateDetail(student: Student):Promise<Student>{
    const user: Realm.User = this.app.currentUser;
    let result: Student  = await user.functions
      .updateStudentDetail(
        student._id.toString(),
        student.countryRegion,
        student.postalCode,
        student.gender,
        student.isGenderSharable,
        student.ethnicity,
        student.isEthnicitySharable,
        student.collegeStatus,
        student.pictureFileName,
        student.pictureFileUrl
      )
    return result;
  }  

  async share(student: Student, targetEmail: String, message: String):Promise<Student>{
    const user: Realm.User = this.app.currentUser;
    let result: Student  = await user.functions
      .share(
        student._id.toString(),
        targetEmail,
        message
      )
    return result;
  } 


  getSharableLink(studentId: String): String{
    return `https://v.flastio.com/${studentId.toString()}`
  }
    
    
  
}
