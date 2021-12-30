import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student/student.service';

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


  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.publicLinkUrl = this.studentService.getSharableLink(this.student._id);
  }

  changeView(viewTitle: String):void{
    this.currentView = viewTitle;
  }

  close(){
    this.onClose.emit();
  }

}
