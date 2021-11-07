import { Component, OnInit } from '@angular/core';
import * as Realm from "realm-web";
import { LocalStorageService } from "src/app/services/localStorage/local-storage.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  email: string = 'mohsenxad@gmail.com';
  password: string = '1245780';

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  storeUser(user: Realm.User){
    this.localStorageService.setUser(user);
  }

  navigateTo

  async onSubmit():Promise<void> {
    let credentials = Realm.Credentials.emailPassword(this.email, this.password);
    const user: Realm.User = await this.app.logIn(credentials);
    console.log(user);
    this.storeUser(user);
  }

}
