import { Helper } from './../../utils/helper';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Pipe } from '@angular/core';

import { HomeService } from './../home.service';
import { GlobalService } from './../../utils/global.service';
import { UserModel } from './../class/user.model';
import { Validation } from './../../shared/class/business.validation';
import { ValidateException } from '../../shared/decorators/validate.exception';
import { Enumerations } from '../../utils/enumerations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario: UserModel;

  constructor(
    private svcHome: HomeService,
    private svcGlobal: GlobalService
  ) {
    this.usuario = new UserModel();
  }

  ngOnInit() {
  }

  @ValidateException
  public submit() {

    var validate = this.usuario.ValidateUserLogin(this.usuario);

    if (validate.hasValidation()) {
      return validate;
    }

    var result = this.Mock_validacaoUsuario(this.usuario);

    if (result == false) {
      return Helper.showMessageError('E-mail ou senha invalidos.');
    }

    //Mock => alterar para post API
    this.svcHome.getAuthUser().subscribe(
      user => {
        this.AuthenticationUser(user);
      }
    );
  }

  private AuthenticationUser(user: any) {
    //var result = this.Mock_validacaoUsuario(user);

    if (user) {
      let token = this.svcGlobal.getTokenUser();

      if (token == null || token == "")
        this.svcGlobal.CreateTokenUser(user);

      Helper.showMessageSuccess('Usuario Autenticado');
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