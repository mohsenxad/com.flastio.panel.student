import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as Realm from "realm-web";
import { Skill } from '../../model/skill';

@Component({
  selector: 'add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {

  @Output() onSkillSelected = new EventEmitter<Skill>();
  
  skill: Skill ={};
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  constructor() { }

  ngOnInit(): void {
  }

  async onSubmit(){
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions.addSkill(this.skill.name);
    this.skill._id = result.insertedId.toString();
    this.onSkillSelected.emit(this.skill);
  }

}
