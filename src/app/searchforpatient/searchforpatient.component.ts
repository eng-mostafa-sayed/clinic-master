import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchforpatient',
  templateUrl: './searchforpatient.component.html',
  styleUrls: ['./searchforpatient.component.css']
})
export class SearchforpatientComponent implements OnInit {

  error:string=''
  searchForm=new FormGroup(
  {
    'search':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'phone':new FormControl(null,[Validators.required,Validators.email]),
  })

  searchRegisterForm(){
    console.log(this.searchForm.value);
          

     }
  constructor() { }

  ngOnInit(): void {
  }

}
