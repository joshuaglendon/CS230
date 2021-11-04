import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../home/database.service';
import { ScienceService } from './courses-science.service';
import { Science } from './science.model';

@Component({
  selector: 'khanacademy-courses-science',
  templateUrl: './courses-science.component.html',
})
export class CoursesScienceComponent implements OnInit {
  sciences:Science[] = [];
  
  constructor(private scienceService: ScienceService, private dbService:DatabaseService) { 
    dbService.showData();
  }

  ngOnInit(): void {
    this.scienceService.getCards().subscribe(data => {
      console.log(data);
      for(var item in data){
        console.log(data[item]);
        this.sciences.push(new Science(data[item]));
      }
    })
  }
  
}