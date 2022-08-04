import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  error:string=''
  addForm:FormGroup=new FormGroup(
  {
    'name':new FormControl(null,[Validators.required,Validators.minLength(3)]),
    'age':new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(3)]),
    'FileNo':new FormControl(null,[Validators.required,Validators.minLength(1)]),
     'gender':new FormControl(null,[Validators.required]),
    'phone':new FormControl(null,[Validators.required]),
  })
  AddpatientForm(){
          console.log(this.addForm.value)

     }

  constructor() { }

  ngOnInit(): void {
  }

}
