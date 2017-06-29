import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

// Modulos 
import { HomeModule } from './areas/home/home.module';
import { LoginModule } from './areas/login/login.module';

import { NotFoundComponent } from './shared/components/404/404.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
