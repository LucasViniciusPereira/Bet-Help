import { Component, OnInit, EventEmitter } from '@angular/core';
import { Pipe } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


import { HomeService } from './../services/home.service';
//import { GlobalService } from './../../shared/services/global.service';
import { AuthService } from './../services/auth.service';
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
    private svcHome: HomeService,
    //private svcGlobal: GlobalService,
    private svcAuth: AuthService,
    private fb: FormBuilder
  ) {
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
    
    //Mock => alterar para post API
    this.svcHome.getAuthUser().subscribe(
      user => {
        this.svcAuth.AuthenticationUser(user);
      }
    );
  }
}