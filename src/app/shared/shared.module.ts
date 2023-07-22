import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutComponent } from './layout/layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PickListModule } from 'primeng/picklist';
import { InputtextComponent } from './inputtext/inputtext.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ToastModule } from 'primeng/toast';
import { MensagemComponent } from './mensagem/mensagem.component';
import { MessageService } from 'primeng/api';
import { MensagemService } from './mensagem/service/mensagem.service';
import { AccordionComponent } from './accordion/accordion.component';
import { TituloComponent } from './titulo/titulo.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TituloComponent,
    AccordionComponent,
    InputtextComponent,
    DropdownComponent,
    MensagemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    //NgbModule.forRoot(),
    ReactiveFormsModule,
    DragDropModule,
    MatFormFieldModule,
    PickListModule,
    InputTextModule,
    DropdownModule,
    ToastModule
  ],
  exports:[
    LayoutComponent,
    TituloComponent,
    AccordionComponent,
    InputtextComponent,
    DropdownComponent,
    MensagemComponent
  ],
  providers: [    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
