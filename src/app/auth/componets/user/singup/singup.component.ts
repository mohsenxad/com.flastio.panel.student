import { Component, OnInit } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';
import { UserService } from 'src/app/auth/services/user/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  email: string;
  password: string;

  isLoading : Boolean = false;
  validationResult: ValidationResult = {
    hasError : false,
    messageList: []
  };

  isCheckMailVisible: Boolean = false;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  async signup():Promise<void> {
    this.isLoading = true;
    try {
      await this.userService.signup(this.email, this.password);  
      this.isCheckMailVisible = true;
    } catch (error) {
      this.validationResult = {
        hasError : true,
        messageList: [error.error]
      }
      
    }
    
    this.isLoading = false;
  }



}
