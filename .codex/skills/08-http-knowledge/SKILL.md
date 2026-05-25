# Skill - HTTP Knowledge

## Objetivo

Recoger y resumir la teoría base de Angular sobre peticiones HTTP para el proyecto
`PREPARACION-EXAMEN`.

## Fuente

- Documento: `teoria.pdf`
- Alcance: páginas 95 a 116
- Tema: `Tema 09 - Peticiones HTTP`

## Qué cubre esta skill

- Introducción a las peticiones HTTP en frontend.
- Uso de `fetch`.
- Uso de `HttpClient`.
- Configuración de `provideHttpClient`.
- Opciones básicas de `get` y valores por defecto.
- Uso de `HttpClient` en componentes.
- Uso de `HttpClient` en servicios.
- Peticiones `get`, `delete`, `post` y `put`.
- Gestión de errores con `catchError` y `retry`.
- Transformación de datos con `map`.

## Cómo usar esta skill en este proyecto

Antes de diseñar acceso HTTP o consumo de API, consultar:

- `.codex/skills/08-http-knowledge/references/http-client.md`

Aplicar estas reglas:

- Priorizar `HttpClient` frente a `fetch` en Angular.
- Centralizar peticiones HTTP en servicios siempre que sea posible.
- Configurar `provideHttpClient()` en el contexto `standalone`.
- Tipar correctamente observables y respuestas HTTP.
- Gestionar errores y reintentos de forma explícita.

## Contexto del proyecto actual

En este repositorio la aplicación usa Angular `standalone`, por lo que la
configuración HTTP debe apoyarse en `provideHttpClient()` y en servicios
inyectables que encapsulen las peticiones y su tratamiento reactivo.
