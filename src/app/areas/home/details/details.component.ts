import { JogoDetailsFormModel } from './../models/jogo.details.form.model';
import { JogoDetailsModel } from './../../../shared/models/jogo.details.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: JogoDetailsModel;

  formJogoDetails: JogoDetailsFormModel =  new JogoDetailsFormModel();
  //mercadoSelecionado: any;

  constructor() { }

  ngOnInit() {
    
  }

  setData(_data: JogoDetailsModel) {
    this.data = _data;
  }
}
