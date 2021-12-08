import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'school-status',
  templateUrl: './school-status.component.html',
  styleUrls: ['./school-status.component.scss']
})
export class SchoolStatusComponent implements OnInit {

  @Input() status: String;

  constructor() { }

  ngOnInit(): void {
  }

}
