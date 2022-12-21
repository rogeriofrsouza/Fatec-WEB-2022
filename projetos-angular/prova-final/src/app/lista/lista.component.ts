import { Component, OnInit } from '@angular/core';

import { Carro } from '../carro.model';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  carros: Carro[] = [];
  selectedCarro: Carro = {} as Carro;

  constructor(private carrosService: CarrosService) { }

  ngOnInit(): void {
    this.carrosService.getAll().subscribe({
      next: (carros: Carro[]) => this.carros = carros
    });
  }

  selectCarro(carro: Carro): void {
    this.selectedCarro = carro;
  }

}
