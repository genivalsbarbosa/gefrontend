import { MSG_CONFIRMAR_EXCLUSAO } from './../const/mensagens';
import { TEMPO_ABRIR_ACCORDION } from './../const/constante';
import { Input, Output, EventEmitter } from '@angular/core';
import { Operacao } from './../enum/operacao';
import Utils from '../util/utils';
import { MensagemService } from './../../shared/mensagem/service/mensagem.service';


export class ComponenteTela{

    constructor(
        public mensagemService: MensagemService
    ){
    }

    //HelpPage: HelpPage = new HelpPage();
    //DropdownPaginadoEntidade: DropdownPaginadoEntidade = new DropdownPaginadoEntidade();

    titulo!: string;
    @Input('operacao') operacao: string = Operacao.PESQUISAR;
    @Input('operacaoOrigem') operacaoOrigem: string = Operacao.PESQUISAR;
    @Input('idobjeto') idobjeto: string = '0';   
    
    carregando: boolean = false;

    validarCampoObrigatorio: boolean = false; 

    dadosRelatorio: any;
    
    dadosSelecionados = [];

    mostrarConfirmacaoExclusao: boolean = false; 
 
    mensagemConfirmacaoExclusao: string = MSG_CONFIRMAR_EXCLUSAO;

    linkhelp: string = '';

    selecionarAccordion: boolean = false;

    limparMensagem: boolean = false;

    executarLimparMensagem(){

        this.limparMensagem = true;
        setTimeout( () => { 
            this.limparMensagem = false; 
        }, 100);

    }

    abrirAccordion () {
        setTimeout( () => { this.selecionarAccordion = true; }, TEMPO_ABRIR_ACCORDION);
    }

    ngOnInit () {        
        this.mensagemService.clear();        
        Utils.irTopo();    
        this.abrirAccordion();
    }
    
    @Output('retorno') retorno: EventEmitter<string> = new EventEmitter();

    voltar(operacaoRetorno: string | undefined){
        this.mensagemService.clear();
        Utils.irTopo();   
        this.retorno.emit(operacaoRetorno);
    }

    public static voltarTitulo(): void {}
    
}
