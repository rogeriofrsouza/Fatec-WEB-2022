import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

import { Dog } from './dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  randomDogUrl = 'https://random.dog/woof.json';
  
  constructor(private httpClient: HttpClient) { }

  getDog(): Observable<Dog> {
    return this.httpClient.get<Dog>(this.randomDogUrl);
  }
}
