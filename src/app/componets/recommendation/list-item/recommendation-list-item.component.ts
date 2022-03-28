import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Recommendation } from '../../../model/recommendation';

@Component({
  selector: 'recommendation-list-item',
  templateUrl: './recommendation-list-item.component.html',
  styleUrls: ['./recommendation-list-item.component.scss']
})
export class RecommendationListItemComponent implements OnInit {

  @Input() recommendation: Recommendation;
  @Output() onApprove = new EventEmitter<Recommendation>();
  @Output() onDelete = new EventEmitter<Recommendation>();
  @Output() onChangeIndex = new EventEmitter<Number>();

  sanetizedHtmlRecommendationMessage:SafeHtml;

  constructor(
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    if(this.recommendation.htmlRecommendationMessage){
      this.sanetizedHtmlRecommendationMessage = this.sanitizer.bypassSecurityTrustHtml(this.recommendation.htmlRecommendationMessage.toString());
    }
  }

  approve(){
    this.onApprove.emit(this.recommendation);
  }

  delete(){
    this.onDelete.emit(this.recommendation);
  }

  changeIndex(index:Number){
    console.log('4');
    console.log('change  project index to ' + index.toString());
  }



}
