import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recommendation } from '../../../model/recommendation';

@Component({
  selector: 'recommendation-list-item',
  templateUrl: './recommendation-list-item.component.html',
  styleUrls: ['./recommendation-list-item.component.scss']
})
export class RecommendationListItemComponent implements OnInit {

  @Input() recommendation: Recommendation;
  @Output() onApprove = new EventEmitter<Recommendation>();
  @Output() onReject = new EventEmitter<Recommendation>();
  @Output() onDelete = new EventEmitter<Recommendation>();
  @Output() onChangeIndex = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  approve(){
    console.log('1');
    
    this.onApprove.emit(this.recommendation);
  }

  reject(){
    console.log('2');
    this.onReject.emit(this.recommendation);
  }

  delete(){
    console.log('3');
    this.onDelete.emit(this.recommendation);
  }

  changeIndex(index:Number){
    console.log('4');
    console.log('change  project index to ' + index.toString());
  }

}
