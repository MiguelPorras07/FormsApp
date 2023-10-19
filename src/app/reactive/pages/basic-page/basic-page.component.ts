import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  // forma tradicional con FormGroup:

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  /* forma de construir un formulario con FormBuilder
  después, se arma el formulario público, llamando al servicio PRIVADO 'fb' y utilizando group */

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(0) ]],
    inStorage: [0, [ Validators.required, Validators.min(0) ]]
  });

  /* primero debe colocarse el constructor, que va a utilizar el form de Angular FormBuilder, debe ser PRIVADO */

  constructor( private fb: FormBuilder ){}

  ngOnInit(): void {
  //  this.myForm.reset( rtx5090 );
  }

  /* vamos a implementar un método para simplificar la forma en la que se mostrarán los errores en el html */
  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
      }
    }

    return null;
  }

  /* información del posteo: */

  onSave(): void {

    /* Este 'if' se ocupa para LLAMAR a los validators y que así se cumplan las condiciones */
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;

    };

    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, inStorage: 0 });

  }

}
