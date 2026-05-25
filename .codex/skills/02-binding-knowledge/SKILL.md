# Skill - Binding Knowledge

## Objetivo

Recoger y resumir la teoría base de Angular sobre `data binding` para el proyecto
`PREPARACION-EXAMEN`.

## Fuente

- Documento: `teoria.pdf`
- Alcance: páginas 14 a 23
- Tema: `Tema 03 - Data Binding`

## Qué cubre esta skill

- Qué es el `data binding`.
- Dirección del flujo de datos entre controlador y vista.
- Interpolación.
- `property binding`.
- `event binding`.
- `two way data binding`.
- Uso de `ngModel`.
- Importación de `FormsModule`.

## Cómo usar esta skill en este proyecto

Antes de diseñar o modificar plantillas y bindings, consultar:

- `.codex/skills/02-binding-knowledge/references/binding.md`

Aplicar estas reglas:

- Mantener los bindings simples y legibles.
- Elegir el tipo de binding correcto según la dirección del flujo de datos.
- Evitar manipulación manual del DOM para cambios que Angular resuelve con binding.
- Usar `[(ngModel)]` solo cuando realmente se necesite sincronización bidireccional.
- Importar `FormsModule` cuando se use `ngModel` en componentes `standalone`.

## Contexto del proyecto actual

En este repositorio la aplicación usa Angular moderno con componentes
`standalone`, así que las dependencias necesarias para cada plantilla deben
declararse explícitamente en el array `imports` del componente.
