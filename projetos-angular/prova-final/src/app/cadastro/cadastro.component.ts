import { Component, OnInit } from '@angular/core';

import { Carro } from '../carro.model';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  carro: Carro = {} as Carro;

  constructor(private carrosService: CarrosService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    console.log(this.carro);
    this.carrosService.save(this.carro).subscribe({
      next: response => console.log(response)
    });
  }

  cancelar(): void {
    this.carro = {} as Carro;
  }

}
