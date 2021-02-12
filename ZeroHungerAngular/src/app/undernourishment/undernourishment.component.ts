import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal2Service } from '../goal2.service';

@Component({
  selector: 'app-undernourishment',
  templateUrl: './undernourishment.component.html',
  styleUrls: ['./undernourishment.component.css']
})
export class UndernourishmentComponent implements OnInit {
  obsG_Under : Observable<Object>;
  res : any;

  constructor(public goal2 : Goal2Service) {
    this.obsG_Under = this.goal2.visualUndernourishment();
    this.obsG_Under.subscribe((data) => { this.res = data; console.log(this.res) });
  }

  ngOnInit(): void {

  }

}
