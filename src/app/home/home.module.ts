import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { HomeService } from './services/home.service';
import { AuthService } from './services/auth.service';
import { DisplayValidation } from '../shared/components/display.validation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent, 
    IndexComponent,
    DisplayValidation,
  ],
  exports:[
    LoginComponent, 
    IndexComponent
  ],
  providers:[
    HomeService,
    AuthService
  ]

})
export class HomeModule { }
