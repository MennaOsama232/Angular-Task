import { Component } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
 welcome:string='';
Name:string='';
  print(x:any){
    //console.log(x.target.value)
    this.welcome=' '+x.target.value
  }
Reset(){
this.welcome=' ';
this.Name = ''
}
}
