import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gender-select',
  templateUrl: './gender-select.component.html',
  styleUrls: ['./gender-select.component.scss']
})
export class GenderSelectComponent implements OnInit {

  @Input() selectedGender:String;
  @Output() onGenderSelected = new EventEmitter<String>();

  genderList:String[] = [
    'Woman',
    'Man',
    'Transgender',
    'Non-binary/non-conforming',
    'Prefer not to respond'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeGender(gender:String){
    this.onGenderSelected.emit(gender);
  }

}
