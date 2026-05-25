---
name: "00-proyecto-base-knowledge"
description: "Contexto global de preparacion-examen-lorenzo: objetivo didactico, convenciones Angular/SCSS/Material y contraste entre el curso y el repositorio real. Usar antes de cualquier cambio estructural o tecnico."
---

# Knowledge: Proyecto Base

## Proposito

Definir el contexto general con el que Codex debe interpretar las skills tematicas y futuros cambios en la aplicacion.

## Fuentes

- Instrucciones del proyecto y estructura SDD solicitada.
- Tema 02 del PDF: configuracion Angular, `es-ES`, `EUR` y Angular Material.
- Tema 07 del PDF: arquitectura objetivo de SCSS, componentes y paginas.
- Repositorio real: `package.json`, `angular.json` y `src/`.

## Cuando usarla

- Antes de modificar estructura, configuracion o dependencias.
- Antes de aplicar una skill tematica en codigo.
- Al detectar una diferencia entre apuntes y estado real.

## Conocimientos que aporta

- Finalidad didactica: preparar el examen de DIW.
- Convenciones globales de Angular, SCSS, BEM y tokens.
- Arquitectura objetivo de la asignatura.
- Flujo de validacion y limites para no inventar requisitos.

## Relacion con Angular y diseno visual

El curso orienta el trabajo a Angular 20, SCSS, Angular Material y componentes standalone. El repositorio inspeccionado actualmente usa dependencias Angular 21, SCSS y no muestra Angular Material instalado. Las reglas visuales se aplican de forma documental hasta que una tarea autorice codigo.

## Orden de consulta

1. [estructura-proyecto.md](./estructura-proyecto.md).
2. [convenciones.md](./convenciones.md).
3. [arquitectura-angular.md](./arquitectura-angular.md).
4. [angular-material.md](./angular-material.md) si Material es relevante.
5. [flujo-codex.md](./flujo-codex.md) y [checklist-global.md](./checklist-global.md) antes de actuar o cerrar.

## Interfaces mantenibles

Usa componentes pequeños, SCSS organizado, tokens consistentes y una separacion clara entre componentes reutilizables y paginas especificas.

