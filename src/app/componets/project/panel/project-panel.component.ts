import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Major } from '../../../model/major';
import { Project } from '../../../model/project';

@Component({
  selector: 'project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.scss']
})
export class ProjectPanelComponent implements OnInit,OnChanges {

  @Input() major:Major;
  @Input() projectList: Project[];
  @Input() isAddProjectVisible:Boolean = false;


  isConfirmDeleteVisible: Boolean = false;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('this is in project panel changes');
    
    console.log(changes);
  }

  ngOnInit(): void {
    
  }
  

  showAddProjectForm(){
    console.log('here at project panel');
    
    this.isAddProjectVisible = true;
  }

  hideAddProjectForm(){
    this.isAddProjectVisible = false;
  }

  showConfrimDelete(){
    this.isConfirmDeleteVisible = true;
  }

  hideConfrimDelete(){
    this.isConfirmDeleteVisible = false;
  }

  deleteProject(){
    console.log('delete project');
    
  }

  addNewProject(project:Project){
    if(!this.projectList){
      this.projectList = [];
    }
    this.projectList.push(project);
  }

}
