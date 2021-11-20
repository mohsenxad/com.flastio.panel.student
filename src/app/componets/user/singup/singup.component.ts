import { Component, OnInit } from '@angular/core';
import * as Realm from "realm-web";

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  email: string;
  password: string;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.signup();
  }

signup():void{
    this.app.emailPasswordAuth.registerUser(this.email,this.password);
  }

}
