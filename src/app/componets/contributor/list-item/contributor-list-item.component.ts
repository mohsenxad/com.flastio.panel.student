import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contributor } from '../../../model/contributor';

@Component({
  selector: 'contributor-list-item',
  templateUrl: './contributor-list-item.component.html',
  styleUrls: ['./contributor-list-item.component.scss']
})
export class ContributorListItemComponent implements OnInit {

  @Input() contributor:Contributor;
  @Input() isRemovable:Boolean;
  @Output() onDeleted = new EventEmitter<Contributor>();

  

  constructor() { }

  ngOnInit(): void {}

  remove(){
    this.onDeleted.emit(this.contributor);
  }

}
