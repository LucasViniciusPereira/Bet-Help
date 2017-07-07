import { TipModel } from './../../models/tip/tip.model';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

declare var $: any;
import * as _ from 'underscore';

@Component({
  selector: 'app-home-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  tipModel = this.fb.group(new TipModel(this.fb));
  lstMarket = Array;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  addTip(element: any) {
    console.log(this.tipModel);

    // element.Mercado = _.where(this.mercados, { mercadoID: '1' })[0].descricao;

    // this.lstPalpites.push(element);
    // this.formJogoDetails.reset();
    // this.formJogoDetails.clearValidators();
  }
}
