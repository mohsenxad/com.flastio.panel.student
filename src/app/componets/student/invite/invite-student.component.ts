import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student/student.service';


@Component({
  selector: 'invite-student',
  templateUrl: './invite-student.component.html',
  styleUrls: ['./invite-student.component.scss']
})
export class InviteStudentComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  @Output() onInvited = new EventEmitter<Student>();
  @Input() email: String;
  title:String;
  isLoading: Boolean = false;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.onClose.emit();
  }

  invite(){
    this.isLoading = true;
    this.studentService
      .invite(this.email, this.title)
      .then( (newStudent:Student) => {
        this.isLoading = false;
        this.onInvited.emit(newStudent)
      })
      .catch(err => {
        this.isLoading = false;
        console.log(err);
      })
  }

}
