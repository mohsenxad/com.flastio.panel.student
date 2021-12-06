import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'share-profile-panel',
  templateUrl: './share-profile-panel.component.html',
  styleUrls: ['./share-profile-panel.component.scss']
})
export class ShareProfilePanelComponent implements OnInit {

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
