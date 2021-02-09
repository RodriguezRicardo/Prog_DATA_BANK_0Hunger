import { Component, OnInit } from '@angular/core';
import { Goal2Service } from '../goal2.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cereal',
  templateUrl: './cereal.component.html',
  styleUrls: ['./cereal.component.css']
})
export class CerealComponent implements OnInit {
  obsG : Observable<Object>;
  res : any;

  constructor(public goal2 : Goal2Service) { }

  ngOnInit(): void {
    this.obsG = this.goal2.visualCereal();
    this.obsG.subscribe((data) => { this.res = data; console.log(this.res) });
  }

}
