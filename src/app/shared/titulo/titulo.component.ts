import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { MigalhaItem } from "./model/migalhaitem";

@Component({
  selector: "ge-titulo",
  templateUrl: "./titulo.component.html",
  styleUrls: ["./titulo.component.scss"],
})
export class TituloComponent implements OnInit {

  @Input("titulo") titulo: string = "";
  @Input("migalhas") migalhas: MigalhaItem[] = [];
  

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
      
  }

  /*
  voltar() {
    this.mensagemService.clear();
    Utils.irTopo();
    this.retorno.emit();
  }
  */

  
}
