import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs";
//import { UsuarioService } from '../../administrador/usuario/servico/usuario.service';
//import { Usuario } from '../../administrador/usuario/servico/usuario';
//import { UsuarioFiltro } from '../../administrador/usuario/servico/usuariofiltro';

@Injectable()
export class AuthService {

  //private _showNavBar = new BehaviorSubject<boolean>(null);
  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private authenticated = false;

  //public usuario : Usuario = new Usuario();
  //public messageResource =  new BehaviorSubject(this.usuario);
  //currentMessage = this.messageResource.asObservable();


  constructor(
    private router: Router,
    //private usuarioService: UsuarioService
  ) {}

  /*
  signIn(usuarioFiltro: UsuarioFiltro, senha: string) {    

    return this.usuarioService.consultar(usuarioFiltro);

  }
  */
  login(){
    
  }

  logout() {
    this.router.navigate(['/signin']);
  }
}
