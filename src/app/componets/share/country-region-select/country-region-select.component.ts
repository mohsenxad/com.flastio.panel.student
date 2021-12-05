import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'country-region-select',
  templateUrl: './country-region-select.component.html',
  styleUrls: ['./country-region-select.component.scss']
})
export class CountryRegionSelectComponent implements OnInit {

  @Input() selectedCountryRegion:String;
  @Output() onCountryRegionSelected = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  changeCountryRegion(){
    this.onCountryRegionSelected.emit(this.selectedCountryRegion);
  }

}
