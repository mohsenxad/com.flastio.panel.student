import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ethnicity-select',
  templateUrl: './ethnicity-select.component.html',
  styleUrls: ['./ethnicity-select.component.scss']
})
export class EthnicitySelectComponent implements OnInit {

  @Input() selectedEthnicity:String;
  @Output() onEthnicitySelected = new EventEmitter<String>();

  ethnicityList:String[] = [
    'American Indian or Alaska Native',
    'Asian',
    'Black or African American',
    'Hispanic or Latino',
    'Native Hawaiian or Other Pacific Islander'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeEthnicity(ethnicity:String){
    this.onEthnicitySelected.emit(ethnicity);
  }

}
