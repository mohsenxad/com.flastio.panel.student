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
    this.strengthValue = 0;

    if(this.student.projectList && this.student.projectList.length > 0 ){
      this.strengthValue = this.strengthValue.valueOf() + 1;
    }

    if(this.student.assignedCertificationList && this.student.assignedCertificationList.length > 0 ){
      this.strengthValue = this.strengthValue.valueOf() + 1;
    }

    if(this.student.recommendationList && this.student.recommendationList.length > 0 ){
      this.strengthValue = this.strengthValue.valueOf() + 1;
    }

    if(this.student.resumeFileUrl){
      this.strengthValue = this.strengthValue.valueOf() + 1;
    }

    if(this.student.transcriptFileUrl){
      this.strengthValue = this.strengthValue.valueOf() + 1;
    }

    this.strengthTitle = 'Beginner'
  }

}
