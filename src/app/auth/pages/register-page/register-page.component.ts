import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';
// import * as customValidators from 'src/app/shared/validators/validators';


@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    /* name: ['', [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)] ],
    email: ['', [Validators.required, Validators.pattern(customValidators.emailPattern) ] ],
    username: ['', [ Validators.required, customValidators.cantBeStrider ] ], */
    name: ['', [Validators.required, Validators.pattern( this.validatorService.firstNameAndLastnamePattern)] ],
    email: ['', [Validators.required, Validators.pattern( this.validatorService.emailPattern)], [ new EmailValidator() ]],
    username: ['', [ Validators.required, this.validatorService.cantBeStrider ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [Validators.required] ],
  }, {
    validators: [
      this.validatorService.isFieldOneEqualToFieldTwo('password', 'password2'),
    ]
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
  ) {}

  isValidField( field: string ) {
    return this.validatorService.isValidField( this.myForm, field );
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
