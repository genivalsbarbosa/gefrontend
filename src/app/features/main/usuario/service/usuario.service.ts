import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Utils from 'src/app/core/util/utils';
import { ComponenteServico } from 'src/app/core/class/componenteservico';
import { UsuarioFiltro } from '../model/usuariofiltro';
import { Usuario } from '../model/usuario';



@Injectable()
export class UsuarioService extends ComponenteServico {

  constructor(
    private http: HttpClient
  ) {
    super();
  }   

  consultar(usuarioFiltro: UsuarioFiltro){
    return this.http.post("usuario/consultar", Utils.converterObjParaJSON(usuarioFiltro));
  }

  incluir(usuario: Usuario){
    return this.http.post("usuario/incluir", Utils.converterObjParaJSON(usuario));
  }

  alterar(usuario: Usuario){
    return this.http.post("usuario/alterar", Utils.converterObjParaJSON(usuario));
  }

  excluir(usuario: Usuario){
    return this.http.post("usuario/excluir", Utils.converterObjParaJSON(usuario));
  }

}





