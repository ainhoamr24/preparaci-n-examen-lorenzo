---
name: "05-sass-knowledge"
description: "Conocimiento del Tema 05 de DIW sobre SASS/SCSS, modulos, generacion de tokens y relacion documentada con theming de Angular Material. Usar antes de explicar, planificar o revisar estilos Angular mantenibles."
---

# Knowledge: SASS

## Proposito

Esta skill organiza el Tema 05 de SASS para que Codex pueda razonar sobre estilos SCSS reutilizables, variables del sistema y una arquitectura mantenible en proyectos Angular.

## Fuentes verificadas

- Tema 05, **SASS**, paginas 68-81: Sass, variables, listas, mapas, bucles, funciones, mixins, `@use`, `@forward` y ejercicios de tokens.
- Tema 02, **Introduccion a los componentes visuales**, paginas 18-23: Design Tokens y theming de Angular Material.
- Tema 07, **Arquitectura**, paginas 96-98: propuesta de carpetas SCSS y uso de `@forward`.

## Cuando usarla

- Al explicar o preparar ejercicios de SASS/SCSS.
- Al planificar variables, funciones, mixins o utilidades globales.
- Al generar o revisar tokens `--mlt-sys-*`.
- Al documentar la relacion entre tokens propios y Angular Material.
- Antes de una futura organizacion de estilos Angular.

## Conocimientos que aporta

- Sass como preprocesador que produce CSS.
- Variables `$`, listas, mapas, interpolacion y bucles.
- Funciones, mixins y condicionales.
- Modulos con `@use` y `@forward`.
- Generacion de variables CSS y utilidades `g--`.
- Temas Material mediante `mat.theme` y System Tokens `--mat-sys-*`.

## Relacion con Angular

El curso propone SCSS para Angular y una arquitectura bajo `src/app/scss/`. Esta skill sirve para planificar esa organizacion, pero no afirma que ya exista ni la crea automaticamente.

## Relacion con Angular Material

El PDF muestra Angular Material 20 y su theming en el Tema 02. El proyecto real debe comprobarse antes de implementar: no se debe instalar Material ni modificar dependencias solo por consultar esta skill.

## Orden de consulta

1. [fundamentos-sass.md](./fundamentos-sass.md) y [variables.md](./variables.md).
2. [nesting.md](./nesting.md) y [mixins-y-funciones.md](./mixins-y-funciones.md).
3. [arquitectura-scss.md](./arquitectura-scss.md).
4. [system-tokens.md](./system-tokens.md).
5. [angular-material-theming.md](./angular-material-theming.md) solo si la tarea implica Material.
6. [ejercicios.md](./ejercicios.md) para practicas del tema.

## Mantenibilidad

- Centraliza valores repetidos y genera patrones repetitivos con criterio.
- Prefiere `@use` y `@forward`; evita `@import`.
- Mantiene separados tokens, componentes y utilidades globales.
- Revisa los nombres de tokens antes de generar CSS: el material presenta una inconsistencia documentada en los tokens de color.

