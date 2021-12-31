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
    return result*100/5;
  }

}
