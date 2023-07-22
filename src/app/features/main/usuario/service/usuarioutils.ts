/*
import { Inject, forwardRef } from "@angular/core";
import { SystemService } from "../../../shared/servicos/system/system.service";
import { ProdutoFiltro } from "./produtofiltro";
import { UnidadeMedidaFiltro } from "../../unidademedida/servico/unidademedidafiltro";
import { TipoMaterialFiltro } from "../../tipomaterial/servico/tipomaterialfiltro";
import { ClasseFiltro } from "../../classe/servico/classefiltro";
import { SubclasseFiltro } from "../../subclasse/servico/subclassefiltro";
import { NomenclaturaMercadoriaFiltro } from "../../nomenclaturamercadoria/servico/nomenclaturamercadoriafiltro";
import { GeneroFiltro } from "../../genero/servico/generofiltro";
import { MarcaFiltro } from "../../marca/servico/marcafiltro";
import { MoedaFiltro } from "../../../administrador/moeda/servico/moedafiltro";
import { Moeda } from "../../../administrador/moeda/servico/moeda";
import { FabricanteFiltro } from "../../fabricante/servico/fabricantefiltro";
import { PublicacaoFiltro } from "../../../fiscal/publicacao/servico/publicacaofiltro";
import { TipoPapelFiltro } from "../../../fiscal/tipopapel/servico/tipopapelfiltro";
import { TipoPatrimonioFiltro } from "../../../ativo/tipopatrimonio/servico/tipopatrimoniofiltro";
import { TipoServicoFiltro } from "../../../financeiro/tiposervico/servico/tiposervicofiltro";
import { IncentivoFiscalFiltro } from "../../incentivofiscal/servico/incentivofiscalfiltro";
import { TipocreditoFiltro } from "../../../fiscal/tipocredito/servico/tipocreditofiltro";
import Utils from "../../../shared/sistema/util/utils";
import { QUANTIDADE_BUSCA_PAGINADA } from "../../../shared/sistema/const/constante";
import { Produto } from "./produto";
import { UnidadeMedida } from "../../unidademedida/servico/unidademedida";
import { TipoMaterial } from "../../tipomaterial/servico/tipomaterial";
import { Classe } from "../../classe/servico/classe";
import { Subclasse } from "../../subclasse/servico/subclasse";
import { NomenclaturaMercadoria } from "../../nomenclaturamercadoria/servico/nomenclaturamercadoria";
import { Genero } from "../../genero/servico/genero";
import { Marca } from "../../marca/servico/marca";
import { Fabricante } from "../../fabricante/servico/fabricante";
import { TipoPapel } from "../../../fiscal/tipopapel/servico/tipopapel";
import { Publicacao } from "../../../fiscal/publicacao/servico/publicacao";
import { TipoPatrimonio } from "../../../ativo/tipopatrimonio/servico/tipopatrimonio";
import { TipoServico } from "../../../financeiro/tiposervico/servico/tiposervico";
import { DireitosEmpresa } from "../../../shared/servicos/system/direitosempresa";
*/

import { DropdownItem } from "../../../../shared/dropdown/dropdownitem";
import { Usuario } from "../model/usuario";

export class UsuarioUtils {

    constructor(
        //@Inject(forwardRef( () => SystemService )) public systemService: SystemService,
    ){

    }

    converterUsuarioParaItem(listaUsuario: Usuario[]){

        let listaItem: DropdownItem[] = [];

        listaUsuario.forEach((usuario: Usuario) => {
            let item: DropdownItem = new DropdownItem();
            item.codigo = usuario.id;
            item.nome = usuario.nome;
            listaItem.push(item);
        });

        return listaItem;

    }

