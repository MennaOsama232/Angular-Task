import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day3Component } from './day3/day3.component';
import { InputTextComponent } from './input-text/input-text.component';
import { SliderComponent } from './slider/slider.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentsComponent } from './students/students.component';
import { DetailComponent } from './detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', component:InputTextComponent},
  {path: 'input', component:InputTextComponent},
  {path: 'slider', component:SliderComponent},
  {path: 'childToChild', component:Day3Component},
  {path: 'reactiveForm', component:ReactiveFormComponent},
  {path: 'students', component:StudentsComponent},
  {path: 'detail/:id', component:DetailComponent},
  {path:"**",component:NotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
