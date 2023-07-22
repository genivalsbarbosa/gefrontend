import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Utils from 'src/app/core/util/utils';
import { ComponenteServico } from 'src/app/core/class/componenteservico';
import { Login } from '../model/login';



@Injectable()
export class LoginService extends ComponenteServico {

  constructor(
    private http: HttpClient
  ) {
    super();
  }   

  login(login: Login){
    return this.http.post("login/authenticate", Utils.converterObjParaJSON(login));
  }

}





