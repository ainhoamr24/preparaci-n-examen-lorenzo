# Espaciado

## Alcance confirmado

El tema menciona el espaciado al personalizar botones de Angular Material. En
los tokens de boton aparecen propiedades para el padding horizontal, y el tema
Material incorpora una opcion global de densidad.

## Margenes y paddings

| Aspecto | Contenido sustentado |
| --- | --- |
| Padding de botones | Se puede controlar mediante tokens de boton para variantes visuales. |
| Densidad global | Forma parte de la configuracion del tema Material mostrada. |
| Margenes generales de pagina | Pendiente: no se explican en Tema 02. |

## Separacion visual y ritmo visual

La necesidad de un sistema general de separacion y ritmo pertenece al criterio
visual del proyecto, pero el Tema 02 no define escalas de margen ni reglas de
composicion. No inventar valores SCSS a partir de este archivo.

## Consistencia de espacios

Para lo que el tema si cubre:

- personalizar una familia de botones mediante tokens en lugar de excepciones;
- mantener el mismo criterio de padding en variantes equivalentes;
- considerar la densidad como decision global del tema visual.

## Sistemas de espaciado

Pendiente: las paginas 15-23 no enumeran una escala de espacios ni establecen
variables del proyecto. Cuando se implemente, debera alinearse con SCSS y las
convenciones globales, pero esa definicion no procede de este tema.

## Ejemplo

```scss
// Personalizar el padding horizontal de botones mediante token de componente
.mat-mdc-button-base {
  --mdc-text-button-horizontal-padding:    16px; // boton de texto
  --mdc-protected-button-horizontal-padding: 24px; // boton raised
}

// Densidad global del tema Material (afecta al espaciado interno de componentes)
html {
  @include mat.theme((
    // ...
    density: 0, // 0 = estandar; -1, -2 reducen el espaciado interior
  ));
}
```

## Errores comunes

- Presentar una escala de espaciado como contenido del Tema 02.
- Cambiar el padding de botones de forma arbitraria sin usar el sistema de
  personalizacion explicado.
- Confundir la densidad de Material con un layout completo de pagina.
