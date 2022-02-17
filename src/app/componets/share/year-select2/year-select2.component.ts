import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'year-select2',
  templateUrl: './year-select2.component.html',
  styleUrls: ['./year-select2.component.scss']
})
export class YearSelect2Component implements OnInit {
  @Input() selectedYear:Number;
  @Input() fromYear:number;
  @Input() toYear:number;
  @Output() onYearSelected = new EventEmitter<Number>();

  yearList : Number[] =  [1980,1981,1982,]

  constructor() { }

  ngOnInit(): void {
    this.yearList = this.generateYearList();
  }

  generateYearList():Number[]{
    let yearList: Number[] = [];
    let fromYear: number = this.fromYear || 1980;
    let toYear: number = this.toYear || 2030;
    for (let currentYear = toYear; currentYear >= fromYear ; currentYear--) {
      yearList.push(currentYear)
    }
    return yearList;
  }

  changeYear(){
    this.onYearSelected.emit(this.selectedYear);
  }

}
