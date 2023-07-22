import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Interceptor } from './../../core/interceptors/interceptor.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Interceptor,
    MainRoutingModule,
    SharedModule,
    MatFormFieldModule
  ],
  providers: [
    
  ]
})
export class MainModule { }

