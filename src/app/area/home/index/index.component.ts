import { Response } from '@angular/http';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { List } from 'linqts';

import { JogoModel } from './../../../shared/models/jogo.model';
import { HomeService } from './../services/home.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit, OnDestroy {

  listaJogos: List<JogoModel>;
  eventDetails: EventEmitter<any> = new EventEmitter();

  constructor(
    private svcHome: HomeService
  ) {
    this.Mock_Jogos();
  }

  ngOnInit() {
    this.eventDetails.subscribe(function (data) {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.eventDetails.unsubscribe();
  }

  Mock_Jogos() {
    this.svcHome.getJogosDia().subscribe(
      (p: List<JogoModel>) => this.listaJogos = p
    );
  }

}
