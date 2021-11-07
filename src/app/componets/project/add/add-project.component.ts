import { Component, OnInit } from '@angular/core';
import * as Realm from "realm-web";
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Course } from '../../model/course';
import { Project } from '../../model/project';
import { Skill } from '../../model/skill';
import { Student } from '../../model/student';

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  project :Project = {
    skillList:[],
    isPublished:false,
  };
  student: Student;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  pageTitle: String;
  attachmentFile: any;
  
  constructor(
    private localStorageService:LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }

  changePage(pageTitle:String){
    this.pageTitle = pageTitle;
    console.log(this.pageTitle);
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
    console.log(this.project);
    
  }

  addSkill(skill:Skill){
    this.project.skillList.push(skill);
    console.log(this.project);
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
    this.onSubmit();
  }

  publish(){
    this.project.isPublished = true;
    this.onSubmit();
  }

  async onSubmit(){
    console.log(this.project);
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions.addProject(
      this.student._id,
      this.project.projectType,
      this.project.name,
      this.project.course,
      this.project.skillList,
      this.project.yearCompleted,
      this.project.isPublished,
    );
    console.log(result);
  }
}
