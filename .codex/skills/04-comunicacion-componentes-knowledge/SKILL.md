# Skill - Comunicación Componentes Knowledge

## Objetivo

Recoger y resumir la teoría base de Angular sobre comunicación entre componentes
para el proyecto `PREPARACION-EXAMEN`.

## Fuente

- Documento: `teoria.pdf`
- Alcance: páginas 39 a 51
- Tema: `Tema 05 - Comunicación entre componentes`

## Qué cubre esta skill

- Anidamiento de componentes.
- Comunicación padre-hijo.
- Comunicación hijo-padre.
- Comunicación bidireccional entre componentes.
- Uso de `@Input`.
- Uso de `@Output`.
- Uso de `EventEmitter`.
- Integración con `@for`.

## Cómo usar esta skill en este proyecto

Antes de diseñar componentes que colaboren entre sí, consultar:

- `.codex/skills/04-comunicacion-componentes-knowledge/references/comunicacion-componentes.md`

Aplicar estas reglas:

- Mantener una responsabilidad clara entre padre e hijo.
- Pasar datos del padre al hijo con `@Input`.
- Pasar eventos del hijo al padre con `@Output` y `EventEmitter`.
- Evitar que el hijo modifique directamente el estado global del padre.
- Mantener una estructura coherente con Angular `standalone`.

## Contexto del proyecto actual

En este repositorio la aplicación usa componentes `standalone`, así que el padre
debe importar explícitamente al hijo en `imports` para poder renderizarlo y
comunicarse con él.
