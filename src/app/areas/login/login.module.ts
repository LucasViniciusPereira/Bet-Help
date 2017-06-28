import { SharedModule } from './../../shared.module';
import { AppModule } from './../../app.module';
import { AppComponent } from './../../app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from "./login.component";
import { AuthService } from "./auth.service";
import { DisplayValidationComponent } from './../../shared/components/display.validation.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule    
  ],
  declarations: [
    LoginComponent,
  ],
  exports:[
    LoginComponent
  ],
  providers:[
    AuthService
  ]

})

export class LoginModule { }
