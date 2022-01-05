import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'share-profile-by-qrcode',
  templateUrl: './share-profile-by-qrcode.component.html',
  styleUrls: ['./share-profile-by-qrcode.component.scss']
})
export class ShareProfileByQRCodeComponent implements OnInit {
  @Input()  publicLinkUrl: String;
  constructor() { }

  ngOnInit(): void {

  }

  downloadQrCode(){
    let qrElemetn: HTMLCollection = document.getElementsByTagName("ngx-qrcode");
    if(qrElemetn){
      let imageElement: any = qrElemetn[0].firstElementChild.firstElementChild;
      var pom = document.createElement('a');
      pom.setAttribute('href', imageElement.src);
      pom.setAttribute('download', "qr.png");
      pom.style.display = 'none';
      document.body.appendChild(pom);
      pom.click();
      document.body.removeChild(pom);
    }

  }

}
