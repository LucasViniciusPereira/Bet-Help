import { JogoDetailsModel } from './../../../shared/models/jogo.details.model';
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

  // Observers
  eventDetails: EventEmitter<any> = new EventEmitter();
  @ViewChild(DetailsComponent) modalDetails: DetailsComponent;

  constructor(private svcHome: HomeService) { }

  ngOnInit() {
    Observable.timer(1000).subscribe(t => this.Mock_Jogos());

    // Event Modal Details
    this.eventDetails.subscribe(parms => {
      // buscar jogo
      this.svcHome.getJogo('').subscribe((data: JogoDetailsModel) => {

        // Atribuir propriedades
        this.modalDetails.formJogoDetails.reset();
        this.modalDetails.assignProperties(data[0]);
        // this.modalDetails.assignProperties(data);
        $('#modalDetails').modal('show');
      });
    });
  }

  ngOnDestroy(): void {
    this.eventDetails.unsubscribe();
  }

  Mock_Jogos() {
    this.svcHome
      .getJogosDia()
      .subscribe((p: List<JogoModel>) => (this.listaJogos = p));
  }
}
