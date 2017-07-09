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

        // Limpando os formControl
        const resetJson = new Array<any>();

        const propClear = Object.getOwnPropertyNames(this[propControls].controls);
        for (const itemValue of propClear) {
          if ((this[propControls].controls[itemValue].value instanceof FormBuilder) === false) {

            const propValue = this[propControls].controls[itemValue].value !== null ?
              '"' + this[propControls].controls[itemValue].value + '"' : null;

            resetJson.push(`"${itemValue}" : ${propValue}`);
          }
        }
        // Limpando os formControl com objeto default value
        this[propControls].reset(JSON.parse('{ ' + resetJson.join(',') + ' }'));

        for (const item of properties) {
          if (item === propControls) {
            this[propControls].patchValue(model[item]);
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
    }
  }
}
