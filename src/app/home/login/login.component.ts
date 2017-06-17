import { Component, OnInit, EventEmitter } from '@angular/core';
import { Pipe } from '@angular/core';

import { HomeService } from './../home.service';
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

  erroMessage: string;
  userApp: any;

  constructor(private svcHome: HomeService) {
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

    let result = this.svcHome.getAuthUser().subscribe(
      user => this.userApp = user,
      error => this.erroMessage = <any>error
    );

    console.log(result);
  }
}