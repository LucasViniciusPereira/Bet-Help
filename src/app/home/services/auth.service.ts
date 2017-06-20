import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../home/class/user.model';
import { Helper } from './../../utils/helper';

@Injectable()
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

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

  get UserIsAuthenticate(): boolean {
    let result = this.getTokenUser() ? true : false;
    this.mostrarMenuEmitter.emit(result);

    return result;
  }

  DeleteTokenUser() {
    window.localStorage.removeItem(this.tokenName);
  }

  AuthenticationUser(user: any) {
    if (user) {
      let token = this.getTokenUser();

      if (token == null || token == "")
        this.CreateTokenUser(user);

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
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

  Mock_validacaoUsuario(user: UserModel): boolean {
    if (user.email == "admin@admin.com" && user.senha == "a123456")
      return true;
    return false;
  }

}
