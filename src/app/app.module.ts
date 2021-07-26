import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// components
import { CourseComponent } from './Component/course/course.component';

// services
import {CourseService} from './Component/course/course.service'

// pipes
import {SummaryPipe} from './Pipes/summary.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
