import { DropdownItem } from "../../../../shared/dropdown/dropdownitem";
import { TabelaSigTab } from "../model/tabelasigtab";


export class TabelaSigTabUtils {

    constructor(
        //@Inject(forwardRef( () => SystemService )) public systemService: SystemService,
    ){

    }

    converterTabelaSigTabParaItem(listaTabelaSigTab: TabelaSigTab[]){

        let listaItem: DropdownItem[] = [];

        listaTabelaSigTab.forEach((tabelaSigTab: TabelaSigTab) => {
            let item: DropdownItem = new DropdownItem();
            item.codigo = tabelaSigTab.id;
            item.nome = tabelaSigTab.procedimento;
            listaItem.push(item);
        });

        return listaItem;

    }

}
