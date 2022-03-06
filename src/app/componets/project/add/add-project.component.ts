import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignedCertification } from 'src/app/model/assignedCertification';
import { ProjectBaseInfo } from 'src/app/model/projectBaseInfo';
import { ValidationResult } from 'src/app/model/validationResult';
import { ProjectService } from 'src/app/services/project/project.service';
import { Contributor } from '../../../model/contributor';
import { LinkUrl } from '../../../model/linkUrl';
import { Major } from '../../../model/major';
import { Project } from '../../../model/project';
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

  confirmDicardIsVisible: Boolean = false;
  project :Project = {
    baseInfo:{
      projectType : 'Course Project',
      yearCompleted:2021,
      skillList:[],  
    },
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
    console.log(this.pageTitle);
    console.log(this.project);
    
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

 

  ngOnInit(): void {
    console.log(this.project);
    
  }

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
    this.validationResult = this.validatePublish(this.project);
    if(!this.validationResult.hasError){
      this.save();
    }
  }

  async save(){
    this.isLoading = true;
    let addedProject: Project  = await this.projectService.add(this.project);
    this.onProjectAdded.emit(addedProject)
    this.isLoading = false;
    this.onClose.emit();
  }

  setBaseInfo(baseInfo:ProjectBaseInfo){
    this.project.baseInfo = baseInfo;
  }

  hideConfirmDiscardModal(){
    this.confirmDicardIsVisible = false;
  }

  isChanged():Boolean{
    let result: Boolean = false;

    if(this.project.baseInfo.name){
      result = true;
    }

    if(this.project.baseInfo.summaryFile){
      result = true;
    }

    if(this.project.baseInfo.course){
      result = true;
    }

    if(this.project.baseInfo.description){
      result = true;
    }

    if(this.project.baseInfo.skillList.length > 0){
      result = true;
    }

    if(this.project.linkUrlList.length > 0){
      result = true;
    }

    if(this.project.supportingFileList.length > 0){
      result = true;
    }

    if(this.project.contributorList.length > 0){
      result = true;
    }
    
    return result;
  }

  cancel(){
    if(this.isChanged()){
      this.confirmDicardIsVisible = true;
    }else{
     this.close();
    }
  }


  close(){
    this.onClose.emit();
  }
}
