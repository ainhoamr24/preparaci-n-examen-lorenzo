# Skill - Router Knowledge

## Objetivo

Recoger y resumir la teoría base de Angular sobre el router para el proyecto
`PREPARACION-EXAMEN`.

## Fuente

- Documento: `teoria.pdf`
- Alcance: páginas 77 a 94
- Tema: `Tema 08 - El Router`

## Qué cubre esta skill

- Qué es el router en Angular.
- Definición de rutas en `app.routes.ts`.
- Uso de `path` y `component`.
- Configuración de `provideRouter`.
- Uso de `router-outlet`.
- Navegación con `routerLink`.
- Navegación programática con `Router`.
- Paso de parámetros en ruta.
- Uso de `ActivatedRoute` y `params`.
- Paso de `queryParams`.
- Guards y protección de rutas.

## Cómo usar esta skill en este proyecto

Antes de diseñar navegación o acceso por URL, consultar:

- `.codex/skills/07-router-knowledge/references/router.md`

Aplicar estas reglas:

- Mantener una correspondencia clara entre ruta y componente.
- Usar la sintaxis moderna del proyecto Angular `standalone`.
- Preferir `routerLink` para navegación desde plantilla.
- Usar `Router` y `ActivatedRoute` cuando la navegación o lectura de parámetros se
  haga desde TypeScript.
- Proteger rutas con guards cuando el acceso dependa de una condición.

## Contexto del proyecto actual

En este repositorio el enrutamiento se apoya en Angular `standalone`, por lo que la
configuración debe centrarse en `app.routes.ts`, `provideRouter`, `router-outlet` y
componentes standalone importando `RouterLink` cuando lo necesiten.
