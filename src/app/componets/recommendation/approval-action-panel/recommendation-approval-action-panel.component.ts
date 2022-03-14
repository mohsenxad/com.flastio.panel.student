import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'recommendation-approval-action-panel',
  templateUrl: './recommendation-approval-action-panel.component.html',
  styleUrls: ['./recommendation-approval-action-panel.component.scss']
})
export class RecommendationApprovalActionPanelComponent implements OnInit {

  @Output() onApprove = new EventEmitter();
  @Output() onReject = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  approve(){
    this.onApprove.emit();
    this.close();
  }

  reject(){
    this.onReject.emit();
    this.close();
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
