import { Entidade } from "./../../../../core/class/entidade";

export class Competencia extends Entidade {

    constructor() {
        super();
    }

    dataUltAlteracao!: string;
    descricao!: string;
}