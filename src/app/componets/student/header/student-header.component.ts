import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from '../../../model/student';

@Component({
  selector: 'student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss']
})
export class StudentHeaderComponent implements OnInit {
  student : Student;
  isLoading: Boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getStudentInfo();
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

  close(){
    document.getElementById("dtlProfile").removeAttribute("open");
  }

}
