import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  arr: [] = [];
  ngOnInit(): void {
    const headers = {
      Authorization: `bearer ${localStorage.getItem('token')}`,
    };
    this.http
      .get<any>('http://localhost:3000/api/doctor/getpatients', { headers })
      .subscribe(
        (data) => {
          console.log(data);
          this.arr = data;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
