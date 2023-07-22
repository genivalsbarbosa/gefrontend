/*
import { forwardRef, Inject } from "@angular/core";
import { MensagemService } from "../../mensagem/service/mensagem.service";
import Utils from "./utils";
import { MensagemTipo } from "../../mensagem/service/mensagemTipo";
import { Mensagem } from "../../mensagem/service/mensagem";



export class ConsultorGenerico {

    constructor(
        @Inject(forwardRef( () => MensagemService )) public mensagemService: MensagemService,
    ) {}

    consultar<T>(filtro: any, service: any, callback) {

		service.consultar( filtro ).subscribe(
            (data) => {

				const listaFormatada: T[] = <T[]> Utils.obterRetornoConteudo(data);
                this.mensagemService.construirMensagem(Utils.obterRetornoStatus(data));
                console.log("RESPOSTA_GENERICO:: ", listaFormatada );
                callback( listaFormatada );

			},

			(error) => {
				this.mensagemService.add(new Mensagem(MensagemTipo.ERRO, '', '', error));
			}
        );
    }

    inserir<T>(objeto: any, service: any, callback) {
        service.incluir( objeto ).subscribe(
            (data) => {
                this.mensagemService.construirMensagem(Utils.obterRetornoStatus(data));
                callback( objeto );
            },
            (error) => {
                this.mensagemService.add(new Mensagem(MensagemTipo.ERRO, '', '', error));
            }
        );
    }

    excluir<T>(objeto: any, service: any, callback) {
        service.excluir( objeto ).subscribe(
            (data) => {
                this.mensagemService.construirMensagem(Utils.obterRetornoStatus(data));
                callback( objeto );
            },
            (error) => {
                this.mensagemService.add(new Mensagem(MensagemTipo.ERRO, '', '', error));
            }
        );
    }

    alterar<T>(objeto: any, service: any, callback) {
        service.alterar( objeto ).subscribe(
            (data) => {
                this.mensagemService.construirMensagem(Utils.obterRetornoStatus(data));
                callback( objeto );
            },
            (error) => {
                this.mensagemService.add(new Mensagem(MensagemTipo.ERRO, '', '', error));
            }
        );
    }

    consultarUm<T>(objeto: any, service: any, callback) {
        service.consultarUm(objeto).subscribe(
            (data) => {
                this.mensagemService.construirMensagem(Utils.obterRetornoStatus(data));
                console.log("GENERICO: ", objeto);
                callback( objeto );
            },
            (error) => {
                this.mensagemService.add(new Mensagem(MensagemTipo.ERRO, '', '', error));
            });

    }


} 

*/