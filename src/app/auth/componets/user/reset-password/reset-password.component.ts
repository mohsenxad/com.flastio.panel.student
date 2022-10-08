import { Component, OnInit } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

	email: string;
	password: string;
	isLoading : Boolean = false;
	validationResult: ValidationResult = {
		hasError : false,
		messageList: []
	};

	constructor() { }

	ngOnInit(): void {
	}

	setEmail(email:string):void{
		this.email = email;
	}

	setPassword(password:string):void{
		this.password = password;
	}

	resetPassword(){
		
	}

}
