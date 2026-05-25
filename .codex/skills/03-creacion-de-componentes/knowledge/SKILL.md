---
name: "03-creacion-de-componentes-knowledge"
description: "Conocimiento del Tema 03 de DIW sobre componentes Angular reutilizables, entradas, salidas, proyeccion de contenido, atributos y BEM. Usar antes de diseñar o revisar componentes standalone con SCSS."
---

# Knowledge: Creacion de Componentes

## Proposito

Organizar las reglas del Tema 03 para definir componentes visuales Angular reutilizables y estilos que no colisionen.

## Fuente verificada

Tema 03, **Creacion de componentes**, paginas 24-45 del PDF.

## Cuando usarla

- Al plantear botones, paneles u otros componentes de UI.
- Al decidir entradas, eventos o contenido proyectado.
- Al aplicar BEM a estilos de componentes o layouts.

## Conocimientos que aporta

- Estructura de un componente con TypeScript, HTML y SCSS.
- Importacion del componente donde se utiliza.
- Proyeccion de contenido, entradas tipadas y eventos.
- Componentes basados en atributo, host y encapsulacion.
- BEM con prefijos `c-`, `l-` y `g--`.

## Relacion con Angular y diseno visual

El proyecto exige componentes standalone. La teoria permite encapsular decisiones visuales, como la funcion e importancia de un boton, en una API revisable y estilos SCSS consistentes.

## Orden de consulta

1. [angular-componentes.md](./angular-componentes.md).
2. [standalone-components.md](./standalone-components.md) y [templates.md](./templates.md).
3. [inputs-outputs.md](./inputs-outputs.md).
4. [estructura-componentes.md](./estructura-componentes.md) y [componentes-ui.md](./componentes-ui.md).
5. [ejercicios.md](./ejercicios.md).

## Interfaces mantenibles

Expone pocas variantes tipadas, conserva el HTML semantico adecuado, usa estilos BEM y reserva las paginas para componer componentes existentes.

