import { Component, OnInit } from '@angular/core';
import * as Realm from "realm-web";
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../model/student';

@Component({
  selector: 'student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})
export class StudentPanelComponent implements OnInit {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  student : Student;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getStudentInfo();
  }

  async getStudentInfo(){
    const user: Realm.User = this.app.currentUser;
    let result:any[]= await user.functions.getStudent();
    this.student  = result[0];
    console.log(this.student);
    this.localStorageService.setStudent(this.student);
  }

}
