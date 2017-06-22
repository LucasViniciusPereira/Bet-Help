import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './../services/auth.service';
import { UserModel } from './../models/user.model';
import { ValidateException } from '../../../shared/decorators/validate.exception';
import { Helper } from './../../../utils/helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario: UserModel;
  FormLogin: FormGroup;

  constructor(
    private svcAuth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    if (this.svcAuth.UserIsAuthenticate)
      this.router.navigate(['/']);
  }

  createForm() {
    this.FormLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  @ValidateException
  public submit() {

    this.usuario = new UserModel();
    this.usuario.email = this.FormLogin.get('email').value;
    this.usuario.senha = this.FormLogin.get('password').value;

    var validate = this.usuario.ValidateUserLogin(this.usuario);

    if (validate.hasValidation()) {
      return validate;
    }

    var result = this.svcAuth.Mock_validacaoUsuario(this.usuario);

    if (result == false) {
      return Helper.showMessageError('E-mail ou senha invalidos.');
    }

    //Mock => alterar para post API
    this.svcAuth.getAuthUser().subscribe(
      user => {
        this.svcAuth.AuthenticationUser(user);
      }
    );
  }
}