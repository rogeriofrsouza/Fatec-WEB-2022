import { Component, Input, OnInit } from '@angular/core';

import { Resposta } from '../resposta';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input() resposta!: Resposta;
  totalMaterial: number = 0;
  totalHours: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
