import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export var VERSAO = '';

export var CODIGO_EMPRESA_SESSAO_SELECIONADA = '';
export var NOME_EMPRESA_SESSAO_SELECIONADA = '';
export var LOGIN_USUARIO_SESSAO = '';
export var NOME_USUARIO_SESSAO = '';
export var APELIDO_USUARIO_SESSAO = '';
export var FOTO_PERFIL_USUARIO_SESSAO = '';
export var FOTO_ROTATE_USUARIO_SESSAO = '';
export var TOKEN_SESSAO = '';

export class Config {

  IP_SERVICE: string = '';
  VERSAO: string  = '';
  IP_SERVICO_CNPJ: string = '';
  IP_SERVICO_CEP: string = '';
  IP_BYPASS_CORS: string = '';

  constructor(){}

}


@Injectable()
export class AppInitService {    
  private config: Config = new Config();


  constructor(private http: HttpClient){} 

  public getConfig(){        
    return this.config;        
  }

  public init() {
    let urlString: string = "./assets/conf/config.json";    

    this.http.get<Config>(urlString).subscribe(config => {
          this.config = config;

          VERSAO = this.config.VERSAO;
          CODIGO_EMPRESA_SESSAO_SELECIONADA = 'EMPRESA_SESSAO_SELECIONADA' + this.config.IP_SERVICE;
          NOME_EMPRESA_SESSAO_SELECIONADA = 'NOME_EMPRESA_SESSAO_SELECIONADA' + this.config.IP_SERVICE;
          LOGIN_USUARIO_SESSAO = 'loginUsuario' + this.config.IP_SERVICE;
          NOME_USUARIO_SESSAO = 'nomeUsuario' + this.config.IP_SERVICE;
          APELIDO_USUARIO_SESSAO = 'apelidoUsuario' + this.config.IP_SERVICE;
          FOTO_PERFIL_USUARIO_SESSAO = 'fotoPerfilUsuario' + this.config.IP_SERVICE;
          FOTO_ROTATE_USUARIO_SESSAO = 'fotoRotateUsuario' + this.config.IP_SERVICE;
          TOKEN_SESSAO = 'token' + this.config.IP_SERVICE; 
        }
     );   

  }
}