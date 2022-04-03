import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'analytics-working-modal',
  templateUrl: './analytics-working-modal.component.html',
  styleUrls: ['./analytics-working-modal.component.scss']
})
export class AnalyticsWorkingModalComponent implements OnInit {

  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit();
  }


}
