import { List } from 'linqts';

export class JogoDetailsModel {

    descricao: string;
    mercados: List<Mercados>;

    constructor() {
    }

}

class Mercados {
    mercadoID: number;
    descricao: string;
}