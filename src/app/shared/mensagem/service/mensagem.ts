import { MSG_ERRO_INESPERADO, MSG_PROBLEMA_CONEXAO_REDE } from "./../../../core/const/mensagens";


export class Mensagem {

    constructor(tipo?: string, descricao?: string, detalhe?: string){
        this.tipo = tipo;
        this.descricao = descricao;
        this.detalhe = detalhe;
    }

    tipo?: string = '';
    descricao?: string = '';
    detalhe?: string = '';

}