import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../model/project';

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

  ngOnInit(): void {
  }

  edit(){
    console.log('edit project');
    
  }

  delete(){
    console.log('delete project');
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

}
