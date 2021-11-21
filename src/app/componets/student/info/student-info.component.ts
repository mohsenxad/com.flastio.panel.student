import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {

  @Input() student : Student;
  constructor() { }

  ngOnInit(): void {
  }

}
