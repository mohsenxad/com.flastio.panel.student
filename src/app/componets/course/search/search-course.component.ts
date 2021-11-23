import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';
import { Major } from '../../model/major';
import * as Realm from "realm-web";

@Component({
  selector: 'search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {
  @Input() major:Major;
  @Output() onCourseSelected = new EventEmitter<Course>();

  courseKeyWord: String;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  courseList: Course[];

  constructor(){}

  ngOnInit(): void {
  }

  async addCrurse(){
    const user: Realm.User = this.app.currentUser;
    let newCurse:Course  = await user.functions.addCourse(this.major._id,this.courseKeyWord);
    this.onCourseSelected.emit(newCurse);
  }

  onKeyup(event) {
    console.log(event);
    if(this.courseKeyWord.length >=3){
      this.search(this.courseKeyWord);
    }else{
      this.courseList =[];
    }
  }

  async search(keyword):Promise<void>{
    console.log(`Searching for ${keyword}`);
    const user: Realm.User = this.app.currentUser;
    let result: any  = await user.functions.searchCourse(this.major._id,keyword);
    if(
      result &&
      result.courseList &&
      result.courseList.length >0
    ){
      this.courseList = result.courseList;
    }else{
      this.courseList = [];
    }
  }

  selected(course:Course){
    this.onCourseSelected.emit(course);
  }

}
