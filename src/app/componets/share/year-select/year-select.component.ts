import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'year-select',
  templateUrl: './year-select.component.html',
  styleUrls: ['./year-select.component.scss']
})
export class YearSelectComponent implements OnInit {

  @Input() selectedYear:Number;

  yearList:Number[] = [2017,2018,2019,2020,2021];


  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedYear);
  }

  changed(year:Number){
    console.log(year);
    this.selectedYear = year;
    console.log(this.selectedYear);
    
  }


}
