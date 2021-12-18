import { Component, Input, OnInit } from '@angular/core';
import { SkillSet } from 'src/app/model/skillSet';

@Component({
  selector: 'skillset-list-item',
  templateUrl: './skillset-list-item.component.html',
  styleUrls: ['./skillset-list-item.component.scss']
})
export class SkillsetListItemComponent implements OnInit {
  @Input() skillSet:SkillSet;
  
  constructor() { }

  ngOnInit(): void {
  }

}
