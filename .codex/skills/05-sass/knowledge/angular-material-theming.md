# Angular Material Theming

## Procedencia y alcance

Este contenido se deriva del Tema 02 del PDF, donde se explica personalizacion de Angular Material 20. Se incorpora como referencia relacionada porque la tarea pide relacionar SASS con Material.

No implica instalar ni configurar Angular Material en el proyecto actual.

## Theming con Sass

La fuente usa:

- `@use '@angular/material' as mat`;
- `mat.theme` para establecer un tema global;
- mapas de configuracion para color, tipografia y densidad;
- overrides de componente, como los de botones;
- System Tokens para personalizar decisiones globales.

## Paletas

El material distingue especialmente:

| Paleta | Uso descrito |
| --- | --- |
| `primary` | Color principal. |
| `secondary` | Alternativa discreta para evitar uniformidad. |
| `tertiary` | Color que debe destacar frente al principal. |

El generador de temas Material puede producir un fichero SCSS con paletas. La fuente muestra variables Sass de paleta principal y terciaria que se incorporan a `mat.theme`.

## Typography y density

El ejemplo de tema configura:

- tipografia mediante una familia indicada al tema;
- `density` con valor base en la configuracion mostrada.

No se define en las notas una escala propia de densidades para este proyecto.

## Generacion de tokens

La fuente presenta el generador `@angular/material:theme-color`:

- en formato CSS, para inspeccionar System Tokens;
- en formato SCSS, para crear paletas utilizables al configurar el tema.

Los ficheros generados sirven como entrada o referencia; la personalizacion global debe realizarse mediante la configuracion del tema.

## Ejemplo

```scss
/* styles.scss — tema inicial con paletas predefinidas Material (Tema 02) */
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
```

```scss
/* styles.scss — tema con System Tokens personalizados (Tema 02) */
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

```scss
/* styles.scss — tema con paletas generadas por ng generate (Tema 02) */
/* El comando: ng generate @angular/material:theme-color (seleccionar SASS) */
/* Genera: _xxx_theme-colors.scss con $primary-palette y $tertiary-palette */
@use 'sass:map';
@use '@angular/material' as mat;
/* (el fichero generado define $_palettes, $_rest, $primary-palette, $tertiary-palette) */

html {
  @include mat.theme((
    color: (
      primary: $primary-palette,
      tertiary: $tertiary-palette
    ),
    typography: Roboto,
    density: 0,
  ),(
    corner-full: 6px,
    label-large-size: 30px
  ));
}
```

```scss
/* button-overrides: personalizar botones (Tema 02) */
@use '@angular/material' as mat;

.botones-grandes {
  @include mat.button-overrides((
    filled-label-text-size: 20px,
    outlined-label-text-size: 20px
  ));
}
```

## Buenas practicas para Codex

- Comprueba primero que Material forma parte de la tarea y de las dependencias reales.
- Conserva las paletas y tokens en una zona identificable de estilos globales.
- No edites de forma arbitraria la salida generada si la configuracion `mat.theme` resuelve el objetivo.
- Distingue tokens Material `--mat-sys-*` de tokens propios `--mlt-sys-*`.

