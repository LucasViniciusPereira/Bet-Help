import { FormBuilder } from '@angular/forms/src/form_builder';
import { BaseBusiness } from 'app/shared/class/base.business';
import { Validators, FormControl } from '@angular/forms';

import { BaseForm } from './../../../shared/class/base.form';
import { Validation } from '../../../shared/class/business.validation';

export class JogoDetailsFormModel {

  MercadoID = [null, Validators.required];
  Odds = [null, Validators.required];
  Valor = [null, Validators.required];

  Endereco = this.fb.group(new EnderecoModel());

  constructor(private fb: FormBuilder) {
     // super();

    // this.registerValidators();
  };
}

export class EnderecoModel {
  EnderecoID = [null, Validators.required];
  Descricao = [null, Validators.required];

  constructor() {
    // super();
    // this.registerValidators();
  };
}
