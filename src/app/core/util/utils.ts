import { TOKEN_SESSAO } from "../../app-init";


export default class Utils {

    
/*
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
*/
    static converterObjParaJSON(data: any) {
        return JSON.parse(JSON.stringify(data));
    }

    static obterToken() {
        return window.localStorage.getItem(TOKEN_SESSAO);
    }

    static setToken(token: string) {

        window.localStorage.setItem(TOKEN_SESSAO, token);

    }
/*
    static obterUsuarioSessao() {
        let usuario: Usuario = new Usuario();
        usuario.NOM_USUARIO = window.localStorage.getItem(NOME_USUARIO_SESSAO);
        usuario.NOM_USUARIO_LOGIN = window.localStorage.getItem(LOGIN_USUARIO_SESSAO);
        usuario.APELIDO = window.localStorage.getItem(APELIDO_USUARIO_SESSAO);
        usuario.FOTO_PERFIL = window.localStorage.getItem(FOTO_PERFIL_USUARIO_SESSAO);
        usuario.FOTO_ROTATE = Number(window.localStorage.getItem(FOTO_ROTATE_USUARIO_SESSAO));
        return usuario;
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

    }
    */

    static obterDataAtual() {
        let today = new Date();
        let dataAtual = today.toLocaleDateString();
        return dataAtual;
    }

    static retirarAnoDataCompleta(data: any){
        //console.log("data", data);
        //let ano = new Date(data);
        //let a = ano.toLocaleDateString('pt-BR');

        //console.log("ano", ano.getFullYear());
        //console.log("RetirarAnoDataCompleta toString", a);
        //console.log("UTC",ano.setUTCDate());

        let ano = data.substring(6,12);
        return ano;
    }

    /*
    static obterNomeMesAtual(){
        let now = new Date();
        let nomeMes = this.meses();
        return nomeMes[now.getMonth().toString()];
    }
*/
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

    /*
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
*/

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

    

}
