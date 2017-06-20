import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  displayMenu: boolean;

  constructor(private svcGlobal: GlobalService) { }

  ngOnInit() {
    this.displayMenu = this.svcGlobal.UserIsAuthenticate;
  }

}
