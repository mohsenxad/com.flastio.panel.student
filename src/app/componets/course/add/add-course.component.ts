import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';
import { Major } from '../../model/major';
import * as Realm from "realm-web";

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  @Output() onCourseSelected = new EventEmitter<Course>();
  @Input() major:Major;

  course: Course = {};
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  constructor() { }

  ngOnInit(): void {
  }

  async onSubmit(){
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions.addCourse(this.major._id,this.course.name);
    this.course._id = result.insertedId.toString();
    this.onCourseSelected.emit(this.course);
  }
}
