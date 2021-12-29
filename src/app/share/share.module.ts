import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { LoadingComponent } from './loading/loading.component';
import { ValidationResultComponent } from './validation-result/validation-result.component';
import { PublicEmailInputComponent } from './public-email-input/public-email-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LogoComponent,
    LoadingComponent,
    ValidationResultComponent,
    PublicEmailInputComponent,
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
  ]
})
export class ShareModule { }
