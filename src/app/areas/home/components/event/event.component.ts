import { TipModel } from './../../models/tip/tip.model';
import { EventModel } from './../../models/event/event.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { BaseBusiness } from './../../../../shared/class/base.business';
import * as _ from 'underscore';

@Component({
  selector: 'app-home-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent extends BaseBusiness implements OnInit {

  eventModel = this.fb.group(new EventModel());
  tipModel = this.fb.group(new TipModel(this.fb));

  lstTeamPrincipal: Array<any> = new Array<any>();
  lstTeamVisitor: Array<any> = new Array<any>();
  lstTips: Array<any> = new Array<any>();
  lstMarket = new Array<any>();

  constructor(
    private fb: FormBuilder
  ) {
    super()
  }

  ngOnInit() {
  }

  addTip(element: any) {
    element.Market = _.where(this.lstMarket, { MarketID: element.MarketID })[0].Description;

    // const control = <FormArray>this.eventModel.controls['LstTips'];
    this.lstTips.push(element);
    this.resetFormTip();
  }

  submit() {
    // let control = this.eventModel.controls['LstTips'];
    // control = "this.lstTips;";
  }

  resetFormTip() {
    this.tipModel.reset({
      MarketID: null,
      Odds: null,
      Value: null,
      InLive: false,
    });
    this.tipModel.clearValidators();
  }
}
