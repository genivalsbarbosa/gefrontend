import { Entidade } from "./../../../../core/class/entidade";

export class UsuarioFiltro extends Entidade {

    constructor() {
        super();
    }

    nome: string = "";
    cpf: string = "";
    role: string = "";
    login: string = "";
    listId: any[] = [];
}