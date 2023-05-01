import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  myRegFormValid = new FormGroup({
    name: new FormControl(null,Validators.required),
    age: new FormControl(null,[Validators.min(20), Validators.max(40)]),
    email:new FormControl(null,Validators.required)
  })


  get NameValid(){
    return this.myRegFormValid.controls["name"].touched && this.myRegFormValid.controls["name"].valid;
  }

  get AgeValid(){
    return this.myRegFormValid.controls["age"].touched && this.myRegFormValid.controls["age"].valid;
  }
  get EmailValid(){
    return this.myRegFormValid.controls["email"].touched && this.myRegFormValid.controls["email"].valid;
  }

  getData(){
    if(this.NameValid && this.AgeValid && this.EmailValid){
      alert("Submit Success!");
    }
}}
