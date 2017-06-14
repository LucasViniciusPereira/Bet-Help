import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent, 
    IndexComponent
  ],
  exports:[
    LoginComponent, 
    IndexComponent
  ],
  providers:[
    HomeService
  ]

})
export class HomeModule { }
