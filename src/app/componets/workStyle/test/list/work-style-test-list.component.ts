import { Component, Input, OnInit } from '@angular/core';
import { WorkStyle } from 'src/app/model/workStyle';

@Component({
  selector: 'work-style-test-list',
  templateUrl: './work-style-test-list.component.html',
  styleUrls: ['./work-style-test-list.component.scss']
})
export class WorkStyleTestListComponent implements OnInit {

  @Input() workStyleList: WorkStyle[];
  constructor() { }

  ngOnInit(): void {
  }


  

}
