import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  name="";
  age:any;
  students:{name:string,age:number}[]=[]
  
  @Output() myEvent=new EventEmitter();
  AddStudent(){
    let newStudent:{name:string,age:number}={name:this.name,age:+this.age}
    if(this.name.length>3 && this.age<40 && this.age>20)
    {
      this.students.push(newStudent);
      //console.log(this.students)
      this.myEvent.emit(this.students);
    }
    
  }
  
}

