---
name: "08-diseno-responsivo-knowledge"
description: "Indice documental para decisiones responsive en interfaces Angular con SCSS, basado en tecnicas confirmadas del Tema 06 y marcando los contenidos no localizados en el PDF."
---

# Knowledge: Diseno Responsivo

## Proposito

Organizar la consulta sobre adaptacion de interfaces sin atribuir al PDF un tema que no se ha localizado como unidad independiente.

## Alcance verificado

No se identifica un Tema 08 de diseno responsivo en las notas disponibles. El Tema 06 confirma:

- `flex-wrap` para permitir cambios de linea;
- Grid con `auto-fit` y `minmax` para columnas adaptables.

## Cuando usarla

- Al pedir adaptacion de layouts o componentes a diferentes anchos.
- Al revisar overflow o reorganizacion visual.
- Al documentar que una decision responsive necesita requisitos adicionales.

## Conocimientos que aporta

- Tecnicas de adaptacion confirmadas por Flex/Grid.
- Lista de conceptos pendientes: mobile first, breakpoints y escalas responsive.
- Criterios de revision sin inventar valores.

## Relacion con Angular y diseno visual

Una futura interfaz Angular standalone puede necesitar layouts adaptables y SCSS consistente. La jerarquia visual, espaciado y componentes Material deben seguir siendo legibles al cambiar el ancho.

## Orden de consulta

1. [layouts-fluidos.md](./layouts-fluidos.md).
2. [responsive-components.md](./responsive-components.md).
3. [mobile-first.md](./mobile-first.md) y [breakpoints.md](./breakpoints.md) para limites pendientes.
4. [responsive-typography.md](./responsive-typography.md), [responsive-spacing.md](./responsive-spacing.md) y [ejercicios.md](./ejercicios.md).

## Interfaces mantenibles

No fijes breakpoints, escalas ni variantes sin fuente o requisito; valida la adaptacion con las tecnicas confirmadas y documenta cada decision adicional.

