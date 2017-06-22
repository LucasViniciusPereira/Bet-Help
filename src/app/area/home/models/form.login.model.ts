import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

export class FormLoginModel extends FormGroup {

    email: FormControl;
    password: FormControl;

    constructor() {
        super(null);
        
        this.email.setValidators([Validators.required, Validators.email]);
        this.password.setValidators([Validators.required, Validators.minLength(4)]);
    }
}