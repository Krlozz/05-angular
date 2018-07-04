import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutaHomeComponent } from './ruta-home/ruta-home.component';
import { RutaFAQComponent } from './ruta-faq/ruta-faq.component';
import { RutaNoEncontradoComponent } from './ruta-no-encontrado/ruta-no-encontrado.component';
import {RouterModule} from "@angular/router";
import {ARREGLO_RUTAS} from "./app.routes";
import { RutaPerfilComponent } from './ruta-perfil/ruta-perfil.component';
import { RutaUsuarioComponent } from './ruta-usuario/ruta-usuario.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaFAQComponent,
    RutaNoEncontradoComponent,
    RutaPerfilComponent,
    RutaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      ARREGLO_RUTAS,{
        useHash: true
      }
    ),
    //para http request
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
