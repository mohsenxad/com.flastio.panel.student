import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'mobile-number-input',
  templateUrl: './mobile-number-input.component.html',
  styleUrls: ['./mobile-number-input.component.scss']
})
export class MobileNumberInputComponent implements OnInit {

  @Output() onSetMobileNumber = new EventEmitter();

  mobileNumber: String;

  constructor() { }

  ngOnInit(): void {
  }

  onKeyup($event){
    console.log($event);
    this.mobileNumber = this.getFormatedMobileNumber(this.mobileNumber);
    let mobileNumberValue = this.getMobileNumber(this.mobileNumber);
    if(mobileNumberValue.length == 12){
      this.onSetMobileNumber.emit(mobileNumberValue)
    }else{
      this.onSetMobileNumber.emit(undefined);
    }
  }

  getMobileNumber(stringValue: String): String{
    return stringValue.replace("(","").replace(")","")
  }

  getFormatedMobileNumber(stringValue: String):String{
    return stringValue;
  }

}
