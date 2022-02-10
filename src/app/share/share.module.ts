import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { LoadingComponent } from './loading/loading.component';
import { ValidationResultComponent } from './validation-result/validation-result.component';
import { PublicEmailInputComponent } from './public-email-input/public-email-input.component';
import { FormsModule } from '@angular/forms';
import { UniversityEmailInputComponent } from './university-email-input/university-email-input.component';



@NgModule({
  declarations: [
    LogoComponent,
    LoadingComponent,
    ValidationResultComponent,
    PublicEmailInputComponent,
    UniversityEmailInputComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[
    LogoComponent,
    LoadingComponent,
    CommonModule,
    FormsModule,
    ValidationResultComponent,
    PublicEmailInputComponent,
    UniversityEmailInputComponent
  ]
})
export class ShareModule { }
