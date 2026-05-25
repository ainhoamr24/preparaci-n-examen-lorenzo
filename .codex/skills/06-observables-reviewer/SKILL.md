# Skill - Observables Reviewer

## Objetivo

Usar esta skill para revisar cambios relacionados con observables en Angular.

Proyecto: `PREPARACION-EXAMEN`.

Tipo de aplicación: tienda Angular sin backend real.

## Archivos de referencia

Antes de revisar, consultar:

- `.codex/skills/06-observables-knowledge/SKILL.md`
- `.codex/skills/06-observables-knowledge/references/observables.md`
- `.codex/skills/06-observables-steps/SKILL.md`

## Checklist general

- [ ] El cambio afecta solo a flujos observables necesarios.
- [ ] No se ha modificado código no relacionado.
- [ ] La app sigue siendo una tienda Angular sin backend.

## Checklist de modelado reactivo

- [ ] El uso de observables tiene sentido para el problema.
- [ ] No se usan observables donde bastaría estado síncrono simple.
- [ ] La comunicación reactiva está bien separada de la presentación.

## Checklist de `Subject` y `BehaviorSubject`

- [ ] Se ha elegido `Subject` o `BehaviorSubject` con criterio.
- [ ] Si hace falta valor inicial, se usa `BehaviorSubject`.
- [ ] El tipo emitido es claro.
- [ ] El `subject` queda privado si vive en un servicio compartido.

## Checklist de suscripciones

- [ ] La suscripción usa `subscribe` con estructura clara.
- [ ] Se gestionan `next`, `error` y `complete` cuando procede.
- [ ] La suscripción se guarda si debe cancelarse manualmente.
- [ ] Se llama a `unsubscribe` cuando corresponde.

## Checklist de ciclo de vida

- [ ] La suscripción se realiza en `ngOnInit` cuando aplica.
- [ ] La anulación se realiza en `ngOnDestroy` cuando aplica.
- [ ] No quedan suscripciones activas que puedan producir fugas.

## Checklist de servicios

- [ ] La comunicación entre componentes se apoya en un servicio compartido.
- [ ] El servicio expone observable público de solo lectura.
- [ ] El servicio concentra la emisión de eventos o datos compartidos.

## Checklist de TypeScript

- [ ] No se usa `any` sin justificación.
- [ ] `Observable`, `Subscription`, `Subject` o `BehaviorSubject` están bien tipados.
- [ ] Los métodos como `emitir`, `cancelar` o `finalizar` tienen nombres claros.

## Checklist de compilación

Antes de cerrar:

- [ ] Revisar errores TypeScript.
- [ ] Revisar imports faltantes de RxJS.
- [ ] Verificar que la app sigue arrancando.

## Problemas frecuentes

Marcar como problema si aparece:

- Suscripción sin cancelación cuando era necesaria.
- Uso de `Subject` cuando se necesitaba valor inicial.
- `subject` público modificable desde cualquier componente.
- Fuga de memoria por no anular suscripciones.
- Uso de sintaxis de suscripción deprecada sin razón clara.
