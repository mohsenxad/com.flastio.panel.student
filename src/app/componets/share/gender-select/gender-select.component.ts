import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gender-select',
  templateUrl: './gender-select.component.html',
  styleUrls: ['./gender-select.component.scss']
})
export class GenderSelectComponent implements OnInit {

  @Input() selectedGender:String;
  @Output() onGenderSelected = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  changeGender(){
    this.onGenderSelected.emit(this.selectedGender);
  }

}
