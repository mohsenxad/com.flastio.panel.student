import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plane-calculator',
  templateUrl: './plane-calculator.component.html',
  styleUrls: ['./plane-calculator.component.scss']
})
export class PlaneCalculatorComponent implements OnInit {

  isAnnual: Boolean = false;
  duratiounTitle:String = 'Month';
  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice():Number{
    let result = 10.9;
    if(this.isAnnual){
      result = 49.70;
    }
    return result;
  }

  getDurationTitle():String{
    let result = "Month";
    if(this.isAnnual){
      result = "Year";
    }
    return result;
  }

}
