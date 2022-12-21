import { DogService } from './../dog.service';
import { Dog } from './../dog.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogImage!: Dog | null;
  dogVideo!: Dog | null;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getDog();
  }

  getDog(): void {
    this.dogService.getDog().subscribe({
      next: (dog: Dog) => {
        console.log(dog);
        dog.type = dog.url.slice(-3).toLowerCase();

        if (dog.type == 'jpg' || dog.type == 'png' || dog.type == 'gif' || dog.type == 'peg') {
          this.dogImage = dog;
          this.dogVideo = null;
        } else if (dog.type = 'mp4') {
          this.dogVideo = dog;
          this.dogImage = null;
        }
      }, 
      error: error => console.log(error)
    });
  }

}
