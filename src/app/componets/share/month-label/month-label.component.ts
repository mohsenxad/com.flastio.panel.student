import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'month-label',
  templateUrl: './month-label.component.html',
  styleUrls: ['./month-label.component.scss']
})
export class MonthLabelComponent implements OnInit {

  @Input() monthNumber:Number;

  monthName: String;
  constructor() { }

  ngOnInit(): void {
    if (this.monthNumber){
      this.monthName = this.getMonthNameByNumber(this.monthNumber);
    }
  }
  getMonthNameByNumber(monthNumber: Number): String {
    if(monthNumber == 1 ){
      return "January"
    }else if(monthNumber == 2 ){
      return "February"
    }else if(monthNumber == 2 ){
      return "February"
    }else if(monthNumber == 3 ){
      return "March"
    }else if(monthNumber == 4 ){
      return "April"
    }else if(monthNumber == 5 ){
      return "May"
    }else if(monthNumber == 6 ){
      return "June"
    }else if(monthNumber == 7 ){
      return "July"
    }else if(monthNumber == 8 ){
      return "August"
    }else if(monthNumber == 9 ){
      return "September"
    }else if(monthNumber == 10 ){
      return "October"
    }else if(monthNumber == 11 ){
      return "November"
    }else if(monthNumber == 12 ){
      return "December"
    }
  }

}
