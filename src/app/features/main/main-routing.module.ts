import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';



const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),    
        
      },
      {
        path: 'procedimento',
        loadChildren: () => import('./procedimento/procedimento.module').then(mod => mod.ProcedimentoModule),    
        
      },
      {
        path: 'empresa',
        loadChildren: () => import('./empresa/empresa.module').then(mod => mod.EmpresaModule),    
        
      },
      {
        path: 'usuario',
        loadChildren: () => import('./usuario/usuario.module').then(mod => mod.UsuarioModule),    
        
      }
    ]
  }
  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

