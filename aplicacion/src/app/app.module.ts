import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TituloComponent} from './componentes/titulo/titulo.component';
import {PerfilComponent} from './componentes/perfil/perfil.component';
import {BotonComponent} from './componentes/boton/boton.component';


@NgModule({
  declarations: [ // Componentes
    AppComponent,
    TituloComponent,
    PerfilComponent,
    BotonComponent
  ],
  imports: [ // Modulos
    BrowserModule
  ],
  providers: [ // Servicios

  ],
  bootstrap: [ // Componente Inicial
    AppComponent
  ]
})
export class AppModule {
}
