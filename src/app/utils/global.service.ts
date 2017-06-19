import { Injectable } from '@angular/core';

import { UserModel } from '../home/class/user.model';

@Injectable()
export class GlobalService {

  tokenName = "tokenUserApp";
  constructor() { }

  /** @description Cria token para o usuario autenticar na aplicação.  
  * @param {UserModel} userModel Objeto usuario para armazenar no localStorage
  */
  public CreateTokenUser(userModel: UserModel) {
    var _token = window.localStorage.getItem(this.tokenName);

    if (_token == null) {
      window.localStorage.setItem(this.tokenName, JSON.stringify(userModel));
    }
  }

  /** @description Retorna o token do usuairo do localStorage  
 */
  public getTokenUser(): any {
    return window.localStorage.getItem(this.tokenName);
  }

}
