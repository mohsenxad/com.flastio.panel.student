import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/services/user/user.service';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {
  

  token: string;
  tokenId:string;
  isLoading:Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };

  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      if(params['token']){
        this.token = params['token'];
      }
      if(params['tokenId']){
        this.tokenId = params['tokenId'];
      }
    })
    if(this.tokenId && this.token){
      this.confirmUser();
    }
  }

  async confirmUser(){
    this.isLoading = true;
    try {
      await this.userService.confirmUser(this.token,this.tokenId);
      this.isLoading = false;
    } catch (error) {
      console.log(error);
      this.isLoading = false;
      this.validationResult = {
        hasError : true,
        messageList: [error.error]
      };
    }
    
  }

}
