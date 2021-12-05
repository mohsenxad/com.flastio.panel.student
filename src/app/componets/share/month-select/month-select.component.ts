import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'month-select',
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.scss']
})
export class MonthSelectComponent implements OnInit {

  @Input() selectedMonth:Number;
  @Output() onMonthSelected = new EventEmitter<Number>();


  constructor() { }

  ngOnInit(): void {
  }

  changeMonth(){
    this.onMonthSelected.emit(this.selectedMonth);
  }


}
