import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modulos
import { SharedModule } from './../../shared.module';

import { ScoreboardComponent } from './../../shared/components/scoreboard/scoreboard.component';
import { HomeService } from './home.service';
import { IndexComponent } from './components/index/index.component';
import { TipComponent } from './components/tip/tip.component';
import { EventComponent } from './components/event/event.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    IndexComponent,
    ScoreboardComponent,
    TipComponent,
    EventComponent
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
