import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'upgrade-plane',
  templateUrl: './upgrade-plane.component.html',
  styleUrls: ['./upgrade-plane.component.scss']
})
export class UpgradePlaneComponent implements OnInit {

  student : Student;
  isLoading: Boolean = false;
  confirmPaymentIsVisible: Boolean = false;
  
  constructor(
    private localStorageService: LocalStorageService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getStudentInfo();
  }

  async getStudentInfo(){
    this.isLoading = true;
    this.student  = await this.studentService.getStudentInfo();
    this.localStorageService.setStudent(this.student);
    this.isLoading = false;
  }

  isAnnual:Boolean = true;

  goToPayment():void{
    let paymentLink = 'https://buy.stripe.com/cN215J8Li5NX1H26oq';
    if(this.isAnnual){
      paymentLink = 'https://buy.stripe.com/bIYg0D4v22BL71m7sv';
    }
    window.open(paymentLink);
  }

  showConfirmPaymentModal():void{
    this.confirmPaymentIsVisible = true;
  }

  hideConfrimPayemntModal():void{
    this.confirmPaymentIsVisible = false;
  }

  setPlane(isAnnual: Boolean):void{
    this.isAnnual = isAnnual;
  }

}
