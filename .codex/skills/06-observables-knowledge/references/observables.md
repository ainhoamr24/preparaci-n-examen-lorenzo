# Tema 7.1 - Observables

Fuente: `teoria.pdf`, páginas 63 a 76.

## 1. Introducción

Los observables son una herramienta clave en Angular para crear aplicaciones
reactivas y robustas.

### Para qué sirven

Permiten trabajar con flujos de datos asíncronos de manera:

- eficiente
- flexible
- reactiva

## 1.1. ¿Qué es `zone.js`?

`zone.js` es una librería fundamental, aunque cada vez más opcional, que ha sido
clave en Angular desde sus inicios.

### Idea simple

Es la pieza que permite a Angular saber cuándo debe actualizar la interfaz de usuario
de forma automática.

### Qué hace

`zone.js` crea un contexto de ejecución capaz de interceptar y rastrear tareas
asíncronas del navegador.

### Qué tipos de tareas intercepta

- eventos del usuario como `click`, `keypress` o `mouseover`
- temporizadores como `setTimeout` y `setInterval`
- peticiones de red como `XMLHttpRequest` o `fetch`
- `Promise` y `async/await`

### Relación con Angular

Cuando una operación asíncrona termina:

- `zone.js` notifica a Angular
- Angular ejecuta la detección de cambios
- Angular comprueba si el modelo ha cambiado
- si hay cambios, actualiza el DOM

## 1.2. ¿Qué es RxJS?

RxJS es una biblioteca de JavaScript para programación reactiva.

Se basa en el patrón Observador y ofrece herramientas para trabajar con flujos de
datos asíncronos.

### Características principales

- implementación de observables
- operadores para transformar, combinar y filtrar flujos
- soporte en navegador y Node.js

### Beneficios

- simplifica el desarrollo asíncrono
- mejora capacidad de respuesta y escalabilidad
- permite código más modular y reutilizable

## 1.3. ¿Qué son los observables?

En programación reactiva, un observable es un objeto que representa un flujo de
datos asíncrono.

### Cómo funcionan

- emiten valores a lo largo del tiempo
- otros elementos pueden suscribirse
- los suscriptores reciben y procesan los valores emitidos

### Idea intuitiva

La teoría compara un observable con una cascada:

- los datos fluyen continuamente
- el observador recibe cada valor según aparece
- no hace falta esperar a que termine todo el flujo

### Tipos de notificación

Los observables disponen de tres tipos de notificaciones:

- `next`
- `error`
- `complete`

## Notificación `next`

- es la más común
- representa la entrega de un nuevo valor
- puede ocurrir varias veces
- cada emisión llama a la función `next` del observador

## Notificación `error`

- indica que ha ocurrido un error
- solo puede ocurrir una vez por observable
- cuando aparece, se llama a la función `error`

## Notificación `complete`

- indica que el observable ha terminado
- solo puede ocurrir una vez
- cuando aparece, se llama a la función `complete`

## 1.4. Patrón de diseño Observer

El patrón Observer define una dependencia uno a muchos entre objetos.

### Elementos del patrón

- sujeto (`Subject`)
- observadores (`Observers`)
- notificación cuando cambia el estado

### Funcionamiento

- el sujeto mantiene una lista de observadores
- cuando el sujeto cambia, notifica a todos
- los observadores reaccionan al cambio

### Ventajas

- acoplamiento débil
- flexibilidad
- escalabilidad

### Desventajas

- mayor complejidad
- posible sobrecarga si hay muchos observadores o muchos cambios

## 2. Observables en Angular

En Angular los observables pueden usarse de dos maneras principales.

### 1. Usar observables ya implementados por Angular

Ejemplos típicos:

- `HttpClient`
- `Router`
- librerías UI como Angular Material o Ng-bootstrap

### 2. Crear observables propios

Esto resulta útil cuando queremos mantener comunicación entre componentes que no
tienen relación directa de padre-hijo.

## 2.1. Creación de observables

Para trabajar con observables en Angular se usa la librería RxJS.

### Clases para crear el `subject`

La teoría destaca dos:

- `Subject`
- `BehaviorSubject`

## `Subject`

Es un tipo de observable que permite emitir valores y recibir notificaciones de nuevos
valores o eventos.

Ejemplo:

```ts
import { Subject } from 'rxjs';

mensaje: Subject<string> = new Subject();
```

## `BehaviorSubject`

Es un tipo especial de `Subject` que además guarda un valor actual.

Cuando un nuevo observador se suscribe, recibe el último valor emitido.

Ejemplo:

```ts
import { BehaviorSubject } from 'rxjs';

mensaje: BehaviorSubject<string> = new BehaviorSubject('Valor inicial');
```

### Diferencias entre ambos

#### `Subject`

- no guarda un valor actual
- un nuevo observador solo recibe valores emitidos después de suscribirse
- no puede inicializarse con un valor

