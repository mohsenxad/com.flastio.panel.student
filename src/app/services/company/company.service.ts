import { Injectable } from '@angular/core';
import { Company } from 'src/app/model/company';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private realmService: RealmService,
  ) { }

  async search(keyword):Promise<Company[]>{
    let companyList: Company[]  = await this.realmService.callFunction(
      "searchCompany",
      keyword
    );
    return companyList;
  }

  async add(name){
    let newCompany: Company = await this.realmService.callFunction(
      "addCompany",
      name
    );
    return newCompany
  }
}
