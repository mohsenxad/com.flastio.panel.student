import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/model/course';
import { Major } from 'src/app/model/major';
import { Project } from 'src/app/model/project';
import { Skill } from 'src/app/model/skill';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'project-base-info',
  templateUrl: './project-base-info.component.html',
  styleUrls: ['./project-base-info.component.scss']
})
export class ProjectBaseInfoComponent implements OnInit {

  @Input() major:Major;
  @Input() project:Project;

  fileUrl: String;
  projectFile: File ;
  uniqFileName: String;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  setCoursse(course:Course){
    this.project.course = course;
  }

  removeCoursse(){
    this.project.course = undefined;
  }

  setProjecType(projectType:String){
    this.project.projectType = projectType;
  }

  setYearCompleted(year:Number){
    console.log(`year selected ${year}`);
    
    this.project.yearCompleted = year;
  }

  addSkill(skill:Skill){
    this.project.skillList.push(skill);
  }

  removeSkillFromProject(skill:Skill){
    this.project.skillList = this.project.skillList.filter((currentSkill)=>{
      if(currentSkill._id.toString() != skill._id.toString()){
        return currentSkill;
      }
    })
  }

  setSummaryFile(uploadResponse: any, fileUrl:String){
    this.project.summeryFileUrl = uploadResponse.fileUrl;
  }

}
