import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'college-status-select',
  templateUrl: './college-status-select.component.html',
  styleUrls: ['./college-status-select.component.scss']
})
export class CollegeStatusSelectComponent implements OnInit {

  @Input() selectedCollegeStatus:String;
  @Output() onCollegeStatusSelected = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  changeCollegeStatus(){
    this.onCollegeStatusSelected.emit(this.selectedCollegeStatus);
  }

}
