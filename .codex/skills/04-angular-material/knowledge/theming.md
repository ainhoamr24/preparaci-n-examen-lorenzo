# Theming

## Tema global

La fuente muestra un tema Material configurado en SCSS mediante `mat.theme`. Su configuracion incluye color, tipografia y densidad, ademas de la posibilidad de ajustar System Tokens.

## Paletas

| Rol | Interpretacion del curso |
| --- | --- |
| `primary` | Color principal de la interfaz. |
| `secondary` | Variacion menos destacada para diversificar la paleta. |
| `tertiary` | Color que debe destacar frente al principal. |

## Buenas practicas

- Configura el tema en un punto global identificable.
- Mantiene paletas coherentes con el Tema 01.
- Personaliza tokens mediante el sistema del tema, no con parches dispersos.
- Revisa tipografia y densidad junto a la jerarquia visual.

## Ejemplo

```scss
/* styles.scss — tema con paletas predefinidas de Material (Tema 02) */
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
/* corner-full cambia el border-radius; label-large-size cambia el tamanyo de la etiqueta */
```

```scss
/* styles.scss — tema con paletas generadas por el comando ng generate (Tema 02) */
/* Primero generar el fichero con: ng generate @angular/material:theme-color */
/* El comando pregunta los colores HEX y genera un _xxx_theme-colors.scss */
@use './colores-verde-morado-azulPastel.scss_theme-colors' as paletas;

html {
  @include mat.theme((
    color: (
      primary: paletas.$primary-palette,
      tertiary: paletas.$tertiary-palette
    ),
    typography: Roboto,
    density: 0,
  ),(
    corner-full: 6px,
    label-large-size: 30px
  ));
}
```

## Pendiente

El bloque no define un conjunto definitivo de colores para esta aplicacion; los ejemplos sirven para aprender el mecanismo.

