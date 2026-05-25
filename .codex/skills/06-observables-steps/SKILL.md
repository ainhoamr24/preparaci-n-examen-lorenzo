# Skill - Observables Steps

## Objetivo

Definir los pasos prácticos para aplicar la teoría de observables del bloque 06 en
`PREPARACION-EXAMEN`.

Proyecto: tienda Angular sin backend real.

Fuente teórica: `teoria.pdf`, páginas 63 a 76.

## Referencias obligatorias

Antes de implementar, revisar:

- `.codex/skills/06-observables-knowledge/SKILL.md`
- `.codex/skills/06-observables-knowledge/references/observables.md`
- `.codex/skills/06-observables-reviewer/SKILL.md`

## Cuándo usar esta skill

Usar esta guía cuando haya que:

- modelar flujos asíncronos
- reaccionar a emisiones de datos en el tiempo
- compartir eventos o estado entre componentes
- integrar servicios con comunicación reactiva

## Procedimiento recomendado

### 1. Confirmar que el problema requiere un flujo observable

Antes de tocar código, comprobar si la necesidad es:

- recibir varios valores a lo largo del tiempo
- reaccionar a eventos asíncronos
- compartir emisiones entre varias partes de la app

Si sí, un observable tiene sentido.

### 2. Elegir entre `Subject` y `BehaviorSubject`

Usar:

- `Subject` si no hace falta valor inicial
- `BehaviorSubject` si un nuevo suscriptor debe conocer el último valor emitido

Si hay duda y el estado inicial importa, preferir `BehaviorSubject`.

### 3. Tipar el flujo desde el principio

Definir con tipos claros:

```ts
mensaje: BehaviorSubject<string> = new BehaviorSubject('Valor inicial');
mensaje$: Observable<string> = this.mensaje.asObservable();
```

Mantener nombres claros para el `subject` y para el observable público.

### 4. En servicios compartidos, dejar el `subject` privado

Si varios componentes deben compartir el flujo:

- guardar el `subject` en el servicio
- exponer solo el observable público

Esto evita modificaciones arbitrarias desde componentes.

### 5. Emitir valores con `next`

Cuando haya que publicar nueva información:

```ts
this.mensaje.next('Nuevo valor');
```

Centralizar estas emisiones en métodos del servicio o del componente responsable.

### 6. Suscribirse con la forma moderna de `subscribe`

Preferir la sintaxis con objeto:

```ts
this.miSuscripcion = this.mensaje$.subscribe({
  next: dato => console.log(dato),
  error: error => console.error(error),
  complete: () => console.log('Observable completado')
});
```

Evitar la forma deprecada salvo motivo claro.

### 7. Guardar la suscripción cuando haya que cancelarla

Si la suscripción no se destruye sola, guardarla:

```ts
miSuscripcion!: Subscription;
```

Esto permite llamar después a `unsubscribe`.

### 8. Suscribirse y cancelar en el ciclo de vida correcto

Buenas prácticas del bloque:

- suscribirse en `ngOnInit`
- cancelar en `ngOnDestroy`

Eso aplica especialmente cuando el observable viene de un servicio compartido.

### 9. Cancelar con `unsubscribe`

Cuando el componente deje de observar:

```ts
this.miSuscripcion.unsubscribe();
```

No dejar suscripciones activas innecesarias.

### 10. Completar el flujo con `complete` si el diseño lo requiere

Si el observable debe finalizar:

```ts
this.mensaje.complete();
```

Usarlo cuando el flujo ya no deba emitir más valores.

### 11. Prevenir fugas de memoria

Revisar siempre:

- si la suscripción puede seguir viva tras destruir el componente
- si el callback mantendría referencias antiguas
- si hace falta `unsubscribe`

La prevención de `memory leaks` es obligatoria en este tipo de código.

### 12. Revisar antes de cerrar

Checklist mínima:

- el uso de observables está justificado
- `Subject` o `BehaviorSubject` están bien elegidos
- el observable está bien tipado
- la suscripción se hace con claridad
- existe cancelación cuando hace falta
- no se expone un `subject` modificable sin control

## Resultado esperado

Al terminar este bloque, el proyecto debe quedar preparado para usar observables
de forma clara, didáctica y coherente con Angular `standalone`, evitando fugas de
memoria y manteniendo una comunicación reactiva bien estructurada.
