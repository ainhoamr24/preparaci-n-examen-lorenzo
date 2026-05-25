# Componentes visuales

## Que presenta el tema

El tema introduce componentes visuales sobre una aplicacion Angular inicial.
Primero separa la logica del componente (`app.ts`) de su representacion
(`app.html`) y despues incorpora Angular Material como biblioteca visual.

## Que es un componente visual en este contexto

Es un elemento de interfaz que se utiliza en una plantilla Angular y cuya
apariencia o comportamiento visual puede personalizarse. El PDF trabaja dos
casos:

| Elemento | Idea destacada |
| --- | --- |
| Boton Material | Se usa sobre el boton HTML mediante la API visual indicada por Material. |
| Icono Material | Se utiliza como elemento propio de Angular Material. |

## Reutilizacion

- Importar el modulo o dependencia del componente antes de usarlo en HTML.
- Mantener la configuracion visual coherente mediante tokens y paletas.
- Evitar estilizar cada boton como un caso aislado si puede responder al mismo
  sistema visual.

El tema muestra reutilizacion a traves de Angular Material; no especifica aun
componentes UI propios del proyecto.

## Separacion visual y composicion

- `app.ts` contiene la parte de programacion y configuracion del componente.
- `app.html` contiene lo que se representa.
- Una composicion inicial incluye un titulo, un boton y el punto de salida del
  router.
- El icono se introduce como otro elemento visual disponible.

No se define en este tema una composicion compleja de paginas o paneles.

## Coherencia visual

La coherencia se consigue con:

- variantes de boton de Material;
- design tokens para ajustar propiedades de botones;
- system tokens que afectan globalmente al tema;
- paletas de color compartidas.

## Relacion entre UI y UX

El Tema 02 se centra en instalar, usar y personalizar componentes visuales. No
formula reglas nuevas de UX; para jerarquia de acciones, color y usabilidad
visual consultar tambien el Tema 01.

## Ejemplo

```typescript
// app.ts — importar el modulo de boton Material antes de usarlo (Tema 02)
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EjemploComponentesAngular');
}
```

```html
<!-- app.html: boton Material con atributo matButton (Tema 02) -->
<h1>Hola mundo</h1>

<!-- El boton Material se usa como atributo, no como etiqueta propia -->
<button matButton="filled">
  Aceptar
</button>

<router-outlet />
```

```scss
/* Design Tokens de boton: personalizar un grupo de botones (Tema 02) */
@use '@angular/material' as mat;

.botones-grandes {
  @include mat.button-overrides((
    filled-label-text-size: 20px,
    outlined-label-text-size: 20px
  ));
}

/* Para que afecte a toda la pagina: */
html {
  @include mat.button-overrides((
    filled-label-text-size: 20px,
    outlined-label-text-size: 20px
  ));
}
```

## Errores comunes a evitar

- Usar un componente Material sin importar su modulo.
- Suponer que Material esta instalado sin verificar dependencias.
- Mezclar personalizaciones puntuales sin una paleta o tokens comunes.
- Confundir un ejemplo del componente raiz con la arquitectura completa de una
  aplicacion.
- Afirmar que el tema define componentes propios, layouts o formularios cuando
  no lo hace.
