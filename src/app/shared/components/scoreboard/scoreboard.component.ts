import { Component, OnInit, Input } from '@angular/core';

import { JogoModel } from './../../models/jogo.model';
import { List } from 'linqts';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  @Input() jogos: List<JogoModel>;
  @Input() controlsEvent: List<any>;

  constructor() { }

  ngOnInit() {
  }

  control(item: JogoModel, control) {
    control.action.emit(item);
  }
}
