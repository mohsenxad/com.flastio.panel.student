import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../../../model/student';
import * as Realm from "realm-web";
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { School } from '../../../model/school';

@Component({
  selector: 'add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {

  @Output() onSchoolSelected = new EventEmitter<School>();

  student: Student = {};
  school:School = {};
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  constructor(
    private localStorageService:LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions.addSchool(this.school.name);
    this.school._id = result.insertedId.toString();
    console.log(this.school);
  }

}
