import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skill } from '../../../model/skill';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'search-skill',
  templateUrl: './search-skill.component.html',
  styleUrls: ['./search-skill.component.scss']
})
export class SearchSkillComponent implements OnInit {
  @Output() onSkillSelected = new EventEmitter<Skill>();

  skillKeyWord: String;
  skillList: Skill[];
  isLoading:Boolean = false;
  keywordMinCharLengthToSearch: Number = 3;

  constructor(
    private skillService: SkillService
  ){}

  ngOnInit(): void {
  }

  onKeyup(event) {
    console.log(event);
    if(
      this.skillKeyWord &&
      this.skillKeyWord.length >= this.keywordMinCharLengthToSearch
    ){
      this.search(this.skillKeyWord);
    }else{
      this.skillList =[];
    }
  }

  isAddable():Boolean{
    if(
      !this.isLoading &&
      this.skillList &&
      this.skillKeyWord &&
      this.skillKeyWord.length >= this.keywordMinCharLengthToSearch &&
      !this.isInList(this.skillKeyWord, this.skillList)

    ){
      return true;
    }else{
      return false;
    }
  }

  isInList(skillKeyWord: String,skillList:Skill[]):Boolean{
    let result: Boolean = false;
    let foundSkillWithName = skillList.find((currentSkill:Skill) => {
      if(currentSkill.name.trim().toLowerCase() == skillKeyWord.trim().toLowerCase()){
        return currentSkill
      }
    })

    if(foundSkillWithName){
      result = true;
    }

    return result;
  }

  async search(keyword):Promise<void>{
    this.isLoading = true;
    let result: any  = await this.skillService.search(keyword);
    this.skillList = result;
    this.isLoading = false;
  }

  async addSkill(){
    this.isLoading = true;
    let newSkill:Skill  = await this.skillService.add(this.skillKeyWord);
    this.onSkillSelected.emit(newSkill);
    this.skillKeyWord = '';
    this.skillList = [];
    this.isLoading = false;
  }

  selected(skill:Skill){
    this.skillKeyWord = '';
    this.skillList =[];
    this.onSkillSelected.emit(skill);
  }

}
