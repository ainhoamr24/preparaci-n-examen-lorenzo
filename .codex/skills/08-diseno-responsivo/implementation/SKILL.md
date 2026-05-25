---
name: "08-diseno-responsivo-implementation"
description: "Guiar futuras adaptaciones responsive de layouts Angular y SCSS usando tecnicas confirmadas de Flex/Grid y documentando como decisiones adicionales cualquier regla no incluida en el PDF."
---

# Implementation: Diseno Responsivo

## Aplicacion en Angular

- Mantiene componentes standalone dentro de layouts adaptables.
- Resuelve primero con SCSS de layout antes de introducir comportamiento Angular.
- Consulta el Tema 06 para tecnicas confirmadas.

## Buenas practicas y estructura

- Usa `flex-wrap`, `auto-fit` y `minmax` cuando correspondan al problema.
- Conserva BEM, tokens y separacion entre layout y componente.
- Coordina componentes Material solo si forman parte de la interfaz real.

## Patrones reutilizables e integracion SCSS

- Define layouts reutilizables para filas o grids adaptables.
- Documenta como decision del proyecto cualquier breakpoint, tipografia fluida o escala variable de espacio.
- No convierte una ampliacion opcional en requisito del PDF.

## Errores y validaciones

- Evita overflow horizontal y contenido ilegible.
- Evita valores responsive no justificados.
- Verifica anchos representativos cuando exista codigo.
- Verifica jerarquia visual, acciones, spacing y contraste tras cada adaptacion.

