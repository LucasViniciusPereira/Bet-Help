import {
  Validators,
  FormGroup,
  ValidatorFn,
  AsyncValidatorFn,
  AbstractControl,
  FormControl
} from "@angular/forms";
import { Validation } from "../../shared/class/business.validation";

export abstract class BaseForm extends FormGroup {
  constructor(validador?: ValidatorFn, asyncValidator?: AsyncValidatorFn) {
    super({}, validador, asyncValidator);
  }

  // assignProperties(formModel: any) {
  //   const controls = Object.getOwnPropertyNames(this.controls);
  //   const properties = Object.getOwnPropertyNames(formModel);

  //   for (const propControls of controls) {
  //     for (const prop of properties) {
  //       if (propControls === prop) {
  //         this.get(propControls).setValue(formModel[prop]);
  //       }
  //     }
  //   }
  // }

  registerValidators() {
    const properties = Object.getOwnPropertyNames(this);

    for (const prop of properties) {
      const instance = Object.getOwnPropertyDescriptor(this, prop);

      if (instance.value && typeof instance.value === "object") {
        if (instance.value.constructor.name === "FormControl") {
          this.registerControl(prop, instance.value);
        }
      }
    }
  }
}
