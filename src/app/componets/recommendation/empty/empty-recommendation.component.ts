import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'empty-recommendation',
  templateUrl: './empty-recommendation.component.html',
  styleUrls: ['./empty-recommendation.component.scss']
})
export class EmptyRecommendationComponent implements OnInit {

  @Output() onRequestRecommendationClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  requestRecommendation(){
    this.onRequestRecommendationClicked.emit();
  }

}
