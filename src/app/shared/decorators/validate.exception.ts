import { Validation } from '../../shared/class/business.validation';
import { Enumerations } from '../../utils/enumerations';
import { Helper } from '../../utils/helper';

/** @description Decorator Validation custom: Serve para capturar as validaçoes da aplicação, evitando usar o {try; cath;}
 * @param {Object} target Protótipo da classe que possui o método.
 * @param {string} propertyKey Nome do método em que estamos aplicando o decorator. Pode ser um string ou um Symbol
 * @param {TypedPropertyDescriptor} descriptor Uma instância da insterface TypedPropertyDescriptor
 * @return {TypedPropertyDescriptor}
 */
export function ValidateException(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {

  // salvando uma referência para o método original
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    try {
      const result = originalMethod.apply(this, args);

      // if(result as Validation.BusinessValidation)
      if (result && result.constructor.name === 'BusinessValidation') {
        return Helper.showMessage(Enumerations.eTypeMessage.ERROR, result.validations);
      }

      if (result) {
        return result;
      }

    } catch (e) {
      const msg = [{
        message: `${e.name} : Ocorreu algum erro na aplicação, favor tentar novamente.`
      }]

      return Helper.showMessage(Enumerations.eTypeMessage.WARNING, msg);
    }
  };
  return descriptor;
}
