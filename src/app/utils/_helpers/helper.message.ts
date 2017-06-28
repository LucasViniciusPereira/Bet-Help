import { Enumerations } from './../enumerations';
declare var $: any;

export abstract class HelperMessage {
    static displayLength = 6000;

    /** @description Exibe as mensagens amigáveis do sistema
     * @param {Enumerations.eTypeMessage} typeMessage Enumerador com os tipos de mensagens WARNING | SUCCESS | ERROR | INFO.  
     * @param {any[]:message} message Array com as mensagens
     */
    static showMessage(typeMessage: Enumerations.eTypeMessage, message: any[]) {
    
        switch (typeMessage) {
            case Enumerations.eTypeMessage.WARNING:
                message.forEach(element => {
                    //Materialize.toast(element.message, this.displayLength, 'message-warning');
                });
                break;
            case Enumerations.eTypeMessage.SUCCESS:
                message.forEach(element => {
                    //Materialize.toast(element.message, this.displayLength, 'message-success');
                });
                break;
            case Enumerations.eTypeMessage.ERROR:
                message.forEach(element => {
                   $.snackbar({content: "This is my awesome snackbar!"});
                    //Materialize.toast(element.message, this.displayLength, 'message-error');
                });
                break;
            case Enumerations.eTypeMessage.INFO:
                message.forEach(element => {
                    //Materialize.toast(element.message, this.displayLength, 'message-info');
                });
                break;
            default:
                //Materialize.toast('Ocorreu algum erro na aplicação, favor tentar novamente.', this.displayLength);
                break;
        }
    }

    /** @description Exibe as mensagens de Erro
    * @param {string:message} message String com a mensagem
    */
    static showMessageError(message: string) {
       $.snackbar({content: "This is my awesome snackbar!"});
        //Materialize.toast(message, this.displayLength, 'message-error');
    }

    /** @description Exibe as mensagens de Sucessp
   * @param {string:message} message String com a mensagem
   */
    static showMessageSuccess(message: string) {
        debugger;
        //Materialize.toast(message, this.displayLength, 'message-success');
    }
}