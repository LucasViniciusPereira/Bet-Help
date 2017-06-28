import { DisplayValidationComponent } from './shared/components/display.validation.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';


@NgModule({
   declarations: [
     DisplayValidationComponent
  ],
  exports:[
    DisplayValidationComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
  ],
})

export class SharedModule { }
