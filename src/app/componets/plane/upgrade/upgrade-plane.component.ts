import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upgrade-plane',
  templateUrl: './upgrade-plane.component.html',
  styleUrls: ['./upgrade-plane.component.scss']
})
export class UpgradePlaneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isAnnual:Boolean = true;

  goToPayment():void{
    console.log(this.isAnnual);
    
    let paymentLink = 'https://buy.stripe.com/cN215J8Li5NX1H26oq';
    if(this.isAnnual){
      paymentLink = 'https://buy.stripe.com/bIYg0D4v22BL71m7sv';
    }
    window.open(paymentLink);
  }

  setPlane(isAnnual: Boolean):void{
    this.isAnnual = isAnnual;
  }

}
