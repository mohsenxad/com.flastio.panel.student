import { Component, OnInit } from '@angular/core';
import { Recommendation } from '../../model/recommendation';
import * as Realm from "realm-web";
import { Student } from '../../model/student';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'request-recommendation',
  templateUrl: './request-recommendation.component.html',
  styleUrls: ['./request-recommendation.component.scss']
})
export class RequestRecommendationComponent implements OnInit {

  recommendation: Recommendation = {};
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  student: Student;

  constructor(
    private localStorageService:LocalStorageService
  ) { 
    this.student = this.localStorageService.getStudent();
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    const user: Realm.User = this.app.currentUser;
    let result:any  = await user.functions.requestRecommendation(
      this.student._id,
      this.recommendation.recommenderName,
      this.recommendation.recommenderPosition,
      this.recommendation.recommenderEmail,
      this.recommendation.message
    );
    this.recommendation._id = result._id.toString();
  }

}
