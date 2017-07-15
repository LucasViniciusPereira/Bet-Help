import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modulos
import { SharedModule } from './../../shared.module';

import { HomeService } from './home.service';
import { IndexComponent } from './components/index/index.component';
// import { EventComponent } from './components/event/event.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    IndexComponent,
   // EventComponent,
    MonitoringComponent
  ],
  exports: [
    IndexComponent,
    // EventComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
