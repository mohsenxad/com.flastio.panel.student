import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'year-select',
  templateUrl: './year-select.component.html',
  styleUrls: ['./year-select.component.scss']
})
export class YearSelectComponent implements OnInit {

  @Input() selectedYear:number;
  @Output() onYearSelected = new EventEmitter<number>();

  yearList:number[] = [2017,2018,2019,2020,2021,2022];

  constructor() { }

  ngOnInit(): void {}

  changed(year:number){
    this.selectedYear = year;
    this.onYearSelected.emit(this.selectedYear);
  }


}
