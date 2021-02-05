import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Goal2Service {

  constructor(private http : HttpClient) { }

  visualCereal() {
    const url = `https://3000-brown-tortoise-ghcgfs3w.ws-eu03.gitpod.io/cereal/cereal_yield`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }

  visualFoodSec() {
    const url = `https://3000-brown-tortoise-ghcgfs3w.ws-eu03.gitpod.io/food/food_security`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }

  visualUndernourishment() {
    const url = `https://3000-brown-tortoise-ghcgfs3w.ws-eu03.gitpod.io/undernourishment/prevalence_of_undernourishment`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }

}
