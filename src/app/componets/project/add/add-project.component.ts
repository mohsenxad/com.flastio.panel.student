import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';
import { ProjectService } from 'src/app/services/project/project.service';
import { Contributor } from '../../../model/contributor';
import { Course } from '../../../model/course';
import { LinkUrl } from '../../../model/linkUrl';
import { Major } from '../../../model/major';
import { Project } from '../../../model/project';
import { Skill } from '../../../model/skill';
import { SupportingFile } from '../../../model/supportingFile';

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  @Input() major:Major;

  @Output() onClose = new EventEmitter();
  @Output() onProjectAdded = new EventEmitter<Project>();

  project :Project = {
    skillList:[],
    linkUrlList:[],
    supportingFileList:[],
    contributorList:[],
    isPublished:false,
  };
  
 
  pageTitle: String = 'General';
  attachmentFile: any;

  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };
  
  constructor(
    private projectService:ProjectService
  ) {}

  validate(project: Project): ValidationResult{
    let result: ValidationResult = {
      hasError:false,
      messageList: []
    };

    if(!project.summeryFileUrl){
      result.hasError = true;
      result.messageList.push("Add Project Summary File");
    }

    if(!project.name || project.name == ""){
      result.hasError = true;
      result.messageList.push("Add Project Name");
    }

    if(project.name && project.name != "" && project.name.length < 5){
      result.hasError = true;
      result.messageList.push("Project Name should be more than 5 charachter");
    }

    if(!project.description || project.description == ""){
      result.hasError = true;
      result.messageList.push("Add Project Description");
    }

    if(project.description && project.description != "" && project.description.length < 10){
      result.hasError = true;
      result.messageList.push("Project Description should be more than 10 charachter");
    }

    if(!project.yearCompleted){
      result.hasError = true;
      result.messageList.push("Select Project Year of Completed");
    }


    return result;
  }

  changePage(pageTitle:String): void{
    this.pageTitle = pageTitle;
    console.log(this.pageTitle);
  }

  goToGeneralView(){
    this.changePage("General");
  }

  updateLinkUrlList(linkUrlList: LinkUrl[]){
    this.project.linkUrlList = linkUrlList
  }

  updateContributorList(contributorList: Contributor[]){
    this.project.contributorList = contributorList
  }

  updateSupportingFileList(supportingFileList: SupportingFile[]){
    this.project.supportingFileList = supportingFileList
  }

 

  ngOnInit(): void {
    console.log(this.project);
    
  }

  draft(){
    this.project.isPublished = false;
    this.save();
  }

  publish(){
    this.project.isPublished = true;
    this.save();
  }

  async save(){
    let validationResult = this.validate(this.project);
    if(!validationResult.hasError){
      this.isLoading = true;
      let addedProject: Project  = await this.projectService.add(this.project);
      this.onProjectAdded.emit(addedProject)
      this.isLoading = false;
      this.onClose.emit();
    }else{
      this.validationResult = validationResult;
    }
    
  }



  close(){
    this.onClose.emit();
  }
}
