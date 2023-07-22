import { CompetenciaFiltro } from "../../competencia/model/competenciafiltro";
import { Entidade } from "./../../../../core/class/entidade";

export class TabelaSigTabFiltro extends Entidade {

    constructor() {
        super();
    }

    codigo: string = "";
    procedimento: string = "";
    competencia: CompetenciaFiltro = new CompetenciaFiltro;
    listId: any[] = [];
}