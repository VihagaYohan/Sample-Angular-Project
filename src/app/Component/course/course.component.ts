import { Component, OnInit } from '@angular/core';

// services
import {CourseService} from './course.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  title = 'List of courses';
  courses = ['course 1', 'course 2', 'course 3'];

  constructor(service:CourseService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {}

  getTitle() {
    return this.title;
  }
}
