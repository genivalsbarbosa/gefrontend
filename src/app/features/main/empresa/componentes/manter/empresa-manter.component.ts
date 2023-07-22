import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../../../../../shared/mensagem/service/mensagem.service';
import { Empresa } from '../../model/empresa';
import { Router } from '@angular/router';
import { EmpresaService } from '../../service/empresa.service';

@Component({
  selector: 'app-empresamanter',
  templateUrl: './empresa-manter.component.html',
  styleUrls: ['./empresa-manter.component.scss']
})
export class EmpresaManterComponent implements OnInit {

  
  empresa: Empresa = new Empresa;

  carregandoEmpresa: boolean = false;


  constructor(
    private _router: Router,
    private empresaService: EmpresaService,
    private mensagemService: MensagemService
    

  ) { }

  ngOnInit(): void {

  }  

  voltar(){

    this._router.navigateByUrl('/main/empresa', {state: {operacao:"consultar"}});
    //this._router.navigateByUrl('/main/Empresa');

  }
  
  salvar(){
    this.mensagemService.clear();
    
    this.empresaService.incluir(this.empresa).subscribe({
      next: (data: any) => {
        console.log(data);
        this.mensagemService.construirMensagem(data.status);
      },
      error: (err) => {console.log(err); this.carregandoEmpresa = false;},
      complete: () => {this.carregandoEmpresa = false;},
    }
    );

  }


}
