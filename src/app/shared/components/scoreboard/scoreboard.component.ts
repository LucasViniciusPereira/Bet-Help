import { GameModel } from './../../models/game/game.model';
import { Component, OnInit, Input } from '@angular/core';

import { List } from 'linqts';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  @Input() games: Array<GameModel>;
  @Input() controlsEvent: List<any>;

  constructor() { }

  ngOnInit() {
  }

  control(item: GameModel, control) {
    control.action.emit(item);
  }
}
