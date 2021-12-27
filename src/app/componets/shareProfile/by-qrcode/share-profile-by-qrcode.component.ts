import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';

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

}
