import { Component, Input, OnInit } from '@angular/core';
import { Recommendation } from '../../model/recommendation';

@Component({
  selector: 'recommendation-panel',
  templateUrl: './recommendation-panel.component.html',
  styleUrls: ['./recommendation-panel.component.scss']
})
export class RecommendationPanelComponent implements OnInit {

  
  @Input() recommendationList: Recommendation[];
  constructor() { }

  ngOnInit(): void {
  }

}