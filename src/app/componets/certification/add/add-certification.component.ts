import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Certification } from '../../model/certification';
import { Student } from '../../model/student';
import * as Realm from "realm-web";

@Component({
  selector: 'add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.scss']
})
export class AddCertificationComponent implements OnInit {

  @Output() onCertificationSelected = new EventEmitter<Certification>();

  certification :Certification = {};
  student: Student = {};
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  isLoading:Boolean = false;

  constructor(
    private localStorageService:LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }

  ngOnInit(): void {
  }

  async save(){
    this.isLoading = true;
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions.addCertification(this.certification.name);
    this.certification._id = result.insertedId.toString();
    this.isLoading = false;
  }
}
