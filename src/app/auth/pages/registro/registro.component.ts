import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
/* import {
  emailPattern,
  nombreApellidoPattern,
  noPuedeSerErant,
} from 'src/app/shared/validators/validaciones'; */
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  //TODO temporal. Mover a otro archivo

  /*   nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'; */

  /* noPuedeSerErant(control: FormControl) {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'erant') {
      //return ERROR
      return {
        noErant: true,
      };
    }
    return null;
  } */

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailvalidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.noPuedeSerErant],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  get emailErrorsMsg() {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'El campo email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El formato del email no es el correcto';
    } else if (errors?.['emailTomado']) {
      return 'El email escrito ya está siendo usado por otro usuario';
    } else {
      return '';
    }
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailvalidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.miFormulario.reset({
      nombre: 'Alban Loubet',
      email: 'test1@test.com',
      username: 'AlLoubet',
      password: '123456',
      password2: '123456',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  /* emailRequired() {
    return (
      this.miFormulario.get('email')?.errors?.['required'] &&
      this.miFormulario.get('email')?.touched
    );
  }

  emailFormato() {
    return (
      this.miFormulario.get('email')?.errors?.['pattern'] &&
      this.miFormulario.get('email')?.touched
    );
  }

  emailUsado() {
    return (
      this.miFormulario.get('email')?.errors?.['emailTomado'] &&
      this.miFormulario.get('email')?.touched
    );
  } */

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
