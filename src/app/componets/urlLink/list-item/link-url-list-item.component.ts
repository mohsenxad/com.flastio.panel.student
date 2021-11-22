import { Component, Input, OnInit } from '@angular/core';
import { LinkUrl } from '../../model/linkUrl';

@Component({
  selector: 'link-url-list-item',
  templateUrl: './link-url-list-item.component.html',
  styleUrls: ['./link-url-list-item.component.scss']
})
export class LinkUrlListItemComponent implements OnInit {

  @Input() linkUrl: LinkUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
