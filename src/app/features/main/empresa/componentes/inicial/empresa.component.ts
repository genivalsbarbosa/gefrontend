import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../empresa/service/empresa.service';
import { EmpresaFiltro } from '../../../empresa/model/empresafiltro';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/shared/mensagem/service/mensagem.service';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  listaEmpresa: any[] = [];
  empresaFiltro: EmpresaFiltro = new EmpresaFiltro;

  

  constructor(
    private _router: Router,
    private empresaService: EmpresaService,
    private mensagemService: MensagemService
  ) { }

  ngOnInit(): void {
    console.log(history.state);
    this.mensagemService.clear();
  }

  

  pesquisar(){
    this.mensagemService.clear();
    this.empresaService.consultar(this.empresaFiltro).subscribe({
      next: (data: any) => {
        //console.log(data);
        this.listaEmpresa = data.conteudo;

        this.mensagemService.construirMensagem(data.status);
      },
      error: (err) => {console.log(err)},
      complete: () => {console.log('Info complete')},
    }
    );
  }

  incluir(){
    
    this._router.navigateByUrl('/main/empresa/incluir', {state: {operacao:"incluir", empresaFiltro: this.empresaFiltro}});
    

  }

  
}
