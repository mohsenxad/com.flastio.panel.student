import { Component, Input, OnInit } from '@angular/core';
import { LinkUrl } from '../../model/linkUrl';

@Component({
  selector: 'link-url-list',
  templateUrl: './link-url-list.component.html',
  styleUrls: ['./link-url-list.component.scss']
})
export class LinkUrlListComponent implements OnInit {
  @Input() linkUrlList: LinkUrl[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
