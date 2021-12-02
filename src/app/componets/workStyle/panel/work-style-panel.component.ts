import { Component, Input, OnInit } from '@angular/core';
import { WorkStyle } from '../../../model/workStyle';

@Component({
  selector: 'work-style-panel',
  templateUrl: './work-style-panel.component.html',
  styleUrls: ['./work-style-panel.component.scss']
})
export class WorkStylePanelComponent implements OnInit {
  @Input() workStyleList: WorkStyle[];
  constructor() { }

  ngOnInit(): void {
  }

}
