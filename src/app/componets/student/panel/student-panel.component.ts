import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from '../../../model/student';

@Component({
  selector: 'student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})
export class StudentPanelComponent implements OnInit {

  
  student : Student;
  @Input() isAddProjectVisible:Boolean = false;
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
    this.student  = await this.studentService.getStudentInfo();
    this.localStorageService.setStudent(this.student);
    this.isLoading = false;
  }

  showAddProject(){
    console.log('show add project in student panel');
    
    this.isAddProjectVisible = true;
  }


}
