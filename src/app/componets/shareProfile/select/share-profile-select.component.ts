import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'share-profile-select',
  templateUrl: './share-profile-select.component.html',
  styleUrls: ['./share-profile-select.component.scss']
})
export class ShareProfileSelectComponent implements OnInit {

  @Input() selectedShareType:String;
  @Output() onShareTypeSelected = new EventEmitter<String>();

  shareTypeList:String[] = [
    'Share Link',
    'QR Code',
    'Send Email',
  ];

  constructor() { }

  ngOnInit(): void {
    if(!this.selectedShareType){
      this.selectedShareType = this.shareTypeList[0];
      this.changeShareType(this.selectedShareType);
    }
  }

  changeShareType(shareType:String){
    console.log(shareType);
    
    this.onShareTypeSelected.emit(shareType);
  }

}
