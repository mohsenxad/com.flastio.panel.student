import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'plane-calculator',
  templateUrl: './plane-calculator.component.html',
  styleUrls: ['./plane-calculator.component.scss']
})
export class PlaneCalculatorComponent implements OnInit {

  @Output() onSetPlane = new EventEmitter();
  duratiounTitle:String = 'Month';
  isAnnual: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice():Number{
    let result = 4.99;
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

  planeChanged(){
    this.onSetPlane.emit(this.isAnnual);
  }

}
