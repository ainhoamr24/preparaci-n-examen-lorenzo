import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface OpcionMenu {
  valor: string;
  etiqueta: string;
}

export type TamanoMenu = 'pequeno' | 'compacto' | 'mediano';

@Component({
  selector: 'c-menu',
  templateUrl: './c-menu.html',
  styleUrl: './c-menu.scss',
})
export class CMenu {
  @Input() opciones: OpcionMenu[] = [];
  @Input() seleccionada: string | null = null;
  @Input() tamano: TamanoMenu = 'mediano';

  @Output() seleccionar = new EventEmitter<string>();

  manejarSeleccion(valor: string): void {
    this.seleccionar.emit(valor);
  }
}
