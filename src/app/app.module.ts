import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MaterializeModule } from 'angular2-materialize';
import { HomeModule } from './home/home.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { GlobalService } from './shared/services/global.service';
import { AuthGuard } from './guards/auth.guard';
import { DisplayValidationService } from './shared/services/display.validation.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    GlobalService,
    DisplayValidationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
