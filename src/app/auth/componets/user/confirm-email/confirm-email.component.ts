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
	isTokenExpired:Boolean = false;
	resendEmailAddress: string = undefined;
	validationResult: ValidationResult = {
		hasError : false,
		messageList: []
	};
	isConfrimEmailResend: boolean = false;

  
	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
	){}


	ngOnInit(): void
		{
			this.route.queryParams.subscribe(params=>
				{
					if(params['token'])
						{
							this.token = params['token'];
						}
					if(params['tokenId'])
						{
							this.tokenId = params['tokenId'];
						}
				}
			)
			if(this.tokenId && this.token)
				{
					this.confirmUser();
				}
		}

	async resendConfirmationEmail()
		{
			if(!this.resendEmailAddress) return;
			this.isLoading = true;
			try 
				{					
					await this.userService.resendConfirmationEmail(this.resendEmailAddress);
					this.isLoading = false;
					this.isConfrimEmailResend = true;
				}
			catch (error) 
				{
					console.log(error);
					this.isLoading = false;
					this.validationResult = {
						hasError : true,
						messageList: [error.error]
					}
				}
		}

	setEmail(email:string):void
		{
			this.resendEmailAddress = email;
		}

	async confirmUser(){
	this.isLoading = true;
	console.log('we are here');

	try
		{
			await this.userService.confirmUser(this.token,this.tokenId);
			this.isLoading = false;
		}
	catch (error)
		{
			if(error.error == "userpass token is expired or invalid"){
				this.isTokenExpired = true;
				try 
					{					
						//await this.userService.resendConfirmationEmail("xad@flekswork.com")		
						this.isLoading = false;
					}
				catch (error) 
					{
						console.log(error);
						this.isLoading = false;
						this.validationResult = {
							hasError : true,
							messageList: [error.error]
						}
					}
			}else{
				console.log(error);
				this.isLoading = false;
				this.validationResult = {
					hasError : true,
					messageList: [error.error]
				}
			
			};
		}

	}

}
