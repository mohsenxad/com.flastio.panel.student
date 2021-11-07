import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'year-select',
  templateUrl: './year-select.component.html',
  styleUrls: ['./year-select.component.scss']
})
export class YearSelectComponent implements OnInit {

  @Input() selectedYear:Number;
  @Output() onYearSelected = new EventEmitter<Number>();

  yearList:Number[] = [2017,2018,2019,2020,2021];


  constructor() { }

  ngOnInit(): void {
  }

  changeYear(year){
    this.onYearSelected.emit(year);
  }

}
