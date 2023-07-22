import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/login/login.module').then(mod => mod.LoginModule),    
  },
  {
    path: 'main',
    loadChildren: () => import('./features/main/main.module').then(mod => mod.MainModule), 
    //canActivate: [AuthGuard]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
