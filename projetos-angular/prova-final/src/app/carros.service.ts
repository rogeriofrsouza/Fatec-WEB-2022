import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Carro } from './carro.model';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  baseUrl = "http://localhost:3000";
  carrosUrl = this.baseUrl + "/carros";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Carro[]> {
    return this.httpClient.get<Carro[]>(this.carrosUrl);
  }

  save(carro: Carro): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(carro);
    
    return this.httpClient.post(this.carrosUrl, body, { 'headers': headers });
  }

}
