# Standalone Components

## Convencion del proyecto

El proyecto solicita componentes standalone. Las notas muestran componentes con imports locales en su metadato, coherentes con este modo de composicion.

## Reglas

- Cada componente importa solo lo necesario para su template.
- Una pagina agrega componentes de UI a traves de imports claros.
- La reutilizacion se apoya en una API pequena y tipada.

## Pendiente

Las paginas del Tema 03 no presentan una comparacion formal entre componentes standalone y modulos Angular. La preferencia standalone procede de las reglas del proyecto.

## Ejemplo

```typescript
// boton.ts — componente standalone: importa CommonModule (Tema 03)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'boton',
  imports: [CommonModule],
  templateUrl: './boton.html',
  styleUrl: './boton.scss'
})
export class Boton { }
```

```typescript
// app.ts — importa Boton para poder usarlo en el template (Tema 03)
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Boton } from './shared/ui/boton/boton';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Boton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EjemploComponentesAngular');
}
```

```html
<!-- app.html — usa el componente importado -->
<boton>Hola mundo</boton>
<boton [funcion]="'peligrosa'" (onClick)="alerta()">Hola mundo</boton>

<router-outlet />
```

## Error comun

Presentar una eleccion de arquitectura Angular como conclusion literal del PDF cuando corresponde a la convencion global solicitada.

