import { Component, Input, OnInit } from '@angular/core';
import { SkillSet } from 'src/app/model/skillSet';

@Component({
  selector: 'skillset-list',
  templateUrl: './skillset-list.component.html',
  styleUrls: ['./skillset-list.component.scss']
})
export class SkillsetListComponent implements OnInit {
  @Input() skillSetList:SkillSet[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
