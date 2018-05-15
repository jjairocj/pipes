import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Jairo';
  arreglo = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  a = 0.234;
  salario = 845000.45;
  hero =  {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  valorPromess = new Promise( (resolve, reject ) => {
    setTimeout( () => resolve('Llego la data'), 3500 );
  });

  fecha = new Date();
}
