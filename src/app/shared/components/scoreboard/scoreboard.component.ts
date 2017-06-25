import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  @Output() msgEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  control(event: JogoModel, control) {

  }
}
