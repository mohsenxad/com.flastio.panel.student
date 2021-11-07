import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Realm from "realm-web";

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {
  app: Realm.App = new Realm.App({ id: "flastioservices-lfztf" });

  token: string;
  tokenId:string;
  constructor(
    private route: ActivatedRoute
  ) { }


  async confirmUser(token:string, tokenId:string){
    this.app.emailPasswordAuth.confirmUser(token, tokenId);
    //let user: any = await this.app.emailPasswordAuth.confirmUser(token, tokenId);
    //console.log(user);
    
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      console.log(params);
      
      if(params['token']){
        this.token = params['token'];
      }
      if(params['tokenId']){
        this.tokenId = params['tokenId'];
      }
    })
    if(this.tokenId && this.token){
      this.confirmUser(this.token,this.tokenId);
    }
  }

}
