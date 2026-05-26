import { Component, Input } from '@angular/core';

export type TamanoLabel = 'pequeno' | 'compacto' | 'mediano' | 'grande';

@Component({
  selector: 'c-label',
  templateUrl: './c-label.html',
  styleUrl: './c-label.scss',
})
export class CLabel {
  @Input() tamano: TamanoLabel = 'mediano';
}
