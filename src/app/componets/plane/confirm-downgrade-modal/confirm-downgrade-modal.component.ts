import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirm-downgrade-modal',
  templateUrl: './confirm-downgrade-modal.component.html',
  styleUrls: ['./confirm-downgrade-modal.component.scss']
})
export class ConfirmDowngradeModalComponent implements OnInit {

  @Output() onCancel = new EventEmitter();
  @Output() onConfirm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit();
  }

  confirm(){
    this.onConfirm.emit();
  }

}
