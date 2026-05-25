# Skill - Binding Reviewer

## Objetivo

Usar esta skill para revisar cambios relacionados con `data binding` en Angular.

Proyecto: `PREPARACION-EXAMEN`.

Tipo de aplicación: tienda Angular sin backend real.

## Archivos de referencia

Antes de revisar, consultar:

- `.codex/skills/02-binding-knowledge/SKILL.md`
- `.codex/skills/02-binding-knowledge/references/binding.md`
- `.codex/skills/02-binding-steps/SKILL.md`

## Checklist general

- [ ] El cambio afecta solo a bindings necesarios.
- [ ] No se ha modificado código no relacionado.
- [ ] No se ha creado backend.
- [ ] No se ha añadido lógica ajena al objetivo del binding.
- [ ] La app sigue siendo una tienda Angular sin backend.

## Checklist de interpolación

- [ ] La interpolación se usa para mostrar texto o expresiones simples.
- [ ] No se usa interpolación para casos que requieren `property binding`.
- [ ] No se introducen expresiones complejas en la plantilla.
- [ ] Las propiedades interpoladas existen en el componente.

## Checklist de property binding

- [ ] Las propiedades HTML se enlazan con sintaxis `[propiedad]`.
- [ ] El valor enlazado existe en el controlador.
- [ ] El binding mantiene flujo unidireccional controlador a vista.
- [ ] No se manipulan propiedades del DOM manualmente si Angular puede enlazarlas.
- [ ] Los bindings de `disabled`, `src`, `class` o similares son claros y coherentes.

## Checklist de event binding

- [ ] Los eventos usan sintaxis `(evento)`.
- [ ] Los métodos llamados existen en el componente.
- [ ] Los parámetros enviados al método tienen sentido.
- [ ] Se usa `$event` solo cuando hace falta acceder al evento.
- [ ] No se delega la lógica de interacción al DOM manual.

## Checklist de two way data binding

- [ ] `[(ngModel)]` se usa solo cuando hace falta sincronización bidireccional.
- [ ] La propiedad enlazada existe en el componente.
- [ ] Si se usa `ngModel`, el componente importa `FormsModule`.
- [ ] No hay conflictos de tipos entre la propiedad y el valor esperado.
- [ ] El comportamiento bidireccional es verificable en la UI.

## Checklist de componentes standalone

- [ ] Las dependencias necesarias están en `imports`.
- [ ] No se ha creado `AppModule` sin necesidad.
- [ ] `FormsModule` se importa en el componente `standalone` que lo necesita.
- [ ] No faltan imports de directivas o módulos usados en plantilla.

## Checklist de TypeScript

- [ ] Las propiedades tienen nombres claros.
- [ ] Los métodos de eventos tienen nombres claros.
- [ ] No se usa `any` sin justificación.
- [ ] Se respetan tipos como `string | null` cuando el caso lo exige.
- [ ] No hay lógica excesiva dentro de la plantilla.

## Checklist de templates

- [ ] El HTML es legible.
- [ ] Los bindings son fáciles de seguir.
- [ ] No se mezcla demasiada lógica condicional en un único atributo.
- [ ] No se usa `document.getElementById`.
- [ ] No se usa manipulación manual del DOM.

## Checklist de compilación

Antes de cerrar:

- [ ] Revisar errores de template Angular.
- [ ] Revisar errores TypeScript.
- [ ] Revisar imports faltantes.
- [ ] Verificar que `ngModel` no falle por falta de `FormsModule`.
- [ ] Verificar que la app sigue arrancando.

## Problemas frecuentes

Marcar como problema si aparece:

- Interpolación usada donde debería ir `[propiedad]`.
- Evento declarado con sintaxis incorrecta.
- Método de evento inexistente.
- Uso de `ngModel` sin `FormsModule`.
- Plantilla con demasiada lógica incrustada.
- Manipulación manual del DOM para algo resoluble con binding.
