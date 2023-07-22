import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ProcedimentoRoutingModule } from './procedimento-routing.module';
import { ProcedimentoComponent } from './componentes/inicial/procedimento.component';
import { Interceptor } from './../../../core/interceptors/interceptor.module';
import { ProcedimentoService } from './service/procedimento.service';
import { UsuarioService } from '../usuario/service/usuario.service';
import { EmpresaService } from '../empresa/service/empresa.service';
import { TabelaSigTabService } from '../tabelasigtab/service/tabelasigtab.service';
import { ProcedimentoManterComponent } from './componentes/manter/procedimento-manter.component';
import { PickListModule } from 'primeng/picklist';
import { InputTextModule } from 'primeng/inputtext';
import { UsuarioUtils } from '../usuario/service/usuarioutils';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { EmpresaUtils } from '../empresa/service/empresautils';
import { CompetenciaService } from '../competencia/service/competencia.service';
import { CompetenciaUtils } from '../competencia/service/competenciautils';
import { TabelaSigTabUtils } from '../tabelasigtab/service/tabelasigtabutils';


@NgModule({
  declarations: [
    ProcedimentoComponent, 
    ProcedimentoManterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Interceptor,
    ProcedimentoRoutingModule,
    SharedModule,
    PickListModule,
    InputTextModule,
    TableModule,
    CalendarModule
  ],
  providers: [
    ProcedimentoService,
    UsuarioService,
    EmpresaService,
    TabelaSigTabService,
    CompetenciaService,
    UsuarioUtils,
    EmpresaUtils,
    CompetenciaUtils,
    TabelaSigTabUtils
  ]
})
export class ProcedimentoModule { }

