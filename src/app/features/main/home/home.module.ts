import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './componentes/inicial/home.component';
import { SharedModule } from './../../../shared/shared.module';
import { Interceptor } from './../../../core/interceptors/interceptor.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Interceptor,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [

  ]
})
export class HomeModule { }

