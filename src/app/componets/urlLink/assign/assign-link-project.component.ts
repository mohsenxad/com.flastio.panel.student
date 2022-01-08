import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';
import { LinkUrl } from '../../../model/linkUrl';

@Component({
  selector: 'assign-link-project',
  templateUrl: './assign-link-project.component.html',
  styleUrls: ['./assign-link-project.component.scss']
})
export class AssignLinkProjectComponent implements OnInit {

  
  @Input() linkUrlList: LinkUrl[] = [];
  @Output() onLinkUrlListUpdated = new EventEmitter<LinkUrl[]>();
  @Output() onClose = new EventEmitter();

  linkUrl:String;
  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };

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

  validate(url: String): ValidationResult{
    let result: ValidationResult = {
      hasError:false,
      messageList: []
    };

    try {
      let orginalUrlLink: URL = new URL(url.toString())  
    } catch (error) {
      result.hasError = true;
      result.messageList.push("Enter a Valid Url");
    }
    return result;
  }

  processLink(){
    this.validationResult = this.validate(this.linkUrl);
    if(!this.validationResult.hasError){
      let newLinkUrl = this.getLinkInfo(this.linkUrl);
      this.linkUrlList.push(newLinkUrl);
      this.linkUrl = '';
    }
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

  onKeyup(event: any) {
    if(event.code =='Enter'){
      this.processLink();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  viewLinkUrl(linkUrl:LinkUrl):void{
    console.log('viwing ...');
    window.open(linkUrl.url.toString());
    
  }


}
