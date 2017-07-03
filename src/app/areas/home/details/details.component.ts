import { JogoDetailsFormModel } from "./../models/jogo.details.form.model";
import { JogoDetailsModel } from "./../../../shared/models/jogo.details.model";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-home-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {

  formJogoDetails: JogoDetailsFormModel = new JogoDetailsFormModel();

  constructor() {

  }

  ngOnInit() {
    console.log('init');
  }
}
