---
name: "07-arquitectura-implementation"
description: "Guiar una futura organizacion de carpetas, componentes standalone y SCSS por capas segun el Tema 07, sin imponer la arquitectura objetivo sobre el repositorio sin necesidad."
---

# Implementation: Arquitectura

## Aplicacion en Angular

- Comprueba primero la estructura actual y el alcance solicitado.
- Crea `ui` para componentes reutilizables y `paginas` para vistas solo cuando se implemente esa organizacion.
- Mantiene componentes standalone con dependencias explicitas.

## Buenas practicas y estructura recomendada

- Si se adopta el Sass comun, separa utilities, base, components y global.
- Expone parciales mediante `@forward` y carga recursos mediante `@use`.
- Mantiene una entrada global clara para los estilos compartidos.

## Patrones reutilizables e integracion SCSS

- Modela componentes visuales `c-`, layouts `l-` y utilidades `g--`.
- Usa tokens `--mlt-sys-*`.
- Integra Material solo si la tarea lo exige y su tema tiene ubicacion clara.

## Errores y validaciones

- Evita crear simultaneamente abstracciones CSS y Angular redundantes.
- Evita migrar toda la app por un ejemplo aislado.
- Valida arbol de carpetas, imports Sass, compilacion futura y coherencia visual.

