# Inputs y Outputs

## Entradas

La fuente usa entradas para personalizar el boton y termina limitando valores mediante tipos, por ejemplo la funcion `normal`, `alternativa` o `peligrosa`.

## Salidas

El tema explica un evento emitido desde el boton para que el componente consumidor gestione la accion.

## Reglas practicas

- Prefiere variantes tipadas a colores libres recibidos desde la pagina.
- Usa entradas para configuracion y salidas para comunicar acciones.
- No ocultes una accion destructiva tras una variante visual ambigua.

## Relacion visual

Los botones del proyecto deben poder expresar importancia (`primaria`, `secundaria`, `terciaria`) y funcion (`normal`, `alternativa`, `peligrosa`) sin romper el sistema SCSS.

## Ejemplo

```typescript
// boton.ts — entrada para personalizar la funcion visual
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'boton',
  imports: [CommonModule],
  templateUrl: './boton.html',
  styleUrl: './boton.scss'
})
export class Boton {
  @Input() funcion: 'normal' | 'alternativa' | 'peligrosa' = 'normal';
}
```

```typescript
// boton.ts — con href y onClick (Output)
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'boton',
  imports: [CommonModule],
  templateUrl: './boton.html',
  styleUrl: './boton.scss'
})
export class Boton {
  @Input() funcion: 'normal' | 'alternativa' | 'peligrosa' = 'normal';
  @Input() href: string = '';
  @Output() onClick = new EventEmitter<void>();

  handleOnClick(): void {
    this.onClick.emit();
  }
}
```

```html
<!-- boton.html — enlaza el click del elemento al método TypeScript -->
<a class="boton funcion--{{funcion}}" [attr.href]="href || null" (click)="handleOnClick()">
  <ng-content></ng-content>
</a>
```

```html
<!-- Consumidor: usa el componente con entrada y escucha el evento -->
<boton [funcion]="'peligrosa'" (onClick)="alerta()">Hola mundo</boton>
```

```typescript
// app.ts — metodo consumidor del evento
export class App {
  alerta(): void {
    alert('Hola mundo');
  }
}
```

## Errores comunes

- Convertir cada propiedad CSS en una entrada.
- Emitir eventos sin que el consumidor conozca su significado.
- Mezclar funcion de boton y navegacion sin revisar la semantica del elemento.

