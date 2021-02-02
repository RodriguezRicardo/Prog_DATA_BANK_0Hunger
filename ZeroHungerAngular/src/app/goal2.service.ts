import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Goal2Service {

  constructor(private http : HttpClient) { }

  visualCereal(query: string) {
    const url = `https://3000-d35be42c-9894-4711-97d6-627f7bfbfc24.ws-eu03.gitpod.io/cereal/cereal_yield`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
}
