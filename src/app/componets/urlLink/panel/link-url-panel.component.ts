import { Component, Input, OnInit } from '@angular/core';
import { LinkUrl } from '../../model/linkUrl';

@Component({
  selector: 'link-url-panel',
  templateUrl: './link-url-panel.component.html',
  styleUrls: ['./link-url-panel.component.scss']
})
export class LinkUrlPanelComponent implements OnInit {
  @Input() linkUrlList: LinkUrl[];
  constructor() { }

  ngOnInit(): void {
  }

}
