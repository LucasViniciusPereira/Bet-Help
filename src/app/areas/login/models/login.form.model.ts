import { Validators,   AbstractControl, FormControl } from '@angular/forms';

import { BaseForm } from './../../../shared/class/base.form';
import { Validation } from '../../../shared/class/business.validation';

export class LoginFormModel extends BaseForm {

    Email = new FormControl('', [Validators.required, Validators.email]);
    Password = new FormControl('', [Validators.required, Validators.minLength(4)]);

    constructor() {
        super();
        
        this.registerValidators();
    }

    public ValidateLogin(): Validation.BusinessValidation {
        let validation: Validation.BusinessValidation = new Validation.BusinessValidation;

        if (this.Email == null || this.Email == undefined)
            validation.addValidation(new Validation.RuleValidationSimple('O campo [e-mail] não foi preenchido.'));

        if (this.Password == null || this.Password == undefined)
            validation.addValidation(new Validation.RuleValidationSimple('O campo [senha] não foi preenchido.'));

        return validation;
    }
}