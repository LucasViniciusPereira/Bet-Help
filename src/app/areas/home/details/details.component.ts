import { List } from 'linqts';
import { JogoDetailsFormModel } from "./../models/jogo.details.form.model";
import { JogoDetailsModel } from "./../../../shared/models/jogo.details.model";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: 'app-home-details',
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {

  formJogoDetails: JogoDetailsFormModel = new JogoDetailsFormModel();

  mercados: List<any> = new List<any>();

  constructor() {

  }

  ngOnInit() {
    console.log('init');
  }


  assignProperties(model: any) {
    const controls = Object.getOwnPropertyNames(this);
    const properties = Object.getOwnPropertyNames(model);

    // Iteração com as propriedades
    for (const propControls of controls) {

      // Propriedades formControl
      if (this[propControls].controls && typeof this[propControls].controls === 'object') {

        const formControl = Object.getOwnPropertyNames(this[propControls].controls);

        for (const propCT of formControl) {
          for (const propModel of properties) {
              console.log(propModel);
              console.log(propCT);

              if (propControls === propCT) {
                this[propCT].controls.get(propCT).setValue(model[propModel]);
            }
          }
        }
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
