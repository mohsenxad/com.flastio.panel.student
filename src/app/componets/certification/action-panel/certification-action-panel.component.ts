import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'certification-action-panel',
  templateUrl: './certification-action-panel.component.html',
  styleUrls: ['./certification-action-panel.component.scss']
})
export class CertificationActionPanelComponent implements OnInit {

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onChangeIndex = new EventEmitter<Number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    console.log('edit');
    
    this.onEdit.emit();
  }

  delete(){
    console.log('delete');
    
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
    console.log('closing');
    
    // const details = document.getElementById("certification-action-panel-details");
    // console.log(details);
    // console.log(details.id);
    
    // details.removeAttribute("open");

    const details = document.querySelectorAll("details");

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          detail.removeAttribute("open");
        });
      });
    });
  }

}
