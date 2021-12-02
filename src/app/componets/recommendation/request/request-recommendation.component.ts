import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recommendation } from '../../../model/recommendation';
import { RecommendationService } from 'src/app/services/recommendation/recommendation.service';

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

  constructor(
    private recommendationService: RecommendationService
  ){}

  ngOnInit(): void {
  }

  async send(){
    this.isLoading = true;
    this.recommendation = await this.recommendationService.request(this.recommendation);
    this.onRecommendationAdded.emit(this.recommendation);
    this.isLoading = false;
    this.onClose.emit();
  }

  close(){
    this.onClose.emit();
  }

}
