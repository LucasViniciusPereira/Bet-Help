import { Component } from '@angular/core';


import * as $ from 'jquery';
import "materialize-css";
//import { MaterializeModule } from 'angular2-materialize'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  openModal() {
    //debugger;
    $('#myModal').modal('show')
  }
}
