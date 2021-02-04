import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Goal2Service {

  constructor(private http : HttpClient) { }

  visualCereal() {
    const url = `https://3000-fb243d3a-1449-4e3d-b790-ef992c87403a.ws-eu03.gitpod.io/cereal/cereal_yield`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }

  visualFoodSec() {
    const url = `https://3000-fb243d3a-1449-4e3d-b790-ef992c87403a.ws-eu03.gitpod.io/food/food_security`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }

  visualUndernourishment() {
    const url = `https://3000-fb243d3a-1449-4e3d-b790-ef992c87403a.ws-eu03.gitpod.io/undernourishment/prevalence_of_undernourishment`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }

}
