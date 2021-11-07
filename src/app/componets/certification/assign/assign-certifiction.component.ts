import { Component, OnInit } from '@angular/core';
import { Certification } from '../../model/certification';
import * as Realm from "realm-web";
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { Student } from '../../model/student';
import { AssignedCertification } from '../../model/assignedCertification';

@Component({
  selector: 'assign-certifiction',
  templateUrl: './assign-certifiction.component.html',
  styleUrls: ['./assign-certifiction.component.scss']
})
export class AssignCertifictionComponent implements OnInit {

  student: Student = {};
  assignedCertification: AssignedCertification = {};

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });


  constructor(
    private localStorageService:LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }

  ngOnInit(): void {
  }

  onCertificationSet(certification: Certification):void{
    console.log(certification);
    this.assignedCertification.certification = certification;
  }

  async onSubmit(){
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions.assignCertification(this.student._id, this.assignedCertification.certification, this.assignedCertification.issuedDateYear, this.assignedCertification.issuedDateMonth);
    this.assignedCertification = result;
    console.log(this.assignedCertification);
  }

}
