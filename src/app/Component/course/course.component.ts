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
  imageUrl= "http://lorempixel.com/100/100";
  colSpan = 2;
  isActive=false;
  email2="me@example.com";
  course={
    title:"The complete Angular course",
    rating:4.9745,
    students:30123,
    price:190.95,
    releaseDate:new Date(2016,3,1)
  }
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi voluptatibus quaerat nihil, facilis eveniet ex recusandae dolores reprehenderit, iste nostrum magni placeat blanditiis consequuntur modi molestias repudiandae. Similique laboriosam dolorum cumque velit culpa tenetur cupiditate commodi eaque totam. Quidem similique tempora repellendus ea unde. Minima inventore temporibus totam. Provident neque asperiores reprehenderit delectus incidunt culpa id reiciendis consequatur repellat!";

  constructor(service:CourseService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {}

  getTitle() {
    return this.title;
  }

  onSave($event:Event){
    $event.stopPropagation(); 
    console.log("Button was clicked", $event)
  }

  onDivClicked(){
    console.log("Div was clicked")
  }

  onKeyUp(){
    console.log("Enter was pressed")
  }

  onKeyUp_1(email:any){
    console.log(email)
  }

  onKeyUp_2(){
    console.log(this.email2)
  }
}
