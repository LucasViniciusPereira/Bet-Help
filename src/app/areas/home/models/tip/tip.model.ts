import { FormBuilder } from '@angular/forms/src/form_builder';
import { Validators, FormControl } from '@angular/forms';

export class TipModel {

  // Properites
  StatusID;
  MarketID = [null, Validators.required];
  Odds = [null, Validators.required];
  Value = [null, Validators.required];
  InLive = [true, Validators.required];

  // Examples
  // Endereco = this.fb.group(new EnderecoModel());

  constructor(
    private fb: FormBuilder
  ) { };
}

// export class EnderecoModel {
//   EnderecoID = [null, Validators.required];
//   Descricao = [null, Validators.required];

//   constructor() { };
// }
