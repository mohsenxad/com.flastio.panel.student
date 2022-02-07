import { Injectable } from '@angular/core';
import { Recommendation } from 'src/app/model/recommendation';
import * as Realm from "realm-web";
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });
  studentId :String;

  constructor(
    private localStorageService: LocalStorageService
  ){
    this.studentId = this.localStorageService.getStudent()._id;
  }

  async request(recommendation: Recommendation): Promise<Recommendation>{
    const user: Realm.User = this.app.currentUser;
    let newRecommendation:Recommendation  = await user.functions.requestRecommendation(
      recommendation.recommenderName,
      recommendation.recommenderPosition,
      recommendation.recommenderEmail,
      recommendation.message
    );
    return newRecommendation;
  }
}
