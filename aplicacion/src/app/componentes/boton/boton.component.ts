import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  // Propiedades
  @Input() nombreBoton: string; // undefined

  // Evento
  @Output() dioClick = new EventEmitter();

  fecha = new Date();

  constructor() {
  }

  ngOnInit() {
  }

  ejecutarEvento() {
    console.log('emitiendo');
    this.dioClick.emit();
  }

}
