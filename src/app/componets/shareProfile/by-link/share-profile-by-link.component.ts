import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'share-profile-by-link',
  templateUrl: './share-profile-by-link.component.html',
  styleUrls: ['./share-profile-by-link.component.scss']
})
export class ShareProfileByLinkComponent implements OnInit {
   
  @Input() publicLinkUrl: String ;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  copyToClipboard(){
    navigator.clipboard.writeText(this.publicLinkUrl.toString()).then().catch(e => console.error(e));
  }

}
