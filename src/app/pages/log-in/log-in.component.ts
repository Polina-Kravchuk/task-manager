import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

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

  formGroup = new FormGroup({
    name: this.nameFormControl,
    password: this.passwordFormControl
  });

  logIn(){
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.authService.logIn(this.name, this.password).subscribe(e=>{
      if (e.error) {
        this.error=e.error;
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
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
