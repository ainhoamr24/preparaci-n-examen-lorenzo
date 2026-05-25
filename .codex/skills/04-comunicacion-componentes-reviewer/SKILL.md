# Skill - Comunicación Componentes Reviewer

## Objetivo

Usar esta skill para revisar cambios relacionados con comunicación entre
componentes Angular.

Proyecto: `PREPARACION-EXAMEN`.

Tipo de aplicación: tienda Angular sin backend real.

## Archivos de referencia

Antes de revisar, consultar:

- `.codex/skills/04-comunicacion-componentes-knowledge/SKILL.md`
- `.codex/skills/04-comunicacion-componentes-knowledge/references/comunicacion-componentes.md`
- `.codex/skills/04-comunicacion-componentes-steps/SKILL.md`

## Checklist general

- [ ] El cambio afecta solo a la comunicación entre componentes necesaria.
- [ ] No se ha modificado código no relacionado.
- [ ] La app sigue siendo una tienda Angular sin backend.

## Checklist de anidamiento

- [ ] El padre importa al hijo en `imports`.
- [ ] El selector usado en la plantilla coincide con el del hijo.
- [ ] El anidamiento tiene una responsabilidad clara.

## Checklist de comunicación padre-hijo

- [ ] Los datos se pasan con `property binding`.
- [ ] El hijo usa `@Input`.
- [ ] El tipo del `@Input` es correcto.
- [ ] El valor recibido se usa de forma clara en el hijo.

## Checklist de comunicación hijo-padre

- [ ] El hijo define `@Output`.
- [ ] El `EventEmitter` está tipado.
- [ ] El hijo emite el evento en el momento correcto.
- [ ] El padre escucha el evento con `event binding`.
- [ ] El método del padre recibe y usa correctamente `$event`.

## Checklist de comunicación bidireccional

- [ ] Se combinan correctamente `@Input` y `@Output`.
- [ ] El hijo no modifica directamente el estado del padre.
- [ ] El padre conserva la responsabilidad sobre el estado compartido.
- [ ] El flujo de datos es fácil de seguir.

## Checklist de standalone

- [ ] Los componentes hijos están importados en el padre.
- [ ] No se ha creado `AppModule` sin necesidad.
- [ ] No faltan imports en componentes standalone.

## Checklist de TypeScript

- [ ] Las propiedades tienen nombres claros.
- [ ] Los eventos personalizados tienen nombres claros.
- [ ] No se usa `any` sin justificación.
- [ ] Los métodos asociados a eventos están tipados correctamente.

## Checklist de templates

- [ ] El HTML es legible.
- [ ] Los bindings de entrada y salida son claros.
- [ ] No se mezcla demasiada lógica en la plantilla.
- [ ] No hay manipulación manual del DOM.

## Checklist de compilación

Antes de cerrar:

- [ ] Revisar errores de template Angular.
- [ ] Revisar errores TypeScript.
- [ ] Verificar imports faltantes.
- [ ] Verificar que la app sigue arrancando.

## Problemas frecuentes

Marcar como problema si aparece:

- Hijo usado sin estar importado en el padre.
- `@Input` sin tipo claro.
- `@Output` sin `EventEmitter`.
- Evento emitido pero no escuchado.
- El hijo modifica directamente estado que debería manejar el padre.
