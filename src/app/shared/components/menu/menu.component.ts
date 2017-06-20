import { AuthService } from './../../../home/services/auth.service';
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
    //this.displayMenu = this.svcAuth.UserIsAuthenticate;

     this.svcAuth.mostrarMenuEmitter.subscribe(
      mostrar => this.displayMenu = mostrar
    );

  }

  logout(){
    this.svcAuth.LogoutUser();
  }

}
