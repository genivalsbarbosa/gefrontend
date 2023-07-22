import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../usuario/service/usuario.service';
import { UsuarioFiltro } from '../../../usuario/model/usuariofiltro';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/shared/mensagem/service/mensagem.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  listaUsuario: any[] = [];
  usuarioFiltro: UsuarioFiltro = new UsuarioFiltro;

  

  constructor(
    private _router: Router,
    private usuarioService: UsuarioService,
    private mensagemService: MensagemService
  ) { }

  ngOnInit(): void {
    console.log(history.state);
    this.mensagemService.clear();
  }

  

  pesquisar(){
    this.mensagemService.clear();
    this.usuarioService.consultar(this.usuarioFiltro).subscribe({
      next: (data: any) => {
        //console.log(data);
        this.listaUsuario = data.conteudo;

        this.mensagemService.construirMensagem(data.status);
      },
      error: (err) => {console.log(err)},
      complete: () => {console.log('Info complete')},
    }
    );
  }

  incluir(){
    
    this._router.navigateByUrl('/main/usuario/incluir', {state: {operacao:"incluir", usuarioFiltro: this.usuarioFiltro}});
    

  }

  
}
