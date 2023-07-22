import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './componentes/inicial/empresa.component';
import { EmpresaManterComponent } from './componentes/manter/empresa-manter.component';


const routes: Routes = [
  {
    path: '',
    component: EmpresaComponent
  },
  {
    path: 'incluir',
    component: EmpresaManterComponent,
    data: {'operacao': 'incluir'}
  },
  {
    path: 'alterar',
    component: EmpresaManterComponent,
    data: {'operacao': 'alterar'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }

