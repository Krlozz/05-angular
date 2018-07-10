import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email;
  password;
  passwordConfirmation;

  crearUsuario(formulario) {
    console.log(formulario);
  }
}
