import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillSet } from 'src/app/model/skillSet';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from '../../../model/student';
import { ProjectPanelComponent } from '../../project/panel/project-panel.component';

@Component({
  selector: 'student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})
export class StudentPanelComponent implements OnInit {

  @ViewChild('projectpanel') projectPanel:ProjectPanelComponent;

  student : Student;
  @Input() @Output() isAddProjectVisible:Boolean = false;
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
    this.projectPanel.showAddProjectForm();
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

  onReumeUpdated(){
    this.getStudentInfo();
  }

  onTranscriptUpdated(){
    this.getStudentInfo();
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
