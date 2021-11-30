import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'student-modal-banner',
  templateUrl: './student-modal-banner.component.html',
  styleUrls: ['./student-modal-banner.component.scss']
})
export class StudentModalBannerComponent implements OnInit {

  @Input() student : Student;
  
  constructor() { }

  ngOnInit(): void {
  }

}
