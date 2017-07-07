
import { SharedModule } from './../../shared.module';
import { AppComponent } from './../../app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ScoreboardComponent } from './../../shared/components/scoreboard/scoreboard.component';
import { HomeService } from './home.service';
import { IndexComponent } from './components/index/index.component';
import { TipComponent } from './components/tip/tip.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    IndexComponent,
    ScoreboardComponent,
    TipComponent,
  ],
  exports: [
    IndexComponent,
    TipComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
