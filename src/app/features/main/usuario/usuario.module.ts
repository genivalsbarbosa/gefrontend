import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { Interceptor } from './../../../core/interceptors/interceptor.module';
import { PickListModule } from 'primeng/picklist';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { UsuarioComponent } from './componentes/inicial/usuario.component';
import { UsuarioManterComponent } from './componentes/manter/usuario-manter.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioService } from './service/usuario.service';


@NgModule({
  declarations: [
    UsuarioComponent, 
    UsuarioManterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Interceptor,
    UsuarioRoutingModule,
    SharedModule,
    PickListModule,
    InputTextModule,
    TableModule,
    CalendarModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }

