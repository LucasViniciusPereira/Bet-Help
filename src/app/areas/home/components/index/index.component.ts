import { GameModel } from './../../../../shared/models/game/game.model';
import { TipModel } from './../../models/tip/tip.model';

import { Observable } from 'rxjs/Rx';
import { TipComponent } from './../tip/tip.component';
import { HomeService } from './../../home.service';
import { Component, OnInit, EventEmitter, ViewChild, OnDestroy } from '@angular/core';

import { TipListModel } from './../../models/tip/tip.list.model';
declare var $: any;

@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {
  lstGames = new Array<GameModel>();

  // Observers
  EVENT_MODAL_TIP = new EventEmitter();
  @ViewChild(TipComponent) modalTip: TipComponent;

  constructor(
    private svcHome: HomeService
  ) { }

  ngOnInit() {
    // Delay loader games
    Observable.timer(1000).subscribe(p => this.Mock_Games());

    // Event Modal Details
    this.EVENT_MODAL_TIP.subscribe(p => {

      // Loader game
      this.svcHome.getJogo('').subscribe((data: TipListModel) => {

        console.log(data);
        // Atribuir propriedades
        this.modalTip.tipModel.patchValue(null);

        $('#modalTip').modal('show');
      });
    });
  }

  ngOnDestroy() {
    this.EVENT_MODAL_TIP.unsubscribe();
  }

  private Mock_Games() {
    this.svcHome
      .getJogosDia()
      .subscribe((p: Array<GameModel>) => (this.lstGames = p));
  }

}
