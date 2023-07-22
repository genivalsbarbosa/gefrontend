import { Competencia } from "../../competencia/model/competencia";
import { Empresa } from "../../empresa/model/empresa";
import { TabelaSigTab } from "../../tabelasigtab/model/tabelasigtab";
import { Usuario } from "../../usuario/model/usuario";
import { Entidade } from "./../../../../core/class/entidade";

export class Procedimento extends Entidade {

    constructor() {
        super();
    }

    dataUltAlteracao!: string;

    anestesista: Usuario = new Usuario;
    cirurgiao: Usuario = new Usuario;
    primeiroAuxiliar: Usuario = new Usuario;
    segundoAuxiliar: Usuario = new Usuario;
    empresa: Empresa = new Empresa;

    tabelaSigTap: TabelaSigTab[] = [];

    
    dataProcedimento!: string;
    competencia: Competencia = new Competencia;

    valorAnestesista: string = "";
    valorCirurgiao: string = "";
    valorPrimeiroAuxiliar: string = "";
    valorSegundoAuxliar: string = "";
    observacao: string = "";
    
}