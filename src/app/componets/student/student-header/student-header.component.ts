import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss']
})
export class StudentHeaderComponent implements OnInit {
  @Input() student : Student;
  
  constructor() { }

  ngOnInit(): void {
  }

}
