import { Competencia } from "../../competencia/model/competencia";
import { EmpresaFiltro } from "../../empresa/model/empresafiltro";
import { TabelaSigTabFiltro } from "../../tabelasigtab/model/tabelasigtabfiltro";
import { UsuarioFiltro } from "../../usuario/model/usuariofiltro";
import { Entidade } from "./../../../../core/class/entidade";

export class ProcedimentoFiltro extends Entidade {

    constructor() {
        super();
    }

    anestesista: UsuarioFiltro = new UsuarioFiltro;
    cirurgiao: UsuarioFiltro = new UsuarioFiltro;
    primeiroAuxiliar: UsuarioFiltro = new UsuarioFiltro;
    segundoAuxiliar: UsuarioFiltro = new UsuarioFiltro;
    empresa: EmpresaFiltro = new EmpresaFiltro;
    tabelaSigTap: TabelaSigTabFiltro[] = [];

    dataProcedimento!: string;

    competencia: Competencia = new Competencia;

    listId: any[] = [];
    
}