    /*
    public carregando: boolean;
    public produtoFiltro: ProdutoFiltro;
    public unidadeMedidaFiltro: UnidadeMedidaFiltro;
    public tipoMaterialFiltro: TipoMaterialFiltro;
    public classeFiltro: ClasseFiltro;
    public subclasseFiltro: SubclasseFiltro;
    public nomenclaturaMercadoriaFiltro: NomenclaturaMercadoriaFiltro;
    public generoFiltro: GeneroFiltro;
    public marcaFiltro: MarcaFiltro;
    public moedaFiltro: MoedaFiltro;
    public fabricanteFiltro: FabricanteFiltro;
    public publicacaoFiltro: PublicacaoFiltro;
    public tipoPapelFiltro: TipoPapelFiltro;
    public tipoCreditoFiltro: TipocreditoFiltro;
    public incentivoFiscalFiltro: IncentivoFiscalFiltro;
    public tipoServicoFiltro: TipoServicoFiltro;
    public tipoPatrimonioFiltro: TipoPatrimonioFiltro;

    converterSelecaoCheckBox(flag: any, evento){
        let selecao: string = evento.toString();

        if (evento != '') {
          return selecao;
        }else{
          return flag;
        }
    }

    carregarProduto(produtoFiltro: ProdutoFiltro, selecionado, service, retorno){
        if(produtoFiltro != null){
            this.produtoFiltro = produtoFiltro;
        }else{
            this.produtoFiltro = new ProdutoFiltro();
        }

        this.produtoFiltro._LOAD_SIMPLIFICADO = 'S';
        this.produtoFiltro._REGISTRO_INICIAL = 1;
        this.produtoFiltro.CODPROD = '';
        this.produtoFiltro._REGISTRO_FINAL = QUANTIDADE_BUSCA_PAGINADA;

        service.carregarLight(this.produtoFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: Produto[] = <Produto[]>Utils.obterRetornoConteudo(data);
            let produtoSelecionado;
            let achou: boolean = false;

            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].CODPROD,
                            'nome': item[i].CODPROD + " - " + item[i].DESCRICAO,
                            'descricao': item[i].DESCRICAO,
                            'indUsaLote': item[i]._IND_USA_LOTE,
                            'indIntegraPil': item[i].IND_INTEGRA_PIL,
                            'indComposto': item[i].COMPOSTO,
                            'codUnidadeMedida': item[i].CODMED_EST,
                            'dscUnidadeMedida': item[i]._UNIMED_EST_DESCRICAO});

                if(selecionado != null){
                    if (item[i].CODPROD == selecionado) {
                        achou = true;
                        produtoSelecionado = {'codigo': item[i].CODPROD,
                                              'nome': item[i].CODPROD + ' - ' + item[i].DESCRICAO}
                    }
                }
            }

            if(!achou && selecionado != null && selecionado != ''){
                let produtoSelecionadoFiltro = this.produtoFiltro;
                produtoSelecionadoFiltro.CODPROD = selecionado;
                service.carregarLight(produtoSelecionadoFiltro).subscribe(data => {
                    let item: Produto[] = <Produto[]>Utils.obterRetornoConteudo(data);
                    if( item.length > 0 ){

                        produtoSelecionado = {'codigo': item[0].CODPROD,
                                              'nome': item[0].CODPROD + ' - ' + item[0].DESCRICAO}

                        lista.push({'codigo': item[0].CODPROD,
                                    'nome': item[0].CODPROD + " - " + item[0].DESCRICAO,
                                    'descricao': item[0].DESCRICAO,
                                    'indUsaLote': item[0]._IND_USA_LOTE,
                                    'indIntegraPil': item[0].IND_INTEGRA_PIL,
                                    'indComposto': item[0].COMPOSTO,
                                    'codUnidadeMedida': item[0].CODMED_EST,
                                    'dscUnidadeMedida': item[0]._UNIMED_EST_DESCRICAO});
                    }
                    retorno(lista, produtoSelecionado);
                });
            }else{
                retorno(lista, produtoSelecionado);
            }
        });
    }

    carregarProdutoPaginado(produtoFiltro: ProdutoFiltro, service, listaProduto, filtro, retorno){
        if(produtoFiltro != null){
            this.produtoFiltro = produtoFiltro;
        }

        let listatemp = [];
        for(let i = 0; i < listaProduto.length; i++){
            if(listaProduto[i].codigo != 'vermais'){
                listatemp.push(listaProduto[i]);
            }
        }

       this.produtoFiltro.CODPROD = '';
       Utils.setarPaginacao(this.produtoFiltro, listatemp);

        if(this.produtoFiltro == undefined){
            this.produtoFiltro = new ProdutoFiltro;
        }
        this.produtoFiltro._LOAD_SIMPLIFICADO = 'S';

        if(filtro != null){
            this.produtoFiltro.CODPROD_DESCRICAO__LIKE = filtro;
        }

        service.carregarLight(this.produtoFiltro).subscribe(data => {
            let item: Produto[] = <Produto[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                listatemp.push({'codigo': item[i].CODPROD,
                                'nome': item[i].CODPROD + " - " + item[i].DESCRICAO,
                                'descricao': item[i].DESCRICAO,
                                'indUsaLote': item[i]._IND_USA_LOTE,
                                'indIntegraPil': item[i].IND_INTEGRA_PIL,
                                'indComposto': item[i].COMPOSTO,
                                'codUnidadeMedida': item[i].CODMED_EST,
                                'dscUnidadeMedida': item[i]._UNIMED_EST_DESCRICAO});
            }
            retorno(listatemp);
        });
    }

    carregarProdMapeamentoProdutoFornec(produtoFiltro: ProdutoFiltro, selecionado, service, retorno){

        if(produtoFiltro == null){
            produtoFiltro = new ProdutoFiltro();
        }
                  
        produtoFiltro._REGISTRO_INICIAL = 1;        
        produtoFiltro._REGISTRO_FINAL = QUANTIDADE_BUSCA_PAGINADA;
        if (produtoFiltro.CODPROD == "0"){
            produtoFiltro.CODPROD = '';
        }
                
        service.consultarProdMapeamentoProdutoFornec(produtoFiltro).subscribe((data) => {
            
            let item: Produto[] = <Produto[]>Utils.obterRetornoConteudo(data);
            let lista: any[] = [];               
            let produtoSelecionado;
            let achou: boolean = false;    
            
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].CODPROD,
                            'nome': item[i].CODPROD + ' - ' + item[i].DESCRICAO,
                            'descricao': item[i].DESCRICAO});

                if(selecionado != ''){
                    if (item[i].CODPROD == selecionado) {                        
                        achou = true;
                        produtoSelecionado = {'codigo': item[i].CODPROD,
                                                 'nome': item[i].CODPROD + ' - ' + item[i].DESCRICAO,
                                                'descricao': item[i].DESCRICAO}
                    }
                }                
            }

            if(!achou && selecionado != ''){
                
                let produtoSelecionadoFiltro = produtoFiltro;
                produtoSelecionadoFiltro.CODPROD = selecionado;
                service.consultarProdMapeamentoProdutoFornec(produtoSelecionadoFiltro).subscribe(data => {
                    let item: Produto[] = <Produto[]>Utils.obterRetornoConteudo(data);
                    
                    if( item.length > 0 ){
                        
                        produtoSelecionado = {'codigo': item[0].CODPROD,
                                                 'nome': item[0].CODPROD + ' - ' + item[0].DESCRICAO,
                                                 'descricao': item[0].DESCRICAO}
                        
                        lista.push({'codigo': item[0].CODPROD,
                                    'nome': item[0].CODPROD + ' - ' + item[0].DESCRICAO,
                                    'descricao': item[0].DESCRICAO});
                    }

                    retorno(lista, produtoSelecionado);
                });
            
            }else{
                retorno(lista, produtoSelecionado);
            }
        });
    }

    carregarProdMapeamentoProdutoFornecFiltroCombo(produtoFiltro: ProdutoFiltro, service, lista, filtro, retorno){

        let listatemp = [];
        for(let i = 0; i < lista.length; i++){
            if(lista[i].codigo != 'vermais'){
                listatemp.push(lista[i]);
            }
        }

        if(produtoFiltro == null){
            produtoFiltro = new ProdutoFiltro();
        }        
        
        produtoFiltro.CODPROD = '';       
        Utils.setarPaginacao(produtoFiltro, listatemp);      

        if(filtro != null){            
            produtoFiltro.CODPROD__LIKE = filtro;
        }        

        service.consultarProdMapeamentoProdutoFornec(produtoFiltro).subscribe(data => {
            let item: Produto[] = <Produto[]>Utils.obterRetornoConteudo(data);          
            for(let i = 0; i < item.length; i++){
                listatemp.push({'codigo': item[i].CODPROD,
                                'nome': item[i].CODPROD + ' - ' + item[i].DESCRICAO,
                                'descricao': item[i].DESCRICAO});
            }
            retorno(listatemp);        
        });
    }

    carregarProdMapeamentoProdutoFornecVerMais(produtoFiltro: ProdutoFiltro, service, lista, filtro, retorno){

        let listatemp = [];
        for(let i = 0; i < lista.length; i++){
            if(lista[i].codigo != 'vermais'){
                listatemp.push(lista[i]);
            }
        }

        if(produtoFiltro == null){
            produtoFiltro = new ProdutoFiltro();
        }
                       
        produtoFiltro.CODPROD = '';       
        Utils.setarPaginacao(produtoFiltro, listatemp);        

        if(filtro != null){            
            produtoFiltro.CODPROD__LIKE = filtro;
        }        

        service.consultarProdMapeamentoProdutoFornec(produtoFiltro).subscribe(data => {
            let item: Produto[] = <Produto[]>Utils.obterRetornoConteudo(data);          
            for(let i = 0; i < item.length; i++){
                listatemp.push({'codigo': item[i].CODPROD,
                                'nome': item[i].CODPROD + ' - ' + item[i].DESCRICAO,
                                'descricao': item[i].DESCRICAO});
            }
            retorno(listatemp);        
        });
    }

    carregarUnidadeMedida(service, retorno){
        if(this.unidadeMedidaFiltro == undefined){
            this.unidadeMedidaFiltro = new UnidadeMedidaFiltro;
        }

        service.consultar(this.unidadeMedidaFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: UnidadeMedida[] = <UnidadeMedida[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].CODMED,
                            'nome': item[i].CODMED + " - " + item[i].DESCRICAO,
                            'descricao': item[i].DESCRICAO});
            }
            retorno(lista);
        });
    }

    carregarTipoMaterial(service, retorno){
        if(this.tipoMaterialFiltro == undefined){
            this.tipoMaterialFiltro = new TipoMaterialFiltro;
        }

        service.consultar(this.tipoMaterialFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: TipoMaterial[] = <TipoMaterial[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].CODTIP,
                            'nome': item[i].CODTIP + " - " + item[i].DESCRICAO,
                            'descricao': item[i].DESCRICAO,
                            'indServico': item[i].IND_SERVICO});
            }
            retorno(lista);
        });
    }

    carregarClasse(service, retorno){
        if(this.classeFiltro == undefined){
            this.classeFiltro = new ClasseFiltro;
        }

        service.consultar(this.classeFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: Classe[] = <Classe[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                if (item[i].CODCLA != '000'){
                    lista.push({'codigo': item[i].CODCLA,
                                'nome': item[i].CODCLA + " - " + item[i].DESCRICAO,
                                'descricao': item[i].DESCRICAO});
                }
            }
            retorno(lista);
        });
    }

    carregarSubclasse(service, retorno){
        if(this.subclasseFiltro == undefined){
            this.subclasseFiltro = new SubclasseFiltro;
        }

        service.consultar(this.subclasseFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: Subclasse[] = <Subclasse[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                if (item[i].CODSCLA != '000'){
                    lista.push({'codigo': item[i].CODSCLA,
                                'nome': item[i].CODSCLA + " - " + item[i].DESCRICAO,
                                'descricao': item[i].DESCRICAO});
                }
            }
            console.log('lista', lista)
            retorno(lista);
        });
    }

    carregarNomenclaturaMercadoria(service, retorno){
        if(this.nomenclaturaMercadoriaFiltro == undefined){
            this.nomenclaturaMercadoriaFiltro = new NomenclaturaMercadoriaFiltro;
        }

        service.consultar(this.nomenclaturaMercadoriaFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: NomenclaturaMercadoria[] = <NomenclaturaMercadoria[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].COD_NOMENCLATURA_MERCADORIA,
                            'nome': item[i].COD_NOMENCLATURA_MERCADORIA + " - " + item[i].DSC_NOMENCLATURA_MERCADORIA,
                            'descricao': item[i].DSC_NOMENCLATURA_MERCADORIA});
            }
            retorno(lista);
        });
    }

    carregarGenero(service, retorno){
        if(this.generoFiltro == undefined){
            this.generoFiltro = new GeneroFiltro;
        }

        service.consultar(this.generoFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: Genero[] = <Genero[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].COD_GENERO,
                            'nome': item[i].COD_GENERO + " - " + item[i].DSC_GENERO,
                            'descricao': item[i].DSC_GENERO});
            }
            retorno(lista);
        });
    }

    carregarMarca(service, retorno){
        if(this.marcaFiltro == undefined){
            this.marcaFiltro = new MarcaFiltro;
        }

        service.consultar(this.marcaFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: Marca[] = <Marca[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].DSC_MARCA,
                            'nome': item[i].DSC_MARCA + " - " + item[i].DSC_MARCA,
                            'descricao': item[i].DSC_MARCA});
            }
            retorno(lista);
        });
    }

    carregarMoeda(service, retorno){
        if(this.moedaFiltro == undefined){
            this.moedaFiltro = new MoedaFiltro;
        }

        service.consultar(this.moedaFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: Moeda[] = <Moeda[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].CODMOEDA,
                            'nome': item[i].CODMOEDA + " - " + item[i].NOMEMOEDA,
                            'descricao': item[i].NOMEMOEDA});
            }
            retorno(lista);
        });
    }

    carregarFabricante(service, retorno){
        if(this.fabricanteFiltro == undefined){
            this.fabricanteFiltro = new FabricanteFiltro;
        }

        service.consultar(this.fabricanteFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: Fabricante[] = <Fabricante[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].COD_FABRICANTE,
                            'nome': item[i].COD_FABRICANTE + " - " + item[i].DSC_FABRICANTE,
                            'descricao': item[i].DSC_FABRICANTE});
            }
            retorno(lista);
        });
    }

    carregarTipoPapel(service, retorno){
        if(this.tipoPapelFiltro == undefined){
            this.tipoPapelFiltro = new TipoPapelFiltro;
        }

        service.consultar(this.tipoPapelFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: TipoPapel[] = <TipoPapel[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].COD_TIPO_PAPEL,
                            'nome': item[i].COD_TIPO_PAPEL + " - " + item[i].DSC_TIPO_PAPEL,
                            'descricao': item[i].DSC_TIPO_PAPEL});
            }
            retorno(lista);
        });
    }

    carregarPublicacao(service, retorno){
        if(this.publicacaoFiltro == undefined){
            this.publicacaoFiltro = new PublicacaoFiltro;
        }

        service.consultar(this.publicacaoFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: Publicacao[] = <Publicacao[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].COD_PUBLICACAO,
                            'nome': item[i].COD_PUBLICACAO + " - " + item[i].DSC_PUBLICACAO,
                            'descricao': item[i].DSC_PUBLICACAO});
            }
            retorno(lista);
        });
    }

    carregarTipoPatrimonio(service, retorno){
        if(this.tipoPatrimonioFiltro == undefined){
            this.tipoPatrimonioFiltro = new TipoPatrimonioFiltro;
        }

        service.consultar(this.tipoPatrimonioFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: TipoPatrimonio[] = <TipoPatrimonio[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].COD_TIPO_PATRIMONIO,
                            'nome': item[i].COD_TIPO_PATRIMONIO + " - " + item[i].DSC_TIPO_PATRIMONIO,
                            'descricao': item[i].DSC_TIPO_PATRIMONIO});
            }
            retorno(lista);
        });
    }

    carregarTipoServico(service, retorno){
        if(this.tipoServicoFiltro == undefined){
            this.tipoServicoFiltro = new TipoServicoFiltro;
        }

        service.consultar(this.tipoServicoFiltro).subscribe(data => {
            let lista: any[] = [];
            let item: TipoServico[] = <TipoServico[]>Utils.obterRetornoConteudo(data);
            for(let i = 0; i < item.length; i++){
                lista.push({'codigo': item[i].COD_SERVICO,
                            'nome': item[i].COD_SERVICO + " - " + item[i].DSC_SERVICO,
                            'descricao': item[i].DSC_SERVICO});
            }
            retorno(lista);
        });
    }

    obterDireitoDePerfil(direito: string, callback) {
        const direitosEmpresa: DireitosEmpresa = new DireitosEmpresa();
        direitosEmpresa.psDireito = direito;
        direitosEmpresa.psEmpresa = Utils.obterEmpresaSessao().sCodEmpresa;
        direitosEmpresa.psUsuario = Utils.obterUsuarioSessao().NOM_USUARIO_LOGIN;

        this.systemService.obtemDireitosPerfil( direitosEmpresa ).subscribe((data) => {
                const temDireito: string = <string>(Utils.obterRetornoConteudo(data)).sValor;
                if (temDireito == 'False') {
                    callback(false);
                }
                else if (temDireito == "True") {
                    callback(true);
                }
            }
        );
    }

    consultarProdutosPorFilialPaginado(produtoFiltro: ProdutoFiltro, service, listaProduto, filtro, retorno){
      if(produtoFiltro != null){
          this.produtoFiltro = produtoFiltro;
      }

      let listatemp = [];
      for(let i = 0; i < listaProduto.length; i++){
          if(listaProduto[i].codigo != 'vermais'){
              listatemp.push(listaProduto[i]);
          }
      }

     this.produtoFiltro.CODPROD = '';
     Utils.setarPaginacao(this.produtoFiltro, listatemp);

      if(this.produtoFiltro == undefined){
          this.produtoFiltro = new ProdutoFiltro;
      }
      this.produtoFiltro._LOAD_SIMPLIFICADO = 'S';

      if(filtro != null){
          this.produtoFiltro.CODPROD_DESCRICAO__LIKE = filtro;
      }

      service.consultarProdutosPorFilial(this.produtoFiltro).subscribe(data => {
          let item: Produto[] = <Produto[]>Utils.obterRetornoConteudo(data);
          for(let i = 0; i < item.length; i++){
              listatemp.push({'codigo': item[i].CODPROD,
                              'nome': item[i].CODPROD + " - " + item[i].DESCRICAO});
          }
          retorno(listatemp);
      });
  }

    consultarProdutosPorFilialPag(produtoFiltro: ProdutoFiltro, selecionado, service, listaProduto, filtro, retorno) {
        if (produtoFiltro != null) {
            this.produtoFiltro = produtoFiltro;
        }

        let listatemp = [];
        for (let i = 0; i < listaProduto.length; i++) {
            if (listaProduto[i].codigo != 'vermais') {
                listatemp.push(listaProduto[i]);
            }
        }

        this.produtoFiltro._LOAD_SIMPLIFICADO = 'S';
        this.produtoFiltro._REGISTRO_INICIAL = 1;
        this.produtoFiltro.CODPROD = '';
        this.produtoFiltro._REGISTRO_FINAL = QUANTIDADE_BUSCA_PAGINADA;
        Utils.setarPaginacao(this.produtoFiltro, listatemp);

        if (this.produtoFiltro == undefined) {
            this.produtoFiltro = new ProdutoFiltro;
        }
        this.produtoFiltro._LOAD_SIMPLIFICADO = 'S';

        if (filtro != null) {
            this.produtoFiltro.CODPROD_DESCRICAO__LIKE = filtro;
        }

        service.consultarProdutosPorFilial(this.produtoFiltro).subscribe(data => {
            let produtoSelecionado;
            let achou: boolean = false;
            let item: Produto[] = <Produto[]>Utils.obterRetornoConteudo(data);

            for (let i = 0; i < item.length; i++) {
                listatemp.push({
                    'codigo': item[i].CODPROD,
                    'nome': item[i].CODPROD + " - " + item[i].DESCRICAO
                });
                if (selecionado != null) {
                    if (item[i].CODPROD == selecionado) {
                        achou = true;
                        produtoSelecionado = {
                            'codigo': item[i].CODPROD,
                            'nome': item[i].CODPROD + ' - ' + item[i].DESCRICAO
                        };
                    }
                }
            }
            if (!achou && selecionado != null && selecionado != '') {
                let produtoSelecionadoFiltro = this.produtoFiltro;
                produtoSelecionadoFiltro.CODPROD = selecionado;
                service.consultarProdutosPorFilial(produtoSelecionadoFiltro).subscribe(data => {
                    let item: Produto[] = <Produto[]>Utils.obterRetornoConteudo(data);
                    if (item.length > 0) {
                        produtoSelecionado = {
                            'codigo': item[0].CODPROD,
                            'nome': item[0].CODPROD + ' - ' + item[0].DESCRICAO
                        };
                        listatemp.push({
                            'codigo': item[0].CODPROD,
                            'nome': item[0].CODPROD + " - " + item[0].DESCRICAO,
                        });
                    }
                    retorno(listatemp, produtoSelecionado);
                });
            } else {
                retorno(listatemp, produtoSelecionado);
            }
        });
    }
    */
}
