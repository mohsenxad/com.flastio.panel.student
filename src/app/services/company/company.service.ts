import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Company } from 'src/app/model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  constructor() { }

  async search(keyword):Promise<Company[]>{
    const user: Realm.User = this.app.currentUser;
    let companyList: Company[]  = await user.functions.searchCompany(keyword);
    return companyList;
  }

  async add(name){
    const user: Realm.User = this.app.currentUser;
    let newCompany: Company = await user.functions.addCompany(name);
    return newCompany
  }
}
