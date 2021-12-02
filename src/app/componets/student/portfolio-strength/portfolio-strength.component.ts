import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../../model/student';

@Component({
  selector: 'portfolio-strength',
  templateUrl: './portfolio-strength.component.html',
  styleUrls: ['./portfolio-strength.component.scss']
})
export class PortfolioStrengthComponent implements OnInit {
  @Input() student : Student;
  constructor() { }
  strengthValue:Number;
  strengthMaxValue:Number = 7;
  strengthTitle:String;

  ngOnInit(): void {
    this.calculateStrength();
  }

  calculateStrength(){
    this.strengthValue = 5;
    this.strengthTitle = 'Beginner'
  }

}
