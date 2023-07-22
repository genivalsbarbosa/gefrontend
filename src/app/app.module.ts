import { NgModule, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppInitService } from './app-init';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeExtraPt from '@angular/common/locales/extra/pt';
import { AuthGuard } from './features/login/service/auth.guard';
import { AuthService } from './features/login/service/auth.service';
import { Interceptor } from './core/interceptors/interceptor.module';
import { HttpClientModule } from '@angular/common/http';
import { PickListModule } from 'primeng/picklist';
import { MessageService } from 'primeng/api';
import { MensagemService } from './shared/mensagem/service/mensagem.service';


registerLocaleData(localePt, 'pt', localeExtraPt);


export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}

const init_app_ = (appLoadService: AppInitService) => appLoadService.init();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    Interceptor,
    HttpClientModule,
    PickListModule 
    
    //NgbModule.forRoot(),
    //FormsModule,
  
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true
    },
    MessageService,
    MensagemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
