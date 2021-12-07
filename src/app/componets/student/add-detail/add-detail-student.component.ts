import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../../model/student';
import { StudentService } from 'src/app/services/student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-detail-student',
  templateUrl: './add-detail-student.component.html',
  styleUrls: ['./add-detail-student.component.scss']
})
export class AddDetailStudentComponent implements OnInit {

  profilePicture: File;
  student: Student;
  isLoading: Boolean = false;
  
  

  constructor(
    private localStorageService: LocalStorageService,
    private studentService: StudentService,
    private router: Router,
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
    this.student = await this.studentService.updateDetail(this.student);
    this.localStorageService.setStudent(this.student);
    this.isLoading = false;
    this.router.navigateByUrl('/student/panel')
  }

  async handleFileInput(files: FileList) {
    this.profilePicture = files.item(0);
    let response:any = await this.studentService.getUploadUrl()
    let signedUploadUrl = response.presignedUrl;
    this.student.pictureFileName = response.fileName.toString();
    this.student.pictureFileUrl = signedUploadUrl.split('?')[0];
    this.uploadFile(signedUploadUrl)
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

  skip(){
    this.router.navigateByUrl('/student/panel')
  }

}
