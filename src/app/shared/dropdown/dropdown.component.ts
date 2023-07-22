import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DropdownItem } from './dropdownitem';

@Component({
  selector: 'ge-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input('identificador') identificador: string = '';
  @Input('nome') nome: string = '';
  @Output('focus') focus = new EventEmitter();
  @Input('carregando') carregando: boolean = false;
  @Input('listaitem') listaitem: DropdownItem[] = [];
  /*
  @Input('listaitem') set setopcao(valor){
    this.opcao = valor;
    if (this.valorInicial != null && this.valorInicial.codigo != null && this.valorInicial.codigo != '') {
      if (this.opcao != null && this.opcao.length) {
        for (let i = 0; i < this.opcao.length; i++) {
          if (this.opcao[i].codigo == this.valorInicial.codigo) {
            this.valorInicial = this.opcao[i];
            this.showClear = true;

            break;
          }
        }
      }
    }

  }
  opcao = [];
  */

  //@Output("onChange") onChange = new EventEmitter();
  @Output("itemChange") itemChange = new EventEmitter<number>();
  @Input("item") set setItem(item: number) {
    this.item = item;
    this.itemObjeto.codigo = item;
  }
  item: number = 0;
  itemObjeto: DropdownItem = new DropdownItem();

  /*
  @Output('valor') valor = new EventEmitter();
  @Input('valorInicial') set setValorInicial(value) {
    if (value != null) {
      this.valorInicial = value;
      if (this.opcao != null && this.opcao.length) {
        for (let i = 0; i < this.opcao.length; i++) {
          if (this.opcao[i].codigo == this.valorInicial.codigo) {
            this.valorInicial = this.opcao[i];
            this.showClear = true;

            break;
          }
        }
      }
    } else {
      this.valorInicial = { codigo: "", nome: "" };
    }
  }
  */
  
  @Input('obrigatorio') obrigatorio: boolean = false;

  @Input('desabilitar') desabilitar: boolean = false;

  /*
  @Input('desabilitar') set setDesabilitar(desabilitar: boolean) {
    this.desabilitar = desabilitar;
    this.textoPlaceHolder = MSG_SELECIONE_UMA_OPCAO;

    if (desabilitar && (this.valorInicial == null || this.valorInicial.nome == null || this.valorInicial.nome.length == 0)) {
      this.textoPlaceHolder = " ";
    }
  }

  desabilitar: boolean = false;
  */

  constructor() { }

  ngOnInit() {
    // if (this.desabilitar == true
    //   && (this.valorInicial == null
    //     || this.valorInicial.nome == null
    //     || this.valorInicial.nome.length == 0)
    //   ) {
    //   this.textoPlaceHolder = " ";
    // }
  }

  ngAfterViewInit() {
    // if (this.desabilitar == true
    //   && (this.valorInicial == null
    //     || this.valorInicial.nome == null
    //     || this.valorInicial.nome.length == 0)
    //   ) {
    //   this.textoPlaceHolder = " ";
    // }
  }

  /*
  ngOnChanges () {
    this.validarShowClear();
  }

  enviarValor(valor) {

    if (valor != {}) {
      this.mensagem = '';
      this.mensagememitter.emit(this.mensagem);
    }
    if (valor != null) {
      this.valor.emit(valor.codigo);
      this.showClear = true;
    } else {
      this.valor.emit('');
      this.showClear = false;
    }
  }

  onClick() {
    this.cliqueBotaoHistorico.emit();
  }

  onFocus(e) {
    $("." + e.srcElement.className).closest(".form-control").addClass("ativa");
    this.focus.emit();
  }

  onBlur(e) {
    $("." + e.srcElement.className).closest(".form-control").removeClass("ativa");
  }
  */

  onChangee(){
    let item: number = 0;
    if(this.item != null){
      item = this.item;
    }
    this.itemChange.emit(item);
    //this.itemChange.emit(item);
    //this.onChange.emit(item);
  }

  focuss(){
    this.focus.emit();
  }

  //@ViewChild('receber')
  //input!: ElementRef;

  cliqueLabel() {
    //this.input.containerViewChild.nativeElement.click();
    //this.input.nativeElement.containerViewChild.nativeElement.click();
  }

  // Selecionar automaticamente através da digitação no campo de pesquisa
  /*
  onKeyup(valorDigitado) {
    let valor = '';
    valor = valorDigitado.trim();

    setTimeout(()=>{
      for(let i in this.opcao) {
        if(this.opcao[i].nome.toLowerCase() === valor.toLowerCase() || this.opcao[i].codigo.toLowerCase() === valor.toLowerCase()) {
          this.valorInicial = this.opcao[i];
          this.showClear = true;
          break;
        }
      }
    }, 400);
  }
  */

  /*
  validarShowClear(){
    this.showClear = false;

    if (this.valorInicial != null && this.valorInicial.codigo != null && this.valorInicial.codigo != '') {
      this.showClear = true;
    }
  }
  */

}
