import { Component, EventEmitter } from '@angular/core';

import * as $ from 'jquery';
//import "materialize-css";
import { MaterializeAction } from 'angular2-materialize';
//import { MaterializeModule } from 'angular2-materialize'
//declare var $: any


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  modalActions = new EventEmitter<string | MaterializeAction>();
  openModal() {
     $('#modal1').modal('open');
    //$('#myModal').modal('show');
    //this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    //this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  // openModal() {
  //   //debugger;

  //   $('#myModal').modal('show')
  // }
}
