import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'empty-project',
  templateUrl: './empty-project.component.html',
  styleUrls: ['./empty-project.component.scss']
})
export class EmptyProjectComponent implements OnInit {

  @Output() onAddProjectClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addProject(){
    this.onAddProjectClicked.emit();
  }

}
