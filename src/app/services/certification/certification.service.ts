import { Injectable } from '@angular/core';
import { Certification } from 'src/app/model/certification';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  
  constructor(
    private realmService: RealmService,
  ){}

  

  async search(certificationKeyWord: String):Promise<Certification[]>{
    let certificationList: Certification[]  = await this.realmService.callFunction(
      "searchCertification",
      certificationKeyWord
    );
    return certificationList;
  }

  async addCertification(name: String):Promise<Certification>{
    let newCertification:Certification  = await this.realmService.callFunction(
      "addCertification",
      name
    );
    return newCertification;
  }
}
