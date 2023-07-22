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
import { TabelaSigTabFiltro } from '../../../tabelasigtab/model/tabelasigtabfiltro';
import { ActivatedRoute, Router } from '@angular/router';
import { DropdownItem } from '../../../../../shared/dropdown/dropdownitem';
import { UsuarioUtils } from '../../../usuario/service/usuarioutils';
import { EmpresaUtils } from '../../../empresa/service/empresautils';
import { CompetenciaUtils } from '../../../competencia/service/competenciautils';
import { CompetenciaService } from '../../../competencia/service/competencia.service';
import { CompetenciaFiltro } from '../../../competencia/model/competenciafiltro';
import { TabelaSigTabUtils } from '../../../tabelasigtab/service/tabelasigtabutils';
import { MensagemService } from '../../../../../shared/mensagem/service/mensagem.service';

@Component({
  selector: 'app-procedimentomanter',
  templateUrl: './procedimento-manter.component.html',
  styleUrls: ['./procedimento-manter.component.scss']
})
export class ProcedimentoManterComponent implements OnInit {

  listaProcedimento: any[] = [];
  //procedimentoFiltro: ProcedimentoFiltro = new ProcedimentoFiltro;
  procedimento: Procedimento = new Procedimento;

  carregandoUsuario: boolean = false;
  listaUsuarioItem: DropdownItem[] = [];

  carregandoEmpresa: boolean = false;
  listaEmpresaItem: DropdownItem[] = [];

  carregandoCompetencia: boolean = false;
  listaCompetenciaItem: DropdownItem[] = [];

  //listaUsuarioItem: DropdownItem[] = [];
  //listaEmpresa: Empresa[] = [];


  carregandoTabelaSigTab: boolean = false;
  listaTabelaSigTabItem: DropdownItem[] = [];
  listaTabelaSigTabItemSelecionada: DropdownItem[] = [];

  value: number = 0;
  valuetext: string = "";

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private procedimentoService: ProcedimentoService,
    private empresaService: EmpresaService,
    private empresaUtils: EmpresaUtils,
    private usuarioService: UsuarioService,
    private usuarioUtils: UsuarioUtils,
    private competenciaService: CompetenciaService,
    private competenciaUtils: CompetenciaUtils,
    private tabelaSigTabService: TabelaSigTabService,
    private tabelaSigTabUtils: TabelaSigTabUtils,
    private mensagemService: MensagemService
    

  ) { }

  ngOnInit(): void {

    //console.log(this._router.getCurrentNavigation().extras.state);

    console.log(history.state);

    this.carregandoEmpresa = true;
    this.empresaService.consultar(new EmpresaFiltro).subscribe({
      next: (data: any) => {
        this.listaEmpresaItem = this.empresaUtils.converterEmpresaParaItem(data.conteudo);
      },
      error: (err) => {console.log(err);this.carregandoEmpresa = false;},
      complete: () => {this.carregandoEmpresa = false;},
    }
    );

    this.carregandoUsuario = true;
    this.usuarioService.consultar(new UsuarioFiltro).subscribe({
      next: (data: any) => {
        this.listaUsuarioItem = this.usuarioUtils.converterUsuarioParaItem(data.conteudo);
      },
      error: (err) => {console.log(err);this.carregandoUsuario = false;},
      complete: () => {this.carregandoUsuario = false;},
    }
    );

    this.carregandoCompetencia = true;
    this.competenciaService.consultar(new CompetenciaFiltro).subscribe({
      next: (data: any) => {
        this.listaCompetenciaItem = this.competenciaUtils.converterCompetenciaParaItem(data.conteudo);
      },
      error: (err) => {console.log(err);this.carregandoCompetencia = false;},
      complete: () => {this.carregandoCompetencia = false;},
    }
    );

    this.carregandoTabelaSigTab = true;
    this.tabelaSigTabService.consultar(new TabelaSigTabFiltro).subscribe({
      next: (data: any) => {
        this.listaTabelaSigTabItem = this.tabelaSigTabUtils.converterTabelaSigTabParaItem(data.conteudo);
      },
      error: (err) => {console.log(err); this.carregandoTabelaSigTab = false;},
      complete: () => {this.carregandoTabelaSigTab = false;},
    }
    );
    

  }  

  voltar(){

    this._router.navigateByUrl('/main/procedimento', {state: {operacao:"consultar"}});
    //this._router.navigateByUrl('/main/procedimento');

  }
  
  salvar(){
    this.mensagemService.clear();
    let listaTabelaSigTab: TabelaSigTab[] = [];
    this.listaTabelaSigTabItemSelecionada.forEach( (item) => {
      let tabelaSigTab: TabelaSigTab = new TabelaSigTab;
      tabelaSigTab.id = item.codigo;
      listaTabelaSigTab.push(tabelaSigTab);
    }
    );

    this.procedimento.tabelaSigTap = listaTabelaSigTab;

    console.log(this.procedimento);
    this.procedimentoService.incluir(this.procedimento).subscribe({
      next: (data: any) => {
        console.log(data);
        this.mensagemService.construirMensagem(data.status);
      },
      error: (err) => {console.log(err); this.carregandoTabelaSigTab = false;},
      complete: () => {this.carregandoTabelaSigTab = false;},
    }
    );

  }

  testePerderfoco(){
    alert("Teste");
  }

  

}
