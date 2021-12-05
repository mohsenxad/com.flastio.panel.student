import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ethnicity-select',
  templateUrl: './ethnicity-select.component.html',
  styleUrls: ['./ethnicity-select.component.scss']
})
export class EthnicitySelectComponent implements OnInit {

  @Input() selectedEthnicity:String;
  @Output() onEthnicitySelected = new EventEmitter<String>();


  constructor() { }

  ngOnInit(): void {
  }

  changeEthnicity(){
    this.onEthnicitySelected.emit(this.selectedEthnicity);
  }

}
