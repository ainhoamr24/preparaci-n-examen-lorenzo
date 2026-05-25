# Convenciones

## Angular

- Objetivo academico: Angular 20; estado real actual: Angular 21.
- Usar componentes standalone.
- Configurar `es-ES` y `EUR` cuando se implemente la base correspondiente.
- No activar SSR/SSG ni crear una aplicacion zoneless.
- En templates nuevos, usar `@if`, `@for` y `@switch`, no directivas estructurales con asterisco.

## SCSS y clases

| Prefijo | Uso |
| --- | --- |
| `c-` | Componente visual, como un boton o panel. |
| `l-` | Layout que coloca areas. |
| `g--` | Utilidad global. |

- Preferir `@use` y `@forward`, no `@import`.
- Usar variables CSS con prefijo `--mlt-sys-*`.
- Evitar valores repetidos sin un token o justificacion.

## Diseno

- Mantener jerarquia, espacio en blanco, alineacion y contraste.
- Evitar carruseles segun el Tema 01.
- Diferenciar botones por importancia y funcion.

## Ejemplo

```typescript
// Sintaxis moderna de plantillas (Angular 17+)
@Component({
  standalone: true,
  template: `
    @if (activo) {
      <p>Elemento visible</p>
    }

    @for (item of lista; track item.id) {
      <li>{{ item.nombre }}</li>
    }

    @switch (estado) {
      @case ('cargando') { <span>Cargando...</span> }
      @case ('error')    { <span>Error</span> }
      @default           { <span>Listo</span> }
    }
  `,
})
export class EjemploComponent {
  activo = true;
  lista = [{ id: 1, nombre: 'Uno' }];
  estado = 'listo';
}
```

```scss
/* Prefijos BEM del proyecto (Tema 03 BEM) */
/* c-: componente visual (boton, panel, menu...) */
.c-button { /* ... */ }
.c-panel  { /* ... */ }

/* l-: layout que solo coloca areas */
.l-flex      { display: flex; }
.l-columns   { display: grid; }
.l-extremo   { display: flex; }

/* g--: utilidad global (margen, padding, color, font-size...) */
/* Generadas con SASS desde arrays y mapas (Tema 05) */
.g--margin-4           { margin: var(--mlt-sys-margin-4) !important; }
.g--padding-2          { padding: var(--mlt-sys-padding-2) !important; }
.g--color-principal-1  { color: var(--mlt-sys-color-principal-1) !important; }
.g--font-size-3        { font-size: var(--mlt-sys-font-size-3) !important; }

/* Modulos Sass: @use y @forward en lugar del obsoleto @import (Tema 05) */
@use '../01_utilities' as utils;
```

## Pendiente

Antes de implementar debe decidirse si el proyecto real se mantiene en Angular 21 o se alinea deliberadamente con la version academica.

