import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../home/class/user.model';
import { Helper } from './../../utils/helper';

@Injectable()
export class AuthService {

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
    return this.getTokenUser() ? true : false;
  }

  DeleteTokenUser(){
     window.localStorage.removeItem(this.tokenName);
  }

  AuthenticationUser(user: any) {

    var result = this.Mock_validacaoUsuario(user);

    if (result == false) {
      return Helper.showMessageError('E-mail ou senha invalidos.');
    }

    if (user) {
      let token = this.getTokenUser();

      if (token == null || token == "")
        this.CreateTokenUser(user);

      this.router.navigate(['/']);
    }
    else {
      return Helper.showMessageError('E-mail ou senha invalidos.');
    }
  }

  private Mock_validacaoUsuario(user: UserModel): boolean {
    if (user.email == "admin@admin.com" && user.senha == "a123456")
      return true;
    return false;
  }

}
