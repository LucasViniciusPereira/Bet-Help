import { AuthService } from './../../../area/home/services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {

  displayMenu: boolean;

  constructor(private svcAuth: AuthService) { }

  ngOnInit() {
    this.svcAuth.mostrarMenuEmitter.subscribe(
      mostrar => this.displayMenu = mostrar
    );

  }

  logout() {
    this.svcAuth.LogoutUser();
  }
}
