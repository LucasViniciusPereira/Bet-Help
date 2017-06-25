import { Response } from '@angular/http';
import { List } from 'linqts';
import { JogoModel } from './../../../shared/models/jogo.model';
import { HomeService } from './../services/home.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  listaJogos: List<JogoModel>;

  details = new EventEmitter();

  constructor(
    private svcHome: HomeService
  ) {
    this.Mock_Jogos();

    this.details.subscribe('details', function(item){
      console.log(item);
    });
  }

  ngOnInit() {
  }

  Mock_Jogos() {
    this.svcHome.getJogosDia().subscribe(
      (p: List<JogoModel>) => this.listaJogos = p
    );
  }

  info(){
    console.log('teste action');
  }

  teste() {
    this.svcHome.getTeste().subscribe(
      (p: Response) => console.log(p)
    );
  }
}
