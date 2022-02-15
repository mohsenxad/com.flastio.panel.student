import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Course } from 'src/app/model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  async addCrurse(majorId: String,name: String): Promise<Course>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let newCurse:Course  = await user.functions.addCourse(majorId.toString(), name);
    return newCurse;
  }

  async search(majorId: String,keyword: String):Promise<Course[]>{
    const app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
    const user: Realm.User = app.currentUser;
    let response: any  = await user.functions.searchCourse(majorId.toString(),keyword);
    let result:Course[] = [];
    if(
      response &&
      response.courseList &&
      response.courseList.length > 0
    ){
      result = response.courseList;
    }
    
    return result;
  }

}
