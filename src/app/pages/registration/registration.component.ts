import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name: string;
  password: string;
  error: string;

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
  ]);

  passwordAgainFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(16),
  ]);

  formGroup = new FormGroup({
    name: this.nameFormControl,
    passwor: this.passwordFormControl,
    passwordAgain: this.passwordAgainFormControl
  });

  registrate() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.authService.registr(this.name, this.password)
      .subscribe(e => {
        if (e.error) {
          this.error = e.error;
        } else {
          this.authService.saveUserAndJwt(e);
          this.router.navigate(['/']);
        }
      }, err => {
        this._snackBar.open('Error 505: Internal Server Error', undefined, {
          duration: 2000
        });
      });
  }

  constructor(private authService: AuthService,
              private router: Router,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

}
