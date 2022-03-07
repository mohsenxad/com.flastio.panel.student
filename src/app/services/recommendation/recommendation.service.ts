import { Injectable } from '@angular/core';
import { Recommendation } from 'src/app/model/recommendation';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {


  constructor(
    private realmService: RealmService,
  ){}

  async request(recommendation: Recommendation): Promise<Recommendation>{
    const newRecommendation:Recommendation  = await this.realmService.callFunction(
      "requestRecommendation",
      recommendation.recommenderName,
      recommendation.recommenderPosition,
      recommendation.recommenderEmail,
      recommendation.message
    );
    return newRecommendation;
  }
}
