import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  name: string;
  password: string;

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

  formGroup = new FormGroup({
    name: this.nameFormControl,
    password: this.passwordFormControl
  });

  logIn(){
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
