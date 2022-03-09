import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'recommendation-action-panel',
  templateUrl: './recommendation-action-panel.component.html',
  styleUrls: ['./recommendation-action-panel.component.scss']
})
export class RecommendationActionPanelComponent implements OnInit {

  @Output() onDelete = new EventEmitter();
  @Output() onChangeIndex = new EventEmitter<Number>();
  
  constructor() { }

  ngOnInit(): void {
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
