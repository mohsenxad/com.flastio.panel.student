import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'empty-skill',
  templateUrl: './empty-skill.component.html',
  styleUrls: ['./empty-skill.component.scss']
})
export class EmptySkillComponent implements OnInit {

  @Output() onAddProjectClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addProject(){
    this.onAddProjectClicked.emit();
  }
}
