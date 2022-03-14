import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation/recommendation.service';
import { Recommendation } from '../../../model/recommendation';

@Component({
  selector: 'recommendation-panel',
  templateUrl: './recommendation-panel.component.html',
  styleUrls: ['./recommendation-panel.component.scss']
})
export class RecommendationPanelComponent implements OnInit,OnChanges {

  
  @Input() recommendationList: Recommendation[];
  @Output() onUpdated = new EventEmitter();
  
  isRequestRecommendatinModalVisible: Boolean = false;
  filteredRecommendationList: Recommendation[];
  isLoading:Boolean = false;
  confirmDicardIsVisible: Boolean = false;
  selectedToRemoveRecommendation: Recommendation;

  constructor(
    private recommendationService: RecommendationService
  ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.filterRecommandationList();
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.filterRecommandationList();
    this.isLoading = false;
  }

  filterRecommandationList(){
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
    this.isLoading = true;
    await this.recommendationService.approve(recommendation);
    this.onUpdated.emit();
  }

  async delete(recommendation:Recommendation):Promise<void>{
    this.selectedToRemoveRecommendation = recommendation;
    this.confirmDicardIsVisible = true;
  }

  async confiremdDelete():Promise<void>{
    this.isLoading = true;
    await this.recommendationService.delete(this.selectedToRemoveRecommendation);
    this.hideConfirmDiscardModal();
    this.onUpdated.emit();
  }

  changeIndex(recommendation:Recommendation):void{
    this.isLoading = true;
    console.log('changeIndex');
  }
  
  hideConfirmDiscardModal(){
    this.selectedToRemoveRecommendation = undefined;
    this.confirmDicardIsVisible = false;
  }



}
