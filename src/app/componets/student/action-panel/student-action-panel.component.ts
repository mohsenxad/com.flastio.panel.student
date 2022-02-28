import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'student-action-panel',
  templateUrl: './student-action-panel.component.html',
  styleUrls: ['./student-action-panel.component.scss']
})
export class StudentActionPanelComponent implements OnInit {

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
