import { Injectable } from '@angular/core';
import { School } from 'src/app/model/school';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(
    private realmService: RealmService,
  ) {}

  async search(keyword: String):Promise<School[]>{
    const schoolList: School[]  = await this.realmService.callFunction(
      "searchSchool",
      keyword
    );
    return schoolList;
  }

  async add(name: String):Promise<School>{
    const newSchool: School = await this.realmService.callFunction(
      "addSchool",
      name
    );
    return newSchool
  }
}
