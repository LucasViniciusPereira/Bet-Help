import { DetailsComponent } from './../details/details.component';
import { Response } from '@angular/http';
import { Component, OnInit, EventEmitter, Output, OnDestroy, ViewChild } from '@angular/core';
import { List } from 'linqts';
import { Observable } from 'rxjs/Rx';

import { JogoModel } from './../../../shared/models/jogo.model';
import { HomeService } from './../home.service';
declare var $: any;

@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit, OnDestroy {

  listaJogos: List<JogoModel>;
  @ViewChild(DetailsComponent) modal: DetailsComponent;
   
  //observers
  eventDetails: EventEmitter<any> = new EventEmitter();

  constructor(
    private svcHome: HomeService
  ) { }

  ngOnInit() {
    Observable.timer(1000).subscribe(t =>
      this.Mock_Jogos()
    );

    this.eventDetails.subscribe((data) => {
      this.modal.show();
    });

    // this.eventDetails.subscribe((function(data){
    //   console.log(data);
    // }).bind(this));
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