import { ComponenteTela } from './componentetela';
import { MensagemService } from './../../shared/mensagem/service/mensagem.service';

export class ComponenteTelaManter extends ComponenteTela{

    constructor(
        public override mensagemService: MensagemService
    ){
        super(mensagemService);
    }    
    
    
}

