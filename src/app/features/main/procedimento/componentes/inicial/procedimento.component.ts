import { Component, OnInit } from '@angular/core';
import { Procedimento } from '../../model/procedimento';
import { ProcedimentoFiltro } from '../../model/procedimentofiltro';
import { ProcedimentoService } from '../../service/procedimento.service';
import { EmpresaService } from '../../../empresa/service/empresa.service';
import { UsuarioService } from '../../../usuario/service/usuario.service';
import { TabelaSigTabService } from '../../../tabelasigtab/service/tabelasigtab.service';
import { Usuario } from '../../../usuario/model/usuario';
import { Empresa } from '../../../empresa/model/empresa';
import { TabelaSigTab } from '../../../tabelasigtab/model/tabelasigtab';
import { EmpresaFiltro } from '../../../empresa/model/empresafiltro';
import { UsuarioFiltro } from '../../../usuario/model/usuariofiltro';
import { Router } from '@angular/router';
import { EmpresaUtils } from '../../../empresa/service/empresautils';
import { DropdownItem } from '../../../../../shared/dropdown/dropdownitem';
import { UsuarioUtils } from '../../../usuario/service/usuarioutils';
import { MensagemService } from 'src/app/shared/mensagem/service/mensagem.service';
import { RetornoStatus } from 'src/app/core/class/retornostatus';
import { MensagemTipo } from 'src/app/shared/mensagem/service/mensagemTipo';
import { RetornoMensagem } from 'src/app/core/class/retornomensagem';

@Component({
  selector: 'app-procedimento',
  templateUrl: './procedimento.component.html',
  styleUrls: ['./procedimento.component.scss']
})
export class ProcedimentoComponent implements OnInit {

  listaProcedimento: any[] = [];
  procedimentoFiltro: ProcedimentoFiltro = new ProcedimentoFiltro;

  //listaUsuario: Usuario[] = [];
  carregandoUsuario: boolean = false;
  listaUsuarioItem: DropdownItem[] = [];
  //listaEmpresa: Empresa[] = [];
  //listaUsuarioItem: DropdownItem[] = [];
  carregandoEmpresa: boolean = false;
  listaEmpresaItem: DropdownItem[] = [];
  //listaTabelaSigTab: TabelaSigTab[] = [];

  constructor(
    private _router: Router,
    private procedimentoService: ProcedimentoService,
    private empresaService: EmpresaService,
    private usuarioService: UsuarioService,
    private empresaUtils: EmpresaUtils,
    private usuarioUtils: UsuarioUtils,
    private mensagemService: MensagemService
  ) { }

  ngOnInit(): void {
    console.log(history.state);
    this.mensagemService.clear();
  }

  carregarEmpresa(){
    
    if(this.listaEmpresaItem.length == 0){
      this.carregandoEmpresa = true;
      this.empresaService.consultar(new EmpresaFiltro).subscribe({
        next: (data: any) => {
          this.listaEmpresaItem = this.empresaUtils.converterEmpresaParaItem(data.conteudo);
        },
        error: (err) => {console.log(err);this.carregandoEmpresa = false;},
        complete: () => {this.carregandoEmpresa = false;},
      }
      );
    }
  }

  carregarUsuario(){
    
    if(this.listaUsuarioItem.length == 0){
      this.carregandoUsuario = true;
      this.usuarioService.consultar(new UsuarioFiltro).subscribe({
        next: (data: any) => {
          this.listaUsuarioItem = this.usuarioUtils.converterUsuarioParaItem(data.conteudo);
        },
        error: (err) => {console.log(err);this.carregandoUsuario = false;},
        complete: () => {this.carregandoUsuario = false;},
      }
      );
    }
  }

  pesquisar(){
    console.log(this.procedimentoFiltro);

    /*
    let retornoStatus: RetornoStatus = new RetornoStatus();
    retornoStatus.sTipo = MensagemTipo.SUCESSO;

    let retornoMensagem1: RetornoMensagem = new RetornoMensagem();
    retornoMensagem1.sMensagem = "teste1";
    let retornoMensagem2: RetornoMensagem = new RetornoMensagem();
    retornoMensagem2.sMensagem = "teste2";
    retornoStatus.mensagens.push(retornoMensagem1);
    retornoStatus.mensagens.push(retornoMensagem2);

    this.mensagemService.construirMensagem(retornoStatus);
    */

    this.mensagemService.clear();
    this.procedimentoService.consultargrid(this.procedimentoFiltro).subscribe({
      next: (data: any) => {
        //console.log(data);
        this.listaProcedimento = data.conteudo;
        console.log(this.listaProcedimento);

        this.mensagemService.construirMensagem(data.status);
      },
      error: (err) => {console.log(err)},
      complete: () => {console.log('Info complete')},
    }
    );
  }

  incluir(){
    //this._router.navigate(['/main/procedimento/incluir', {operacao:"incluir", procedimentoFiltro: this.procedimentoFiltro}]);
    this._router.navigateByUrl('/main/procedimento/incluir', {state: {operacao:"incluir", procedimentoFiltro: this.procedimentoFiltro}});
    //this._router.navigate(['incluir', {p1: this.property1, p2: property2 }]);

  }

  preencherEmpresa(objeto: any){
    console.log(objeto);
    //console.log(objeto.target.value);
    //this.procedimentoFiltro.empresaFiltro.id = id;
    //procedimentoFiltro.empresaFiltro.id = $event.target.value
  }

}
