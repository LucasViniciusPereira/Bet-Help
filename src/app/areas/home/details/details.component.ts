import { element } from 'protractor';
import { List } from 'linqts';
import { JogoDetailsFormModel } from './../models/jogo.details.form.model';
import { JogoDetailsModel } from './../../../shared/models/jogo.details.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseBusiness } from 'app/shared/class/base.business';
declare var $: any;
import * as _ from 'underscore';

@Component({
  selector: 'app-home-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent extends BaseBusiness implements OnInit {

  formJogoDetails: JogoDetailsFormModel = new JogoDetailsFormModel();
  mercados: Array<any> = new Array<any>();
  lstPalpites: Array<any> = new Array<any>();

  constructor() {
    super()
  }

  ngOnInit() {
  }

  adicionar(element: any) {
    element.Mercado = _.where(this.mercados, {mercadoID: '1' })[0].descricao;

    this.lstPalpites.push(element);
    this.formJogoDetails.reset();
    this.formJogoDetails.clearValidators();
  }
}
