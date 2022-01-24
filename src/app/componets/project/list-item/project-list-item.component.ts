import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinkUrl } from 'src/app/model/linkUrl';
import { Project } from '../../../model/project';

@Component({
  selector: 'project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {


  @Input() project: Project;
  @Output() onEdit = new EventEmitter<Project>();
  @Output() onDelete = new EventEmitter<Project>();
  @Output() onChangeIndex = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {}

  edit(){
    this.onEdit.emit(this.project);
  }

  delete(){
    this.onDelete.emit(this.project);
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

    
  viewLinkUrl(linkUrl:LinkUrl):void{
    console.log('viwing ...');
    window.open(linkUrl.url.toString());
    
  }

}
