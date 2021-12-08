import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'share-profile-by-email',
  templateUrl: './share-profile-by-email.component.html',
  styleUrls: ['./share-profile-by-email.component.scss']
})
export class ShareProfileByEmailComponent implements OnInit {

  currentEmail: String;
  emailList: String[] = [];
  constructor() { }

  ngOnInit(): void {
  }


  setEamil(email:String):void{
    this.currentEmail = email;
  }

  addEmailToList(){
    this.emailList.push(this.currentEmail);
    this.currentEmail = '';
  }

}
