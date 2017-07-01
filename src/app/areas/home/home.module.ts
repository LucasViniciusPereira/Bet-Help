import { SharedModule } from './../../shared.module';
import { AppComponent } from './../../app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IndexComponent } from './index/index.component';
import { ScoreboardComponent } from './../../shared/components/scoreboard/scoreboard.component';
import { HomeService } from './home.service';
import { DetailsComponent } from './details/details.component';

import {ModalModule} from 'ng2-bs4-modal/ng2-bs4-modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    ModalModule
  ],
  declarations: [
    IndexComponent,
    DetailsComponent,
    ScoreboardComponent,
  ],
  exports:[
    IndexComponent,
    DetailsComponent
  ],
  providers:[
    HomeService
  ]

})
export class HomeModule { }
