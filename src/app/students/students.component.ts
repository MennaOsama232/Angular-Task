import { Component } from '@angular/core';
import { Students } from '../students';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students:Students[]=[{
    name: 'menna',age:23,address:'1st cairo'
  },{
    name: 'osama',age:25,address:'1st cairo'
  },{
    name: 'ali',age:27,address:'1st cairo'
  },]
}
