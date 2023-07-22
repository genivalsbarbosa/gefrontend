

export class SigninUtils {
    
    
   
  /*
  onSignin(
      usuarioService: UsuarioService,
      parametroService: ParametroService,
      empresaService: EmpresarService,
      systemService: SystemService) {

        systemService.validarToken().subscribe(
          async data => {

            let login: string = data["login"];
            parametroService.obtemParametro(ParametrosCodigo.LOGSEC).subscribe(
              async data => {
  
                  let parametro: Parametro = <Parametro> Utils.obterRetornoConteudo(data);
                  if(parametro == null || parametro.VALOR != 'S'){
                      let usuarioFiltro: UsuarioFiltro = new UsuarioFiltro();
                      usuarioFiltro.NOM_USUARIO_LOGIN = login;
                      await  this.carregarUsuario(usuarioFiltro, usuarioService, empresaService);
                  }else{
                      let usuarioFiltro: UsuarioFiltro = new UsuarioFiltro();
                      usuarioFiltro.COD_LOGIN_SECUNDARIO = login;
                      await  this.carregarUsuario(usuarioFiltro, usuarioService, empresaService);
                  }
                  
  
              },
              error => {
                  console.log('Erro: ', error);
              }
            ); 

          },
          error => {
            console.log('Erro: ', error);
          }

        );
                      
  }

    carregarUsuario(usuarioFiltro, usuarioService: UsuarioService, empresaService: EmpresarService){    
        usuarioService.consultarFotoDoPerfil(usuarioFiltro).subscribe(        

            datausu => {
    
              let retornoStatusUsuario: RetornoStatus = Utils.obterRetornoStatus(datausu);
    
              if(retornoStatusUsuario.sTipo != MensagemTipo.SUCESSO){
                console.log('Erro: ', Utils.construirMensagem(retornoStatusUsuario));
              }else{
                let listaUsuario: Usuario[] = <Usuario[]>Utils.obterRetornoConteudo(datausu);
                let usuario: Usuario = listaUsuario[0]; 
                Utils.setUsuarioApelidoFotoSessao(usuario);
    
                usuarioService.consultar(usuarioFiltro).subscribe(
                  d => {
                    let listaUsuario: Usuario[] = <Usuario[]>Utils.obterRetornoConteudo(d);
                    let usuario: Usuario = listaUsuario[0]; 
                    Utils.setUsuarioSessao(usuario);                    
                    if(Utils.obterEmpresaSessao().sCodEmpresa == null || Utils.obterEmpresaSessao().sCodEmpresa == ''){
    
                      let empresaFiltro: EmpresarFiltro = new EmpresarFiltro();              
                      empresaFiltro.sUsuario = usuario.NOM_USUARIO_LOGIN;
                      empresaService.consultar(empresaFiltro).subscribe(
                          data => {
    
                            let retornoStatus: RetornoStatus = Utils.obterRetornoStatus(data);
    
                            if(retornoStatus.sTipo == MensagemTipo.SUCESSO){
                              let lista: Empresar[] = <Empresar[]>Utils.obterRetornoConteudo(data);            
                              if(lista != null && lista.length > 0){
                                Utils.setEmpresaSessao(lista[0]);            
                              }
                              //this.router.navigate(['/modulo']);

                            }else{
                                console.log('Erro: ', Utils.construirMensagem(retornoStatus));
                            }
                          },
                          error => {
                            console.log('Erro: ', error);
                            
                          }
                      );
    
                    }
    
                  }
                );                
    
              }                                                    
              
            },
            error => {
                console.log('Erro: ', error);
              
            }            
          );
      }
      */
  

}