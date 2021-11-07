import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skill } from '../../model/skill';
import * as Realm from "realm-web";

@Component({
  selector: 'search-skill',
  templateUrl: './search-skill.component.html',
  styleUrls: ['./search-skill.component.scss']
})
export class SearchSkillComponent implements OnInit {
  @Output() onSkillSelected = new EventEmitter<Skill>();

  skillKeyWord: String;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  skillList: Skill[];

  constructor(){}

  ngOnInit(): void {
  }

  onKeyup(event) {
    console.log(event);
    if(this.skillKeyWord.length >=3){
      this.search(this.skillKeyWord);
    }else{
      this.skillList =[];
    }
  }

  async search(keyword):Promise<void>{
    console.log(`Searching for ${keyword}`);
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions.searchSkill(keyword);
    this.skillList = result;
  }

  selected(skill:Skill){
    this.onSkillSelected.emit(skill);
  }

}
