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
  @Input() selectedCourse:Course;
  @Output() onCourseSelected = new EventEmitter<Course>();

  courseKeyWord: String;
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  courseList: Course[];
  isLoading:Boolean = false;

  constructor(){}

  ngOnInit(): void {
  }

  async addCrurse(){
    this.isLoading = true;
    const user: Realm.User = this.app.currentUser;
    let newCurse:Course  = await user.functions.addCourse(this.major._id,this.courseKeyWord);
    this.selectedCourse = newCurse;
    this.onCourseSelected.emit(newCurse);
    this.isLoading = false;
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
    this.isLoading = true;
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
    this.isLoading = false;
  }

  selected(course:Course){
    this.selectedCourse = course;
    this.onCourseSelected.emit(course);
  }

  remove(){
    this.selectedCourse = undefined;
    this.onCourseSelected.emit(undefined);
  }

}
