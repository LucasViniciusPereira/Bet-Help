import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Serviços
import { AuthGuard } from './guards/auth.guard';
import { DisplayValidationService } from './shared/services/display.validation.service';
import { PreloaderService } from './shared/components/preloader/preloader.service';
import { HttpService } from './utils/http.service';
import { GlobalService } from './shared/services/global.service';

// Componentes
import { DisplayValidationComponent } from './shared/components/display.validation.component';

// Modulos
import { Ng2MaskModule } from 'ng2-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SelectModule } from 'ng2-select';

@NgModule({
  declarations: [
    DisplayValidationComponent
  ],
  exports: [
    DisplayValidationComponent,
    FormsModule,
    ReactiveFormsModule,
    Ng2MaskModule,
    CurrencyMaskModule,
    SelectModule
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2MaskModule,
    CurrencyMaskModule,
    SelectModule
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
