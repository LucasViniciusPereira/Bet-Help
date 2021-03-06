import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { ValidateException } from './../../shared/decorators/validate.exception';
import { Helper } from './../../utils/helper';
import { LoginFormModel } from './models/login.form.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  FormLogin = this.fb.group(new LoginFormModel());

  constructor(
    private svcAuth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    if (this.svcAuth.UserIsAuthenticate) {
      this.router.navigate(['/']);
    }

  }

  @ValidateException
  public submit() {
    // const validate = this.FormLogin ValidateLogin();

    // if (validate.hasValidation()) {
    //   return validate;
    // }

    const result = this.svcAuth.Mock_validacaoUsuario(this.FormLogin);

    if (result === false) {
      return Helper.showMessageError('E-mail ou senha invalidos.');
    }

    // Mock => alterar para post API
    this.svcAuth.getAuthUser().subscribe(
      user => {
        this.svcAuth.AuthenticationUser(user);
      }
    );
  }
}
