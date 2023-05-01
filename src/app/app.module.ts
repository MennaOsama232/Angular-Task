import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day3Component } from './day3/day3.component';
import { DisplayComponent } from './day3/display/display.component';
import { RegisterationComponent } from './day3/registeration/registeration.component';
import { InputTextComponent } from './input-text/input-text.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentsComponent } from './students/students.component';
import { DetailComponent } from './detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputTextComponent,
    SliderComponent,
    Day3Component,
    RegisterationComponent,
    DisplayComponent,
    ReactiveFormComponent,
    StudentsComponent,
    DetailComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
