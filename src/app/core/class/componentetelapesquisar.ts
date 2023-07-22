import { MensagemService } from './../../shared/mensagem/service/mensagem.service';
import { MSG_CONFIRMAR_EXCLUSAO } from './../const/mensagens';
import { ComponenteTela } from './componentetela';

export class ComponenteTelaPesquisar extends ComponenteTela{

    constructor(
        public override mensagemService: MensagemService
    ){
        super(mensagemService);
    }
    
    colunas = [];
    dados = [];    
}

