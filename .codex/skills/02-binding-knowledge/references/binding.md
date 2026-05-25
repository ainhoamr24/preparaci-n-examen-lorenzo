# Tema 03 - Data Binding

Fuente: `teoria.pdf`, páginas 14 a 23.

## 1. Data Binding

El `data binding` es un concepto fundamental en Angular que conecta de forma
dinámica los datos del componente con la vista HTML.

### Función principal

- mantener sincronizados el controlador y la plantilla
- reflejar automáticamente cambios del modelo en la vista
- responder a interacciones del usuario sin manipulación manual del DOM

### Direcciones del flujo de datos

Los enlaces de datos se agrupan según la dirección del flujo:

- del modelo hacia la vista
- de la vista hacia el modelo
- bidireccional: vista hacia modelo y modelo hacia vista

## 2. Interpolación

La interpolación permite sustituir una expresión por un valor de tipo `string`
dentro de la plantilla.

### Sintaxis

```html
{{ titulo }}
```

Angular evalúa la expresión escrita entre `{{ }}` e intenta sustituirla por el valor
de la propiedad del componente.

### Características

- es un enlace unidireccional
- va del controlador a la vista
- se usa para mostrar datos en texto

### Ejemplo

En el controlador:

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo: string = 'Data Binding';
}
```

En la vista:

```html
<h2>Estamos viendo el {{ titulo }}</h2>
```

### Idea importante

La interpolación solo muestra datos; no permite modificar directamente el valor de
la propiedad del componente desde la vista.

## 3. Property Binding

El `property binding` permite asignar valores del controlador a propiedades de
elementos HTML o directivas.

### Sintaxis

```html
[propiedad]="variable"
```

Es un enlace unidireccional del controlador a la vista.

### Ejemplo con `src`

En el HTML:

```html
<img [src]="imagen">
```

En el controlador:

```ts
export class AppComponent {
  titulo: string = 'Data Binding';
  imagen: string = '../assets/logo.png';
}
```

Aquí se asigna a la propiedad `src` el valor almacenado en la variable `imagen`.

### Ejemplo con `disabled`

En el HTML:

```html
<button [disabled]="desactivado">Boton</button>
```

En el controlador:

```ts
desactivado: boolean = false;
```

Si cambia el valor de `desactivado`, Angular actualiza el estado del botón.

### Cambio dinámico con `ngOnInit`

```ts
ngOnInit() {
  setTimeout(() => {
    console.log('Desactivamos boton...');
    this.desactivado = true;
  }, 5000);
}
```

Cuando la variable pasa a `true`, el botón queda desactivado.

### Uso de expresiones

El `property binding` también permite expresiones, por ejemplo para clases CSS:

```css
.activado { background-color: green; }
.desactivado { background-color: red; }
```

```html
<button
  [class]="desactivado ? 'desactivado' : 'activado'"
  [disabled]="desactivado">
  Boton
</button>
```

En este caso se usa un operador ternario para asignar una clase u otra según el
estado del botón.

### Nota sobre SSR

La teoría indica que, para evitar problemas con el DOM en proyectos con SSR, se
puede añadir en el decorador del componente:

```ts
host: { ngSkipHydration: 'true' }
```

Ejemplo:

```ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  host: { ngSkipHydration: 'true' },
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

### Observación

Las clases y estilos también suelen manejarse con `ngClass` y `ngStyle`, aunque
la teoría muestra que también pueden resolverse mediante `property binding`.

## 4. Event Binding

El `event binding` permite pasar información desde la vista hacia el controlador.

### Función principal

- escuchar acciones del usuario
- ejecutar métodos del componente
- responder a eventos como `click`, teclado o ratón

### Sintaxis

Se usa el evento entre paréntesis:

```html
(click)="onSave()"
```

### Ejemplo básico

En el HTML:

```html
<button (click)="onSave()">Save</button>
```

En el controlador:

```ts
onSave() {
  alert('Has pulsado en grabar...');
}
```

Cada vez que se hace clic, se ejecuta el método del componente.

### Paso de parámetros

También se pueden pasar argumentos:

```html
<button (click)="onSaveCliente('Pepe')">Save Cliente</button>
```

```ts
onSaveCliente(cliente: string) {
  alert('Grabamos a ' + cliente);
}
```

### Uso de `$event`

También se puede pasar el objeto del evento:

```html
<button (click)="onSaveEvent($event)">Save Event</button>
```

```ts
onSaveEvent($event: Event) {
  console.log($event);
}
```

Esto permite acceder a toda la información del evento generado.

## 5. Two Way Data Binding

El `two way data binding` permite sincronización bidireccional entre la vista y el
controlador.

### Cómo funciona

Combina:

- `property binding`
- `event binding`

Su sintaxis es la llamada `banana in a box`:

```html
[()]
```

### Uso habitual

Se usa sobre todo en formularios con la directiva `ngModel`.

### Ejemplo

En el HTML:

```html
<input type="text" [(ngModel)]="nombre">
```

En el TypeScript:

```ts
nombre: string = 'Pepe Perez';
```

Esto enlaza el valor del campo con la propiedad `nombre`.

### Qué ocurre

- inicialmente el input muestra el valor de `nombre`
- al escribir en el input, se actualiza la propiedad del componente
- si cambia la propiedad, cambia también el valor mostrado en el input

## 6. Importación de `FormsModule`

`ngModel` no funciona si Angular no reconoce la directiva.

Para usarla, hay que importar `FormsModule` y añadirlo al array `imports` del
componente.

### Idea clave en este proyecto

Como la aplicación usa componentes `standalone`, la importación debe hacerse en
el propio componente que use `ngModel`.

## 7. Comprobación del enlace bidireccional

La teoría propone interpolar también la misma variable en el HTML para ver el
cambio en ambas direcciones.

Ejemplo:

```html
<input type="text" [(ngModel)]="nombre">
<h3>{{ nombre }}</h3>
```

### Comportamiento esperado

- al inicio se verá `Pepe Perez` en la interpolación y en el input
- al modificar el input, cambiará también la variable mostrada por interpolación

Esto demuestra:

- enlace del controlador a la vista
- enlace de la vista al controlador

## 8. Cambio de valor desde un botón

La teoría añade un ejemplo en el que un botón cambia el valor de la variable.

En el HTML:

```html
<input type="text" [(ngModel)]="nombre">
<h3>{{ nombre }}</h3>
<button (click)="cambiarValor()">Cambiar valor</button>
```

En el TypeScript:

```ts
cambiarValor() {
  let nuevoNombre: string | null = prompt('Nuevo valor');
  this.nombre = nuevoNombre == null ? this.nombre : nuevoNombre;
}
```

### Observación de tipado

La variable `nuevoNombre` es `string | null` porque `prompt()` puede devolver:

- un `string` si el usuario confirma
- `null` si cancela

Como `nombre` es de tipo `string`, antes de asignar el valor hay que comprobar
que no sea `null`.

## Resumen operativo para este proyecto

Para `PREPARACION-EXAMEN`, este bloque fija estas bases:

- usar interpolación para mostrar texto
- usar `property binding` para valores de propiedades HTML
- usar `event binding` para responder a acciones del usuario
- usar `[(ngModel)]` cuando se necesite sincronización bidireccional
- importar `FormsModule` cuando se use `ngModel`
- mantener bindings sencillos, legibles y coherentes con Angular `standalone`
