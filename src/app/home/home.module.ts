import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { HomeService } from './home.service';
import { ControlMessage } from '../shared/components/control.message.component';

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
    ControlMessage
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
