import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  // Propiedades
  @Input() nombre: string;
  @Input() urlImagen: string;

  // Eventos
  @Output() seleccionoCuenta: EventEmitter<string> =
    new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ejecutarDioClick() {
    this.seleccionoCuenta.emit(this.nombre);
  }

}
