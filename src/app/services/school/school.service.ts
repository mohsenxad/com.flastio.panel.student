import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { School } from 'src/app/model/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  constructor() { }

  async search(keyword):Promise<School[]>{
    const user: Realm.User = this.app.currentUser;
    let schoolList: School[]  = await user.functions.searchSchool(keyword);
    return schoolList;
  }

  async add(name){
    const user: Realm.User = this.app.currentUser;
    let newSchool: School = await user.functions.addSchool(name);
    return newSchool
  }
}
