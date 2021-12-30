import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'share-profile-by-link',
  templateUrl: './share-profile-by-link.component.html',
  styleUrls: ['./share-profile-by-link.component.scss']
})
export class ShareProfileByLinkComponent implements OnInit {
   
  @Input() publicLinkUrl: String ;

  isCopyed: Boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  copyToClipboard(){
    navigator.clipboard.writeText(this.publicLinkUrl.toString()).then().catch(e => console.error(e));
    this.isCopyed = true;
  }

}
