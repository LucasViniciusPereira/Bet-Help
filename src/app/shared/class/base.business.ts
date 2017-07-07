import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';

export abstract class BaseBusiness {
  constructor() { }

  assignProperties(model: any): void {
    if (model === undefined) {
      return console.log('Model não preenchido');
    }

    const controls = Object.getOwnPropertyNames(this);
    const properties = Object.getOwnPropertyNames(model);

    // Iteração com as propriedades
    for (const propControls of controls) {
      // Propriedades do FormGroup
      if (this[propControls] instanceof FormGroup) {
        for (const item of controls) {
          if (item === propControls) {

            // this[propControls].patchValue(model[item]);
            console.log(model[item]);
          }
        }
      } else {

        // Propriedades comuns
        if (this[propControls] instanceof Array) {
          this[propControls] = new Array<any>();
        }

        // Atribuir propriedades
        for (const prop of properties) {
          if (propControls === prop) {
            this[propControls] = model[prop];
          }
        }
      }

      // Propriedades formControl
      // if (this[propControls].controls && typeof this[propControls].controls === 'object') {

      //   // Limpando o formControl
      //   this[propControls].reset();
      //   this[propControls].clearValidators();

      //   // Verifica propriedades complexas
      //   const allproperties = Object.getOwnPropertyNames(this[propControls]);
      //   for (const item of allproperties) {

      //     const isFormGroup = <FormGroup>this[propControls][item];
      //     if (isFormGroup && isFormGroup.controls) {
      //       console.log(this[propControls][item]);
      //       this[propControls][item].atribuir(model[item])
      //     }
      //   }

      // Verifica propriedades simples
      // const formControl = Object.getOwnPropertyNames(this[propControls].controls);

      // for (const propFormControl of formControl) {
      //   for (const propModel of properties) {
      //     // Atribui as propriedades pelo nome
      //     if (propFormControl === propModel) {
      //       this[propControls].get(propFormControl).setValue(model[propModel]);
      //     }
      //   }
      // }
      // } else {

      // Limpar valores Array
      // if (this[propControls].constructor.name === 'Array') {
      //   this[propControls] = new Array<any>();
      // }

      // // Propriedades comuns
      // for (const prop of properties) {
      //   if (propControls === prop) {
      //     this[propControls] = model[prop];
      //   }
      // }
      // }
    }
  }
}
