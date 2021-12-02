import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Major } from 'src/app/model/major';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  constructor() { }

  async search(keyword):Promise<Major[]>{
    const user: Realm.User = this.app.currentUser;
    let majorList: Major[]  = await user.functions.searchMajor(keyword);
    return majorList;
  }

  async add(name){
    const user: Realm.User = this.app.currentUser;
    let newMajor: Major = await user.functions.addMajor(name);
    return newMajor
  }

}
