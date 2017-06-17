import { Enumerations } from './enumerations';
declare var Materialize: any;

export class Helper {

    /** @description Exibe as mensagens amigáveis do sistema
     * @param {Enumerations.eTypeMessage} typeMessage Enumerador com os tipos de mensagens WARNING | SUCCESS | ERROR | INFO.  
     * @param {any[]:message} message Array com as mensagens
     */  
    static showMessage(typeMessage: Enumerations.eTypeMessage, message: any[]) {
        let displayLength = 6000;

        switch (typeMessage) {
            case Enumerations.eTypeMessage.WARNING:
                message.forEach(element => {
                    Materialize.toast(element.message, displayLength, 'message-warning');
                });
                break;
            case Enumerations.eTypeMessage.SUCCESS:
                message.forEach(element => {
                    Materialize.toast(element.message, displayLength, 'message-success');
                });
                break;
            case Enumerations.eTypeMessage.ERROR:
                message.forEach(element => {
                    Materialize.toast(element.message, displayLength, 'message-error');
                });
                break;
            case Enumerations.eTypeMessage.INFO:
                message.forEach(element => {
                    Materialize.toast(element.message, displayLength, 'message-info');
                });
                break;
            default:
                Materialize.toast('Ocorreu algum erro na aplicação, favor tentar novamente.', displayLength);
                break;
        }
    }
}