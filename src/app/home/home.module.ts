import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
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
