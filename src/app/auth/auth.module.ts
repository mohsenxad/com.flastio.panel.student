import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componets/user/login/login.component';
import { SingupComponent } from './componets/user/singup/singup.component';
import { ConfirmEmailComponent } from './componets/user/confirm-email/confirm-email.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    ConfirmEmailComponent,
    AuthHomeComponent
  ],
  imports: [
    FormsModule,
    ShareModule,
    RouterModule
  ],
  exports:[
    AuthHomeComponent,
  ]
})
export class AuthModule { }
