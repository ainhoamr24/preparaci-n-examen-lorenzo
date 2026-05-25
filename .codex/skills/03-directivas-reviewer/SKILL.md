# Skill - Directivas Reviewer

## Objetivo

Usar esta skill para revisar cambios relacionados con directivas Angular.

Proyecto: `PREPARACION-EXAMEN`.

Tipo de aplicación: tienda Angular sin backend real.

## Archivos de referencia

Antes de revisar, consultar:

- `.codex/skills/03-directivas-knowledge/SKILL.md`
- `.codex/skills/03-directivas-knowledge/references/directivas.md`
- `.codex/skills/03-directivas-steps/SKILL.md`

## Checklist general

- [ ] El cambio afecta solo a directivas necesarias.
- [ ] No se ha modificado código no relacionado.
- [ ] No se ha creado backend.
- [ ] La app sigue siendo una tienda Angular sin backend.

## Checklist de directivas de atributo

- [ ] `[ngClass]`, `[ngStyle]` o `[(ngModel)]` se usan con sentido claro.
- [ ] No se usan para resolver problemas que deberían ir en componentes o servicios.
- [ ] Los bindings de estilo o clase siguen siendo legibles.

## Checklist de directivas estructurales

- [ ] La condición o iteración es clara.
- [ ] El bloque renderizado es fácil de entender.
- [ ] No se usan dos directivas estructurales en el mismo elemento.
- [ ] Si hace falta combinar estructuras, se usa `ng-container`.
- [ ] El caso vacío está contemplado cuando procede.

## Checklist de `@if`

- [ ] La condición existe y está bien nombrada.
- [ ] El renderizado condicional es correcto.
- [ ] Si hay caso alternativo, está bien resuelto con `else` o `@else`.

## Checklist de `@switch`

- [ ] La expresión evaluada existe en el componente.
- [ ] Los casos cubren las opciones esperadas.
- [ ] Existe bloque por defecto cuando aporta claridad.

## Checklist de `@for`

- [ ] La colección iterada existe.
- [ ] El nombre del elemento iterado es claro.
- [ ] Si se usa `@for`, existe `track`.
- [ ] Si se necesita controlar vacío, se usa `@empty` o una solución equivalente.
- [ ] No se duplica lógica de iteración innecesariamente.

## Checklist de standalone

- [ ] `FormsModule` está importado si aparece `ngModel`.
- [ ] No se ha creado `AppModule` sin necesidad.
- [ ] Las dependencias de plantilla están en `imports`.

## Checklist de templates

- [ ] El HTML es legible.
- [ ] La lógica de plantilla no es excesiva.
- [ ] Las directivas elegidas son coherentes con el problema.
- [ ] No hay manipulación manual del DOM.

## Checklist de compilación

Antes de cerrar:

- [ ] Revisar errores de template Angular.
- [ ] Revisar imports faltantes.
- [ ] Verificar que la app sigue arrancando.

## Problemas frecuentes

Marcar como problema si aparece:

- Dos directivas estructurales en el mismo elemento.
- `@for` sin `track`.
- Plantilla difícil de leer por exceso de lógica.
- Uso de una directiva incorrecta para el caso real.
