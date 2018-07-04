import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  //acceder a parámetros
  constructor(private _activatedRoute:ActivatedRoute) {

  }

  //observable ---> el $ indica que es un observable
  ngOnInit() {
    const observableParametrosRutas$ = this._activatedRoute.params;

    observableParametrosRutas$.subscribe(
      (respuestaOk) => {
        console.log(respuestaOk)
      },
      (respuestaError) => {

      },
      ( ) =>{
        //completa
      }
    )

  }

}


/*
function hola() {
  return 'Hola';
}

var a= hola; // Definición de la función
var b = hola(); // Ejecución de la función es decir 'Hola'
*/
