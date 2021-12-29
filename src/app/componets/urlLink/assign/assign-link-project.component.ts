import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Url } from 'url';
import { LinkUrl } from '../../../model/linkUrl';

@Component({
  selector: 'assign-link-project',
  templateUrl: './assign-link-project.component.html',
  styleUrls: ['./assign-link-project.component.scss']
})
export class AssignLinkProjectComponent implements OnInit {

  linkUrl:String;
  @Input() linkUrlList: LinkUrl[] = [];
  @Output() onLinkUrlListUpdated = new EventEmitter<LinkUrl[]>();
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getLinkInfo(url: String){
    let orginalUrlLink: URL = new URL(url.toString())
    console.log(orginalUrlLink);
    
    let newLinkUrl : LinkUrl = {
      title:'New Link From Url',
      host: orginalUrlLink.host,
      url: this.linkUrl
    };
    return newLinkUrl;
  }

  processLink(){
    let newLinkUrl = this.getLinkInfo(this.linkUrl);
    this.linkUrlList.push(newLinkUrl);
    this.linkUrl = '';
  }

  save(){
    this.onLinkUrlListUpdated.emit(this.linkUrlList);
    this.onClose.emit();
  }

  close(){
    this.onClose.emit();
  }

  cancel(){
    this.onLinkUrlListUpdated.emit([]);
    this.onClose.emit();
  }

  remove(linkUrl:LinkUrl){
    this.linkUrlList = this.linkUrlList.filter((currentLinkUrl: LinkUrl) => {
      if(currentLinkUrl.url != linkUrl.url){
        return currentLinkUrl;
      }
    })
    
  }


}
