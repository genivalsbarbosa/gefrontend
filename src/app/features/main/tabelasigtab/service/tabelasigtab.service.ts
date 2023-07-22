import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Utils from 'src/app/core/util/utils';
import { ComponenteServico } from 'src/app/core/class/componenteservico';
import { TabelaSigTabFiltro } from '../model/tabelasigtabfiltro';
import { TabelaSigTab } from '../model/tabelasigtab';

@Injectable()
export class TabelaSigTabService extends ComponenteServico {

  constructor(
    private http: HttpClient
  ) {
    super();
  }   

  consultar(tabelaSigTabFiltro: TabelaSigTabFiltro){
    return this.http.post("tabelaSigTap/consultar", Utils.converterObjParaJSON(tabelaSigTabFiltro));
  }

  incluir(tabelaSigTab: TabelaSigTab){
    return this.http.post("tabelaSigTap/incluir", Utils.converterObjParaJSON(tabelaSigTab));
  }

  alterar(tabelaSigTab: TabelaSigTab){
    return this.http.post("tabelaSigTap/alterar", Utils.converterObjParaJSON(tabelaSigTab));
  }

  excluir(tabelaSigTab: TabelaSigTab){
    return this.http.post("tabelaSigTap/excluir", Utils.converterObjParaJSON(tabelaSigTab));
  }

}





