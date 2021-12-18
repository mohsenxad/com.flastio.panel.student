import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'empty-skillset',
  templateUrl: './empty-skillset.component.html',
  styleUrls: ['./empty-skillset.component.scss']
})
export class EmptySkillsetComponent implements OnInit {

  @Output() onAddProjectClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addProject(){
    this.onAddProjectClicked.emit();
  }

}
