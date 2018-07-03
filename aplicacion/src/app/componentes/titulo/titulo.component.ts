import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  // Propiedades
  @Input() titulo: string; // undefined

  constructor() {
  }

  ngOnInit() {
  }

}
