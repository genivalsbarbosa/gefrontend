import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedimentoComponent } from './componentes/inicial/procedimento.component';
import { ProcedimentoManterComponent } from './componentes/manter/procedimento-manter.component';


const routes: Routes = [
  {
    path: '',
    component: ProcedimentoComponent
  },
  {
    path: 'incluir',
    component: ProcedimentoManterComponent,
    data: {'operacao': 'incluir'}
  },
  {
    path: 'alterar',
    component: ProcedimentoManterComponent,
    data: {'operacao': 'alterar'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedimentoRoutingModule { }

