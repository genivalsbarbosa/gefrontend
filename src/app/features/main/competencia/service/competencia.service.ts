import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Utils from 'src/app/core/util/utils';
import { ComponenteServico } from 'src/app/core/class/componenteservico';
import { CompetenciaFiltro } from '../model/competenciafiltro';
import { Competencia } from '../model/competencia';

@Injectable()
export class CompetenciaService extends ComponenteServico {

  constructor(
    private http: HttpClient
  ) {
    super();
  }   

  consultar(competenciaFiltro: CompetenciaFiltro){
    return this.http.post("competencia/consultar", Utils.converterObjParaJSON(competenciaFiltro));
  }

  incluir(competencia: Competencia){
    return this.http.post("competencia/incluir", Utils.converterObjParaJSON(competencia));
  }

  alterar(competencia: Competencia){
    return this.http.post("competencia/alterar", Utils.converterObjParaJSON(competencia));
  }

  excluir(competencia: Competencia){
    return this.http.post("competencia/excluir", Utils.converterObjParaJSON(competencia));
  }

}





