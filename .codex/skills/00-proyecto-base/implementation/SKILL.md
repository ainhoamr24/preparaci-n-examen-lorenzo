---
name: "00-proyecto-base-implementation"
description: "Guiar futuros cambios globales de configuracion, estructura Angular, SCSS y Material en preparacion-examen-lorenzo tras contrastar el objetivo academico con el repositorio real."
---

# Implementation: Proyecto Base

## Aplicacion en Angular

Antes de modificar codigo, revisa `../knowledge/` y comprueba versiones, estilos y dependencias reales. Trata Angular 20 como objetivo academico y documenta cualquier adaptacion necesaria para Angular 21.

## Buenas practicas

- Aplica cambios pequeños y trazables.
- Mantiene componentes standalone y SCSS.
- No instala Angular Material ni cambia arquitectura sin requisito concreto.
- Mantiene configuracion regional y decisiones de renderizado segun las reglas globales.

## Estructura recomendada

Si la tarea exige desarrollar la arquitectura del curso, usa `src/app/components/ui/`, `src/app/components/paginas/` y `src/app/scss/`, separando componentes, layouts y utilidades.

## Patrones reutilizables e integracion SCSS

- `c-` para visuales, `l-` para distribucion y `g--` para utilidades.
- Tokens `--mlt-sys-*` para valores globales.
- `@use` y `@forward` para modulos Sass.
- Material y `--mat-sys-*` solo cuando la integracion este confirmada.

## Errores y validaciones

- Error grave: describir como existente una arquitectura que solo es objetivo.
- Error grave: alterar dependencias por seguir un ejemplo documental.
- Valida estructura, compilacion y pruebas pertinentes cuando exista implementacion.
- Valida visualmente jerarquia y coherencia si cambia interfaz.

