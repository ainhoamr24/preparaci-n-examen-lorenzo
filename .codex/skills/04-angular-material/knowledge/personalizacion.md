# Personalizacion

## Tokens de componente

La fuente muestra personalizacion de botones mediante overrides Sass. Diferencia grupos asociados a botones, botones de icono y botones flotantes, y trata valores como tamano de etiqueta, color, forma y padding.

## Reglas practicas

- Personaliza en una clase acotada si la variante solo corresponde a un contexto.
- Personaliza globalmente solo si la decision forma parte del sistema visual.
- Usa el tema para System Tokens globales.
- Mantiene coherencia con importancia y funcion de acciones.

## Ejemplo conceptual

Una familia de botones principales puede compartir forma y tipografia global, mientras un contexto puntual no debe alterar todos los botones de la aplicacion.

## Ejemplo

```scss
/* Design Tokens de boton: grupos del PDF (Tema 02) */
/* button-overrides: Para cada boton */
/* icon-button-overrides: Para iconos de botones */
/* fab-overrides: Para botones flotantes (FAB) */

@use '@angular/material' as mat;

/* Tokens de button-overrides documentados en el PDF: */
/* filled-label-text-size: tamano de fuente para botones filled */
/* outlined-label-text-size: tamano de fuente para botones outlined */

/* Personalizacion acotada (solo donde se aplique la clase) */
.botones-grandes {
  @include mat.button-overrides((
    filled-label-text-size: 20px,
    outlined-label-text-size: 20px
  ));
}

/* Personalizacion global (toda la aplicacion) */
html {
  @include mat.button-overrides((
    filled-label-text-size: 20px,
    outlined-label-text-size: 20px
  ));
}
```

```css
/* Propiedades CSS de los Design Tokens de boton (Tema 02) */
/* Para filled: */
/* --mat-button-filled-container-color */
/* --mat-button-filled-label-text-color */
/* --mat-button-filled-container-shape */
/* --mat-button-filled-horizontal-padding */
/* --mat-button-filled-label-text-size */

/* Para outlined: */
/* --mat-button-outlined-label-text-color */
/* --mat-button-outlined-outline-color */
/* --mat-button-outlined-container-shape */

/* Para text: */
/* --mat-button-text-label-text-color */
/* --mat-button-text-container-shape */
```

```css
/* Como Material usa los System Tokens en los Design Tokens (Tema 02) */
background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
```

## Errores comunes

- Sobrescribir tokens sin distinguir alcance local y global.
- Crear una apariencia peligrosa que no corresponda a una accion destructiva.
- Aplicar overrides sin comprobar el componente afectado.

