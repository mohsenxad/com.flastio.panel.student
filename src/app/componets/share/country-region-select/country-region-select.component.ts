import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'country-region-select',
  templateUrl: './country-region-select.component.html',
  styleUrls: ['./country-region-select.component.scss']
})
export class CountryRegionSelectComponent implements OnInit {

  @Input() selectedCountryRegion:String;
  @Output() onCountryRegionSelected = new EventEmitter<String>();

  countryRegionList:String[] = [
    'America',
    'Asian',
    'England',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeCountryRegion(countryRegion:String){
    this.onCountryRegionSelected.emit(countryRegion);
  }

}
