import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'student-plane',
  templateUrl: './student-plane.component.html',
  styleUrls: ['./student-plane.component.scss']
})
export class StudentPlaneComponent implements OnInit {

  @Input() isPremium: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
