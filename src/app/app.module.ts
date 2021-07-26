import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// components
import { CourseComponent } from './Component/course/course.component';

// services
import {CourseService} from './Component/course/course.service'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
