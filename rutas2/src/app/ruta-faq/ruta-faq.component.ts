import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ruta-faq',
  templateUrl: './ruta-faq.component.html',
  styleUrls: ['./ruta-faq.component.scss']
})
export class RutaFAQComponent implements OnInit {

  constructor(private _httpCliente: HttpClient) { }
  // http request ----
  // cuando se usa observable no corre el complete si cae en un error
  ngOnInit() {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    // para enviar parametros
    /*const requestHttp$ = this._httpCliente.post(url, {
      nombre: 'Adrian',
      edad: 29,
      casado: false
    });*/

    const requestHttp$ = this._httpCliente.get(url);
    requestHttp$.subscribe(
      (respuestaOk) => {
        console.log(respuestaOk);
      },
      (respuestaError) => {
        console.log(respuestaError);
      },
      () => {
        console.log('Completado');
      }
    );
    console.log('Fin');

  }

}
