import { TipListModel } from './../../models/tip/tip.list.model';
import { TipModel } from './../../models/tip/tip.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

declare var $: any;
import * as _ from 'underscore';
import { BaseBusiness } from './../../../../shared/class/base.business';

@Component({
  selector: 'app-home-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent extends BaseBusiness implements OnInit {

  tipModel = this.fb.group(new TipModel(this.fb));

  lstMarket = new Array<TipListModel>();
  lstTips: Array<any> = new Array<any>();

  constructor(
    private fb: FormBuilder
  ) {
    super()
  }

  ngOnInit() {
  }

  addTip(element: any) {
    element.Market = _.where(this.lstMarket, { MarketID: element.MarketID })[0].Description;

    this.lstTips.push(element);
    this.tipModel.reset();
    this.tipModel.clearValidators();
  }
}
