import { DropdownItem } from "../../../../shared/dropdown/dropdownitem";
import { Empresa } from "../model/empresa";


export class EmpresaUtils {

    constructor(
        //@Inject(forwardRef( () => SystemService )) public systemService: SystemService,
    ){

    }

    converterEmpresaParaItem(listaEmpresa: Empresa[]){

        let listaItem: DropdownItem[] = [];

        listaEmpresa.forEach((empresa: Empresa) => {
            let item: DropdownItem = new DropdownItem();
            item.codigo = empresa.id;
            item.nome = empresa.nome;
            listaItem.push(item);
        });

        return listaItem;

    }

}
