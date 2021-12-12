import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../../model/project';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projectList: Project[];
  @Output() onEdit = new EventEmitter<Project>();
  @Output() onDelete = new EventEmitter<Project>();
  @Output() onChangeIndex = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  edit(project: Project){
    this.onEdit.emit(project);
  }

  delete(project: Project){
    this.onDelete.emit(project);
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

}
