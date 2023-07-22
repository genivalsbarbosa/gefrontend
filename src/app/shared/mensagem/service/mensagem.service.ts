import { Mensagem } from './mensagem';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { RetornoStatus } from './../../../core/class/retornostatus';
import { RetornoMensagem } from './../../../core/class/retornomensagem';

@Injectable()
export class MensagemService {

  private mensagemSource = new Subject<Mensagem | Mensagem[] | undefined>();

  mensagemObserver = this.mensagemSource.asObservable();


  construirMensagem(retornoStatus: RetornoStatus) {
    
    let retornoMensagens: RetornoMensagem[] = retornoStatus.mensagens;
    for (let i = 0; i < retornoMensagens.length; i++) {
      let mensagem: Mensagem = new Mensagem();
      mensagem.tipo = retornoStatus.tipo;
      mensagem.descricao = retornoMensagens[i].mensagem;
      mensagem.detalhe = retornoMensagens[i].detalhe;
      this.mensagemSource.next(mensagem);

    }

  }

  /*
  construirMensagem_(retornoStatus: RetornoStatus) {
    let retornoMensagens: RetornoMensagem[] = retornoStatus.mensagens;

    for (let i = 0; i < retornoMensagens.length; i++) {
      let mensagem: Mensagem = new Mensagem();
      let solucao: string = (retornoMensagens[i].sSolucao == '') ? '' : (' Solução: ' + retornoMensagens[i].sSolucao);

      mensagem.tipo = retornoStatus.sTipo;
      let mensagemFormatada = retornoMensagens[i].sMensagem.trim();
      mensagem.descricao = mensagemFormatada + "." + solucao;

      if (retornoMensagens[i].sDetalhe != '' || retornoMensagens[i].sContexto != '') {

        mensagem.detalhe = ((retornoMensagens[i].sDetalhe == '') ? '' : (' Detalhe: ' + retornoMensagens[i].sDetalhe))
          + 
          ((retornoMensagens[i].sContexto == '') ? '' : (' Contexto: ' + retornoMensagens[i].sContexto)) + ".";
      }
      else {
        mensagem.detalhe = '';
      }
      this.mensagemSource.next(mensagem);
    }
  }
  */

  /*
  obterMensagem(retornoStatus: RetornoStatus) {
    let retornoMensagens: RetornoMensagem[] = retornoStatus.mensagens;
    let mensagem: string = '';

    for (let i = 0; i < retornoMensagens.length; i++) {
      mensagem = mensagem + retornoMensagens[i].mensagem;
    }
    return mensagem;
  }
  */

  add(mensagem: Mensagem) {
    if (mensagem) {
      if (mensagem.descricao == null) {
        mensagem.descricao = '';
      }
      this.mensagemSource.next(mensagem);
    }
  }

  addAll(mensagens: Mensagem[]) {
    if (mensagens && mensagens.length) {
      this.mensagemSource.next(mensagens);
    }
  }

  clear() {
    this.mensagemSource.next(undefined);
  }

}
