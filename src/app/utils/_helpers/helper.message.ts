import { Enumerations } from './../enumerations';

declare var $: any;
const Snackbar = require('node-snackbar');

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
                    this.ShowSnackBar(message, 'message-warning');
                });
                break;
            case Enumerations.eTypeMessage.SUCCESS:
                message.forEach(element => {
                    this.ShowSnackBar(message, 'message-success');
                });
                break;
            case Enumerations.eTypeMessage.ERROR:
                message.forEach(element => {
                    this.ShowSnackBar(element.message, 'message-error');
                });
                break;
            case Enumerations.eTypeMessage.INFO:
                message.forEach(element => {
                    this.ShowSnackBar(element.message, 'message-info');
                });
                break;
            default:
                this.ShowSnackBar('Ocorreu algum erro na aplicação, favor tentar novamente.', 'default');
                break;
        }
    }

    /** @description Exibe as mensagens de Erro
    * @param {string:message} message String com a mensagem
    */
    static showMessageError(message: string) {
        this.ShowSnackBar(message, 'message-error');
    }

    /** @description Exibe as mensagens de Sucessp
   * @param {string:message} message String com a mensagem
   */
    static showMessageSuccess(message: string) {
        this.ShowSnackBar(message, 'message-success');
    }

    private static ShowSnackBar(message, className = '1', position = 'top-right') {
        Snackbar.show({
            text: message,
            customClass: 'message-error',
            duration: this.displayLength,
            showActionButton: false,
            pos: position
        });
    }
}
