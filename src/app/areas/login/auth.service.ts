import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserModel } from './../home/models/user.model';
import { Helper } from './../../utils/helper';
import { HttpService } from './../../utils/http.service';

@Injectable()
export class AuthService implements OnDestroy {
  
  ngOnDestroy(): void {
    this.mostrarMenuEmitter.unsubscribe();
  }

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private svcHttp: HttpService
  ) { }

  tokenName = "tokenUserApp";

  CreateTokenUser(userModel: UserModel) {
    var _token = window.localStorage.getItem(this.tokenName);

    if (_token == null) {
      window.localStorage.setItem(this.tokenName, JSON.stringify(userModel));
    }
  }

  getTokenUser(): any {
    return window.localStorage.getItem(this.tokenName);
  }

  DeleteTokenUser() {
    window.localStorage.removeItem(this.tokenName);
  }

  get UserIsAuthenticate(): boolean {
    let result = this.getTokenUser() ? true : false;
    this.mostrarMenuEmitter.emit(result);

    return result;
  }

  AuthenticationUser(user: any) {
    if (user) {
      let token = this.getTokenUser();

      if (token == null || token == "")
        this.CreateTokenUser(user);

      this.mostrarMenuEmitter.emit(true);

      return this.router.navigate(['/']);
    }
    else {
      this.mostrarMenuEmitter.emit(false);
      return Helper.showMessageError('E-mail ou senha invalidos.');
    }
  }

  LogoutUser() {
    this.DeleteTokenUser();
    this.UserIsAuthenticate;

    this.router.navigate(['/login']);
  }

  Mock_validacaoUsuario(user: any): boolean {
    if (user.Email.value == "admin@admin.com" && user.Password.value == "a123456")
      return true;
    return false;
  }

  getAuthUser(): Observable<UserModel> {
    let url = "http://www.mocky.io/v2/5946c6051000007f0ff64eee";

    return this.svcHttp.get(url);
  };

}
