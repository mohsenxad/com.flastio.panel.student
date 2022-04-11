import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.scss']
})
export class ConfirmPaymentComponent implements OnInit {

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
