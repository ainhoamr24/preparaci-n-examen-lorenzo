# Jerarquia visual

## Foco del tema

La jerarquia visual del Tema 02 aparece al personalizar componentes Material,
especialmente botones, tipografia y paletas. Las reglas generales de
enfatizar o desenfatizar se estudian en el Tema 01.

## Tamano

- Los tokens de boton permiten controlar el tamano del texto de las variantes
  de boton.
- Los system tokens permiten centralizar decisiones tipograficas globales del
  tema Material.
- El tema muestra la posibilidad de variar ese tamano, no una escala completa
  para toda la interfaz.

## Contraste y color

El tema distingue paletas Material:

| Paleta | Papel indicado |
| --- | --- |
| `primary` | Color principal de la interfaz. |
| `secondary` | Color diferente del principal, sin buscar protagonismo. |
| `tertiary` | Color destinado a destacar sobre el principal. |

## Posicion, agrupacion y lectura visual

Pendiente: el Tema 02 no proporciona reglas concretas sobre posicion,
agrupacion o recorrido de lectura. No evaluarlas como si estuvieran expuestas
en este bloque.

## Foco visual y priorizacion

- Las variantes visuales de boton permiten diferenciar acciones.
- Las paletas y tokens permiten aplicar esa diferenciacion de forma consistente.
- La clasificacion completa de botones por importancia y funcion procede del
  Tema 01, no de estas paginas.

## Enfatizar frente a desenfatizar

En este tema, destacar se relaciona con la paleta `tertiary` y con variantes o
tokens de los componentes. Un criterio mas completo sobre enfasis y
desenfasis requiere consultar el Tema 01.

## Ejemplo

```scss
// Paletas Material y su papel visual
// primary   → color principal de la interfaz (botones primarios, seleccion)
// secondary → variacion discreta (chips, elementos auxiliares)
// tertiary  → color que resalta frente al principal (badges, acentos)

// Variante de boton segun jerarquia — usando token de tamano de etiqueta
.mat-mdc-raised-button {
  --mdc-protected-button-label-text-size: 0.875rem; // boton estandar
}

.c-boton-destacado {
  --mdc-protected-button-label-text-size: 1rem; // mayor peso visual
}
```

```html
<!-- Boton Material con atributo matButton (API de Material 20, Tema 02) -->
<button matButton="filled">Confirmar</button>    <!-- primaria -->
<button matButton="outlined">Volver</button>     <!-- secundaria -->
<button matButton="text">Eliminar</button>       <!-- terciaria peligrosa -->
```
