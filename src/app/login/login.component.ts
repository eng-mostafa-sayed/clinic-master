import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false;

  //template-driven forms,reactive forms
  loginForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5),
    ]),
  });
  msg = '';
  emailUniqueError = '';

  constructor(private _Router: Router, private _AuthService: AuthService) {}

  ngOnInit(): void {}
  submitLoginForm() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this._AuthService.login(this.loginForm.value).subscribe(
        (res) => {
          this._AuthService.otp = res.data.otp;
          console.log(res);
          localStorage.setItem('token', res.data.token);
        },
        (err) => {
          this.msg = err.error.data;
          this.emailUniqueError = 'email used before';
        },
        () => {
          this._Router.navigateByUrl('/home');
        }

        // if(data.message=='success')
        // {
        //console.log(data.message)
        // this._Router.navigateByUrl('/login')
        // }
        // else{
        //alert(data.message)
        //}

        //})
      );
    }
  }
}
