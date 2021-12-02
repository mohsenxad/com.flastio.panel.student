import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Student } from 'src/app/model/student';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  REALM_USER_KEY: string = "REALM_USER";
  STUDENT_KEY: string = "STUDENT";

  constructor() { }

  setUser(user: Realm.User):void{
    localStorage.setItem(this.REALM_USER_KEY, JSON.stringify(user));
  }

  getUser():Realm.User{
    let result:Realm.User = JSON.parse(localStorage.getItem(this.REALM_USER_KEY));
    return result;
  }

  setStudent(student: Student):void{
    localStorage.setItem(this.STUDENT_KEY, JSON.stringify(student));
  }

  getStudent():Student{
    let result:Student = JSON.parse(localStorage.getItem(this.STUDENT_KEY));
    return result;
  }

}
