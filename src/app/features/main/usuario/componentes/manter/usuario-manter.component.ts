import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../../../../../shared/mensagem/service/mensagem.service';
import { Usuario } from '../../model/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-usuariomanter',
  templateUrl: './usuario-manter.component.html',
  styleUrls: ['./usuario-manter.component.scss']
})
export class UsuarioManterComponent implements OnInit {

  
  usuario: Usuario = new Usuario;

  carregandoUsuario: boolean = false;


  constructor(
    private _router: Router,
    private usuarioService: UsuarioService,
    private mensagemService: MensagemService
    

  ) { }

  ngOnInit(): void {

  }  

  voltar(){

    this._router.navigateByUrl('/main/usuario', {state: {operacao:"consultar"}});
    //this._router.navigateByUrl('/main/Usuario');

  }
  
  salvar(){
    this.mensagemService.clear();
    
    this.usuarioService.incluir(this.usuario).subscribe({
      next: (data: any) => {
        console.log(data);
        this.mensagemService.construirMensagem(data.status);
      },
      error: (err) => {console.log(err); this.carregandoUsuario = false;},
      complete: () => {this.carregandoUsuario = false;},
    }
    );

  }


}
