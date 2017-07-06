import { BaseBusiness } from 'app/shared/class/base.business';
import { Validators, FormControl } from '@angular/forms';

import { BaseForm } from './../../../shared/class/base.form';
import { Validation } from '../../../shared/class/business.validation';

export class JogoDetailsFormModel extends BaseForm {

  MercadoID = new FormControl('', [Validators.required]);
  Odds = new FormControl('', [Validators.required]);
  Valor = new FormControl('', [Validators.required]);

  Endereco: EnderecoModel = new EnderecoModel();

  constructor() {
    super();

    this.registerValidators();
  };
}

export class EnderecoModel extends BaseForm {
  EnderecoID = new FormControl('', [Validators.required]);
  Descricao = new FormControl('', [Validators.required]);


  Bairro: BairroModel = new BairroModel();
  constructor() {
    super();
    this.registerValidators();
  };
}

export class BairroModel extends BaseForm {
  BairroID = new FormControl('', [Validators.required]);
  Casa = new FormControl('', [Validators.required]);

  constructor() {
    super();
    this.registerValidators();
  };
}
