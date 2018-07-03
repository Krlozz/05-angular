import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {

  public nombre: string = 'Adrian';

  apellido = 'Eguez';

  mostrar = false;

  arregloNumeros = [5, 4, 3, 2, 1];

  nombreImagen = 'epn-lloron.jpg';

  anchoImagen = 400;

  titulo = '¿Quién está viendo ahora?';

  nombreBoton = 'aDminisTrar perfiles';

  perfiles = [
    {
      id: 1,
      nombrePerfil: 'tatis1909',
      nombreImagen: 'tatis1909.png'
    },
    {
      id: 2,
      nombrePerfil: 'pedro',
      nombreImagen: 'pedro.png'
    },
    {
      id: 3,
      nombrePerfil: 'Jeff',
      nombreImagen: 'Jeff.png'
    },
    {
      id: 4,
      nombrePerfil: 'Edd',
      nombreImagen: 'Edd.png'
    },
    {
      id: 5,
      nombrePerfil: 'Nancy',
      nombreImagen: 'Nancy.png'
    }
  ];


  cambiarTamanoImagen(tamanoCambio: number,
                      evento) {
    console.log(tamanoCambio);
    console.log(evento);
    this.anchoImagen += tamanoCambio;
  }

  irAAdministrarPerfiles() {
    console.log('Ir a administrar');
  }

  irACuenta(nombreCuenta: string) {
    console.log('Ir a cuenta', nombreCuenta);
  }

}
