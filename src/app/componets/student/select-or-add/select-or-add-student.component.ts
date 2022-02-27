import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'select-or-add-student',
  templateUrl: './select-or-add-student.component.html',
  styleUrls: ['./select-or-add-student.component.scss']
})
export class SelectOrAddStudentComponent implements OnInit {

  @Input() student: Student;
  @Output() onStudentSelected = new EventEmitter<Student>();
  @Output() onCancel = new EventEmitter();
  isInviteFormVisible:Boolean = false;
  inviteeEmail: String;
  
  constructor() { }

  ngOnInit(): void {
  }

  showInviteStudentForm(email:String):void{
    this.inviteeEmail = email;
    this.isInviteFormVisible = true;
  }

  hideInviterStudnetForm(){
    this.inviteeEmail = undefined;
    this.isInviteFormVisible = false;
  }

  setStudent(student: Student):void{
    this.student = student;
    this.hideInviterStudnetForm();
    this.onStudentSelected.emit(this.student);
  }

}
