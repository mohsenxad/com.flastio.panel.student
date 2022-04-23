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
    this.mobileNumber = this.getFormatedMobileNumber(this.mobileNumber);
    let mobileNumberValue = this.getMobileNumber(this.mobileNumber);
    if(mobileNumberValue.length > 5){
      this.onSetMobileNumber.emit(mobileNumberValue)
    }else{
      this.onSetMobileNumber.emit(undefined);
    }
  }

  getMobileNumber(stringValue: String): String{
    if(stringValue){
      return stringValue.replace("(","").replace(")","")
    }else{
      return "";
    }
    
  }

  getFormatedMobileNumber(stringValue: String):String{
    return stringValue;
  }

}
