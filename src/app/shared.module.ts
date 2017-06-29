import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
//Serviços
import { AuthGuard } from './guards/auth.guard';
import { DisplayValidationService } from './shared/services/display.validation.service';
import { PreloaderService } from './shared/components/preloader/preloader.service';
import { HttpService } from './utils/http.service';
import { GlobalService } from './shared/services/global.service';

//Componentes
import { MenuComponent } from './shared/components/menu/menu.component';
import { DisplayValidationComponent } from './shared/components/display.validation.component';

@NgModule({
  declarations: [
    DisplayValidationComponent,
    MenuComponent
  ],
  exports: [
    DisplayValidationComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
  ],
  providers: [
    GlobalService,
    DisplayValidationService,
    AuthGuard,
    HttpService,
    PreloaderService
  ],
})

export class SharedModule { }