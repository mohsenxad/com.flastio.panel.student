import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinkUrl } from '../../../model/linkUrl';

@Component({
  selector: 'link-url-list-item',
  templateUrl: './link-url-list-item.component.html',
  styleUrls: ['./link-url-list-item.component.scss']
})
export class LinkUrlListItemComponent implements OnInit {

  @Input() linkUrl: LinkUrl;

  @Output() onDeleted = new EventEmitter<LinkUrl>();
  @Output() onViewed = new EventEmitter<LinkUrl>();

  isRemovable:Boolean = false;
  isViewable:Boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(this.onDeleted.observers.length > 0){
      this.isRemovable = true;
    }
    if(this.onViewed.observers.length > 0){
      this.isViewable = true;
    }
  }
  view(){
    this.onViewed.emit(this.linkUrl);
  }

  delete(){
    this.onDeleted.emit(this.linkUrl);
  }

}
