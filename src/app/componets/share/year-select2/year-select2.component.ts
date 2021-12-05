import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'year-select2',
  templateUrl: './year-select2.component.html',
  styleUrls: ['./year-select2.component.scss']
})
export class YearSelect2Component implements OnInit {
  @Input() selectedYear:Number;
  @Output() onYearSelected = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeYear(){
    this.onYearSelected.emit(this.selectedYear);
  }

}
