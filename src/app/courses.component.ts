import {Component} from '@angular/core';
import { courseService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>title</h2>
        <ul>
            <li *ngFor="let course of courses" >
                {{ course }}
            </li>
        </ul>
    `
})

export class CoursesComponent{
    title = "List of Courses";
    courses;

    constructor(service: courseService){
        // let service = new courseService();
        this.courses = service.getCourses();
    }
}