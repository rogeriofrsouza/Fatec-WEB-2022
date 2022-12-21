import { Component, OnInit } from '@angular/core';

import { Dog } from '../dog.model';
import { DOGS } from '../mock-dogs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs = DOGS;
  selectedDog?: Dog;
  
  read: boolean = true;
  edit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(dog: Dog): void {
    this.selectedDog = dog;
    this.read = true;
    this.edit = false;
  }

  editar(dog: Dog): void {
    this.onSelect(dog);
    this.edit = true;
    this.read = false;
  }

  remover(id: number): void {
    for (let i = 0; i <= this.dogs.length; i++) {
      if (this.dogs[i]?.id == id) {
        this.dogs.splice(i, 1);
      }
    }
  }

  adotar(): void {
    alert('Obrigado pelo interesse na adoção, em breve retornaremos o contato :)')
  }
}
