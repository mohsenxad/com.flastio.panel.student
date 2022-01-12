import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'year-select2',
  templateUrl: './year-select2.component.html',
  styleUrls: ['./year-select2.component.scss']
})
export class YearSelect2Component implements OnInit {
  @Input() selectedYear:Number;
  @Output() onYearSelected = new EventEmitter<Number>();

  yearList : Number[] =  [1980,1981,1982,]

  constructor() { }

  ngOnInit(): void {
    for (let currentYear = 1980; currentYear <= 2022 ; currentYear++) {
      this.yearList.push(currentYear)
    }
  }

  changeYear(){
    this.onYearSelected.emit(this.selectedYear);
  }

}
