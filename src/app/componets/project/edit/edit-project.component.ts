import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignedCertification } from 'src/app/model/assignedCertification';
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
  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };
  
  constructor(
    private projectService:ProjectService
  ) {}
  
  validatePublish(project: Project): ValidationResult{
    let result: ValidationResult = {
      hasError:false,
      messageList: []
    };

    if(!project.baseInfo.summaryFile){
      result.hasError = true;
      result.messageList.push("Summary File");
    }

    if(!project.baseInfo.name || project.baseInfo.name == ""){
      result.hasError = true;
      result.messageList.push("Project Name");
    }

    if(
      project.baseInfo.name &&
      project.baseInfo.name != "" &&
      project.baseInfo.name.length < 5
    ){
      result.hasError = true;
      result.messageList.push("Project Name should be more than 5 charachter");
    }

    if(
      project.baseInfo.projectType == 'Course Project' &&
      !project.baseInfo.course
    ){
      result.hasError = true;
      result.messageList.push("Course");
    }

    if(
      project.baseInfo.projectType == 'Internship' &&
      !project.baseInfo.company
    ){
      result.hasError = true;
      result.messageList.push("Company");
    }

    if(!project.baseInfo.description || project.baseInfo.description == ""){
      result.hasError = true;
      result.messageList.push("Project Description");
    }

    if(
      project.baseInfo.description &&
      project.baseInfo.description != "" &&
      project.baseInfo.description.length < 10
    ){
      result.hasError = true;
      result.messageList.push("Project Description should be more than 10 charachter");
    }

    if(
      !project.baseInfo.skillList ||
      project.baseInfo.skillList.length == 0
    ){
      result.hasError = true;
      result.messageList.push("Project Topics");
    }

    

    if(!project.baseInfo.yearCompleted){
      result.hasError = true;
      result.messageList.push("Year of Completed");
    }

    if(
      result.hasError
    ){
      result.messageList.unshift("The following field(s) are required. You can't publish your project without completing them.");
    }


    return result;
  }

  validateDraft(project: Project): ValidationResult{
    let result: ValidationResult = {
      hasError:false,
      messageList: []
    };

    if(!project.baseInfo.name || project.baseInfo.name == ""){
      result.hasError = true;
      result.messageList.push("Project's name");
    }

    if(
      result.hasError
    ){
      result.messageList.unshift("The following field is required for saving a project as a draft.");
    }

    return result;
  }

  changePage(pageTitle:String): void{
    this.pageTitle = pageTitle;
  }

  goToGeneralView(){
    this.changePage("General");
  }

  updateLinkUrlList(linkUrlList: LinkUrl[]){
    this.project.linkUrlList = linkUrlList
  }

  updateStudentRole(studentRole: String):void{
    this.project.role = studentRole
  }
  
  updateContributorList(contributorList: Contributor[]){
    this.project.contributorList = contributorList
  }

  updateSupportingFileList(supportingFileList: SupportingFile[]){
    this.project.supportingFileList = supportingFileList
  }

  updateCertification(assignedCertification: AssignedCertification){
    this.project.assignedCertification = assignedCertification
  }

  ngOnInit(): void {}

  draft(){
    this.project.isPublished = false;
    let validationResult = this.validateDraft(this.project);
    if(!validationResult.hasError){
      this.save();
    }else{
      this.validationResult = validationResult;
    }
  }

  publish(){
    this.project.isPublished = true;
    let validationResult = this.validatePublish(this.project);
    if(!validationResult.hasError){
      this.save();
    }else{
      this.validationResult = validationResult;
    }
  }

  async save(){
    this.isLoading = true;
    await this.projectService.edit(this.project);
    this.onProjectEdited.emit(this.project)
    this.isLoading = false;
    this.onClose.emit();
  }

  setBaseInfo(baseInfo:ProjectBaseInfo){
    this.project.baseInfo = baseInfo;
  }

  close(){
    this.onClose.emit();
  }

}
