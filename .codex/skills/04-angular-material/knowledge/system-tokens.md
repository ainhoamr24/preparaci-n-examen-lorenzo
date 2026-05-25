# System Tokens

## Distincion

El curso describe dos niveles:

- Tokens de componente, que afectan a un componente concreto, como un tipo de boton.
- System Tokens `--mat-sys-*`, que proporcionan valores globales usados como referencia por componentes Material.

## Ejemplos conceptuales confirmados

Los botones pueden tomar de tokens globales decisiones de color primario, color de texto, forma o tamano de etiqueta.

## Relacion con tokens propios

| Sistema | Prefijo | Ambito |
| --- | --- | --- |
| Angular Material | `--mat-sys-*` | Componentes Material. |
| Proyecto/curso | `--mlt-sys-*` | Componentes y utilidades propias. |

Ambos pueden perseguir coherencia visual, pero no deben confundirse ni renombrarse como si fueran el mismo contrato.

## Ejemplo

```css
/* System Tokens en CSS: como los usa Material internamente (Tema 02) */
background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
```

```scss
/* Design Tokens de componente: personalizar un boton (Tema 02) */
@use '@angular/material' as mat;

.botones-grandes {
  @include mat.button-overrides((
    filled-label-text-size: 20px,
    outlined-label-text-size: 20px
  ));
}
```

```scss
/* System Tokens modificados via mat.theme (Tema 02) */
html {
  @include mat.theme((
    color: (
      primary: mat.$azure-palette,
      tertiary: mat.$blue-palette
    ),
    typography: Roboto,
    density: 0,
  ),(
    corner-full: 6px,       /* --mat-sys-corner-full afecta a todos los radios */
    label-large-size: 30px  /* --mat-sys-label-large-size afecta a etiquetas grandes */
  ));
}
/* No modificar directamente los archivos generados; usar mat.theme o overrides */
```

## Error comun

Modificar directamente un archivo generado de tokens cuando el objetivo se puede expresar mediante el tema configurado.

