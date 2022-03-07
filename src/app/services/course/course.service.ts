import { Injectable } from '@angular/core';
import { Course } from 'src/app/model/course';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private realmService: RealmService,
  ) { }

  async addCrurse(majorId: String,name: String): Promise<Course>{
    const newCurse:Course  = await this.realmService.callFunction(
      "addCourse",
      majorId.toString(),
      name
    );
    return newCurse;
  }

  async search(majorId: String,keyword: String):Promise<Course[]>{
    const response: any  = await this.realmService.callFunction(
      "searchCourse",
      majorId.toString(),
      keyword
    );
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
