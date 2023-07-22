import { Competencia } from "../../competencia/model/competencia";
import { Entidade } from "./../../../../core/class/entidade";

export class TabelaSigTab extends Entidade {

    constructor() {
        super();
    }

    dataUltAlteracao!: string;
    codigo!: string;
    procedimento!: string;    

    pontos!: number;
    valor!: number;
    valorPonto!: number;

    competencia!: Competencia;

    descricao!: string;
    valorHospital!: string;
    
}