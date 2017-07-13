import { element } from 'protractor';
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
private value:any = {};
  // Model
  eventModel = this.fb.group(new EventModel(this.fb));
  tipModel = this.fb.group(new TipModel(this.fb));

  // Listas
  lstTeamPrincipal: Array<any> = new Array<any>();
  lstTeamVisitor: Array<any> = new Array<any>();
  lstMarket = new Array<any>();

  lstTips = <FormArray>this.eventModel.get('LstTips');

  constructor(
    private fb: FormBuilder
  ) {
    super()
  }

  ngOnInit() {
  }

  isValidCustom(): boolean {
    return this.eventModel.controls.LstTips.value.length <= 0 || !this.eventModel.valid;
  }

  addTip(element: any) {
    element.Market = _.where(this.lstMarket, { MarketID: element.MarketID })[0].Description;
    this.lstTips.push(this.fb.group(element));

    this.resetFormTip();
  }

  removeTip(indexElement: any) {
    this.lstTips.removeAt(indexElement);
  }

  submit() {
    console.log('Falta Implementar');
  }

   refreshValue(value:any):void {
    this.value = value;
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
