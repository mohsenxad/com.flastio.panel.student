import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirm-discard',
  templateUrl: './confirm-discard.component.html',
  styleUrls: ['./confirm-discard.component.scss']
})
export class ConfirmDiscardComponent implements OnInit {

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
