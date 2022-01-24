import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/model/company';
import { Course } from 'src/app/model/course';
import { Major } from 'src/app/model/major';
import { ProjectBaseInfo } from 'src/app/model/projectBaseInfo';
import { Skill } from 'src/app/model/skill';
import { SummaryFile } from 'src/app/model/summaryFile';

@Component({
  selector: 'project-base-info',
  templateUrl: './project-base-info.component.html',
  styleUrls: ['./project-base-info.component.scss']
})
export class ProjectBaseInfoComponent implements OnInit {

  @Input() major:Major;
  @Input() projectBaseInfo:ProjectBaseInfo;
  @Output() onSetBaseInfo = new EventEmitter<ProjectBaseInfo>();

  localProjectBaseInfo:ProjectBaseInfo = {};
  
  constructor() { }

  ngOnInit(): void {
    this.localProjectBaseInfo.name = this.projectBaseInfo.name;
    this.localProjectBaseInfo.projectType = this.projectBaseInfo.projectType;
    this.localProjectBaseInfo.description = this.projectBaseInfo.description;
    this.localProjectBaseInfo.relatedInternship = this.projectBaseInfo.relatedInternship;
    this.localProjectBaseInfo.skillList = this.projectBaseInfo.skillList;
    this.localProjectBaseInfo.summaryFile = this.projectBaseInfo.summaryFile;
    this.localProjectBaseInfo.yearCompleted = this.projectBaseInfo.yearCompleted;
  }

  setCoursse(course:Course){
    this.localProjectBaseInfo.course = course;
    this.updateProjectBaseInfo();
  }

  setCompany(company: Company){
    this.localProjectBaseInfo.company = company;
    this.updateProjectBaseInfo();
  }

  removeCoursse(){
    this.localProjectBaseInfo.course = undefined;
    this.updateProjectBaseInfo();
  }


  addSkill(skill:Skill){
    this.localProjectBaseInfo.skillList.push(skill);
    this.updateProjectBaseInfo();
  }

  removeSkillFromProject(skill:Skill){
    this.localProjectBaseInfo.skillList = this.localProjectBaseInfo.skillList.filter((currentSkill)=>{
      if(currentSkill._id.toString() != skill._id.toString()){
        return currentSkill;
      }
    })
    this.updateProjectBaseInfo();
  }

  setSummaryFile(summaryFile: SummaryFile){
    this.localProjectBaseInfo.summaryFile = summaryFile;
    this.updateProjectBaseInfo();
  }

  setYearCompleted(year: number){
    this.localProjectBaseInfo.yearCompleted = year;
    this.updateProjectBaseInfo();
  }
  setProjectType(projectType: String){
    this.localProjectBaseInfo.projectType = projectType;
    this.updateProjectBaseInfo();
  }

  updateProjectBaseInfo(){
    this.onSetBaseInfo.emit(this.localProjectBaseInfo);
  }

}
