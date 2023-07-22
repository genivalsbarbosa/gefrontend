import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './componente/inicial/login.component';
import { Interceptor } from './../../core/interceptors/interceptor.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginService } from './service/login.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Interceptor,
    LoginRoutingModule,
    SharedModule,
    MatFormFieldModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }

