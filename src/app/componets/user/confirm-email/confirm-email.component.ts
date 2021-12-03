import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {
  

  token: string;
  tokenId:string;
  isLoading:Boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }


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
      this.isLoading = true;
      this.userService.confirmUser(this.token,this.tokenId);
      this.isLoading = false;
      this.router.navigateByUrl('/login');
    }
  }

}
