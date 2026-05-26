import { Component, Input } from '@angular/core';

export type VarianteTarjeta = 'normal' | 'destacado';

@Component({
  selector: 'c-tarjeta',
  templateUrl: './c-tarjeta.html',
  styleUrl: './c-tarjeta.scss',
})
export class CTarjeta {
  @Input() titulo: string = '';
  @Input() valor: string = '';
  @Input() subtitulo: string = '';
  @Input() variante: VarianteTarjeta = 'normal';
}
