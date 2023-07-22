import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ge-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent implements OnInit {
 
  @Input("titulo") titulo: string = "";

  constructor(
    
  ) {}

  ngOnInit() {
    
  }
 
}
