---
name: "05-sass-implementation"
description: "Guiar una futura implementacion de SCSS, tokens y theming Angular Material para el proyecto Angular, aplicando el Tema 05 sin inventar dependencias ni convenciones."
---

# Implementation: SASS

## Objetivo

Orientar futuras implementaciones de SCSS y temas sin crear codigo durante la preparacion documental de esta skill.

## Consultas previas

1. Lee `../knowledge/fundamentos-sass.md`, `variables.md` y `arquitectura-scss.md`.
2. Si se generan tokens, lee `../knowledge/system-tokens.md` y `ejercicios.md`.
3. Si la tarea menciona Angular Material, lee `../knowledge/angular-material-theming.md` y comprueba dependencias reales.

## Estructurar SCSS en Angular

- Parte de la estructura actual del repositorio; la arquitectura del curso solo se crea si la tarea lo pide.
- Si se adopta la estructura objetivo, separa utilidades, base, componentes y globales.
- Carga o reexporta modulos con `@use` y `@forward`.
- Mantiene componentes, layouts y utilidades con responsabilidades diferentes.

## Organizar themes y tokens

- Define la convencion definitiva de `--mlt-sys-*` antes de generar clases.
- Agrupa colores, escalas tipograficas y espaciado como datos reutilizables.
- Usa variables CSS para el contrato global que consumen componentes y utilidades.
- Revisa que las utilidades generadas apunten a tokens existentes.

## Angular Material Theme

- No agregues Material por defecto; confirma que el usuario lo requiere y que la dependencia existe o debe instalarse.
- Si corresponde, configura paletas y System Tokens mediante `mat.theme`.
- Mantiene separados `--mat-sys-*` y `--mlt-sys-*`, aunque sus resultados visuales deban ser coherentes.

## Utilidades reutilizables

- Genera utilidades `g--` solo para escalas documentadas y necesarias.
- Usa listas o mapas para reducir duplicacion.
- Evita que una utilidad sustituya los estilos semanticos de un componente.

## Evitar SCSS caotico

- Evita `@import`.
- Evita nesting profundo.
- Evita tokens con dos convenciones simultaneas.
- Evita mezclar codigo generado, componentes y configuracion del tema sin una estructura clara.

## Validar consistencia visual

- Contrasta colores, tipografias y espaciado con los tokens establecidos.
- Comprueba el CSS resultante de bucles y mixins.
- En Material, comprueba que el tema produce la personalizacion esperada sin sobrescrituras arbitrarias.

