import { DropdownItem } from "../../../../shared/dropdown/dropdownitem";
import { Competencia } from "../model/competencia";


export class CompetenciaUtils {

    constructor(
        //@Inject(forwardRef( () => SystemService )) public systemService: SystemService,
    ){

    }

    converterCompetenciaParaItem(listaCompetencia: Competencia[]){

        let listaItem: DropdownItem[] = [];

        listaCompetencia.forEach((competencia: Competencia) => {
            let item: DropdownItem = new DropdownItem();
            item.codigo = competencia.id;
            item.nome = competencia.descricao;
            listaItem.push(item);
        });

        return listaItem;

    }

}
