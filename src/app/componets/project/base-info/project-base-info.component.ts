import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/model/company';
import { Course } from 'src/app/model/course';
import { Major } from 'src/app/model/major';
import { Project } from 'src/app/model/project';
import { ProjectBaseInfo } from 'src/app/model/projectBaseInfo';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'project-base-info',
  templateUrl: './project-base-info.component.html',
  styleUrls: ['./project-base-info.component.scss']
})
export class ProjectBaseInfoComponent implements OnInit {

  @Input() major:Major;
  @Input() projectBaseInfo:ProjectBaseInfo;
  @Output() onSetBaseInfo = new EventEmitter<ProjectBaseInfo>();

  fileUrl: String;
  projectFile: File ;
  uniqFileName: String;


  constructor() { }

  ngOnInit(): void {
  }

  setCoursse(course:Course){
    this.projectBaseInfo.course = course;
    this.updateProjectBaseInfo();
  }

  setCompany(company: Company){
    this.projectBaseInfo.company = company;
    this.updateProjectBaseInfo();
  }

  removeCoursse(){
    this.projectBaseInfo.course = undefined;
    this.updateProjectBaseInfo();
  }


  addSkill(skill:Skill){
    this.projectBaseInfo.skillList.push(skill);
    this.updateProjectBaseInfo();
  }

  removeSkillFromProject(skill:Skill){
    this.projectBaseInfo.skillList = this.projectBaseInfo.skillList.filter((currentSkill)=>{
      if(currentSkill._id.toString() != skill._id.toString()){
        return currentSkill;
      }
    })
    this.updateProjectBaseInfo();
  }

  setSummaryFile(uploadResponse: any, fileUrl:String){
    this.projectBaseInfo.summeryFileUrl = uploadResponse.fileUrl;
    this.updateProjectBaseInfo();
  }

  setYearCompleted(year: number){
    this.projectBaseInfo.yearCompleted = year;
    this.updateProjectBaseInfo();
  }
  setProjectType(projectType: String){
    this.projectBaseInfo.projectType = projectType;
    this.updateProjectBaseInfo();
  }

  updateProjectBaseInfo(){
    this.onSetBaseInfo.emit(this.projectBaseInfo);
  }

}
