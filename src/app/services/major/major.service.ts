import { Injectable } from '@angular/core';
import { Major } from 'src/app/model/major';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor(
    private realmService: RealmService,
  ) { }

  async search(keyword:String):Promise<Major[]>{
    let majorList: Major[]  = await this.realmService.callFunction(
      "searchMajor",
      keyword
    );
    return majorList;
  }

  async add(name:String):Promise<Major>{
    let newMajor: Major = await this.realmService.callFunction(
      "addMajor",
      name
    );
    return newMajor
  }

}
