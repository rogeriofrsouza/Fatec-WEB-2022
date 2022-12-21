import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Resposta } from '../resposta';
import { ResultadoComponent } from '../resultado/resultado.component';
import { SolverService } from '../solver.service';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css'],
})
export class CalculoComponent implements OnInit {

  formGroup!: FormGroup;
  resposta!: Resposta;

  @ViewChild('resultado') resultadoComponent!: ResultadoComponent;
  @ViewChild('totalMaterial') totalMaterial!: ElementRef;
  @ViewChild('totalHours') totalHours!: ElementRef;

  constructor(private solverService: SolverService) {
    this.formGroup = new FormGroup({
      profit1: new FormControl(),
      profit2: new FormControl(),
      profit3: new FormControl(),
      profit4: new FormControl(),
      material1: new FormControl(),
      material2: new FormControl(),
      material3: new FormControl(),
      material4: new FormControl(),
      hours1: new FormControl(),
      hours2: new FormControl(),
      hours3: new FormControl(),
      hours4: new FormControl(),
      totalMaterial: new FormControl(),
      totalHours: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  calcular(): void {
    const form = this.formGroup.value;
    console.log(form);

    this.solverService.setSolver(form).subscribe({
      next: (resposta: Resposta) => {
        this.resposta = resposta;
        console.log(resposta);
        
        this.resultadoComponent.totalMaterial = this.totalMaterial.nativeElement.value;
        this.resultadoComponent.totalHours = this.totalHours.nativeElement.value;
      }
    });
  }

  limpar(): void {
    this.formGroup = new FormGroup({
      profit1: new FormControl(),
      profit2: new FormControl(),
      profit3: new FormControl(),
      profit4: new FormControl(),
      material1: new FormControl(),
      material2: new FormControl(),
      material3: new FormControl(),
      material4: new FormControl(),
      hours1: new FormControl(),
      hours2: new FormControl(),
      hours3: new FormControl(),
      hours4: new FormControl(),
      totalMaterial: new FormControl(),
      totalHours: new FormControl(),
    });
  }

}
