import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  signup():void {
    this.userService.signup(this.email, this.password);
  }

}
