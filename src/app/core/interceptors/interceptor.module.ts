//import { Empresar } from './../../administrador/empresa/servico/empresar';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import Utils from '../sistema/util/utils';
import { AppInitService } from '../../app-init';
//import { LoadService } from './load.service';
import { finalize } from "rxjs/operators";
import { tap } from 'rxjs/operators';
import Utils from '../util/utils';
import { MensagemService } from '../../shared/mensagem/service/mensagem.service';
import { Mensagem } from '../../shared/mensagem/service/mensagem';
import { MensagemTipo } from '../../shared/mensagem/service/mensagemTipo';
import { MSG_ERRO_INESPERADO } from '../const/mensagens';
//import { MensagemService } from '../mensagem/service/mensagem.service';
//import { Mensagem } from '../mensagem/service/mensagem';
//import { MensagemTipo } from '../mensagem/service/mensagemTipo';
//import { MSG_ERRO_INESPERADO } from '../sistema/const/mensagens';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {    


    constructor(        
        private appInitService: AppInitService,
        //private loadService: LoadService,
        private mensagemService: MensagemService
    ){}     

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
                                                      
        let IP_SERVICO: string = "";
        
        if (this.appInitService.getConfig() != null) {
            if(window.location.protocol == "https:" )
            {
                IP_SERVICO = "https://" + this.appInitService.getConfig().IP_SERVICE;
            } else {
                IP_SERVICO = "http://" + this.appInitService.getConfig().IP_SERVICE;
            }
        }
        
        let dupReq: any;            

        if(req.body != null){ 
            
            let IP_BYPASS_CORS: string = this.appInitService.getConfig().IP_BYPASS_CORS; 
            
            if(req.url == 'login/authenticate'){

                dupReq = req.clone({
                    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }),
                    url: `${IP_BYPASS_CORS}${IP_SERVICO}${req.url}`
                });


            }else{

                let auth_token = Utils.obterToken();
                dupReq = req.clone({
                    headers: new HttpHeaders(
                        { 'Content-Type': 'application/json; charset=utf-8',
                          'Authorization': `Bearer ${auth_token}`}),
                    url: `${IP_BYPASS_CORS}${IP_SERVICO}${req.url}`
                });
            }
                            
            

            //let empresa: Empresar = Utils.obterEmpresaSessao();
            //let codEmpresa: string = '';
            //if(empresa != null){
            //    codEmpresa = empresa.sCodEmpresa;
            //}
                        
            //let token: string = Utils.obterToken();
            //let token: string = '';
            
            //if(dupReq.body != null){
            //    dupReq.body.cabecalho = {'token': token, 'empresa': codEmpresa};   
           //}                                                                

        }else{

            dupReq = req.clone({
                headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })                
            });            
            
        }

        return next.handle(dupReq)
        .pipe(
            tap(
              event => {
                if(event instanceof HttpErrorResponse){
                    
                    this.mensagemService.add(new Mensagem(MensagemTipo.ERRO, MSG_ERRO_INESPERADO, event.message));
                    
                }else if(event instanceof HttpResponse){
                    
                    if(event.status != 200){

                        //this.mensagemService.add(new Mensagem(MensagemTipo.ERRO, MSG_ERRO_INESPERADO, '', event));
                    }
                    
                    
                }
              },
              error => {

                if(error instanceof HttpErrorResponse){
                    
                    if(error.statusText != null && error.statusText == "JSONP Error"){
                        console.log("Interceptor: ", error.message);
                    }else{
                        this.mensagemService.add(new Mensagem(MensagemTipo.ERRO, MSG_ERRO_INESPERADO, error.message));
                    }
                    
                }else if(error instanceof HttpResponse){
                    
                    if(error.status != 200){

                        //this.mensagemService.add(new Mensagem(MensagemTipo.ERRO, MSG_ERRO_INESPERADO, '', error));
                    }
                    
                    
                }

              }
            ),finalize(() => {
                //this.loadService.remover();
                }
            )
          );
        //return next.handle(dupReq);

/*
        return next.handle(dupReq)
            .do(event => { 
                    if (event instanceof HttpResponse) {
                        console.log('event', event);
                        this.logger.logDebug(event); // Headers are missing here
                    }
                }
            )
            .catch((err: HttpErrorResponse) => {
                    // Do stuff
                }
            );
            */
    }
}

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true
        }
    ]
})
export class Interceptor {}