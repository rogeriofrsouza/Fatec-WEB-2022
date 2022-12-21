import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Resposta } from './resposta';

@Injectable({
  providedIn: 'root'
})
export class SolverService {
  
  solverUrl = 'http://localhost:50040/solver';

  constructor(private httpClient: HttpClient) { }
  
  setSolver(formGroup: FormGroup): Observable<Resposta> {
    const json = JSON.stringify(formGroup);
    return this.httpClient.get<Resposta>(`${this.solverUrl}/${json}`);
  }

}
