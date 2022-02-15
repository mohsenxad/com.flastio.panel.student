import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Major } from 'src/app/model/major';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor() { }

  async search(keyword):Promise<Major[]>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let majorList: Major[]  = await user.functions.searchMajor(keyword);
    return majorList;
  }

  async add(name){
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let newMajor: Major = await user.functions.addMajor(name);
    return newMajor
  }

}
