import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Student } from 'src/app/model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(
    private http: HttpClient
  ) { }

  async upload( url: string, file:any, contentType: String): Promise<any>{
    const body: any = file;
    const headers: HttpHeaders = new HttpHeaders(
      {
        "conte": "application/x-www-form-urlencoded",
        "ContentType": contentType.toString()
      });
    return this.http
      .put(url,body, {headers})
      .toPromise();
  }

  async getUploadUrl():Promise<any>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    const result: any  = await user.functions
      .getPictureUploadUrl({Bucket:"flastio"})
    return result;
  }

  async getStudentInfo(): Promise<Student>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    //const student: Student = await user.functions.getStudent();
    const student: Student = await user.functions.callFunction("getStudent");

    return student;
  }

  async create(student:Student){
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    const newStudent: Student  = await user.functions
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

  
  async invite(email:String, title: String): Promise<Student>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    const newStudent: Student  = await user.functions
      .inviteStudent(
        title,
        email
      )
    return newStudent;
  }

  async updateDetail(student: Student):Promise<Student>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    const result: Student  = await user.functions
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

  async share(targetEmail: String, message: String):Promise<Student>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    const result: Student  = await user.functions
      .share(
        targetEmail,
        message
      )
    return result;
  } 


  getSharableLink(studentId: String): String{
    return `https://v.flastio.com/home;sudentId=${studentId.toString()}`
  }

  async search(studentKeyWord: String):Promise<Student[]>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    const studentList: Student[]  = await user.functions.searchStudent(studentKeyWord);
    return studentList;
  }

  logout():void{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    user.logOut();
  }
    
    
  
}
