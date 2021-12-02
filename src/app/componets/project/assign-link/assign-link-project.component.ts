import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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


}
