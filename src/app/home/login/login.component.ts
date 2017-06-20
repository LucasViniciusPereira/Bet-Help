import { Helper } from './../../utils/helper';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Pipe } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HomeService } from './../home.service';
import { GlobalService } from './../../shared/services/global.service';
import { UserModel } from './../class/user.model';
import { ValidateException } from '../../shared/decorators/validate.exception';
import { Enumerations } from '../../utils/enumerations';
import { DisplayValidation } from '../../shared/components/display.validation.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario: UserModel;
  FormLogin: FormGroup;

  constructor(
    private router: Router,
    private svcHome: HomeService,
    private svcGlobal: GlobalService,
    private fb: FormBuilder
  ) {
    //this.usuario = new UserModel();
    this.createForm();
  }

  ngOnInit() {
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
    this.usuario.email = this.FormLogin.controls.email.value;
    this.usuario.senha = this.FormLogin.controls.password.value;
    
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

      //Helper.showMessageSuccess('Usuario Autenticado');
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