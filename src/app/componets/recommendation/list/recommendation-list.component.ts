import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recommendation } from '../../../model/recommendation';

@Component({
  selector: 'recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {

  @Input() recommendationList: Recommendation[];
  @Output() onApprove = new EventEmitter<Recommendation>();
  @Output() onDelete = new EventEmitter<Recommendation>();
  @Output() onChangeIndex = new EventEmitter<Number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  approve(recommendation: Recommendation): void{
    this.onApprove.emit(recommendation);
  }

  delete(recommendation: Recommendation): void{
    this.onDelete.emit(recommendation);
  }

  changeIndex(index:Number):void{
    console.log('change  project index to ' + index.toString());
  }

}
