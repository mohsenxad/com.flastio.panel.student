import { Injectable } from '@angular/core';
import { Bugfender } from '@bugfender/sdk';
import * as Realm from "realm-web";

@Injectable({
  providedIn: 'root'
})
export class RealmService {

  constructor() { }

  async callFunction(
    functionName:string,
    ...args: any[]
  ): Promise<any>{

    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    try {
      let result:any  = await user.functions.callFunction(
        functionName,
        ...args
      );
  
      Bugfender.info(functionName);

      return result;
    } catch (error) {
      Bugfender.fatal(functionName, error)
    }

    

    
  }


  logout():void{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    user.logOut();
  }
}
