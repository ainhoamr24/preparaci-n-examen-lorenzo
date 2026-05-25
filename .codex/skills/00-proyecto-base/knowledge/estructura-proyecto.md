# Estructura del Proyecto

## Objetivo academico

El proyecto sirve para practicar interfaces del curso con Angular, componentes visuales, SCSS y una arquitectura revisable.

## Estructura SDD de documentacion

Cada tema de `.codex/skills/` separa:

- `knowledge/`: teoria verificada y limites.
- `implementation/`: pautas para una futura aplicacion.
- `reviewer/`: criterios de revision.

## Estado tecnico comprobado

| Aspecto | Estado observado | Regla de trabajo |
| --- | --- | --- |
| Angular | Dependencias `@angular/*` 21 en `package.json`. | No fingir Angular 20 instalado; adaptar solo si se implementa. |
| Estilos | SCSS configurado en `angular.json`. | Mantener SCSS. |
| Material | No se observa `@angular/material` en dependencias. | No asumir ni instalar sin solicitud. |
| Aplicacion | Base Angular con `src/app` y `src/styles.scss`. | No describir carpetas objetivo como existentes. |

## Arquitectura objetivo del curso

El Tema 07 propone:

- `src/app/scss/` para Sass comun;
- `src/app/components/ui/` para componentes reutilizables;
- `src/app/components/paginas/` para paginas especificas.

Esta estructura es una meta documental y solo debe crearse cuando la tarea lo pida.

