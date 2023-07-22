import { Entidade } from "./../../../../core/class/entidade";

export class EmpresaFiltro extends Entidade {

    constructor() {
        super();
    }

    nome: string = "";
    listId: any[] = [];
}