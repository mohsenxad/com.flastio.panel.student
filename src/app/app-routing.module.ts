import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignCertifictionComponent } from './componets/certification/assign/assign-certifiction.component';
import { AddProjectComponent } from './componets/project/add/add-project.component';
import { AddDetailStudentComponent } from './componets/student/add-detail/add-detail-student.component';
import { StudentPanelComponent } from './componets/student/panel/student-panel.component';
import { StudentSignupComponent } from './componets/student/signup/student-signup.component';
import { ConfirmEmailComponent } from './auth/componets/user/confirm-email/confirm-email.component';
import { LoginComponent } from './auth/componets/user/login/login.component';
import { SingupComponent } from './auth/componets/user/singup/singup.component';
import { WorkStyleTestComponent } from './componets/workStyle/test/work-style-test.component';
import { AuthHomeComponent } from './auth/auth-home/auth-home.component';
import { UpgradePlaneComponent } from './componets/plane/upgrade/upgrade-plane.component';
import { StudentHomeComponent } from './componets/student/home/student-home.component';
import { ResetPasswordComponent } from './auth/componets/user/reset-password/reset-password.component';
import { EmailConfirmedComponent } from './auth/componets/user/email-confirmed/email-confirmed.component';

const routes: Routes = [
  {
    path:'auth',
    component: AuthHomeComponent,
    children:[
      {
        path: 'signup', 
        component: SingupComponent,
      },
      {
        path: 'login', 
        component: LoginComponent,
      },
      {
        path: 'confirmEmail', 
        component: ConfirmEmailComponent,
      },
      {
        path: 'emailConfirmed', 
        component: EmailConfirmedComponent,
      },
      {
        path: 'resetPassword', 
        component: ResetPasswordComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
    ]
  },
  //{path:'signup', component:SingupComponent},
  //{path:'confirmEmail', component:ConfirmEmailComponent},
  //{path:'login', component:LoginComponent},
  {path:'', redirectTo: 'auth/login', pathMatch:'full'},
  {
    path: 'student',
    component: StudentHomeComponent,
    children:[
      {
        path:'panel',
        component: StudentPanelComponent
      },
      {
        path:'signup',
        component: StudentSignupComponent
      },
      {
        path:'editDetail',
        component: AddDetailStudentComponent
      },
      {
        path:'upgrade',
        component: UpgradePlaneComponent
      },
      {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full'
      },
    ]
  },
  // {path:'student/signup', component:StudentSignupComponent},
  // {path:'student/editDetail', component:AddDetailStudentComponent},
  // {path:'student/upgrade', component:UpgradePlaneComponent},
  // {path:'student/panel', },
  {path:'workStyle/test', component:WorkStyleTestComponent},
  {path:'project/add', component:AddProjectComponent},
  {path:'certification/assign', component:AssignCertifictionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
