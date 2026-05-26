import { Component, Input } from '@angular/core';

export type ImportanciaBoton = 'primaria' | 'secundaria' | 'terciaria';
export type FuncionBoton = 'normal' | 'alternativa' | 'peligrosa';
export type TamanoBoton = 'pequeno' | 'compacto' | 'mediano';
export type FormaBoton = 'pildora' | 'rectangular';

@Component({
  selector: 'c-boton',
  templateUrl: './c-boton.html',
  styleUrl: './c-boton.scss',
})
export class CBoton {
  @Input() importancia: ImportanciaBoton = 'secundaria';
  @Input() funcion: FuncionBoton = 'normal';
  @Input() tamano: TamanoBoton = 'mediano';
  @Input() forma: FormaBoton = 'pildora';
  @Input() seleccionado: boolean = false;
  @Input() deshabilitado: boolean = false;
}
