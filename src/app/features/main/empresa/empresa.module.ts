import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { Interceptor } from './../../../core/interceptors/interceptor.module';
import { EmpresaService } from '../empresa/service/empresa.service';
import { PickListModule } from 'primeng/picklist';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { EmpresaComponent } from './componentes/inicial/empresa.component';
import { EmpresaManterComponent } from './componentes/manter/empresa-manter.component';
import { EmpresaRoutingModule } from './empresa-routing.module';


@NgModule({
  declarations: [
    EmpresaComponent, 
    EmpresaManterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Interceptor,
    EmpresaRoutingModule,
    SharedModule,
    PickListModule,
    InputTextModule,
    TableModule,
    CalendarModule
  ],
  providers: [
    EmpresaService
  ]
})
export class EmpresaModule { }

