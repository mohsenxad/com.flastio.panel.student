import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  student : Student;
  isLoading: Boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    //this.getStudentInfo();
  }

  async getStudentInfo(){
    this.isLoading = true;
    const remoteStudent = await this.studentService.getStudentInfo();
    if(remoteStudent){
      this.student  = remoteStudent;
    }else{
      this.student = {};
    }
    this.localStorageService.setStudent(this.student);
    this.isLoading = false;
  }

}
