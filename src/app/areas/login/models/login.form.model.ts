import { Validators, FormGroup, ValidatorFn, AsyncValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { Validation } from '../../../shared/class/business.validation';

export class LoginFormModel extends FormGroup {

    Email = new FormControl('', [Validators.required, Validators.email]);
    Email2 = new FormControl('', [Validators.required, Validators.email]);
    Password = new FormControl('', [Validators.required, Validators.minLength(4)]);

    constructor(
        validador?: ValidatorFn,
        asyncValidator?: AsyncValidatorFn
    ) {
        super({}, validador, asyncValidator);
        this.register();
    }

    register() {
        let properties = Object.getOwnPropertyNames(this);

        for (let prop of properties) {
            var instance = Object.getOwnPropertyDescriptor(this, prop);

            if (instance.value && typeof (instance.value) == 'object')
                if (instance.value.constructor.name == 'FormControl') {
                    this.registerControl(prop, instance.value);
                    console.log(prop);
                }
        }
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