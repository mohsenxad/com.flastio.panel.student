import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../../model/course';
import { Major } from '../../../model/major';
import { CourseService } from 'src/app/services/course/course.service';

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
  courseList: Course[];
  isLoading:Boolean = false;

  constructor(
    private courseService: CourseService
  ){}

  ngOnInit(): void {
  }

  async addCrurse(){
    this.isLoading = true;
    let newCurse:Course  = await this.courseService.addCrurse(this.major._id, this.courseKeyWord);
    this.selectedCourse = newCurse;
    this.onCourseSelected.emit(newCurse);
    this.isLoading = false;
  }

  onKeyup(event) {
    if(
      this.courseKeyWord &&
      this.courseKeyWord.length >=3
    ){
      this.search(this.courseKeyWord);
    }else{
      this.courseList =[];
    }
  }

  async search(keyword):Promise<void>{
    this.isLoading = true;
    this.courseList = await this.courseService.search(this.major._id, keyword);
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
