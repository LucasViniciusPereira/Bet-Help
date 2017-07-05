import { FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';

export abstract class BaseBusiness {
  constructor() { }

  public assignProperties(model: any) {
    if (model === undefined) {
      return console.log('Model não preenchido');
    }

    const controls = Object.getOwnPropertyNames(this);
    const properties = Object.getOwnPropertyNames(model);

    // if (controls.length <= 0) {
    //   return console.log('Não foi possível localizar as propriedades da classe');
    // }

    // if (properties.length <= 0) {
    //   return console.log('Model não preenchido');
    // }

    // Iteração com as propriedades
    for (const propControls of controls) {

      // Propriedades formControl
      if (this[propControls].controls && typeof this[propControls].controls === 'object') {

        // Limpando o formControl
        this[propControls].reset();
        this[propControls].clearValidators();

        // this.modalDetails.formJogoDetails.reset();
        const formControl = Object.getOwnPropertyNames(this[propControls].controls);

        for (const propFormControl of formControl) {
          for (const propModel of properties) {
            // Atribui as propriedades pelo nome
            if (propFormControl === propModel) {
              this[propControls].get(propFormControl).setValue(model[propModel]);
            }
          }
        }
      } else {

        // Limpar valores Array
        if (this[propControls].constructor.name === 'Array') {
          this[propControls] = new Array<any>();
        }

        // Propriedades comuns
        for (const prop of properties) {
          if (propControls === prop) {
            this[propControls] = model[prop];
          }
        }
      }
    }
  }
}
