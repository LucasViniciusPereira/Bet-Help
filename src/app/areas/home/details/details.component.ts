import { List } from 'linqts';
import { JogoDetailsFormModel } from "./../models/jogo.details.form.model";
import { JogoDetailsModel } from "./../../../shared/models/jogo.details.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { BaseBusiness } from "app/shared/class/base.business";

@Component({
  selector: 'app-home-details',
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent extends BaseBusiness implements OnInit {

  formJogoDetails: JogoDetailsFormModel = new JogoDetailsFormModel();

  mercados: List<any> = new List<any>();

  constructor() {
    super()
  }

  ngOnInit() {
    console.log('init');
  }
}
