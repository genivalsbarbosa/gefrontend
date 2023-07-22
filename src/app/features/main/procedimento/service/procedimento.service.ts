import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Utils from 'src/app/core/util/utils';
import { ComponenteServico } from 'src/app/core/class/componenteservico';
import { ProcedimentoFiltro } from '../model/procedimentofiltro';
import { Procedimento } from '../model/procedimento';



@Injectable()
export class ProcedimentoService extends ComponenteServico {

  constructor(
    private http: HttpClient
  ) {
    super();
  }   

  consultar(procedimentoFiltro: ProcedimentoFiltro){
    return this.http.post("procedimento/consultar", Utils.converterObjParaJSON(procedimentoFiltro));
  }

  consultargrid(procedimentoFiltro: ProcedimentoFiltro){
    return this.http.post("procedimento/consultargrid", Utils.converterObjParaJSON(procedimentoFiltro));
  }

  consultarduplicata(procedimentoFiltro: ProcedimentoFiltro){
    return this.http.post("procedimento/consultarduplicata", Utils.converterObjParaJSON(procedimentoFiltro));
  }

  incluir(procedimento: Procedimento){
    return this.http.post("procedimento/incluir", Utils.converterObjParaJSON(procedimento));
  }

  alterar(procedimento: Procedimento){
    return this.http.post("procedimento/alterar", Utils.converterObjParaJSON(procedimento));
  }

  excluir(procedimento: Procedimento){
    return this.http.post("procedimento/excluir", Utils.converterObjParaJSON(procedimento));
  }

}





