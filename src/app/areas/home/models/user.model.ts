import { Validation } from '../../../shared/class/business.validation';

export class UserModel {

    public nome: string;
    public email: string;
    public senha: string;
    public tokenID: string;

    constructor() {
    }

    // /** @description Validação do usuario para efetuar login   
    //  * @param {UserModel} user Objeto UserModel  
    //  * @return {BusinessValidation}  
    //  */  
    // public ValidateUserLogin(user: any): Validation.BusinessValidation {
    //     let validation: Validation.BusinessValidation = new Validation.BusinessValidation;
        
    //     if (user == null || user == undefined) 
    //         validation.addValidation(new Validation.RuleValidationSimple('O usuário não foi preenchido.'));

    //     if (user.email == null || user.email == undefined)
    //         validation.addValidation(new Validation.RuleValidationSimple('O campo [e-mail] não foi preenchido.'));

    //     if (user.senha == null || user.senha == undefined)
    //         validation.addValidation(new Validation.RuleValidationSimple('O campo [senha] não foi preenchido.'));

    //     return validation;
    // }
} 