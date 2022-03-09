import { Component, Input, OnInit } from '@angular/core';
import { Recommendation } from '../../../model/recommendation';

@Component({
  selector: 'recommendation-panel',
  templateUrl: './recommendation-panel.component.html',
  styleUrls: ['./recommendation-panel.component.scss']
})
export class RecommendationPanelComponent implements OnInit {

  isRequestRecommendatinModalVisible: Boolean = false;
  
  @Input() recommendationList: Recommendation[];
  constructor() { }

  ngOnInit(): void {
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

  approve(recommendation:Recommendation):void{
    console.log('approve');
    
  }

  reject(recommendation:Recommendation):void{
    console.log('reject');
  }

  delete(recommendation:Recommendation):void{
    console.log('delete');
  }

  changeIndex(recommendation:Recommendation):void{
    console.log('changeIndex');
  }
  

}
