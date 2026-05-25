# Mobile First

## Estado de la fuente

**Pendiente:** las notas verificadas no presentan una metodologia `mobile first` como contenido desarrollado del PDF.

## Uso responsable por Codex

- No declarar mobile first como exigencia academica del tema sin nueva fuente.
- Si una tarea futura lo requiere, documentarlo como decision del proyecto.
- Conservar componentes, jerarquia y acciones legibles en anchos reducidos.

## Relacion con Angular y SCSS

La estrategia afectaria estilos de layouts y componentes standalone; debe coordinarse con tokens, Material y la arquitectura SCSS cuando sea aprobada.

## Ejemplo

```scss
// Si el proyecto aprueba mobile first, documentar la decision y los breakpoints:
//
// :root {
//   --bp-md: 48rem;  /* 768px  — decision del proyecto, no del PDF */
//   --bp-lg: 64rem;  /* 1024px — decision del proyecto */
// }
//
// Patron mobile first: base movil, ampliar para pantallas grandes
// .l-pagina {
//   display: grid;
//   grid-template-areas: "contenido";   /* movil: una columna */
// }
//
// @media (min-width: 48rem) {
//   .l-pagina {
//     grid-template-areas: "lateral contenido";
//     grid-template-columns: 240px 1fr;
//   }
// }

// Mientras no haya una fuente o requisito verificado,
// usar auto-fit y flex-wrap en lugar de media queries explicitas.
.l-coleccion {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: var(--mlt-sys-space-md);
}
```

## Error comun

Inventar una metodologia completa a partir de que Grid sea capaz de adaptarse.

