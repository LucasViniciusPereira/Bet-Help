import { Component, OnInit, EventEmitter } from '@angular/core';

import { UserModel } from './../class/user.model';
import { Validation } from './../../shared/class/business.validation';
import { ValidateException } from '../../shared/decorators/validate.exception';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario: UserModel;

  constructor() {
    this.usuario = new UserModel();
  }

  ngOnInit() {
  }

  @ValidateException
  public submit() {

    var result = this.usuario.ValidateUserLogin(this.usuario);

    if (result.hasValidation()) {
      return result;
    }

    console.log('FINALLL');
  }

}