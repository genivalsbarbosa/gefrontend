import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './componentes/inicial/usuario.component';
import { UsuarioManterComponent } from './componentes/manter/usuario-manter.component';


const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent
  },
  {
    path: 'incluir',
    component: UsuarioManterComponent,
    data: {'operacao': 'incluir'}
  },
  {
    path: 'alterar',
    component: UsuarioManterComponent,
    data: {'operacao': 'alterar'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

