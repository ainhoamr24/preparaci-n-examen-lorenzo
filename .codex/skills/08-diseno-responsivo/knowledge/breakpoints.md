# Breakpoints

## Estado de la fuente

**Pendiente:** no se localiza una tabla de breakpoints ni ejemplos propios de media queries en las notas consultadas.

## Regla practica

Si una implementacion futura exige breakpoints:

- derivarlos del contenido y de requisitos verificados;
- documentar sus valores y objetivo;
- comprobar que no dupliquen decisiones innecesarias.

## Relacion con Material

La documentacion disponible no define breakpoints Material para este proyecto. No se deben asumir valores por usar Angular Material.

## Ejemplo

```scss
// Si la implementacion exige breakpoints, definirlos como decision del proyecto:
// (no como norma del PDF — pendiente de fuente verificada)

// 01_utilities/_variables.scss
// $bp-md: 48rem;  /* 768px  */
// $bp-lg: 64rem;  /* 1024px */

// Uso con interpolacion Sass
// @media (min-width: #{$bp-md}) {
//   .l-pagina {
//     grid-template-columns: 240px 1fr;
//   }
// }

// ✅ Alternativa sin breakpoints: adaptacion automatica con Grid/Flex
.l-coleccion {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  // sin media queries, el numero de columnas se ajusta solo
}
```

## Error comun

Proponer anchos concretos como norma del examen sin respaldo documental.

