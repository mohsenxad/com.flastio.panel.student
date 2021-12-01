import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Realm from "realm-web";
import { LocalStorageService } from "src/app/services/localStorage/local-storage.service"
import { Student } from '../../model/student';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  email: string;
  password: string;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.isLogedIn()
  }

  isLogedIn(){
    let student: Student = this.localStorageService.getStudent();
    if(student){
      this.router.navigateByUrl('/student/panel');
    }
  }

  storeUser(user: Realm.User){
    this.localStorageService.setUser(user);
  }

  async onSubmit():Promise<void> {
    let credentials = Realm.Credentials.emailPassword(this.email, this.password);
    const user: Realm.User = await this.app.logIn(credentials);
    console.log(user);
    let student: Student = this.localStorageService.getStudent();
    if(student){
      this.router.navigateByUrl('/student/panel');
    }else{
      this.router.navigateByUrl('/student/signup');
    }
  }

}
