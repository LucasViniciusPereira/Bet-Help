import { EventComponent } from './../event/event.component';
import { GameModel } from './../../../../shared/models/game/game.model';
import { TipModel } from './../../models/tip/tip.model';

import { Observable } from 'rxjs/Rx';
import { TipComponent } from './../tip/tip.component';
import { HomeService } from './../../home.service';
import { Component, OnInit, EventEmitter, ViewChild, OnDestroy } from '@angular/core';

import { TipListModel } from './../../models/tip/tip.list.model';
import { HelperMessage } from 'app/utils/_helpers/helper.message';
declare var $: any;

@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {
  lstGames: Array<any> = new Array<any>();
  lstTipsOfDays: Array<any> = new Array<any>();

  // Observers
  EVENT_MODAL_TIP = new EventEmitter();

  @ViewChild(TipComponent) modalTip: TipComponent;
  @ViewChild(EventComponent) modalEvent: EventComponent;

  constructor(
    private svcHome: HomeService
  ) { }

  ngOnInit() {
    // Delay loader games
    Observable.timer(1000).subscribe(p => this.Mock_Games());

    // Delay loader tips
    Observable.timer(1000).subscribe(p => this.Mock_Tips());

    // Event Modal TIPS
    this.EVENT_MODAL_TIP.subscribe(p => {
      // Loader game
      this.svcHome.getGame('').subscribe((data: TipListModel) => {
        // Atribuir propriedades
        this.modalTip.assignProperties(data[0]);
        $('#modalTips').modal('show');
      });
    });
  }

  ngOnDestroy() {
    this.EVENT_MODAL_TIP.unsubscribe();
  }

  newEvent() {
    // Loader new event
    this.svcHome.getNewEvent().subscribe((data: any) => {
      // Atribuir propriedades
      this.modalEvent.assignProperties(data);
      $('#modalEvent').modal('show');
    });
  }

  private Mock_Games() {
    this.svcHome
      .getGamesOfDays()
      .subscribe((p: Array<GameModel>) => {
        this.lstGames = p;
      });
  }

  private Mock_Tips() {
    this.svcHome
      .getTipsOfDays()
      .subscribe((p: Array<any>) => {
        this.lstTipsOfDays = p;
      });
  }
}
