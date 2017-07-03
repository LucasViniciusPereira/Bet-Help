import { Validators, FormControl } from '@angular/forms';

import { BaseForm } from './../../../shared/class/base.form';
import { Validation } from '../../../shared/class/business.validation';

export class JogoDetailsFormModel extends BaseForm {

    MercadoID = new FormControl('', [Validators.required]);
    Odds = new FormControl('', [Validators.required]);
    Valor = new FormControl('', [Validators.required]);

    constructor() {
        super();

        this.registerValidators();
    };
}
