import { Injectable } from '@angular/core';
import { Student } from 'src/app/model/student';
import { AwsService } from '../aws/aws.service';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(
    private awsService: AwsService,
    private realmService: RealmService,
  ) { }

  async upload( url: string, file:any, contentType: String): Promise<any>{
    return this.awsService.upload(url, file, contentType);
  }

  async getUploadUrl():Promise<any>{
    const bucket = {
      Bucket:"flastio"
    };
    const result: any  = await this.realmService.callFunction(
      "getPictureUploadUrl",
      bucket
    )
    return result;
  }

  async getStudentInfo(): Promise<Student>{
    const student: Student = await this.realmService.callFunction(
      "getStudent"
    );
    return student;
  }

  async create(student:Student):Promise<any>{
    const newStudent: Student  = await this.realmService.callFunction(
      "addStudent",
      student.firstName,
      student.lastName,
      student.countryMobileNumberCode,
      student.mobileNumber,
      student.school,
      student.major,
      student.graduationYear,
      student.graduationMonth
    );
    return newStudent;
  }

  
  async invite(email:String, title: String): Promise<Student>{
    const newStudent: Student  = await this.realmService.callFunction(
      "inviteStudent",
      title,
      email
    );
    return newStudent;
  }

  async updateDetail(student: Student):Promise<Student>{
    const result: Student  = await this.realmService.callFunction(
      "updateStudentDetail",
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
    );
    return result;
  }  

  async share(targetEmail: String, message: String):Promise<Student>{
    const result: Student  = await this.realmService.callFunction(
      "share",
      targetEmail,
      message
    );
    return result;
  } 


  getSharableLink(studentId: String): String{
    return `https://v.flastio.com/home;sudentId=${studentId.toString()}`
  }

  async search(studentKeyWord: String):Promise<Student[]>{
    const studentList: Student[]  = await this.realmService.callFunction(
      "searchStudent",
      studentKeyWord
    );
    return studentList;
  }

  async upgradePlane(isAnnual:Boolean):Promise<void>{
    const result: any  = await this.realmService.callFunction(
      "upgradePlane",
      isAnnual
    );
  }

  
  async downgradePlane():Promise<void>{
    const result: any  = await this.realmService.callFunction(
      "downgradePlane"
    );
  }

  

  logout():void{
    this.realmService.logout();
  }
}
