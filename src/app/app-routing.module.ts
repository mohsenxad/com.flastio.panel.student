import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignCertifictionComponent } from './componets/certification/assign/assign-certifiction.component';
import { AddProjectComponent } from './componets/project/add/add-project.component';
import { AddDetailStudentComponent } from './componets/student/add-detail/add-detail-student.component';
import { StudentPanelComponent } from './componets/student/panel/student-panel.component';
import { StudentSignupComponent } from './componets/student/signup/student-signup.component';
import { ConfirmEmailComponent } from './componets/user/confirm-email/confirm-email.component';
import { LoginComponent } from './componets/user/login/login.component';
import { SingupComponent } from './componets/user/singup/singup.component';

const routes: Routes = [
  {path:'signup', component:SingupComponent},
  {path:'confirmEmail', component:ConfirmEmailComponent},
  {path:'login', component:LoginComponent},
  {path:'student/signup', component:StudentSignupComponent},
  {path:'student/editDetail', component:AddDetailStudentComponent},
  {path:'student/panel', component:StudentPanelComponent},
  {path:'project/add', component:AddProjectComponent},
  {path:'certification/assign', component:AssignCertifictionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
