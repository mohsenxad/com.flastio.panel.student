import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from '../../../model/student';

@Component({
  selector: 'portfolio-strength',
  templateUrl: './portfolio-strength.component.html',
  styleUrls: ['./portfolio-strength.component.scss']
})
export class PortfolioStrengthComponent implements OnInit, OnChanges {
  @Input() student : Student;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.calculate();
  }

  strengthValue:Number;
  strengthMaxValue:Number = 7;
  strengthTitle:String;

  ngOnInit(): void {
  }

  itemList: any[]=[
    {
      title: 'Personal Information',
      isCompeleted: false,
      url: '/student/editDetail'
    },
    {
      title: 'Project',
      isCompeleted:false,
      url: '#'
    },
    {
      title: 'Resume',
      isCompeleted:false,
      url: '#'
    },
    {
      title: 'Transcript',
      isCompeleted:false,
      url: '#'
    },
    {
      title: 'Certifications',
      isCompeleted:false,
      url: '#'
    },
    {
      title: 'Recommendations',
      isCompeleted:false,
      url: '#'
    },
    {
      title: 'Work Style',
      isCompeleted:false,
      url: '#'
    }
  ];


  setItemListStatus(){
    this.itemList = [
      {
        title: 'Personal Information',
        isCompeleted: false,
        url: '/student/editDetail'
      },
      {
        title: 'Project',
        isCompeleted:(this.student.projectList && this.student.projectList.length > 0),
        url: '#'
      },
      {
        title: 'Resume',
        isCompeleted: (this.student.resumeFileUrl && this.student.resumeFileUrl!= ''),
        url: '#'
      },
      {
        title: 'Transcript',
        isCompeleted:(this.student.transcriptFileUrl && this.student.transcriptFileUrl != ''),
        url: '#'
      },
      {
        title: 'Certifications',
        isCompeleted:(this.student.assignedCertificationList && this.student.assignedCertificationList.length > 0),
        url: '#'
      },
      {
        title: 'Recommendations',
        isCompeleted:(this.student.recommendationList && this.student.recommendationList.length > 0),
        url: '#'
      },
      {
        title: 'Work Style',
        isCompeleted:false,
        url: '#'
      }
    ];
    
  }
 
  getCount(total : number, item: any ): number {
    if(item.isCompeleted){
      return total +1; 
    }else{
      return total;
    }
    
  }

  calculate(): Number{
    this.setItemListStatus();
    let result : number = 0;
    result = this.itemList.reduce(this.getCount,0)
    return result;
  }

}
