import { Component, Input, OnInit } from '@angular/core';
import { ProjectBaseInfo } from 'src/app/model/projectBaseInfo';

@Component({
  selector: 'project-strength',
  templateUrl: './project-strength.component.html',
  styleUrls: ['./project-strength.component.scss']
})
export class ProjectStrengthComponent implements OnInit {

  @Input() projectBaseInfo:ProjectBaseInfo;

  strengthValue:Number = 0;
  strengthMaxValue:Number = 100;

  itemList1: any[]=[
    {
      title: 'Project Summary file',
      isCompeleted: false,
    },
    {
      title: 'Project’s name',
      isCompeleted:false,
    },
    {
      title: 'Description',
      isCompeleted:false,
    },
    {
      title: 'Topics',
      isCompeleted:false,
    },
    {
      title: 'Year Completed',
      isCompeleted:false,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getItemListStatus(){
    let result=[
      {
        title: 'Project Summary file',
        isCompeleted: (this.projectBaseInfo.summaryFile),
      },
      {
        title: 'Project’s name',
        isCompeleted: (this.projectBaseInfo.name != undefined && this.projectBaseInfo.name.length >= 5),
      },
      {
        title: 'Description',
        isCompeleted: (this.projectBaseInfo.description != undefined && this.projectBaseInfo.description.length >= 10),
      },
      {
        title: 'Topics',
        isCompeleted: (this.projectBaseInfo.skillList && this.projectBaseInfo.skillList.length > 0),
      },
      {
        title: 'Year Completed',
        isCompeleted:this.projectBaseInfo.yearCompleted != undefined,
      }
    ]

    if(this.projectBaseInfo.projectType == 'Course Project'){
      result.push({
        title: 'Course Project',
        isCompeleted:this.projectBaseInfo.course != undefined,
      })
    };

    if(this.projectBaseInfo.projectType == 'Internship'){
      result.push({
        title: 'Company’s name',
        isCompeleted:this.projectBaseInfo.company != undefined,
      })
    };

    return result;
  }

  getCount(total : number, item: any ): number {
    
    if(item.isCompeleted){
      return total +1; 
    }else{
      return total;
    }
    
  }

  calculate(): Number{
    let result : number = 0;
    result = this.getItemListStatus().reduce(this.getCount,0)
    return Math.floor(result*100/this.getItemListStatus().length);
  }

  close(){
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          detail.removeAttribute("open");
        });
      });
    });
  }

}
