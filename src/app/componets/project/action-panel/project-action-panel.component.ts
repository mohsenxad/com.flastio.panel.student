import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'project-action-panel',
  templateUrl: './project-action-panel.component.html',
  styleUrls: ['./project-action-panel.component.scss']
})
export class ProjectActionPanelComponent implements OnInit {

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onChangeIndex = new EventEmitter<Number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.onEdit.emit();
  }

  delete(){
    this.onDelete.emit();
  }

  changeDisplayIndex(index:Number){
    this.onChangeIndex.emit(index);
  }

  moveUp(){
    this.changeDisplayIndex(+1);
  }

  moveDown(){
    this.changeDisplayIndex(-1);
  }

  close(){
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          detail.removeAttribute("open");
        });
      });
    });
  }

}
