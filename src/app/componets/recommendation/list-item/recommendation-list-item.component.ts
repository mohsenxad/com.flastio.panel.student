import { Component, Input, OnInit } from '@angular/core';
import { Recommendation } from '../../../model/recommendation';

@Component({
  selector: 'recommendation-list-item',
  templateUrl: './recommendation-list-item.component.html',
  styleUrls: ['./recommendation-list-item.component.scss']
})
export class RecommendationListItemComponent implements OnInit {

  @Input() recommendation: Recommendation;

  constructor() { }

  ngOnInit(): void {
  }

}
