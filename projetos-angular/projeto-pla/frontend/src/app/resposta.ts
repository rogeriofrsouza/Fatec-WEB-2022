export interface Resposta {
  bounded: boolean;
  feasible: boolean;
  isIntegral: boolean;
  result: number;
  x1?: number;
  x2?: number;
  x3?: number;
  x4?: number;
}