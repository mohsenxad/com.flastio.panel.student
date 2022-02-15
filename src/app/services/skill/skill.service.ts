import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Skill } from 'src/app/model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  async search(keyword):Promise<Skill[]>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let skillList: Skill[]  = await user.functions.searchSkill(keyword);
    return skillList;
  }

  async add(name):Promise<Skill>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let newSkill: Skill = await user.functions.addSkill(name);
    return newSkill
  }
}
