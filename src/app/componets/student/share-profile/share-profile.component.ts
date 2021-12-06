import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'share-profile',
  templateUrl: './share-profile.component.html',
  styleUrls: ['./share-profile.component.scss']
})
export class ShareProfileComponent implements OnInit {

  @Output() onClose = new EventEmitter();

  currentView: String = "shareLink"



  constructor() { }

  ngOnInit(): void {
  }

  changeView(viewTitle: String):void{
    this.currentView = viewTitle;
  }

  close(){
    this.onClose.emit();
  }

}
