import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../model/skill';

@Component({
  selector: 'skill-list-item',
  templateUrl: './skill-list-item.component.html',
  styleUrls: ['./skill-list-item.component.scss']
})
export class SkillListItemComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
