import * as _ from 'lodash';
import { EntidadeFiltro } from './../class/entidadefiltro';
import { Arquivo } from './../../arquivoupload/servico/arquivo';
import { NOME_USUARIO_SESSAO, LOGIN_USUARIO_SESSAO, APELIDO_USUARIO_SESSAO, FOTO_PERFIL_USUARIO_SESSAO, FOTO_ROTATE_USUARIO_SESSAO, TOKEN_SESSAO, CODIGO_EMPRESA_SESSAO_SELECIONADA, NOME_EMPRESA_SESSAO_SELECIONADA } from './../../../app-init';
import { MODULO_CONTABILIDADE, MODULO_FINANCEIRO, MODULO_ESTOQUE, MODULO_COMPRAS, MODULO_COMERCIAL, QUANTIDADE_BUSCA_PAGINADA, MODULO_INTEGRACAO, MODULO_ADMINISTRADOR, MODULO_FISCAL, MODULO_ATIVO, MODULO_ORCAMENTO } from './../const/constante';
import { CAMPO_REQUERIDO, INCLUIR, ALTERAR, DETALHAR, REGISTRO_JA_EXISTE_LISTA, MSG_CAMPOS_OBRIGATORIOS, REGISTRO_JA_CADASTRADO } from './../const/mensagens';
import { FormControl } from '@angular/forms';
import { RetornoStatus } from '../class/retornostatus';
import { Resultado } from "../class/resultado";
import { Usuario } from "../../../administrador/usuario/servico/usuario";
import { Empresar } from '../../../administrador/empresa/servico/empresar';
import { Dominio } from '../class/dominio';
import { RetornoComunicacao } from '../class/retornocomunicacao';
import { Operacao } from '../enum/operacao';
import { RetornoMensagem } from '../class/retornomensagem';
import { Mensagem } from '../../mensagem/service/mensagem';
import { isEmpty } from 'rxjs/operators';
import { PaginacaoFiltro } from '../../datatablepaginado/paginacaofiltro';

export default class Utils {

    static getWindowHeight () {

        // console.log("getWindowHeight: ", window.innerHeight);
        return window.innerHeight;
    }

    static ngOnInitScroll () {
        window.addEventListener('scroll', this.scroll, true); // third parameter
        window.addEventListener('scrollAtual', this.scrollAtual, true); // third parameter
    }

    static ngOnDestroyScroll () {
        window.removeEventListener('scroll', this.scroll, true);
        window.removeEventListener('scrollAtual', this.scrollAtual, true);
    }

    static scroll = (): boolean => {

        let mostrarBotaoTopo = false;
        if ( window.scrollY >= ( window.innerHeight / 4 ) ) mostrarBotaoTopo = true;
        else mostrarBotaoTopo = false;
        //"windowHeight: ", window.innerHeight, ". scrollPosition: ", window.scrollY
        return mostrarBotaoTopo;

    };

    static scrollAtual = (): number => {

        let valorScrollAtual: number = 0;
        valorScrollAtual = window.scrollY;
        return valorScrollAtual;

    };

    //DEPRECIADO: deve utilizar o metodo converterDataHoraParaDataString
    static converterDataHoraParaData(valor: string) {
        return valor.substring(0,10);
    }

    static converterDataHoraParaDataString(data: Date) {

        try {
            let yy = data.getFullYear();
            let mm = this.formatarDoisCaracteresNumeros(data.getMonth() + 1);
            let dd = this.formatarDoisCaracteresNumeros(data.getDate());

            return ''+dd+'/'+mm+'/'+yy;
        }
        catch (e) {
            return data;
        }

    }

