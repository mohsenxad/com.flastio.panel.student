import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillSet } from 'src/app/model/skillSet';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'analytics-summary',
  templateUrl: './analytics-summary.component.html',
  styleUrls: ['./analytics-summary.component.scss']
})
export class AnalyticsSummaryComponent implements OnInit {

  @Input() student:Student;
  constructor() { }

  ngOnInit(): void {
  }

  getProjectCount(): Number{
    return this.student.projectList.length;
  }

  getSkillCount():Number{
    const skillList = this.getSkillList(this.student);
    const skillSetList = this.getSkillSetList(skillList);
    return skillSetList.length;
  }
  getCertificationCount():Number{
    return this.student.assignedCertificationList.length;
  }

  getSkillList(student: Student):Skill[]{
    let skillList : Skill[] =[];
    if(student.projectList){
      for (let project of student.projectList) {
        if(project.isPublished){
          for (let skill of project.baseInfo.skillList) {
            skillList.push(skill);
          }
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

}
