import { TipModel } from './../../models/tip/tip.model';
import { EventModel } from './../../models/event/event.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

    this.lstTips.push(element);
    this.tipModel.reset();
    this.tipModel.clearValidators();
  }
}
