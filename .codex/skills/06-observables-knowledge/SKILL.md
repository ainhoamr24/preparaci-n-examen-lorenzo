# Skill - Observables Knowledge

## Objetivo

Recoger y resumir la teoría base de Angular sobre observables para el proyecto
`PREPARACION-EXAMEN`.

## Fuente

- Documento: `teoria.pdf`
- Alcance: páginas 63 a 76
- Tema: `Tema 7.1 - Observables`

## Qué cubre esta skill

- Introducción a los observables.
- Papel de `zone.js`.
- Qué es RxJS.
- Qué es un observable.
- Patrón Observer.
- Creación de `Subject` y `BehaviorSubject`.
- Emisión, suscripción, cancelación y finalización.
- Comunicación entre componentes mediante servicios y observables.
- Prevención de fugas de memoria.

## Cómo usar esta skill en este proyecto

Antes de diseñar lógica reactiva o flujos asíncronos, consultar:

- `.codex/skills/06-observables-knowledge/references/observables.md`

Aplicar estas reglas:

- Usar observables cuando el problema sea un flujo de datos asíncrono o compartido.
- Mantener el `Subject` en servicios cuando varios componentes deban observarlo.
- Exponer observables públicos de solo lectura y dejar el `Subject` interno como
  privado.
- Suscribirse en `ngOnInit` y cancelar en `ngOnDestroy` cuando la suscripción no se
  gestione automáticamente.
- Evitar fugas de memoria por suscripciones activas.

## Contexto del proyecto actual

En este repositorio la aplicación usa Angular `standalone`, por lo que los servicios
y componentes deben coordinar observables mediante inyección de dependencias y
gestión explícita de suscripciones cuando corresponda.
