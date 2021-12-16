import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinkUrl } from '../../../model/linkUrl';

@Component({
  selector: 'link-url-list',
  templateUrl: './link-url-list.component.html',
  styleUrls: ['./link-url-list.component.scss']
})
export class LinkUrlListComponent implements OnInit {
  @Input() linkUrlList: LinkUrl[];

  @Output() onDeleted = new EventEmitter<LinkUrl>();
  @Output() onViewed = new EventEmitter<LinkUrl>();
  
  constructor() { }

  ngOnInit(): void {
  }

  view(linkUrl:LinkUrl):void{
    this.onViewed.emit(linkUrl);
  }

  delete(linkUrl: LinkUrl): void{
    this.onDeleted.emit(linkUrl);
  }

}
