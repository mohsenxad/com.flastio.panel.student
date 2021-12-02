import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from '../../../model/skill';

@Component({
  selector: 'skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.scss']
})
export class SkillPanelComponent implements OnInit {

  
  @Input() skillList: Skill[];
  @Output() onAddProjectClicked = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  showAddProjectForm(){
    this.onAddProjectClicked.emit();
  }

}
