import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  otp: any;

  constructor(private http: HttpClient) {}
  headers = {
    Authorization: `bearer ${localStorage.getItem('token')}`,
  };
  register(registerData: any): Observable<any> {
    return this.http.post(
      'http://localhost:3000/api/doctor/register',
      registerData
    );
  }

  login(loginData: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/doctor/login', loginData);
  }
  forgetpassword(data: any): Observable<any> {
    return this.http.post(
      'http://localhost:3000/api/doctor/forgetpassword',
      data,
      { headers: this.headers }
    );
  }
  logout(logout: any): Observable<any> {
    return this.http.get('http://localhost:3000/api/doctor/logout', logout);
  }
  getpatient(getpatient: any): Observable<any> {
    return this.http.get(
      'http://localhost:3000/api/doctor/getpatient',
      getpatient
    );
  }
  singlepatient(singlepatient: any): Observable<any> {
    return this.http.get(
      'http://localhost:3000/api/doctor/singlepatient',
      singlepatient
    );
  }
  add(add: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/patient/add', add);
  }
  addcheck(addcheck: any): Observable<any> {
    return this.http.post(
      'http://localhost:3000/api/patient/addcheck',
      addcheck
    );
  }
}
