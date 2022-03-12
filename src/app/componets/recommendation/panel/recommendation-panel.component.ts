import { Component, Input, OnInit } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation/recommendation.service';
import { Recommendation } from '../../../model/recommendation';

@Component({
  selector: 'recommendation-panel',
  templateUrl: './recommendation-panel.component.html',
  styleUrls: ['./recommendation-panel.component.scss']
})
export class RecommendationPanelComponent implements OnInit {

  isRequestRecommendatinModalVisible: Boolean = false;
  
  @Input() recommendationList: Recommendation[];

  filteredRecommendationList: Recommendation[];

  constructor(
    private recommendationService: RecommendationService
  ) { }

  ngOnInit(): void {
    this.filteredRecommendationList = this.recommendationList.filter((currentRecommendation:Recommendation) => {
      if(currentRecommendation.status!= "new"){
        return currentRecommendation;
      }
    })
  }

  showRequestRecommendationModal(){
    this.isRequestRecommendatinModalVisible = true;
  }

  hideRequestRecommendationModal(){
    this.isRequestRecommendatinModalVisible = false;
  }

  addNewRecommendation(recommendation:Recommendation){
    if(!this.recommendationList){
      this.recommendationList = [];
    }
    this.recommendationList.push(recommendation);
  }

  async approve(recommendation:Recommendation):Promise<void>{
    await this.recommendationService.approve(recommendation);
  }

  async delete(recommendation:Recommendation):Promise<void>{
    await this.recommendationService.delete(recommendation);
  }

  changeIndex(recommendation:Recommendation):void{
    console.log('changeIndex');
  }
  

}
