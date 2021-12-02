import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { Course } from 'src/app/model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  constructor() { }

  async addCrurse(majorId: String,name: String): Promise<Course>{
    const user: Realm.User = this.app.currentUser;
    let newCurse:Course  = await user.functions.addCourse(majorId.toString(), name);
    return newCurse;
  }

  async search(majorId: String,keyword: String):Promise<Course[]>{
    const user: Realm.User = this.app.currentUser;
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
