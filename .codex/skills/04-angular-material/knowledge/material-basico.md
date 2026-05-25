# Material Basico

## Alcance

El curso incorpora Angular Material tras crear una aplicacion Angular y elige una pareja inicial de paletas para el tema.

## Uso conceptual

- Instalar o configurar la libreria solo en una tarea de implementacion autorizada.
- Importar cada componente Material que se emplea en una plantilla standalone.
- Empezar por componentes sencillos, como botones e iconos, para estudiar su apariencia.

## Estado del repositorio

El proyecto real inspeccionado no muestra actualmente `@angular/material` en `package.json`. Esta documentacion no equivale a una instalacion.

## Ejemplo

```bash
# Comprobar si Material esta instalado antes de cualquier uso:
# grep "@angular/material" package.json

# Si no aparece, instalarlo solo cuando la tarea lo autorice:
# ng add @angular/material
```

```typescript
// Una vez confirmada la dependencia, importar el modulo del componente (Tema 02)
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
<!-- Boton Material: se usa como atributo en la etiqueta button (Tema 02) -->
<!-- El atributo es matButton, no mat-button ni mat-raised-button -->
<button matButton="filled">
  Aceptar
</button>

<!-- Otros estilos de boton Material: outlined, text -->
<button matButton="outlined">Secundario</button>
<button matButton="text">Terciario</button>
```

## Errores comunes

- Escribir templates Material sin confirmar dependencia e imports.
- Confundir la version Material del curso con la instalada, si en el futuro cambia.
- Elegir componentes solo por apariencia sin considerar la funcion visual.

