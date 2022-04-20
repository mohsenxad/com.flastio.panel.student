import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'student-action-panel',
  templateUrl: './student-action-panel.component.html',
  styleUrls: ['./student-action-panel.component.scss']
})
export class StudentActionPanelComponent implements OnInit {

  @Input() isPremium: Boolean;

  isAnalyticsWorkingModalVisible: Boolean = false;
  isUpgradeRequireModalVisible: Boolean = false;

  constructor(
    private router: Router,
    private studentService: StudentService,
    private localStorageService: LocalStorageService

  ) { }

  ngOnInit(): void {
  }

  async logout(){
    await this.studentService.logout();
    this.localStorageService.logout();
    this.router.navigateByUrl('auth/login');
  }

  showAnalytics(){
    console.log("here")
    if(this.isPremium){
      this.showAnalyticsWorkingModal()
    }else{
      this.showUpgradeRequireModal();
    }
  }

  showAnalyticsWorkingModal(){
    this.isAnalyticsWorkingModalVisible = true;
  }

  hideAnalyticsWorkingModal(){
    this.isAnalyticsWorkingModalVisible = false;
  }

  showUpgradeRequireModal(){
    this.isUpgradeRequireModalVisible = true;
  }

  hideUpgradeRequireModal(){
    this.isUpgradeRequireModalVisible = false;
  }

  close(){
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          detail.removeAttribute("open");
        });
      });
    });
  }

}
