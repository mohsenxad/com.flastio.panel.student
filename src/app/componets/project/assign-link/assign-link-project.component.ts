import { Component, OnInit } from '@angular/core';
import { LinkUrl } from '../../model/linkUrl';

@Component({
  selector: 'assign-link-project',
  templateUrl: './assign-link-project.component.html',
  styleUrls: ['./assign-link-project.component.scss']
})
export class AssignLinkProjectComponent implements OnInit {

  linkUrl:String;
  linkUrlList: LinkUrl[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getLinkInfo(url: String){
    let newLinkUrl : LinkUrl = {
      title:'New Link From Url',
      host: 'Youtube',
      url: this.linkUrl
    };
    return newLinkUrl;
  }

  processLink(){
    let newLinkUrl = this.getLinkInfo(this.linkUrl);
    this.linkUrlList.push(newLinkUrl);
  }


}
