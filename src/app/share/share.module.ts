import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    LogoComponent,
    LoadingComponent
  ],
  exports:[
    LogoComponent,
    LoadingComponent,
    CommonModule
  ]
})
export class ShareModule { }
