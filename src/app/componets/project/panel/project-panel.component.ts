import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';

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
  isEditProjectVisible:Boolean = false;
  markAsDeleteProject : Project;
  markAsEditProject : Project;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('this is in project panel changes');
    
    console.log(changes);
  }

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

  showEditProjectForm(){
    this.isEditProjectVisible = true;
  }

  hideEditProjectForm(){
    this.isEditProjectVisible = false;
  }

  changeEditedProject(project: Project){
    console.log('here to update project');
    
    this.projectList.forEach((currentProject:Project)=>{
      if(currentProject._id.toString() == project._id.toString()){
        currentProject.name = project.baseInfo.name;
        currentProject.description = project.baseInfo.description;
      }
    })
  }


  edit(project: Project){
    this.markAsEditProject = Object.assign({},project);
    this.showEditProjectForm();
  }

  delete(project: Project){
    this.markAsDeleteProject = project;
    this.showConfrimDelete();
  }

  async confirmedDelete(){
    await this.projectService.remove(this.markAsDeleteProject);
    this.projectList = this.projectList.filter((currentProject: Project)=>{
      if(currentProject._id.toString()!= this.markAsDeleteProject._id.toString()){
        return currentProject;
      }
    });
    this.hideConfrimDelete();
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

  addNewProject(project:Project){
    if(!this.projectList){
      this.projectList = [];
    }
    this.projectList.push(project);
  }

}
