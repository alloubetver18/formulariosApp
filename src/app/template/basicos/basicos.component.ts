import { Component, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: 0,
  };

  /*   existencias: ValidationErrors | null | undefined =
    this.miFormulario.controls['existencias'].errors; */

  /* guardar(miFormulario: NgForm) { */
  guardar() {
    /*     console.log(this.miFormulario.value); */
    console.log('Posteo correcto');
    console.log(this.miFormulario?.controls);
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
  }

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.touched &&
      this.miFormulario?.controls['precio']?.value < 0
    );
  }
}
