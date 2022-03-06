import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  @Input() @Output() isAddProjectVisible:Boolean = false;
  @Output() onUpdated = new EventEmitter();


  isConfirmDeleteVisible: Boolean = false;
  isEditProjectVisible:Boolean = false;
  markAsDeleteProject : Project;
  markAsEditProject : Project;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
  

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
    this.projectList.forEach((currentProject:Project)=>{
      if(currentProject._id.toString() == project._id.toString()){
        currentProject.baseInfo = project.baseInfo;
        currentProject.supportingFileList = project.supportingFileList;
        currentProject.contributorList = project.contributorList;
        currentProject.linkUrlList = project.linkUrlList;
        this.onUpdated.emit();
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
    this.onUpdated.emit();
  }

  changeIndex(index:Number){
    console.log('change  project index to ' + index.toString());
  }

  addNewProject(project:Project){
    if(!this.projectList){
      this.projectList = [];
    }
    this.projectList.push(project);
    this.onUpdated.emit();
  }

}
