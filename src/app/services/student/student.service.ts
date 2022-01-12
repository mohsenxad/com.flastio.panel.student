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

  async upload( url: string, file:any, contentType: String): Promise<any>{
    let body: any =file;
    var headers: HttpHeaders = new HttpHeaders(
      {
        "conte": "application/x-www-form-urlencoded",
        "ContentType": contentType.toString()
      });
    return this.http
      .put(url,body, {headers})
      .toPromise();
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
        student.countryRegion || undefined,
        student.postalCode || undefined,
        student.gender || undefined,
        student.isGenderSharable || undefined,
        student.ethnicity || undefined,
        student.isEthnicitySharable || undefined,
        student.collegeStatus || undefined,
        student.pictureFileName || undefined,
        student.pictureFileUrl || undefined,
        student.graduationMonth || undefined,
        student.graduationYear || undefined,
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
    return `https://v.flastio.com/home;sudentId=${studentId.toString()}`
  }
    
    
  
}
