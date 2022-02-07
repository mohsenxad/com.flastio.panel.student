import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { AssignedCertification } from 'src/app/model/assignedCertification';

@Injectable({
  providedIn: 'root'
})
export class AssignedCertificationService {
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  constructor() { }

  async getAll():Promise<AssignedCertification[]>{
    const user: Realm.User = this.app.currentUser;
    let result:AssignedCertification[]  = await user.functions.getAllAssignedCertification();
    return result;
  }

}
