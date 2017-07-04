import { Validators, FormGroup, ValidatorFn, AsyncValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { Validation } from '../../shared/class/business.validation';

export abstract class BaseForm extends FormGroup {
  constructor(validador?: ValidatorFn, asyncValidator?: AsyncValidatorFn) {
    super({}, validador, asyncValidator);
  }

  registerValidators() {
    const properties = Object.getOwnPropertyNames(this);

    for (const prop of properties) {
      const instance = Object.getOwnPropertyDescriptor(this, prop);

      if (instance.value && typeof instance.value === 'object') {
        if (instance.value.constructor.name === 'FormControl') {
          this.registerControl(prop, instance.value);
        }
      }
    }
  }
}
