export namespace Validation {

  /**
   * @summary Interface for add rule validation aplication
   */
  export interface IRuleValidation {
    message: string;
  }

  /**
   * @summary Tipo concreto de validation para retornar mensagem amigável
   */
  export class BusinessValidation {

    public validations: Array<IRuleValidation>;

    constructor() {
      this.validations = new Array<IRuleValidation>();
    }

    /** @description Adiciona um { IRuleValidation } na lista.
     * @param {IRuleValidation} validate instancia que implemente IRuleValidation
     */
    public addValidation(validate: IRuleValidation) {
      this.validations.push(validate);
    }

    /** @description Verifica se é um BusinessValidation e se exites alguma validação na lista.
     * @return {boolean}
     */
    public hasValidation() {
      return (this.validations && this.validations.length > 0);
    }
  }

  /**
   * @summary Instancia de RuleValidationSimple, implementa IRuleValidation
   */
  export class RuleValidationSimple implements IRuleValidation {
    message: string;

    /**
     * @property {string} _message write a message friendly.
     */
    constructor(_message: string) {
      this.message = _message;
    }
  }
}
