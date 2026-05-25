# Angular Material

## Fuente

El Tema 02 introduce Angular Material 20, componentes como boton e icono, Design Tokens, System Tokens y temas con paletas.

## Uso en el proyecto

Angular Material forma parte del objetivo academico solicitado, pero no se observa instalado en el repositorio actual. Por tanto:

- documentar Material es valido;
- implementarlo requiere una tarea explicita y comprobacion de dependencias;
- no se deben cambiar versiones o configuracion por defecto.

## Relacion con SCSS

- El curso muestra `@use` del paquete Material.
- El tema global se personaliza mediante `mat.theme`.
- Los System Tokens de Material usan `--mat-sys-*`.
- El sistema propio del curso utiliza `--mlt-sys-*`; ambos nombres no deben confundirse.

## Ejemplo

```scss
/* styles.scss — tema con paletas predefinidas (Tema 02) */
html {
  @include mat.theme((
    color: (
      primary: mat.$azure-palette,
      tertiary: mat.$blue-palette
    ),
    typography: Roboto,
    density: 0,
  ));
}

/* Con System Tokens personalizados (Tema 02) */
html {
  @include mat.theme((
    color: (
      primary: mat.$azure-palette,
      tertiary: mat.$blue-palette
    ),
    typography: Roboto,
    density: 0,
  ),(
    corner-full: 6px,
    label-large-size: 30px
  ));
}
```

```typescript
/* Importar el modulo del componente antes de usarlo (Tema 02) */
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
```

```html
<!-- Boton Material: atributo matButton, no mat-raised-button (Tema 02) -->
<button matButton="filled">Aceptar</button>
<button matButton="outlined">Secundario</button>
<button matButton="text">Terciario</button>
```

## Error comun

Aplicar estilos o imports Material como si la libreria ya estuviera instalada.

