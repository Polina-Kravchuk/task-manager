import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(16),
    Validators.pattern('[a-zA-Z]*')
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(16),
    Validators.pattern('[a-zA-Z]*')
  ]);

  passwordAgainFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(16),
    Validators.pattern('[a-zA-Z]*')
  ]);

  formGroup = new FormGroup({
    name: this.nameFormControl,
    passwor: this.passwordFormControl,
    passwordAgain: this.passwordAgainFormControl
  });

  registrate(){
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
