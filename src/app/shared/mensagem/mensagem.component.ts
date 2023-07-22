import { NgZone, AfterViewInit, DoCheck, OnDestroy, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Component, EventEmitter, Output, Input, ViewChild, ElementRef, IterableDiffers } from '@angular/core';
import { MensagemService } from './service/mensagem.service';
import { Mensagem } from './service/mensagem';
import { MensagemTipo } from './service/mensagemTipo';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'ge-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent {

  subscription!: Subscription;
  differ: any;  

  constructor(
    public differs: IterableDiffers,
    private messageService: MessageService,
    private mensagemService: MensagemService
  ) {

    this.differ = differs.find([]).create(undefined);

    if (this.mensagemService) {
      this.subscription = this.mensagemService.mensagemObserver.subscribe((message: any) => {

        if (message) {

          this.messageService.add({ severity: message.tipo, summary: message.descricao, detail: message.detalhe, sticky: true });

          // lista de arrays
          /*
          if (messages instanceof Array) {

            messages.forEach((message: Mensagem) => {
              this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
            });

            let filteredMessages = messages.filter(m => this.key === m.key);
            this.value = this.value ? [...this.value, ...filteredMessages] : [...filteredMessages];
          } 
          
          else if (this.key === messages.key) {


            if (messages.tipo != MensagemTipo.INVALID_TOKEN) {

              this.value = this.value ? [...this.value, ...[messages]] : [messages];

            } else {
                            
              this.dialogInvalidToken = true;
              this.value = this.value ? [...this.value, ...[messages]] : [messages];
              
            }

          }
          */

        }else{
          this.messageService.clear();
        }
        /*
        else {
          this.value = null;
        }
        */

      });
    }

  }
  
  /*
  construirMensagem(){

    this.mensagemService.mensagemObserver

    this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
  }
  */

  onReject(){

  }

  onConfirm(){

  }

  /*
  onMessageClick(i: any) {
  }

  onMessageHover(i: any) {
  }

  ngOnDestroy() {
    if (!this.sticky) {
      clearTimeout(this.timeout);
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  set sticky(value: boolean) {
    if (value && this.timeout) {
      clearTimeout(this.timeout);
    }
    this._sticky = value;
  }
  */
  

}
