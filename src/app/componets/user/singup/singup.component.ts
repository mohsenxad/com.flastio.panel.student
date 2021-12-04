import { Component, OnInit } from '@angular/core';
import { ValidationResult } from 'src/app/model/validationResult';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  email: string;
  password: string;

  isLoading : Boolean = false;
  validationResult: ValidationResult;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  signup():void {
    this.isLoading = true;
    this.userService.signup(this.email, this.password);
    this.isLoading = false;
  }

}
