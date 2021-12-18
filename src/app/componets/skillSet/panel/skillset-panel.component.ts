import { Component, Input, OnInit } from '@angular/core';
import { SkillSet } from 'src/app/model/skillSet';

@Component({
  selector: 'skillset-panel',
  templateUrl: './skillset-panel.component.html',
  styleUrls: ['./skillset-panel.component.scss']
})
export class SkillsetPanelComponent implements OnInit {
  @Input() skillSetList:SkillSet[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
