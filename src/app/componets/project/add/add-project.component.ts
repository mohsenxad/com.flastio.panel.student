import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as Realm from "realm-web";
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { Contributor } from '../../model/contributor';
import { Course } from '../../model/course';
import { LinkUrl } from '../../model/linkUrl';
import { Project } from '../../model/project';
import { Skill } from '../../model/skill';
import { Student } from '../../model/student';
import { SupportingFile } from '../../model/supportingFile';

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  @Output() onClose = new EventEmitter();

  project :Project = {
    skillList:[],
    linkUrlList:[],
    supportingFileList:[],
    contributorList:[],
    isPublished:false,
  };
  student: Student;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  pageTitle: String = 'General';
  attachmentFile: any;
  projectFile: File ;
  uniqFileName: String;
  fileUrl: String;
  
  constructor(
    private localStorageService:LocalStorageService,
    private projectService:ProjectService
  ) { 
    this.student = this.localStorageService.getStudent();
  }

  changePage(pageTitle:String): void{
    this.pageTitle = pageTitle;
    console.log(this.pageTitle);
  }

  goToGeneralView(){
    this.changePage("General");
  }

  setProjecType(projectType:String){
    this.project.projectType = projectType;
    console.log(this.project);
  }

  setYearCompleted(year:Number){
    this.project.yearCompleted = year;
    console.log(this.project);
  }

  setCoursse(course:Course){
    this.project.course = course;
  }

  removeCoursse(){
    this.project.course = undefined;
  }

  addSkill(skill:Skill){
    this.project.skillList.push(skill);
    console.log(this.project);
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

  removeSkillFromProject(skill:Skill){
    this.project.skillList = this.project.skillList.filter((currentSkill)=>{
      if(currentSkill._id.toString() != skill._id.toString()){
        return currentSkill;
      }
    })
  }

  ngOnInit(): void {
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
    let result: any  = await this.projectService.add(this.project);
    console.log(result);
  }

  async handleFileInput(files: FileList) {
    this.projectFile = files.item(0);
    let response:any = await this.projectService.getProjectUploadUrl()
    this.uniqFileName = response.fileName.toString();
    let signedUploadUr = response.presignedUrl;
    this.uploadFile(signedUploadUr)
  }

  

  uploadFile(uploadPresignUrl: String){
    const contentType = this.projectFile.type;
    this.projectService.upload(uploadPresignUrl,this.projectFile, contentType)
      .subscribe(data=>{
        console.log('uploaded');
        this.fileUrl = uploadPresignUrl.split('?')[0];
        this.project.summeryFileUrl = uploadPresignUrl.split('?')[0];
      });
  }

  close(){
    this.onClose.emit();
  }
}
