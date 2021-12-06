import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contributor } from '../../../model/contributor';

@Component({
  selector: 'contributor-list-item',
  templateUrl: './contributor-list-item.component.html',
  styleUrls: ['./contributor-list-item.component.scss']
})
export class ContributorListItemComponent implements OnInit {

  @Input() contributor:Contributor;
  @Output() onDeleted = new EventEmitter<Contributor>();

  isRemovable:Boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.onDeleted.observers.length > 0){
      this.isRemovable = true;
    }
  }

  remove(){
    this.onDeleted.emit(this.contributor);
  }

}
