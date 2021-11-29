import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../model/student';
import * as Realm from "realm-web";
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'add-detail-student',
  templateUrl: './add-detail-student.component.html',
  styleUrls: ['./add-detail-student.component.scss']
})
export class AddDetailStudentComponent implements OnInit {

  profilePicture: File;
  student: Student;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  isLoading: Boolean = false;
  
  

  constructor(
    private localStorageService: LocalStorageService,
    private studentService: StudentService
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

  async save(){
    this.isLoading = true;
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
        this.student.pictureFileName,
        this.student.pictureFileUrl
      )
    this.student = result;
    this.localStorageService.setStudent(this.student);
    this.isLoading = false;
  }

  async handleFileInput(files: FileList) {
    this.profilePicture = files.item(0);
    let response:any = await this.getUploadUrl()
    let signedUploadUr = response.presignedUrl;
    this.student.pictureFileName = response.fileName.toString();
    this.student.pictureFileUrl = signedUploadUr.split('?')[0];
    this.uploadFile(signedUploadUr)
  }

  async getUploadUrl(){
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions
      .getPictureUploadUrl({Bucket:"flastio"})
    console.log(result);
    return result;
  }

  uploadFile(uploadPresignUrl: string){
    this.isLoading = true;
    const contentType = this.profilePicture.type;
    this.studentService.upload(uploadPresignUrl,this.profilePicture, contentType)
      .subscribe(data=>{
        this.isLoading = false;
        console.log('uploaded');
      });
  }

}
