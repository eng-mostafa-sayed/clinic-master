import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  error: string = '';
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),

    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-z][0-9]{3}$/),
    ]),
  });

  forgetloginForm() {
    if (this.forgetForm.invalid) {
      return;
    } else {
      this._AuthService
        .forgetpassword(this.forgetForm.value)
        .subscribe((data) => {
          console.log(data);
          this.error = data.message;
        }, (err) => {
          console.log(err);
        }
    }
  
  }
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}
}
