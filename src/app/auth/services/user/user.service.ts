import { Injectable } from '@angular/core';
import { Bugfender } from '@bugfender/sdk';
import * as Realm from "realm-web";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async login(email: String, password:String):Promise<void> {
    let credentials = Realm.Credentials.emailPassword(email.toString(), password.toString());
    let app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = await app.logIn(credentials);
    Bugfender.setDeviceKey('user_email', email.toString());
    Bugfender.info('User Loged In');
  }

  async signup(email: String, password:String):Promise<void>{
    let app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    let user: any = await app.emailPasswordAuth.registerUser(email.toString(),password.toString());
    Bugfender.info('User Signup');
  }

  async confirmUser(token:string, tokenId:string):Promise<void>{
    let app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    let user: any = await app.emailPasswordAuth.confirmUser(token, tokenId);
    Bugfender.info('User Confirmed');
  }
}
