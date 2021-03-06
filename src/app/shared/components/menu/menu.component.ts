import { AuthService } from './../../../areas/login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
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
