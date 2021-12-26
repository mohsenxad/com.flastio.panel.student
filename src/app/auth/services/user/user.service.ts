import { Injectable } from '@angular/core';
import * as Realm from "realm-web";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  constructor() { }

  async login(email: String, password:String):Promise<void> {
    let credentials = Realm.Credentials.emailPassword(email.toString(), password.toString());
    const user: Realm.User = await this.app.logIn(credentials);
  }

  async signup(email: String, password:String):Promise<void>{
    let user: any = await this.app.emailPasswordAuth.registerUser(email.toString(),password.toString());
  }

  async confirmUser(token:string, tokenId:string):Promise<void>{
    let user: any = await this.app.emailPasswordAuth.confirmUser(token, tokenId);
  }
}
