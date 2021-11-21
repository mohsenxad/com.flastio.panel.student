import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../model/skill';

@Component({
  selector: 'skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  @Input() skillList: Skill[];
  constructor() { }

  ngOnInit(): void {
  }

}
