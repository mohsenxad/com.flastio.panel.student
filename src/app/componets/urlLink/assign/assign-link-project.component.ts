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

  
  
  localLinkUrlList: LinkUrl[] = [];
  linkUrl:String;
  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };
  confirmDicardIsVisible: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.linkUrlList.forEach((currentLinkUrlLitItem: LinkUrl) => {
      this.localLinkUrlList.push(currentLinkUrlLitItem);
    })
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
      this.localLinkUrlList.push(newLinkUrl);
      this.linkUrl = '';
    }
  }

  save(){
    this.onLinkUrlListUpdated.emit(this.localLinkUrlList);
    this.onClose.emit();
  }

  cancel(){
    if(this.isChanged()){
      this.confirmDicardIsVisible = true;
    }else{
     this.close();
    }
  }

  close(){
    this.onClose.emit();
  }

  isChanged():Boolean{
    let result: Boolean = false;

    if(this.localLinkUrlList.length != this.linkUrlList.length){
      result = true;
    }
    //else{
    //   this.linkUrlList.forEach((cuurentOrginalLinkUrl:LinkUrl) => {
        
    //   })
    // }
    return result;
  }


  remove(linkUrl:LinkUrl){
    this.localLinkUrlList = this.localLinkUrlList.filter((currentLinkUrl: LinkUrl) => {
      if(currentLinkUrl.url != linkUrl.url){
        return currentLinkUrl;
      }
    })
    
  }

  hideConfirmDiscardModal(){
    this.confirmDicardIsVisible = false;
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
