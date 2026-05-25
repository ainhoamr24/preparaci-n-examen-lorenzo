# Componentes Material

## Componentes tratados

El Tema 02 trabaja de manera directa:

- botones Material;
- iconos Material.

El flujo didactico consiste en localizar el componente en la documentacion, importar su modulo o dependencia y utilizar su variante adecuada.

## Relacion con componentes propios

Angular Material aporta componentes base personalizables. El Tema 03, en cambio, practica la construccion de componentes propios. Una tarea debe decidir cual de los dos enfoques necesita.

## Buenas practicas

- Selecciona la variante de boton por jerarquia y funcion.
- Usa iconos como apoyo, no como sustituto de informacion necesaria.
- Centraliza la personalizacion que se repite.

## Ejemplo

```html
<!-- Boton Material: atributo matButton (API de Material 20) (Tema 02) -->
<!-- El PDF muestra matButton="filled", no mat-raised-button -->
<button matButton="filled">Aceptar</button>
<button matButton="outlined">Secundario</button>
<button matButton="text">Terciario</button>

<!-- Icono Material: sigue siendo una etiqueta propia -->
<mat-icon>delete</mat-icon>
<mat-icon>home</mat-icon>
```

```typescript
/* Imports necesarios para los dos componentes (Tema 02) */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
```

## Pendiente

Tablas, formularios, dialogs u otros componentes Material no se desarrollan en las paginas verificadas de esta fuente.

