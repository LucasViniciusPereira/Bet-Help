import { Injectable } from '@angular/core';
import { Validation } from '../../shared/class/business.validation';

export class UserModel {

    public nome: string;
    public email: string;
    public senha: string;
    public tokenID: string;

    constructor() {

    }

    /** @description Validação do usuario para efetuar login   
     * @param {UserModel} user Objeto UserModel  
     * @return {BusinessValidation}  
     */  
    public ValidateUserLogin(user: UserModel): Validation.BusinessValidation {
        let validation: Validation.BusinessValidation = new Validation.BusinessValidation;
        
        if (user == null)
            validation.addValidation(new Validation.RuleValidationSimple('O usuário não foi preenchido.'));

        if (user.email == null)
            validation.addValidation(new Validation.RuleValidationSimple('O campo [e-mail] não foi preenchido.'));

        if (user.senha == null)
            validation.addValidation(new Validation.RuleValidationSimple('O campo [senha] não foi preenchido.'));

        return validation;
    }
} 