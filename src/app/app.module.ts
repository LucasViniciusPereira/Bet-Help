import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { HomeModule } from './home/home.module';
import { MenuComponent } from './shared/menu/menu.component';
import { GlobalService } from './utils/global.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      HomeModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