    static converterStringEmData(data) {
        var parts = data.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    static converterMascarasParaPrimeNg(valor: string): string {

       return (this.replaceAll(valor, 'X', '9'));
    }

    static replaceAll(valor: string, stringSubstituir: string, stringSubstitutiva): string {

        /*
        let valor1 = valor;
        let variavel = stringSubstituir;
        let numero = stringSubstitutiva;
        let regexp = new RegExp(variavel, 'g');

        valor1 = valor1.replace(regexp, numero);

        return valor1;
        */

        return valor.split(stringSubstituir).join(stringSubstitutiva);
    }

    static obterRetornoConteudo(data) {
        return this.obterRetornoComunicacao(data).conteudo;
    }

    static obterRetornoStatus(data): RetornoStatus {
        return this.obterRetornoComunicacao(data).status;
    }

    static obterRetornoRelatorio(data) {
        return JSON.parse(JSON.stringify(this.converterCenturaParaJSON(data)));
    }

    private static obterRetornoComunicacao(data): RetornoComunicacao {
        return this.converterCenturaParaJSON(data);
    }

    private static converterCenturaParaJSON(data) {

        let texto: Resultado = <Resultado>data;
        let retornoComunicacao: RetornoComunicacao = <RetornoComunicacao> JSON.parse(texto.d);
        return retornoComunicacao;
    }

    static converterObjParaJSON(data) {
        return JSON.parse(JSON.stringify(data));
    }

    static obterUsuarioSessao() {
        let usuario: Usuario = new Usuario();
        usuario.NOM_USUARIO = window.localStorage.getItem(NOME_USUARIO_SESSAO);
        usuario.NOM_USUARIO_LOGIN = window.localStorage.getItem(LOGIN_USUARIO_SESSAO);
        usuario.APELIDO = window.localStorage.getItem(APELIDO_USUARIO_SESSAO);
        usuario.FOTO_PERFIL = window.localStorage.getItem(FOTO_PERFIL_USUARIO_SESSAO);
        usuario.FOTO_ROTATE = Number(window.localStorage.getItem(FOTO_ROTATE_USUARIO_SESSAO));
        return usuario;
    }

    static obterToken() {
        return window.localStorage.getItem(TOKEN_SESSAO);
    }

    static obterMacAddress() {

    }

    static setUsuarioSessao(usuario: Usuario) {

        window.localStorage.setItem(NOME_USUARIO_SESSAO, usuario.NOM_USUARIO);
        window.localStorage.setItem(LOGIN_USUARIO_SESSAO, usuario.NOM_USUARIO_LOGIN);

    }

    static setUsuarioApelidoFotoSessao(usuario: Usuario) {

        window.localStorage.setItem(APELIDO_USUARIO_SESSAO, usuario.APELIDO);
        window.localStorage.setItem(FOTO_PERFIL_USUARIO_SESSAO, usuario.FOTO_PERFIL);
        window.localStorage.setItem(FOTO_ROTATE_USUARIO_SESSAO, usuario.FOTO_ROTATE.toString());

    }

    static setToken(token: string) {

        window.localStorage.setItem(TOKEN_SESSAO, token);

    }

    static obterEmpresaSessao() {
        let empresa: Empresar = new Empresar();
        empresa.sCodEmpresa = window.localStorage.getItem(CODIGO_EMPRESA_SESSAO_SELECIONADA);
        empresa.NOM_FANTASIA = window.localStorage.getItem(NOME_EMPRESA_SESSAO_SELECIONADA);

        return empresa;
    }

    static setEmpresaSessao(empresa: Empresar) {

        window.localStorage.setItem(CODIGO_EMPRESA_SESSAO_SELECIONADA, empresa.sCodEmpresa);
        window.localStorage.setItem(NOME_EMPRESA_SESSAO_SELECIONADA, empresa.NOM_FANTASIA);

    }

    static limparSessao() {
        window.localStorage.setItem(NOME_USUARIO_SESSAO, null);
        window.localStorage.setItem(LOGIN_USUARIO_SESSAO, null);
        window.localStorage.setItem(TOKEN_SESSAO, null);
        sessionStorage.setItem('onboard', null);
        window.localStorage.setItem(APELIDO_USUARIO_SESSAO, null);
        window.localStorage.setItem(FOTO_PERFIL_USUARIO_SESSAO, null);
        window.localStorage.setItem(FOTO_ROTATE_USUARIO_SESSAO, null);

        //window.localStorage.setItem(CODIGO_EMPRESA_SESSAO_SELECIONADA, null);
        //window.localStorage.setItem(NOME_EMPRESA_SESSAO_SELECIONADA, null);

    }

    static obterDataAtual() {
        let today = new Date();
        let dataAtual = today.toLocaleDateString();
        return dataAtual;
    }

    static retirarAnoDataCompleta(data){
        //console.log("data", data);
        //let ano = new Date(data);
        //let a = ano.toLocaleDateString('pt-BR');

        //console.log("ano", ano.getFullYear());
        //console.log("RetirarAnoDataCompleta toString", a);
        //console.log("UTC",ano.setUTCDate());

        let ano = data.substring(6,12);
        return ano;
    }

    static obterNomeMesAtual(){
        let now = new Date();
        //let nomeDia = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
        let nomeMes = this.meses();
        return nomeMes[now.getMonth().toString()];
    }

    static obterDataAtualAnoMesDiaSemBarras(){
        let data = new Date();
        let dd = String(data.getDate()).padStart(2, '0');
        let mm = String(data.getMonth() + 1).padStart(2, '0');
        let yy = data.getFullYear();

        return yy + mm + dd
    }

    static obterDataAnoMesDiaHoraMinuto() {
        let today = new Date();
        let yy = today.getFullYear();
        let mm = this.formatarDoisCaracteresNumeros(today.getMonth() + 1);
        let dd = this.formatarDoisCaracteresNumeros(today.getDate());
        let hh = this.formatarDoisCaracteresNumeros(today.getHours());
        let min = this.formatarDoisCaracteresNumeros(today.getMinutes());

        return ''+yy+mm+dd+hh+min;
    }

    static formatarDoisCaracteresNumeros(numero: number) {
        let retorno: string = '';
        if(numero < 10){
            retorno = '0'+numero;
        }else{
            retorno = ''+numero;
        }
        return retorno;
    }

    static removeObjetosDominioDuplicados(lista, listaItensRemover) {
        let listaCentroCusto = <Dominio[]>_(lista)
        .differenceBy(listaItensRemover, 'codigo', 'descricao')
        .map(_.partial(_.pick, _, 'codigo', 'descricao'))
        .value();
        return listaCentroCusto
    }

    static removeObjetosDuplicados(lista, listaItensRemover) {
        let listaCentroCusto = <any[]>_(lista)
        .differenceBy(listaItensRemover, 'codigo', 'descricao')
        .map(_.partial(_.pick, _, 'codigo', 'descricao'))
        .value();
        return listaCentroCusto
    }


    static removerCaractersEspeciais(valor: string ) {
        var novoValor = valor.replace(/[\.^,~{}<>'=+;:º_"@#$%¨&*()/-]/g, "");
        return novoValor;
    }

    static compararCaractersEspeciais(valor: string ) {
        var regexp = new RegExp(/[.^,~{}<>'=+;:º_"@#$%¨&*()/-]/);
        return regexp.test(valor);
    }


    static compararDataInicialMaiorDataFinal(dataInicial: any, dataFinal2: any) {
        let dataInical = dataInicial;
        let dataFinal = dataFinal2;
        let dtInicial = dataInical.split('/');
        let dtFinal = dataFinal.split('/');

        let inicial = dtInicial[1] + '-' + dtInicial[0] + '-' + dtInicial[2];
        let final = dtFinal[1] + '-' + dtFinal[0] + '-' + dtFinal[2];

        let dataInicialFormat = new Date(inicial);
        let dataFinalFormat = new Date(final);
        //console.log(dataInicialFormat, dataFinalFormat);
        if(dataInicialFormat > dataFinalFormat){
            return true;
        } else {
            return false;
        }
    }

    static compararDataInicialMenorDataFinal(dataInicial: any, dataFinal2: any) {
        let dataInical = dataInicial;
        let dataFinal = dataFinal2;
        let dtInicial = dataInical.split('/');
        let dtFinal = dataFinal.split('/');

        let inicial = dtInicial[1] + '-' + dtInicial[0] + '-' + dtInicial[2];
        let final = dtFinal[1] + '-' + dtFinal[0] + '-' + dtFinal[2];

        let dataInicialFormat = new Date(inicial);
        let dataFinalFormat = new Date(final);
        if(dataInicialFormat < dataFinalFormat){
            return true;
        } else {
            return false;
        }
    }

    static validacao(formControl: FormControl) {
        let mensagem: string = '';
        if(formControl != null && !formControl.valid){

          if(formControl.errors.required){
            mensagem = CAMPO_REQUERIDO;
          }

        }

        return mensagem;
    }

    static montarMensagemCampo(mensagens, mensagem) {
        if(mensagens.indexOf(mensagem) == -1){

            if(mensagens != ''){
                mensagens = mensagens + ' ' + mensagem;
            }else{
                mensagens = mensagens + mensagem;
            }

        }
        return mensagens;
    }

    static removeElementosDuplicadosArray(arrayElementos) {
        return arrayElementos.filter((v, i)=> arrayElementos.indexOf(v)==i);
    }

    static irParaElemento(elemento) {
      $("html, body").animate({ scrollTop: $(elemento).offset().top });
    }

    static irTopo() {
        $("html, body").animate({ scrollTop: 0 });
    }

    static irTopoSidebar() {
        /* $(".ui-sidebar-procenge")[0].scrollTo(0,0); */
        $(".ui-sidebar-procenge").animate({ scrollTop: 0 }
            // , function(){ essa funcao de callback esta escondendo o scroll da tela
            // $(this).css("overflow", "hidden");
        //  }
        );
    }

    // Await time=300 para animar menu lateral - animação temporária
    static checarMostrarMenu(innerWidth) {
        // Só chamar se a resolucao for maior que 767px
        // mostrar=true, mostrarMenu e ocultarMenu
        return new Promise( resolve => {
            setTimeout( () => {
                resolve(innerWidth);
            }, 300);
        });
    }

    static async changeMostrar(innerWidth) {
        let retorno = await this.checarMostrarMenu(innerWidth);
        let mostrar = false;
        if ( retorno > 767 ) mostrar = true;
        return mostrar;
    }

    static retornaCodigoModulo(modulo){
        if(modulo == MODULO_CONTABILIDADE){
            return 'CN3';
        }else if(modulo == MODULO_FINANCEIRO){
            return 'FI3';
        }else if(modulo == MODULO_ESTOQUE){
            return 'ES3';
        }else if(modulo == MODULO_COMPRAS){
            return 'MA3';
        }else if(modulo == MODULO_COMERCIAL){
            return 'CO3';
        }else if(modulo == MODULO_ADMINISTRADOR){
            return 'AD3';
        }else if(modulo == MODULO_INTEGRACAO){
            return 'IN3';
        }else if(modulo == MODULO_FISCAL){
            return 'FS3';
        }else if(modulo == MODULO_ATIVO){
            return 'AT3';
        }else if(modulo == MODULO_ORCAMENTO){
            return 'OR3';
        }else{
            return '';
        }

    }

    static validarTelefone(telefone: string){
        const TELEFONE = /^\((\d{2})\)\s?(\d{4,5}\-?\d{4})$/;
        if (telefone && !TELEFONE.test(telefone)){
            return false;
        }
        return true;
    }

    static validarEmail(email: string)
    {
        const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email && !EMAIL_REGEXP.test(email))
        {
            return false;
        }

        return true;
    }

    /*
    Valida CPF

    Valida se for CPF

    @param  string cpf O CPF com ou sem pontos e traço
    @return bool True para CPF correto - False para CPF incorreto
    */
    static validarCpf( valor ) {

        // Garante que o valor é uma string
        valor = valor.toString();

        // Remove caracteres inválidos do valor
        valor = valor.replace(/[^0-9]/g, '');


        // Captura os 9 primeiros dígitos do CPF
        // Ex.: 02546288423 = 025462884
        var digitos = valor.substr(0, 9);

        // Faz o cálculo dos 9 primeiros dígitos do CPF para obter o primeiro dígito
        var novo_cpf = this.calcDigitosPosicoes( digitos );

        // Faz o cálculo dos 10 dígitos do CPF para obter o último dígito
        var novo_cpf = this.calcDigitosPosicoes( novo_cpf, 11 );

        if ((valor == '11111111111')
            || (valor == '22222222222') || (valor == '33333333333')
            || (valor == '44444444444') || (valor == '55555555555')
            || (valor == '66666666666') || (valor == '77777777777')
            || (valor == '88888888888') || (valor == '99999999999')) {
            // CPF inválido
            return false;
        }

        // Verifica se o novo CPF gerado é idêntico ao CPF enviado
        if ( novo_cpf === valor ) {
            // CPF válido
            return true;
        } else {
            // CPF inválido
            return false;
        }

    } // valida_cpf

    /*
    valida_cnpj

    Valida se for um CNPJ

    @param string cnpj
    @return bool true para CNPJ correto
    */
    static validarCnpj ( valor ) {

        // Garante que o valor é uma string
        valor = valor.toString();

        // Remove caracteres inválidos do valor
        valor = valor.replace(/[^0-9]/g, '');


        // O valor original
        var cnpj_original = valor;

        // Captura os primeiros 12 números do CNPJ
        var primeiros_numeros_cnpj = valor.substr( 0, 12 );

        // Faz o primeiro cálculo
        var primeiro_calculo = this.calcDigitosPosicoes( primeiros_numeros_cnpj, 5 );

        // O segundo cálculo é a mesma coisa do primeiro, porém, começa na posição 6
        var segundo_calculo = this.calcDigitosPosicoes( primeiro_calculo, 6 );

        // Concatena o segundo dígito ao CNPJ
        var cnpj = segundo_calculo;

        // Verifica se o CNPJ gerado é idêntico ao enviado
        if ( cnpj === cnpj_original ) {
            return true;
        }

        // Retorna falso por padrão
        return false;

    } // valida_cnpj


    /*
    calc_digitos_posicoes

    Multiplica dígitos vezes posições

    @param string digitos Os digitos desejados
    @param string posicoes A posição que vai iniciar a regressão
    @param string soma_digitos A soma das multiplicações entre posições e dígitos
    @return string Os dígitos enviados concatenados com o último dígito
    */
    private static calcDigitosPosicoes( digitos, posicoes = 10, soma_digitos = 0 ) {

        // Garante que o valor é uma string
        digitos = digitos.toString();

        // Faz a soma dos dígitos com a posição
        // Ex. para 10 posições:
        //   0    2    5    4    6    2    8    8   4
        // x10   x9   x8   x7   x6   x5   x4   x3  x2
        //   0 + 18 + 40 + 28 + 36 + 10 + 32 + 24 + 8 = 196
        for ( var i = 0; i < digitos.length; i++  ) {
            // Preenche a soma com o dígito vezes a posição
            soma_digitos = soma_digitos + ( digitos[i] * posicoes );

            // Subtrai 1 da posição
            posicoes--;

            // Parte específica para CNPJ
            // Ex.: 5-4-3-2-9-8-7-6-5-4-3-2
            if ( posicoes < 2 ) {
                // Retorno a posição para 9
                posicoes = 9;
            }
        }

        // Captura o resto da divisão entre soma_digitos dividido por 11
        // Ex.: 196 % 11 = 9
        soma_digitos = soma_digitos % 11;

        // Verifica se soma_digitos é menor que 2
        if ( soma_digitos < 2 ) {
            // soma_digitos agora será zero
            soma_digitos = 0;
        } else {
            // Se for maior que 2, o resultado é 11 menos soma_digitos
            // Ex.: 11 - 9 = 2
            // Nosso dígito procurado é 2
            soma_digitos = 11 - soma_digitos;
        }

        // Concatena mais um dígito aos primeiro nove dígitos
        // Ex.: 025462884 + 2 = 0254628842
        var cpf = digitos + soma_digitos;

        // Retorna
        return cpf;

    } // calc_digitos_posicoes


    static converterStringParaFloat(valor: string) {
        //Precisão de 2 casas decimais
        return (valor != '') ? parseFloat((valor).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]).toFixed(2): "0";
    }


    static atualizarLista(array:any[])
    {
        //Atualiza a lista de objetos para o Datatable ser atualizado.
        let arrayAux:any[];
        arrayAux = array.slice();
        array = [];
        array = arrayAux;
    }

    // static concatenarListaObjetos(objA: object[], objB: object[]) {
    //     /*A função retorna a concatenação de duas listas
    //      de objetos e remove os objetos duplicados*/
    //     let dadosAux: any [] = [];
    //     dadosAux = $.merge(objA, objB);
    //     dadosAux.filter(function(a) {
    //         return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    //         }, Object.create(null));

    //     return dadosAux;
    // }


    static obterDominio(modulo) {

        let retorno: string = "";
        let lista: string[] = location.pathname.split("/");

        if(lista[1] != modulo){
            retorno = "/" + lista[1];
        }

        return retorno;
    }

    static transformarArquivoEmArrayLinha(data) {

        let csvData = data;
        let allTextLines = csvData.split(/\r\n|\n/);
        let headers = allTextLines[0].split(',');
        let lines = [];

        for ( let i = 0; i < allTextLines.length; i++) {
            // split content based on comma
            let data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                let tarr = [];
                for ( let j = 0; j < headers.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
            }
        }

        return lines;
    }

    static download(arquivo: Arquivo){
        let fd = arquivo.conteudo;
        let convert = this.dataURItoBlob(fd);

        if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
          window.navigator.msSaveOrOpenBlob(convert, arquivo.nome);
        } else {
          const url = window.URL.createObjectURL(convert);
          const link = document.createElement('a');
          link.href = url;
          link.download = arquivo.nome;
          link.click();
        }
    }

    static dataURItoBlob(dataURI) {
        var byteString;
        var mimeString = "application/octet-stream";

        if (this.isBase64(dataURI.split(',')[0])) {
            byteString = atob(dataURI.split(',')[1]);

            mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        } else {
            byteString = atob(dataURI.split(',')[0]);
        }

        var arrayBuffer = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        var dataView = new DataView(arrayBuffer);
        return new Blob([dataView.buffer], {type:mimeString});
    }

    static setarPaginacao(entidadeFiltro: EntidadeFiltro, lista: any[]){

        entidadeFiltro._REGISTRO_INICIAL = 1;
        entidadeFiltro._REGISTRO_FINAL = QUANTIDADE_BUSCA_PAGINADA;
        if(lista.length > 0){
            entidadeFiltro._REGISTRO_INICIAL = lista.length+1;
            entidadeFiltro._REGISTRO_FINAL = lista.length + QUANTIDADE_BUSCA_PAGINADA;
        }

    }

    static setarPaginacaoDatatable(entidadeFiltro: EntidadeFiltro, paginacaoFiltro: PaginacaoFiltro){

        if(paginacaoFiltro != null){
            entidadeFiltro._REGISTRO_INICIAL = paginacaoFiltro._REGISTRO_INICIAL;
            entidadeFiltro._REGISTRO_FINAL = paginacaoFiltro._REGISTRO_FINAL;
        }else{
            entidadeFiltro._REGISTRO_INICIAL = 1;
            entidadeFiltro._REGISTRO_FINAL = 10;
        }

    }

    static isBase64(dataURI : string) : boolean {
        try {
            return (dataURI.indexOf("base64") > -1);
        } catch (ex) {
            return false;
        }
    }

    static keysPrintable(keycode) : boolean {
        var valid =
        (keycode > 47 && keycode < 58)   || // number keys
        keycode == 32 || keycode == 13 || keycode == 8  || // spacebar & return key(s) (if you want to allow carriage returns)
        (keycode > 64 && keycode < 91)   || // letter keys
        (keycode > 95 && keycode < 112)  || // numpad keys
        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223);   // [\]' (in order)

        return valid;
    }

    static isEmpty(valor: string): boolean{
        return (valor.trim() == ""? true: false);
    }

    static isTrue(valor: string): boolean{
        return (valor.trim() == "S"? true: false);
    }

    static carregarTituloPagina(operacao: string, titulo: string){
        if(operacao == Operacao.INCLUIR){
            return INCLUIR + ' ' + titulo;
        }else if(operacao == Operacao.ALTERAR){
            return ALTERAR + ' ' + titulo;
        }else{
            return DETALHAR + ' ' + titulo;
        }
    }

    static carregarDescricaoIndicadorSimNao(valor: string) {
        if (valor == 'S') {
            return 'Sim';
         }else {
            return 'Não';
        }
    }

    static carregarDescricaoPessoaFisicaJuridica(valor: string) {
        if (valor == 'F' || valor == 'PF') {
            return 'Física';
         }else {
            return 'Jurídica';
        }
    }

    static selecionarItemLista(codigo: string){
        if(codigo != ""){
            return {'codigo': codigo};
        }                
    }
    
    static carregarItemLista(codigo: string, lista: any[]){
        let selecao: any = [];
        for (let i = 0; i < lista.length; i++) {
            if(codigo == lista[i].codigo){
                selecao = {codigo: lista[i].codigo};
                break;
            }
        }
        return selecao;
    }

    /**
     * Verifica se o novo registro já existe.
     * @param operacao Operação da tela (inclusão, alteração).
     * @param valor Valor capturado ($event).
     * @param dados Quadro de dados da tela.
     * @param chavePrimaria Chave primária da classe instanciada.
     * @param mensagem Opcional, caso seja necessário uma mensagem mais específica.
     * @returns Caso haja erro, retorna mensagem padrão ou específica.
	 */
    static validarNovoRegistro(operacao: string, valor: string, dados: any[], chavePrimaria: string, mensagem?: string){
        let erro: string = "";
        if(operacao == Operacao.INCLUIR && valor != ""){
            for(let i = 0; i < dados.length; i++){
                if (dados[i].PK == chavePrimaria){
                    if(mensagem != undefined){
                        erro = mensagem;
                    }else{
                        erro = REGISTRO_JA_CADASTRADO;
                    }
                }
            }
        }
        return erro;
    }

    static carregarDescricaoItemLista(codigo: string, lista: any[]): string{
        for (let i = 0; i < lista.length; i++) {
            if(codigo == lista[i].codigo){
                return lista[i].descricao;
            }
        }
    }

    /**
     * Verifica se os campos obrigatórios estão preenchidos e se o registro já existe no quadro de dados.
     * @param objeto Classe instanciada.
     * @param dados Quadro de dados da tela.
     * @returns Caso haja erro, retorna mensagem específica.
	 */
    static validarInclusao(objeto: any, dados: any[], retorno){
        let erro: string = "";
        if(objeto.validarCampoObrigatorio()){
            erro = MSG_CAMPOS_OBRIGATORIOS;
        }else{
            for (let i = 0; i < dados.length; i++){
                if(objeto.getChavePrimaria() == dados[i].PK){
                    erro = REGISTRO_JA_EXISTE_LISTA;
                }
            };
        }
        retorno(erro);
    }

    /**
     * Verifica se os campos obrigatórios estão preenchidos.
     * @param objeto Classe instanciada.
     * @returns Caso haja erro, retorna mensagem específica.
	*/
    static validarAlteracao(objeto: any, retorno){
        let erro: string = "";
        if(objeto.validarCampoObrigatorio()){
            erro = MSG_CAMPOS_OBRIGATORIOS;
        }
        retorno(erro);
    }

    // static carregar(utils: any, filtro: any, selecao: any, servico: any, retorno) {
    //     utils.carregar(filtro, selecao, servico, (lista, selecao) => {
    //         retorno(lista, selecao)});
    // }

    static downloadTexto(arquivo: Arquivo) {

        let blob = new Blob([arquivo.conteudo], {
          type: 'text/txt;charset=utf-8;'
        });

        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveOrOpenBlob(blob, arquivo.nome + '.txt');
        }
        else {
          let link = document.createElement("a");
          link.style.display = 'none';
          document.body.appendChild(link);
          if (link.download !== undefined) {
            link.setAttribute('href', URL.createObjectURL(blob));
            link.setAttribute('download', arquivo.nome + '.txt');
            link.click();
          }
          else {
            let texto = 'data:text/txt;charset=utf-8,' + arquivo.conteudo;
            window.open(encodeURI(texto));
          }
          document.body.removeChild(link);
        }
    }

