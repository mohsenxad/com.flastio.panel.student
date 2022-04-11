import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  confirmDowngradeIsVisible: Boolean = false;
  
  constructor(
    private localStorageService: LocalStorageService,
    private studentService: StudentService,
    private router: Router
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

  async goToPayment():Promise<void>{
    this.isLoading = true;
    try {
      await this.studentService.upgradePlane(this.isAnnual);
      let paymentLink = 'https://buy.stripe.com/cN215J8Li5NX1H26oq';
      if(this.isAnnual){
        paymentLink = 'https://buy.stripe.com/bIYg0D4v22BL71m7sv';
      }
      window.open(paymentLink);  
    } catch (error) {
      console.log(error);
    }
    
    this.hideConfrimPayemntModal();
    this.isLoading = false;
  }

  showConfirmPaymentModal():void{
    this.confirmPaymentIsVisible = true;
  }

  hideConfrimPayemntModal():void{
    this.confirmPaymentIsVisible = false;
  }

  showConfirmDowngradeModal():void{
    this.confirmDowngradeIsVisible = true;
  }

  hideConfirmDowngradeModal():void{
    this.confirmDowngradeIsVisible = false;
  }

  setPlane(isAnnual: Boolean):void{
    this.isAnnual = isAnnual;
  }

  async downgradePlane(){
    this.isLoading = true;
    try {
      await this.studentService.downgradePlane();
      this.router.navigateByUrl('student');    
    } catch (error) {
      console.log(error);
    }
    this.hideConfirmDowngradeModal();
    this.isLoading = false;
    
  }

}
