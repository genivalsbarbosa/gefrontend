import { Entidade } from "./../../../core/class/entidade";

export class Login extends Entidade {

    constructor() {
        super();
    }

    Usuario: string= 'ecoelho';
    Password: string= '123456';
    Role: string= '';
}