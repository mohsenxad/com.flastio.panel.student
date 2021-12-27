import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'share-profile-panel',
  templateUrl: './share-profile-panel.component.html',
  styleUrls: ['./share-profile-panel.component.scss']
})
export class ShareProfilePanelComponent implements OnInit {
  
  @Input() student : Student;
  @Output() onClose = new EventEmitter();

  currentView: String = "shareLink"
  publicLinkUrl: String;


  constructor() { }

  ngOnInit(): void {
    this.publicLinkUrl = `https://v.flastio.com/${this.student._id.toString()}`
  }

  changeView(viewTitle: String):void{
    this.currentView = viewTitle;
  }

  close(){
    this.onClose.emit();
  }

}
