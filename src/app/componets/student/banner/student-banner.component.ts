import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'student-banner',
  templateUrl: './student-banner.component.html',
  styleUrls: ['./student-banner.component.scss']
})
export class StudentBannerComponent implements OnInit {
  @Input() student : Student;
  constructor() { }

  ngOnInit(): void {
  }

}
