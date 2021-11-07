import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../model/student';

@Component({
  selector: 'select-certification',
  templateUrl: './select-certification.component.html',
  styleUrls: ['./select-certification.component.scss']
})
export class SelectCertificationComponent implements OnInit {

  student: Student = {};
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
    let result: any  = await user.functions.addStudent(this.student.firstName, this.student.lastName)
    this.student._id = result.insertedId.toString();
    this.localStorageService.setStudent(this.student);
  }
}
