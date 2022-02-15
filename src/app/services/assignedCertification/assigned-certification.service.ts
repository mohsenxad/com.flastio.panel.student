import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { AssignedCertification } from 'src/app/model/assignedCertification';

@Injectable({
  providedIn: 'root'
})
export class AssignedCertificationService {
 
  constructor() { }

  async getAll():Promise<AssignedCertification[]>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let result:AssignedCertification[]  = await user.functions.getAllAssignedCertification();
    return result;
  }

}
