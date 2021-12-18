import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contributor } from 'src/app/model/contributor';
import { LinkUrl } from 'src/app/model/linkUrl';
import { Major } from 'src/app/model/major';
import { Project } from 'src/app/model/project';
import { ProjectBaseInfo } from 'src/app/model/projectBaseInfo';
import { SupportingFile } from 'src/app/model/supportingFile';
import { ValidationResult } from 'src/app/model/validationResult';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  @Input() major:Major;
  @Input() project:Project;

  @Output() onClose = new EventEmitter();
  @Output() onProjectEdited = new EventEmitter<Project>();


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

    if(!project.baseInfo.summeryFileUrl){
      result.hasError = true;
      result.messageList.push("Add Project Summary File");
    }

    if(!project.baseInfo.name || project.baseInfo.name == ""){
      result.hasError = true;
      result.messageList.push("Add Project Name");
    }

    if(project.baseInfo.name && project.baseInfo.name != "" && project.baseInfo.name.length < 5){
      result.hasError = true;
      result.messageList.push("Project Name should be more than 5 charachter");
    }

    if(!project.baseInfo.description || project.baseInfo.description == ""){
      result.hasError = true;
      result.messageList.push("Add Project Description");
    }

    if(project.baseInfo.description && project.baseInfo.description != "" && project.baseInfo.description.length < 10){
      result.hasError = true;
      result.messageList.push("Project Description should be more than 10 charachter");
    }

    if(!project.baseInfo.yearCompleted){
      result.hasError = true;
      result.messageList.push("Select Project Year of Completed");
    }


    return result;
  }

  changePage(pageTitle:String): void{
    this.pageTitle = pageTitle;
    console.log(this.pageTitle);
    console.log(this.project);
    
  }

  goToGeneralView(){
    this.changePage("General");
  }

  updateLinkUrlList(linkUrlList: LinkUrl[]){
    console.log('here to u[pdate');
    
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
    this.project.baseInfo ={
      projectType:this.project.projectType,
      name:this.project.name,
      description:this.project.description,
      course:this.project.course,
      skillList:this.project.skillList,
      yearCompleted:this.project.yearCompleted,
      summeryFileUrl:this.project.summeryFileUrl,

    }
   
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
      await this.projectService.edit(this.project);
      this.onProjectEdited.emit(this.project)
      this.isLoading = false;
      this.onClose.emit();
    }else{
      this.validationResult = validationResult;
    }
    
  }

  setBaseInfo(baseInfo:ProjectBaseInfo){
    this.project.baseInfo = baseInfo;
  }



  close(){
    this.onClose.emit();
  }

}
