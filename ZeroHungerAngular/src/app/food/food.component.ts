import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal2Service } from '../goal2.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  obsG_Food : Observable<Object>;
  res : any;

  constructor(public goal2 : Goal2Service) {
    //this.obsG_Food = this.goal2.visualFoodSec();
    //this.obsG_Food.subscribe((data) => { this.res = data; console.log(this.res) });
  }

  ngOnInit(): void {
  }

}
