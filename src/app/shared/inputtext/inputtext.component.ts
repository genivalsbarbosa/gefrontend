//import { CAMPO_REQUERIDO } from './../sistema/const/mensagens';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
//import Utils from '../sistema/util/utils';

//import * as $ from "jquery";

@Component({
  selector: 'ge-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.scss']
})
export class InputtextComponent implements OnInit {

  @Input('identificador') identificador: string = '';
  @Input('nome') nome: string = '';
  @Input('obrigatorio') obrigatorio: boolean = false;
  @Input('tamanho') tamanho: number = 4000;
  //@Input('apenasnumero') apenasnumero: boolean = false;
  //@Input('apenasxponto') apenasxponto: boolean = false;
  //@Input('uppercase') uppercase: boolean = false;
  @Input('desabilitar') desabilitar: boolean = false;
  @Output("valorChange") valorChange = new EventEmitter();
  @Input("valor") set setValor(valor: string | number) {
    this.valor = valor;
  }
  valor: string | number = "";
  //@Input() alfanumerico: boolean = false;

  
  
  @Output('perderfoco') perderfoco: EventEmitter<string> = new EventEmitter();

  

  constructor() { }

  ngOnInit() {
    //Utils.validaAlfaNumerico(this.alfanumerico, this.identificador);
  }

  ngAfterViewInit() {
    //Utils.validaAlfaNumerico(this.alfanumerico, this.identificador);
  }

  @ViewChild('receber')
  input!: ElementRef;

  cliqueLabel() {
    this.input.nativeElement.focus();
  }

  /*
  enviarValor(valor: string): void {

    if(this.uppercase){
      this.valorChange.emit(valor.toUpperCase());
    }else{
      this.valorChange.emit(valor);
    }
  }
  */

  onblurr(valor: string){
    this.perderfoco.emit(valor);
    this.valorChange.emit(valor);
  }

  
}
