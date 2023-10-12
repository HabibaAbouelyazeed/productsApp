import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  faEye = faEye;
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('^\\S*$'),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-#$.%&*@])(?=.*[a-zA-Z]).{8,}$'
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: confirmPassword('password', 'confirmPassword'),
      }
    );
  }

  handleSubmit() {
    console.log(this.registerForm);
  }

  togglePassword(inpt: any){
    if(inpt.type === 'password'){
      inpt.type = 'text';
    }else{
      inpt.type = 'password'
    }
  };
}

function confirmPassword(mainPassword: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[mainPassword];
    const matchingPassword = formGroup.controls[confirmPassword];

    if (
      matchingPassword.errors &&
      !matchingPassword.errors['confirmPassword']
    ) {
      return;
    }

    if (password.value !== matchingPassword.value) {
      matchingPassword.setErrors({ confirmPassword: true });
    } else {
      matchingPassword.setErrors(null);
    }
  };
}
