import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { Skill } from 'src/app/model/skill';
import { SkillSet } from 'src/app/model/skillSet';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from '../../../model/student';

@Component({
  selector: 'student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})
export class StudentPanelComponent implements OnInit {

  
  student : Student;
  @Input() isAddProjectVisible:Boolean = false;
  isLoading: Boolean = false;
  skillSetList:SkillSet[];

  constructor(
    private localStorageService: LocalStorageService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getStudentInfo();
  }

  async getStudentInfo(){
    this.isLoading = true;
    this.student  = await this.studentService.getStudentInfo();
    this.localStorageService.setStudent(this.student);
    this.isLoading = false;

    let skillList = this.getSkillList(this.student);
    this.skillSetList = this.getSkillSetList(skillList);
    
    
  }

  showAddProject(){
    console.log('show add project in student panel');
    
    this.isAddProjectVisible = true;
  }

  getSkillList(student: Student):Skill[]{
    let skillList : Skill[] =[];
    for (let project of student.projectList) {
      if(project.isPublished){
        for (let skill of project.skillList) {
          skillList.push(skill);
        }
      }
    }
    return skillList;
  }

  getSkillSetList(skillList:Skill[]):SkillSet[]{
    let skillSetList: SkillSet[]= [];
    for (const skill of skillList) {

      let foundSkillSetByskill = skillSetList.find((currentSkillSet)=>{
        if(currentSkillSet.skill._id.toString() == skill._id.toString()){
          return currentSkillSet;
        }
      })
      if(foundSkillSetByskill){
        foundSkillSetByskill.count = Number(foundSkillSetByskill.count) + 1;
      }else{
        let newSkillSet: SkillSet = {
          count:1,
          skill:skill
        }
        skillSetList.push(newSkillSet);
      }
    }
    return skillSetList;
  }

  onProjectListUpdated(){
    this.getStudentInfo();
  }

  onCertificationListUpdated(){
    this.getStudentInfo();
  }

  onRecommendationListUpdated(){

  }

  onWorkStyleListUpdated(){

  }


}