#### `BehaviorSubject`

- guarda un valor actual
- un nuevo observador recibe el último valor emitido
- puede inicializarse con un valor

### Elección indicada en la teoría

La teoría usa `BehaviorSubject` porque permite partir de un valor inicial.

## Observable derivado del `subject`

Para crear el observable a partir del `subject`:

```ts
mensaje$: Observable<string> = this.mensaje.asObservable();
```

## Suscripción tipada

La suscripción se guarda con tipo `Subscription`:

```ts
miSuscripcion!: Subscription;
```

El operador `!` se usa para indicar que la variable tendrá valor antes de usarse.

## 2.2. Emisión de información

Una vez creado el observable, se pueden emitir valores mediante `next`.

Ejemplo:

```ts
emitir() {
  console.log('Emitimos valores por el observable');
  this.mensaje.next('Valor 1');
  this.mensaje.next('Valor 2');
  this.mensaje.next('Valor n');
}
```

Cada vez que se llame a este método, cualquier observador suscrito recibirá esos
valores.

## 2.3. Suscripción a observables

Para suscribirse se usa `subscribe`.

La teoría recomienda usar la forma con objeto para gestionar los tres estados:

```ts
subscribir() {
  console.log('Nos suscribimos. Recibiremos todos los datos que se emitan');
  this.miSuscripcion = this.mensaje$.subscribe({
    next: dato => console.log(dato),
    error: error => console.error(error),
    complete: () => console.log('Observable completado')
  });
}
```

### Forma antigua

La teoría también muestra la forma antigua con funciones separadas:

```ts
subscribirDeprecated() {
  console.log('Nos suscribimos. Recibiremos todos los datos que se emitan');
  this.miSuscripcion = this.mensaje$.subscribe(
    dato => console.log(dato),
    error => console.error(error),
    () => console.log('Observable completado')
  );
}
```

Esa sintaxis sigue existiendo, pero la teoría indica que está deprecada.

### Efecto de suscribirse

Desde el momento en que existe la suscripción:

- el observador ya recibe emisiones futuras
- con `BehaviorSubject`, además recibe el último valor disponible

## 2.4. Cancelación de una suscripción

Un observador puede cancelar la suscripción en cualquier momento.

Ejemplo:

```ts
cancelar() {
  this.miSuscripcion.unsubscribe();
  console.log('Cancelacion realizada. No se reciben mas datos');
}
```

Después de hacer `unsubscribe`, ese observador deja de recibir valores, aunque otros
observadores aún suscritos sí pueden seguir recibiéndolos.

## 2.5. Finalización del observable

El observable puede finalizar completamente con `complete`.

Ejemplo:

```ts
finalizar() {
  this.mensaje.complete();
  console.log('Observable completado. Ya no se emiten mas datos');
}
```

### Efecto

- deja de emitir información
- los observadores reciben la notificación `complete`
- no se emitirán más valores después

## Observables en objetos de Angular

La teoría recuerda que más adelante los observables se usarán sobre objetos ya
existentes de Angular, como:

- `Router`
- `HttpClient`

En esos casos lo habitual será suscribirse a observables ya facilitados por Angular.

## 3. Comunicación entre componentes con observables

La teoría indica que tiene poco sentido observar un `subject` definido dentro del mismo
componente si lo que se busca es comunicación real entre componentes.

### Recomendación principal

Usar un servicio para que varios componentes compartan el mismo `subject` y el
mismo observable.

## Recomendaciones en el servicio

La teoría recomienda:

- `subject` privado para que solo el servicio pueda modificarlo
- observable público y solo de lectura para que los componentes solo puedan
  suscribirse
- métodos en el servicio para notificar cambios o completar el flujo

## Recomendaciones en los componentes

Los componentes:

- inyectan el servicio
- se suscriben al observable del servicio
- pueden notificar cambios a través de métodos del servicio

### Buenas prácticas indicadas

- suscribirse en `ngOnInit`
- cancelar la suscripción en `ngOnDestroy`

## Fugas de memoria

Si un componente se suscribe a un observable y no cancela la suscripción antes de
ser destruido:

1. el observable puede seguir activo
2. el callback de la suscripción mantiene referencia al componente
3. el recolector de basura no puede liberar esa memoria

Eso produce una fuga de memoria (`memory leak`).

### Consecuencia

Si el usuario navega por muchos componentes que no cancelan sus suscripciones:

- el rendimiento de la aplicación se degrada

## Resumen operativo para este proyecto

Para `PREPARACION-EXAMEN`, este bloque fija estas bases:

- usar observables para flujos asíncronos y comunicación reactiva
- preferir `BehaviorSubject` cuando haga falta un valor inicial compartido
- exponer observables públicos y mantener el `subject` privado en servicios
- suscribirse de forma explícita y cancelar cuando corresponda
- evitar fugas de memoria con `unsubscribe` en `ngOnDestroy`
