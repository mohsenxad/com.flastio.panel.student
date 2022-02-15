import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Company } from 'src/app/model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  async search(keyword):Promise<Company[]>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let companyList: Company[]  = await user.functions.searchCompany(keyword);
    return companyList;
  }

  async add(name){
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let newCompany: Company = await user.functions.addCompany(name);
    return newCompany
  }
}
