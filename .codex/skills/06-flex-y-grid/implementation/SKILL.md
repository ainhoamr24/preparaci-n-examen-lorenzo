---
name: "06-flex-y-grid-implementation"
description: "Guiar una futura aplicacion del Tema 06 en layouts Angular con SCSS, Flexbox, Grid y areas BEM reutilizables. Usar cuando se solicite construir o adaptar una distribucion."
---

# Implementation: Flex y Grid

## Objetivo

Guiar una implementacion posterior de layouts Angular sin generar codigo durante la creacion documental de la skill.

## Antes de implementar

1. Consulta `../knowledge/flexbox.md` y `../knowledge/css-grid.md`.
2. Lee `../knowledge/layouts-responsive.md` si debe adaptarse a distintos anchos.
3. Lee `../knowledge/patrones-layout.md` si se pide un patron de pagina.
4. Contrasta el requisito con la estructura Angular real.

## Cuando usar Flexbox

- Para una fila o columna de componentes.
- Para alinear y distribuir acciones en un eje.
- Para separar grupos mediante margen automatico.
- Para contenido que puede envolver elementos con `flex-wrap`.

## Cuando usar Grid

- Para paginas compuestas por areas.
- Para filas y columnas relacionadas.
- Para grids de contenido adaptables con `auto-fit` y `minmax`.
- Para regiones que abarcan varias columnas.

## Estructurar layouts Angular

- Modela la pagina con areas claras y componentes reutilizables dentro de ellas.
- Nombra el layout con prefijo `l-` y conserva BEM en areas o modificadores.
- Mantiene el SCSS visual del componente fuera del SCSS de posicionamiento.
- Usa un contenedor de layout solo cuando reduzca complejidad real.

## Dashboards y componentes responsive

La fuente permite componer regiones, pero no define dashboards ni widgets. Para una tarea de ese tipo:

- confirma primero areas, contenidos y jerarquia;
- usa Grid para el armazon bidimensional si procede;
- usa Flexbox para filas internas de acciones;
- documenta como decisiones del proyecto las reglas no presentes en el PDF.

## Consistencia y fragilidad

- Usa separaciones coherentes con `gap`.
- Evita anchos rigidos cuando el requisito necesita adaptacion.
- Evita mezclar colores o tipografia con clases de layout.
- No asumas `align-self`, `auto-fill` o breakpoints como reglas evaluables confirmadas.

## Validar responsive design

- Comprueba la envoltura flex cuando el ancho disminuye.
- Comprueba la creacion de filas en grids adaptables.
- Detecta overflow horizontal inesperado.
- Revisa que cada area siga siendo legible y mantenga su responsabilidad.