    static somarDiaAdata(data: any, dias: number) {

        data = data.split('/');
        let dataAux = new Date(Number(data[2]), Number(data[1]) - 1, Number(data[0]));
        dataAux.setDate(dataAux.getDate() + dias);
        return dataAux.toLocaleDateString();
    }

    static somarMesAdata(data, meses) {

        data = data.split('/');
        let dataAux = new Date(Number(data[2]), Number(data[1]) - 1, Number(data[0]));
        dataAux.setMonth(dataAux.getMonth() + meses);
        return dataAux.toLocaleDateString();
    }

    static somarAnoAdata(data, anos) {

        data = data.split('/');
        let dataAux = new Date(Number(data[2]), Number(data[1]) - 1, Number(data[0]));
        dataAux.setFullYear(dataAux.getFullYear() + anos);
        return dataAux.toLocaleDateString();
    }

    //arredondamento
    static precise_round(num, decimals) {
        var t = Math.pow(10, decimals);
        return parseFloat((Math.round((num * t) + (decimals>0?1:0)*(Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals));
      }

    static converterArrayParaString (event) {
        let opcao = event.toString();
        if (event != '') {
            return opcao;
        } else {
            opcao = 'N';
            return opcao;
        }
    }

    static downloadArquivoRemessa(arquivo: Arquivo) {

        let blob = new Blob([arquivo.conteudo], {
          type: 'text/txt;charset=utf-8;'
        });

        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveOrOpenBlob(blob, arquivo.nome);
        }
        else {
          let link = document.createElement("a");
          link.style.display = 'none';
          document.body.appendChild(link);
          if (link.download !== undefined) {
            link.setAttribute('href', URL.createObjectURL(blob));
            link.setAttribute('download', arquivo.nome);
            link.click();
          }
          else {
            let texto = 'data:text/txt;charset=utf-8,' + arquivo.conteudo;
            window.open(encodeURI(texto));
          }
          document.body.removeChild(link);
        }
    }
    static  stringvalorparavalorcomcasasdecimais(valor: string, numcasaspedido:number=2){//por default com 2 casas dec
        valor = (valor != undefined)? valor.toString(): '';
        if(valor==null || valor==undefined || valor=="" || valor.match(/[a-h]/gi)!=null
        ){
          return -1;
        }else{
          let listaDeValoresParaRetirarVirgula = valor.split(",");
          let tamlistaDeValoresParaRetirarVirgula = listaDeValoresParaRetirarVirgula.length;
          let valorJuntoComCasasDecimaisTemp: any; let listaDeValoresComPontosDeCentenasEtc: any; let valorJuntoComCasasDecimaisFinal: any;

          if(tamlistaDeValoresParaRetirarVirgula==2){          // isso signific que existe valores pois virgula - centavos
            listaDeValoresComPontosDeCentenasEtc = listaDeValoresParaRetirarVirgula[0].split(".");
            valorJuntoComCasasDecimaisTemp = listaDeValoresComPontosDeCentenasEtc.join("")+ "." + listaDeValoresParaRetirarVirgula[tamlistaDeValoresParaRetirarVirgula-1];

          }else if(tamlistaDeValoresParaRetirarVirgula==1){    // o valor inicial n possuia items apos ","
            listaDeValoresComPontosDeCentenasEtc = listaDeValoresParaRetirarVirgula[0].split(".");
            let tamlistaDeValoresComPontosDeCentenasEtc = listaDeValoresComPontosDeCentenasEtc.length;
            if(tamlistaDeValoresComPontosDeCentenasEtc>2){     //considera ex "440.494.456" =>440.494.456 q isso significa que o "." considera ser val inteiros, centenas, milhares etc e n virgula
              valorJuntoComCasasDecimaisTemp = listaDeValoresComPontosDeCentenasEtc.join("");
            }else if(tamlistaDeValoresComPontosDeCentenasEtc==2){  //considera "34.42" => 34.42 onde os 42 seriam os centavos considera q se um valor possui apenas um ponto eh pq ja pode estar no padrao float ex:40.23 apesar n ser exat o ideal ex: 400.234 esta ambiguo esta em float ou eh valor em mil
              valorJuntoComCasasDecimaisTemp = listaDeValoresComPontosDeCentenasEtc.join(".");
            }
            else{     // ex: "410" => 410
              valorJuntoComCasasDecimaisTemp = listaDeValoresParaRetirarVirgula.join("");
            }
          }else{
            return -1;
          }//retorna -1 se caso n entrou nos padroes de conversao ou n eh numero
          valorJuntoComCasasDecimaisFinal = Number(valorJuntoComCasasDecimaisTemp);
          //valorJuntoComCasasDecimaisFinal = valorJuntoComCasasDecimaisTemp.toFixed(numcasaspedido);
          return valorJuntoComCasasDecimaisFinal;
        }
      }

    static mascaraParaTotalizadores( valor ) {

        if ( valor && valor!= '') {
            valor = (Utils.converterStringParaFloat(valor)).split('.');

            let decimal = valor[1];
            let inteiro = valor[0];
            let resultado: string = '';
            let sinal: string = '';

            if( inteiro[0] == '-' ) {
                inteiro = inteiro.substr(1);
                sinal = '-';
            }

            while (inteiro.length > 0) {
                let aux: string = '';
                aux = inteiro.slice(-3);
                if (inteiro.length > 3){
                    resultado = '.' + aux + resultado;
                    inteiro = inteiro.substring(0,inteiro.length-3);
                } else {
                    resultado = aux + resultado;
                    inteiro = '';
                }

            }

            while( decimal.length < 2) {
                decimal = decimal + '0';
            }

            resultado = sinal + resultado + ',' + decimal;
            return resultado;
        } else {
            return '0,00';
        }

    }

    static isArray(o){
        return(typeof(o.length)=="undefined")?false:true;
    }
    static formatarDataParaIntParaComparacaoTirandoHorario(dataw :string): number{
        //recebe valores como 10/10/2016 ou 10-10-2016 ou
        //10/10/2016 10.... ex ou 10-10-2015 10...
        let separador = "/"
        if(dataw[2]=="-"){
          separador = "-";
        }
        let datanew = dataw.split(separador);
        if(datanew[2].length>4){
          let das =  datanew[2].split(" ");
          datanew[2] = das[0];
        }
        let datanewform= datanew[2]+datanew[1] + datanew[0];
        return parseInt(datanewform);
      }


      static dataInicialMaiorMenorOuIgualADataFinalTirandoHorario(datainicial: string, datafinal: string): string{
        if(datainicial==null || datainicial==undefined || datainicial==""|| datafinal ==null|| datafinal==undefined||  datafinal=="" ){
          return "invalido";
        }
        /*}else{
          if(datainicial.match(/[a-h]/gi || datafinal|)
        }*/
        let datainicialtemp = Utils.formatarDataParaIntParaComparacaoTirandoHorario(datainicial);
        let dataFinaltemp = Utils.formatarDataParaIntParaComparacaoTirandoHorario(datafinal);
        if((datainicialtemp)<(dataFinaltemp)){
          return "menor";
        }if(datainicialtemp==dataFinaltemp){
          return "igual";

        }if(datainicialtemp>dataFinaltemp){
          return "maior";
        }
        return "invalido";

      }

      static construirMensagem(retornoStatus: RetornoStatus){

        let mensagemRetorno: string = '';

        let retornoMensagens: RetornoMensagem[] = retornoStatus.mensagens;

        for (let i = 0; i < retornoMensagens.length; i++) {
          let mensagem: Mensagem = new Mensagem();
          let solucao: string = (retornoMensagens[i].sSolucao == '') ? '' : (' Solução: ' + retornoMensagens[i].sSolucao);
    
          mensagem.tipo = retornoStatus.sTipo;
          mensagem.descricao = retornoMensagens[i].sMensagem + "." + solucao;
    
          if (retornoMensagens[i].sDetalhe != '' || retornoMensagens[i].sContexto != '') {
            
    
            mensagem.detalhe = ((retornoMensagens[i].sDetalhe == '') ? '' : (' Detalhe: ' + retornoMensagens[i].sDetalhe))
              + 
              ((retornoMensagens[i].sContexto == '') ? '' : (' Contexto: ' + retornoMensagens[i].sContexto)) + ".";
          }
          else {
            mensagem.detalhe = '';
          }

          mensagemRetorno = mensagemRetorno + mensagem.tipo + mensagem.descricao + mensagem.detalhe;
          
        }

        return mensagemRetorno;
      }

      static formatarContaCorrente(numeroContaCorrente: string, quantidadeContaCorrente: number, quandidaDigitos: number){

        if (numeroContaCorrente.trim() != "") {
            numeroContaCorrente = numeroContaCorrente.padStart(quantidadeContaCorrente, "0");
        }else if (numeroContaCorrente == "") {
            numeroContaCorrente = numeroContaCorrente.padStart(quantidadeContaCorrente, "0");          
        } 
        if(quandidaDigitos > 0){
        numeroContaCorrente = Utils.replaceAll(numeroContaCorrente, "-", "");
        let metade = Math.floor(numeroContaCorrente.length - quandidaDigitos);
        return  numeroContaCorrente.substr(0,metade)+"-"+numeroContaCorrente.substr(metade);
        }else{
        numeroContaCorrente = Utils.replaceAll(numeroContaCorrente, "-", "");
        return  numeroContaCorrente;
        }
    }

    static selecionarStatusTitulo(event) {
        let selecaoStatus = event;
        
        if (selecaoStatus == "A") {
            return 'Aberto';
        } else if (selecaoStatus == "C") {
            return 'Cancelado';
        } else if (selecaoStatus == "P") {
            return 'Parcial';
        } else if (selecaoStatus == "L") {
            return 'Liquidado';
        } else if (selecaoStatus == "S") {
            return 'Substituído';
        } else if (selecaoStatus == "N") {
            return 'Encontro de Contas';
        } else if (selecaoStatus == "R") {
            return 'Em Renegociação';
        } else if (selecaoStatus == "Q") {
            return 'Quebra de Acordo';
        } else {
            return selecaoStatus;
        }
      }


    static meses() {
        return [
            {'codigo': '01', 'nome': 'Janeiro'}, {'codigo': '02', 'nome': 'Fevereiro'},{'codigo': '03', 'nome': 'Março'},
            {'codigo': '04', 'nome': 'Abril'}, {'codigo': '05', 'nome': 'Maio'}, {'codigo': '06', 'nome': 'Junho'},
            {'codigo': '07', 'nome': 'Julho'}, {'codigo': '08', 'nome': 'Agosto'}, {'codigo': '09', 'nome': 'Setembro'},
            {'codigo': '10', 'nome': 'Outubro'}, {'codigo': '11', 'nome': 'Novembro'}, {'codigo': '12', 'nome': 'Dezembro'}
          ];
    }

}
