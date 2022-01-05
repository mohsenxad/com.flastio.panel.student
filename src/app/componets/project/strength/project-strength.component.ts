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

  itemList: any[]=[
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

  setItemListStatus(){
    this.itemList=[
      {
        title: 'Project Summary file',
        isCompeleted: (this.projectBaseInfo.summeryFileUrl != undefined && this.projectBaseInfo.summeryFileUrl.length >= 10),
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

    if(this.projectBaseInfo.projectType == 'Related course'){
      this.itemList.push({
        title: 'Course title',
        isCompeleted:this.projectBaseInfo.course != undefined,
      })
    };

    if(this.projectBaseInfo.projectType == 'Internship'){
      this.itemList.push({
        title: 'Company’s name',
        isCompeleted:this.projectBaseInfo.company != undefined,
      })
    };

    // course 
    // company
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
    this.setItemListStatus();
    result = this.itemList.reduce(this.getCount,0)
    return Math.floor(result*100/this.itemList.length);
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
