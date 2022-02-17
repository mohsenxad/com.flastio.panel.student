import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../../model/student';
import { StudentService } from 'src/app/services/student/student.service';
import { Router } from '@angular/router';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'add-detail-student',
  templateUrl: './add-detail-student.component.html',
  styleUrls: ['./add-detail-student.component.scss']
})
export class AddDetailStudentComponent implements OnInit {

  profilePicture: File;
  student: Student;
  isLoading: Boolean = false;
  confirmDicardIsVisible : Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };
  

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

  async changeImage(){
    this.isLoading = true;
    this.student = await this.studentService.updateDetail(this.student);
    this.localStorageService.setStudent(this.student);
    this.isLoading = false;
  }

  validate(student: Student): ValidationResult{
    let result: ValidationResult = {
      hasError:false,
      messageList: []
    };

    if(!student.countryRegion){
      result.hasError = true;
      result.messageList.push("Select Your Location");
    }

    if(!student.postalCode || student.postalCode.toString().trim() == ""){
      result.hasError = true;
      result.messageList.push("Enter Your Postal Code");
    }

    if(!student.gender){
      result.hasError = true;
      result.messageList.push("Select Your Gender");
    }

    if(!student.ethnicity){
      result.hasError = true;
      result.messageList.push("Select Your Ethnicity/Race");
    }

    if(!student.collegeStatus){
      result.hasError = true;
      result.messageList.push("Set Year of College");
    }

    if(
      student.collegeStatus &&
      student.collegeStatus == "Graduated" &&
      !student.graduationMonth
    ){
      result.hasError = true;
      result.messageList.push("Select Your Graduation Month");
    }

    if(
      student.collegeStatus &&
      student.collegeStatus == "Graduated" &&
      !student.graduationYear
    ){
      result.hasError = true;
      result.messageList.push("Select Your Graduation Year");
    }


    return result;
  }

  async save(){
    this.validationResult = this.validate(this.student);
    if(!this.validationResult.hasError){
      this.isLoading = true;
      this.student = await this.studentService.updateDetail(this.student);
      this.localStorageService.setStudent(this.student);
      this.isLoading = false;
      this.router.navigateByUrl('/student/panel')
    }
    
  }

  async handleFileInput(files: FileList) {
    this.isLoading =true;
    this.profilePicture = files.item(0);
    let response:any = await this.studentService.getUploadUrl()
    let signedUploadUrl = response.presignedUrl;
    await this.uploadFile(signedUploadUrl)
    this.student.pictureFileName = response.fileName.toString();
    this.student.pictureFileUrl = signedUploadUrl.split('?')[0];
    this.isLoading =false;
  }


  async uploadFile(uploadPresignUrl: string){
    const contentType = this.profilePicture.type;
    await this.studentService.upload(uploadPresignUrl,this.profilePicture, contentType)
    .then(data=>{
      console.log('uploaded');
    })
    .catch(err => {
      console.log(err);
      
    })
  }

  skip(){
    if(this.isChanged()){
      this.confirmDicardIsVisible = true;
    }else{
      this.goToStudentPanel();
    }
  }

  goToStudentPanel(){
    this.router.navigateByUrl('/student/panel')
  }

  hideConfirmDiscardModal(){
    this.confirmDicardIsVisible = false;
  }

  isChanged():Boolean{
    console.log('herer to change');
    let result: Boolean = false;
    
    let localStorageStudent = this.localStorageService.getStudent();

    if(
      this.student.pictureFileUrl != localStorageStudent.pictureFileUrl ||
      this.student.countryRegion != localStorageStudent.countryRegion ||
      this.student.postalCode != localStorageStudent.postalCode ||
      this.student.gender != localStorageStudent.gender ||
      this.student.ethnicity != localStorageStudent.ethnicity ||
      this.student.isGenderSharable != localStorageStudent.isGenderSharable ||
      this.student.isEthnicitySharable != localStorageStudent.isEthnicitySharable ||
      this.student.collegeStatus != localStorageStudent.collegeStatus ||
      this.student.graduationMonth != localStorageStudent.graduationMonth ||
      this.student.graduationYear != localStorageStudent.graduationYear
    ){
      result = true;
    }

    return result;
    
  }

  removePicture(){
    this.student.pictureFileName = undefined;
    this.student.pictureFileUrl = undefined;
  }

  selectedGraduationDateMonth(issuedDateMonth: Number){
    this.student.graduationMonth = issuedDateMonth;

  }

  selectedGraduationDateYear(issuedDateYear: Number){
    this.student.graduationYear  = issuedDateYear;
  }

}
