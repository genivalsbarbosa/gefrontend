import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Utils from 'src/app/core/util/utils';
import { ComponenteServico } from 'src/app/core/class/componenteservico';
import { EmpresaFiltro } from '../model/empresafiltro';
import { Empresa } from '../model/empresa';

@Injectable()
export class EmpresaService extends ComponenteServico {

  constructor(
    private http: HttpClient
  ) {
    super();
  }   

  consultar(empresaFiltro: EmpresaFiltro){
    return this.http.post("empresa/consultar", Utils.converterObjParaJSON(empresaFiltro));
  }

  incluir(empresa: Empresa){
    return this.http.post("empresa/incluir", Utils.converterObjParaJSON(empresa));
  }

  alterar(empresa: Empresa){
    return this.http.post("empresa/alterar", Utils.converterObjParaJSON(empresa));
  }

  excluir(empresa: Empresa){
    return this.http.post("empresa/excluir", Utils.converterObjParaJSON(empresa));
  }

}





