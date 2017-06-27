import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { HomeModule } from './area/home/home.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { GlobalService } from './shared/services/global.service';
import { AuthGuard } from './guards/auth.guard';
import { DisplayValidationService } from './shared/services/display.validation.service';
import { PreloaderService } from './shared/components/preloader/preloader.service';
import { HttpService } from './utils/http.service';
import { NotFoundComponent } from './shared/components/404/404.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotFoundComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule
  ],
  providers: [
    GlobalService,
    DisplayValidationService,
    AuthGuard,
    HttpService,
    PreloaderService
  ],
  exports: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
