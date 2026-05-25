# Skill - Componentes Knowledge

## Objetivo

Recoger y resumir la teoría base de Angular sobre módulos, componentes y arranque
de aplicación para el proyecto `PREPARACION-EXAMEN`.

## Fuente

- Documento: `teoria.pdf`
- Alcance: páginas 1 a 13
- Tema: `Tema 02 - Módulos y Componentes`

## Qué cubre esta skill

- Qué es un módulo en Angular.
- Diferencia entre enfoque con módulos y enfoque `standalone`.
- Qué es un componente y cómo se divide entre controlador y vista.
- Propiedades principales del decorador `@Component`.
- Creación y uso de componentes.
- Relación padre-hijo entre componentes.
- Ciclo de vida de componentes.
- Proceso de arranque en Angular moderno y en versiones anteriores.

## Cómo usar esta skill en este proyecto

Antes de diseñar o modificar componentes, consultar:

- `.codex/skills/01-componentes-knowledge/references/componentes.md`

Aplicar estas reglas:

- Mantener componentes con responsabilidad clara.
- Priorizar estructura `standalone`, coherente con el proyecto actual.
- Importar explícitamente en cada componente las dependencias que use.
- Separar lógica TypeScript y plantilla HTML de forma didáctica.
- Evitar concentrar toda la aplicación en el componente raíz.

## Contexto del proyecto actual

En este repositorio la aplicación arranca con:

- `src/main.ts`
- `src/index.html`
- `src/app/app.ts`

Esto encaja con el modelo moderno de Angular sin `AppModule` como punto central
de arranque.
