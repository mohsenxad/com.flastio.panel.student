import { Component, Input, OnInit } from '@angular/core';
import { WorkStyle } from 'src/app/model/workStyle';

@Component({
  selector: 'work-style-test-list-item',
  templateUrl: './work-style-test-list-item.component.html',
  styleUrls: ['./work-style-test-list-item.component.scss']
})
export class WorkStyleTestListItemComponent implements OnInit {

  @Input() workStyle: WorkStyle;
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
