import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recommendation } from '../../../model/recommendation';
import { RecommendationService } from 'src/app/services/recommendation/recommendation.service';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'request-recommendation',
  templateUrl: './request-recommendation.component.html',
  styleUrls: ['./request-recommendation.component.scss']
})
export class RequestRecommendationComponent implements OnInit {

  @Output() onClose = new EventEmitter();
  @Output() onRecommendationAdded = new EventEmitter<Recommendation>();
  
  recommendation: Recommendation = {};
  isLoading:Boolean = false;

  validationResult: ValidationResult = {
    hasError:false,
    messageList:[]
  }

  constructor(
    private recommendationService: RecommendationService
  ){}

  ngOnInit(): void {
  }

  async send(){
    this.validationResult = this.validate(this.recommendation);
    if(!this.validationResult.hasError){
      this.isLoading = true;
      this.recommendation = await this.recommendationService.request(this.recommendation);
      this.onRecommendationAdded.emit(this.recommendation);
      this.isLoading = false;
      this.onClose.emit();
    }
  }

  close(){
    this.onClose.emit();
  }

  validate(recommendation: Recommendation): ValidationResult{
    let validationResult: ValidationResult ={
      hasError: false,
      messageList: []
    };

    if (!recommendation.recommenderName){
      validationResult.hasError = true;
      validationResult.messageList.push("Enter Recommender Name");
    }

    if(!recommendation.recommenderPosition){
      validationResult.hasError = true;
      validationResult.messageList.push("Enter Recommender Position");
    }


    if(!recommendation.recommenderEmail){
      validationResult.hasError = true;
      validationResult.messageList.push("Enter Recommender Email");
    }

    return validationResult;
  }

}
