---
name: "07-arquitectura-knowledge"
description: "Conocimiento del Tema 07 de DIW sobre arquitectura final de la aplicacion Angular, carpetas SCSS, componentes UI y paginas. Usar antes de planificar estructura o separar responsabilidades."
---

# Knowledge: Arquitectura

## Proposito

Documentar la arquitectura objetivo que el curso utiliza para reunir idioma, Angular Material, estilos comunes, componentes reutilizables y paginas.

## Fuente verificada

Tema 07, **Arquitectura**, paginas 96-99 del PDF.

## Cuando usarla

- Al organizar carpetas de una futura implementacion.
- Al decidir donde pertenece un componente o un estilo.
- Al revisar si la aplicacion separa UI reusable y paginas.

## Conocimientos que aporta

- Organizacion de `src/app/scss/` por capas.
- Uso de `@use` y `@forward`.
- Carpetas `components/ui` y `components/paginas`.
- Diferencia entre clase CSS de layout y componente Angular de layout.

## Relacion con Angular y diseno visual

La arquitectura sirve a una aplicacion Angular con componentes reutilizables, SCSS y Angular Material cuando corresponda. Su separacion permite mantener tokens, estilos y layouts coherentes con las reglas visuales.

## Orden de consulta

1. [estructura-app.md](./estructura-app.md) y [organizacion-carpetas.md](./organizacion-carpetas.md).
2. [arquitectura-componentes.md](./arquitectura-componentes.md).
3. [separacion-responsabilidades.md](./separacion-responsabilidades.md).
4. [patrones.md](./patrones.md), [escalabilidad.md](./escalabilidad.md) y [ejercicios.md](./ejercicios.md).

## Interfaces mantenibles

Una arquitectura mantenible centraliza estilos comunes, reutiliza componentes de UI y deja a cada pagina la composicion especifica de su caso.

