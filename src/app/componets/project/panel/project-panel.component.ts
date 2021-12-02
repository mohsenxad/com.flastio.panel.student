import { Component, Input, OnInit } from '@angular/core';
import { Major } from '../../../model/major';
import { Project } from '../../../model/project';

@Component({
  selector: 'project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.scss']
})
export class ProjectPanelComponent implements OnInit {

  @Input() major:Major;
  @Input() projectList: Project[];
  @Input() isAddProjectVisible:Boolean = false;


  isConfirmDeleteVisible: Boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  showAddProjectForm(){
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
