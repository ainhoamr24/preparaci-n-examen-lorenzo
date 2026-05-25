---
name: "06-flex-y-grid-knowledge"
description: "Conocimiento del Tema 06 de DIW sobre Flexbox, CSS Grid y reglas de layout reutilizable para interfaces Angular con SCSS. Usar antes de planificar, explicar o revisar distribuciones y paginas."
---

# Knowledge: Flex y Grid

## Proposito

Esta skill resume el Tema 06 del PDF para construir layouts ordenados con Flexbox y CSS Grid, manteniendo separada la distribucion de las areas del estilo visual de los componentes.

## Fuente verificada

Tema 06, **Flex y Grid**, paginas 82-95 del PDF del curso.

## Cuando usarla

- Al elegir entre una distribucion lineal con Flexbox y una rejilla con Grid.
- Al preparar componentes o paginas Angular que necesiten areas de layout.
- Al documentar columnas, zonas de pagina o separacion entre grupos.
- Al revisar SCSS con bloques `l-` y componentes `c-`.

## Conocimientos que aporta

- Contenedores flex en fila o columna, alineacion y reparto del espacio.
- Crecimiento, reduccion y tamano inicial de areas flex.
- Rejillas de columnas y filas con fracciones, repeticion y separacion.
- Grids adaptables mediante `auto-fit` y `minmax`.
- Areas nombradas con `grid-template-areas` y `grid-area`.
- Regla de que un layout posiciona o dimensiona areas sin definir su aspecto.

## Relacion con Angular

En una implementacion Angular, las paginas pueden organizar componentes reutilizables dentro de areas de layout. Un componente visual puede situarse en un area sin que su SCSS se mezcle con las reglas de posicionamiento.

Esta skill es documental: no crea codigo Angular.

## Relacion con layouts responsive

La fuente confirma `flex-wrap` y una rejilla adaptable basada en `repeat(auto-fit, minmax(...))`.

**Pendiente:** no se define una estrategia `mobile first`, un sistema de breakpoints ni ejemplos propios con media queries.

## Orden de consulta

1. [flexbox.md](./flexbox.md) para alineacion y reparto en un eje.
2. [css-grid.md](./css-grid.md) para rejillas y areas.
3. [layouts-responsive.md](./layouts-responsive.md) para adaptacion confirmada y limites.
4. [alineacion-y-distribucion.md](./alineacion-y-distribucion.md) para decisiones de espacio.
5. [patrones-layout.md](./patrones-layout.md) y [dashboards-y-paginas.md](./dashboards-y-paginas.md) para paginas compuestas.
6. [ejercicios.md](./ejercicios.md) al resolver la practica localizada.

## Interfaces mantenibles

- Usa `l-` para layouts y areas; deja `c-` para componentes visuales.
- Mantiene colores y tipografias fuera de las clases de layout.
- Elige Flexbox para un eje y Grid para regiones bidimensionales.
- No presentes como regla del PDF un patron que las notas solo permiten imaginar.

