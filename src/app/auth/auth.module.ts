import { NgModule } from '@angular/core';
import { LoginComponent } from './componets/user/login/login.component';
import { SingupComponent } from './componets/user/singup/singup.component';
import { ConfirmEmailComponent } from './componets/user/confirm-email/confirm-email.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';
import { PasswordInputComponent } from './componets/share/password-input/password-input.component';
import { ResetPasswordComponent } from './componets/user/reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    ConfirmEmailComponent,
    AuthHomeComponent,
    PasswordInputComponent,
    ResetPasswordComponent
  ],
  imports: [
    ShareModule,
    RouterModule
  ],
  exports:[
    AuthHomeComponent,
  ]
})
export class AuthModule { }
