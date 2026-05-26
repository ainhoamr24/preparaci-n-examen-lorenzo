import { Component, signal } from '@angular/core';

import { CBoton } from '../../ui/c-boton/c-boton';
import { CLabel } from '../../ui/c-label/c-label';
import { CMenu, OpcionMenu } from '../../ui/c-menu/c-menu';
import { CTarjeta, VarianteTarjeta } from '../../ui/c-tarjeta/c-tarjeta';

interface Modelo {
  valor: string;
  etiqueta: string;
}

interface TarjetaMetrica {
  titulo: string;
  valor: string;
  subtitulo: string;
  variante: VarianteTarjeta;
}

@Component({
  selector: 'pagina-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  imports: [CTarjeta, CBoton, CLabel, CMenu],
})
export class Dashboard {
  modelos: Modelo[] = [
    { valor: 'claude-opus-4-7', etiqueta: 'claude-opus-4-7' },
    { valor: 'claude-sonnet-4-6', etiqueta: 'claude-sonnet-4-6' },
    { valor: 'claude-haiku-4-5-20251001', etiqueta: 'claude-haiku-4-5-20251001' },
  ];

  opcionesRango: OpcionMenu[] = [
    { valor: 'this-week', etiqueta: 'This Week' },
    { valor: 'this-month', etiqueta: 'This Month' },
    { valor: 'prev-month', etiqueta: 'Prev Month' },
    { valor: '7d', etiqueta: '7d' },
    { valor: '30d', etiqueta: '30d' },
    { valor: '90d', etiqueta: '90d' },
    { valor: 'all', etiqueta: 'All' },
  ];

  tarjetas: TarjetaMetrica[] = [
    { titulo: 'TURNS', valor: '9.82K', subtitulo: 'last 30 days', variante: 'normal' },
    { titulo: 'INPUT TOKENS', valor: '2.48M', subtitulo: 'last 30 days', variante: 'normal' },
    { titulo: 'OUTPUT TOKENS', valor: '8.73M', subtitulo: 'last 30 days', variante: 'normal' },
    {
      titulo: 'CACHE CREATION',
      valor: '41.26M',
      subtitulo: 'last 30 days',
      variante: 'normal',
    },
    {
      titulo: 'EST. COST',
      valor: '$874.19',
      subtitulo: 'last 30 days',
      variante: 'destacado',
    },
  ];

  modelosSeleccionados = signal<string[]>(['claude-opus-4-7', 'claude-sonnet-4-6']);
  rangoSeleccionado = signal<string>('30d');
}
