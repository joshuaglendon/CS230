import { Component, OnInit } from '@angular/core';
import { mock_science } from './mock-science';
import { Science } from './science.model';

@Component({
  selector: 'khanacademy-courses-science',
  templateUrl: './courses-science.component.html',
})
export class CoursesScienceComponent implements OnInit {
  sciences:Science[] = [];
  constructor() { 
    for (var science of mock_science) {
      this.sciences.push(new Science(science));
    }
  }

  ngOnInit(): void {
  }

}