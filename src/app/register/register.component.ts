import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSubmitted : boolean = false

  //template-driven forms,reactive forms
  registerForm:FormGroup=new FormGroup(
  {
    'name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'proficiency':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'specification':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'password':new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.minLength(5)]),
  })
  msg=""
  emailUniqueError = ""
  


  constructor(private _Router:Router, private _AuthService:AuthService) { }

  ngOnInit(): void {
  }
  submitRegisterForm(){
  this.isSubmitted=true
  if(this.registerForm.valid){
    this._AuthService.register(this.registerForm.value)
    .subscribe(
      (res)=> {
        this._AuthService.otp=res.data.otp
        console.log(res)
      },
      (err)=> {
        this.msg=err.error.data
        this.emailUniqueError="email used before"
      },
      ()=> {
        this._Router.navigateByUrl("/login")
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
    )
  }
}
}
