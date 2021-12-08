import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Skill } from 'src/app/model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  constructor() { }

  async search(keyword):Promise<Skill[]>{
    const user: Realm.User = this.app.currentUser;
    let skillList: Skill[]  = await user.functions.searchSkill(keyword);
    return skillList;
  }

  async add(name):Promise<Skill>{
    const user: Realm.User = this.app.currentUser;
    let newSkill: Skill = await user.functions.addSkill(name);
    return newSkill
  }
}
