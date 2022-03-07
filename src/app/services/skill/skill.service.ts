import { Injectable } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private realmService: RealmService,
  ) {}

  async search(keyword: String):Promise<Skill[]>{
    const skillList: Skill[]  = await this.realmService.callFunction(
      "searchSkill",
      keyword
    );
    return skillList;
  }

  async add(name: String):Promise<Skill>{
    const newSkill: Skill = await this.realmService.callFunction(
      "addSkill",
      name
    );
    return newSkill
  }
}
