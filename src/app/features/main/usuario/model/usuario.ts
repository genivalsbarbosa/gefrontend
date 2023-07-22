import { Entidade } from "./../../../../core/class/entidade";

export class Usuario extends Entidade {

    constructor() {
        super();
    }

    dataUltAlteracao!: string;
    nome!: string;
    cpf!: string;
    passWord!: string;
    role!: string;
    login!: string;

    listId!: string[];
    
}