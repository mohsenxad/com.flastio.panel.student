import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'student-banner',
  templateUrl: './student-banner.component.html',
  styleUrls: ['./student-banner.component.scss']
})
export class StudentBannerComponent implements OnInit {
  @Input() student : Student;
  @Output() onAddProjectClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addProject(){
    this.onAddProjectClicked.emit();
  }

}
