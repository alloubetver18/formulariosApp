import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Alban',
    favoritos: [
      {
        id: 1,
        nombre: 'Fallout',
      },
      {
        id: 2,
        nombre: 'Metar Gear',
      },
    ],
  };

  initForm = {
    nombre: '',
    agregar: '',
  };

  guardar() {
    console.log('Formulario posteado');
    /* this.miFormulario.resetForm({}); */
  }

  agregar() {
    if (this.nuevoJuego.length > 0) {
      const nuevoFavorito: Favorito = {
        id: this.persona.favoritos.length + 1,
        nombre: this.nuevoJuego,
      };
      this.persona.favoritos.push({ ...nuevoFavorito });
      this.nuevoJuego = '';
    }

    /* if (this.nuevoJuego.length > 0) {
      this.persona.favoritos.push({
        id: this.persona.favoritos.length - 1,
        nombre: this.nuevoJuego,
      });
      this.nuevoJuego = '';
    } */
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
