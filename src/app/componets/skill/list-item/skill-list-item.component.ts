import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from '../../../model/skill';

@Component({
  selector: 'skill-list-item',
  templateUrl: './skill-list-item.component.html',
  styleUrls: ['./skill-list-item.component.scss']
})
export class SkillListItemComponent implements OnInit {

  @Input() skill: Skill;
  @Output() onSkillDeleted = new EventEmitter<Skill>();

  isRemovable:Boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    if(this.onSkillDeleted.observers.length > 0){
      this.isRemovable = true;
    }
  }

  remove(){
    this.onSkillDeleted.emit(this.skill);
  }

}
