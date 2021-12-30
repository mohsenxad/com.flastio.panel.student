import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from '../../../model/student';

@Component({
  selector: 'student-banner',
  templateUrl: './student-banner.component.html',
  styleUrls: ['./student-banner.component.scss']
})
export class StudentBannerComponent implements OnInit {
  @Input() student : Student;
  @Output() onAddProjectClicked = new EventEmitter();

  isShareProfileModalVisible: Boolean = false;
  
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  addProject(){
    console.log(' show add project in banner');
    
    this.onAddProjectClicked.emit();
  }

  showShareProfileModal(){
    this.isShareProfileModalVisible = true;
  }

  hideShareProfileModal(){
    this.isShareProfileModalVisible = false;
  }

  openPublicView(){
    let publicLinkUrl: String  = this.studentService.getSharableLink(this.student._id);
    window.open(publicLinkUrl.toString());
  }


}
