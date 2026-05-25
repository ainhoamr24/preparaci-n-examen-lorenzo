# Tema 05 - Comunicación entre componentes

Fuente: `teoria.pdf`, páginas 39 a 51.

## 1. Anidamiento de componentes

Ya se ha visto que un componente puede llamar a otro incluyendo la etiqueta de su
selector. Eso significa incluir un componente dentro de otro.

### Idea principal

- un componente padre puede renderizar un componente hijo
- este caso no implica necesariamente intercambio de datos
- es la base para composiciones de interfaz más complejas

### Ejemplo con `header`

La teoría propone crear un componente `header`:

```bash
ng g c Components/header
```

En el HTML del hijo:

```html
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <h2 class="text-danger">DWEC (Tienda on line con Angular)</h2>
  </a>
  <img src="assets/cart.png" height="60px">
</nav>
```

En el TypeScript del hijo:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
```

En el HTML del padre:

```html
<app-header></app-header>
```

En el TypeScript del padre hay que importar el componente hijo:

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {}
```

### Conclusión

Este es un anidamiento simple: el padre llama al hijo, pero no hay comunicación de
datos entre ellos.

## 2. Comunicación padre-hijo

En este caso el padre llama al hijo y le pasa información para que el hijo la use.

### Mecanismo usado

- `property binding` en la llamada del padre
- decorador `@Input` en el hijo

### Sintaxis

En el padre:

```html
<etiqueta-hijo [dato]="valor"></etiqueta-hijo>
```

En el hijo:

```ts
@Input() dato!: tipoDato;
```

### Qué hace `@Input`

Permite recoger en el componente hijo el valor que el padre envía.

La teoría usa `!` para evitar tener que asignar valor inicial y suprimir el error de
propiedad no inicializada.

### Ejemplo con un número fijo

En el HTML del padre:

```html
<h3>Componente Padre</h3>
<app-hijo [dato]="100"></app-hijo>
```

En el TypeScript del hijo:

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() dato!: number;
}
```

En el HTML del hijo:

```html
<h3>Componente Hijo</h3>
dato desde el padre: {{ dato }}
```

### Ejemplo con variable del padre

La teoría amplía el ejemplo para pasar una variable dinámica:

En el TypeScript del padre:

```ts
import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  variable: number = 0;

  incrementar() {
    this.variable++;
  }
}
```

En el HTML del padre:

```html
<h3>Componente Padre</h3>

<button class="btn btn-primary" (click)="incrementar()">Incrementar</button>

<app-hijo [dato]="variable"></app-hijo>
```

### Resultado

Cada vez que el padre cambia la variable, el hijo recibe el nuevo valor y actualiza
su vista.

## 3. Comunicación hijo-padre

La comunicación hijo-padre es más compleja porque el hijo no llama directamente al
padre ni mantiene una referencia explícita a él.

### Mecanismo usado

Angular lo resuelve con:

- `event binding` en el padre
- decorador `@Output` en el hijo
- `EventEmitter` en el hijo

### Sintaxis

En el padre:

```html
<etiqueta-hijo (eventoPersonalizado)="metodoPadre($event)"></etiqueta-hijo>
```

### Significado

- `eventoPersonalizado`: evento creado por el hijo
- `metodoPadre($event)`: método del padre que se ejecuta al recibir el evento
- `$event`: dato que el hijo emite

### Definición en el hijo

Primero se importan `Output` y `EventEmitter`:

```ts
import { EventEmitter, Output } from '@angular/core';
```

Después se define el evento:

```ts
@Output() eventoPersonalizado = new EventEmitter<string>();
```

Y en un método del hijo se emite:

```ts
metodoHijo(value: string) {
  this.eventoPersonalizado.emit(value);
}
```

### Recepción en el padre

```ts
metodoPadre(value: string) {
  alert(value);
}
```

## Ejemplo completo hijo-padre

La teoría modifica el ejemplo anterior para que el hijo mande un mensaje al padre.

### TypeScript del hijo

```ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() dato!: number;
  @Output() mandaMensaje = new EventEmitter<string>();

  mensaje() {
    let mensaje: string | null;
    mensaje = prompt('Dime mensaje');
    if (mensaje == null) {
      mensaje = '';
    }
    this.mandaMensaje.emit(mensaje);
  }
}
```

### HTML del hijo

```html
<h3>Componente Hijo</h3>
dato desde el padre: {{ dato }}
<br>
<button class="btn btn-success" (click)="mensaje()">Mandar mensaje</button>
```

### HTML del padre

```html
<h3>Componente Padre</h3>
Mensaje desde el hijo: {{ mensaje }}
<br>

<button class="btn btn-primary" (click)="incrementar()">Incrementar</button>

<app-hijo [dato]="variable" (mandaMensaje)="muestraMensaje($event)">
</app-hijo>
```

### TypeScript del padre

```ts
import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  variable: number = 0;
  mensaje: string = '';

  incrementar() {
    this.variable++;
  }

  muestraMensaje(dato: string) {
    this.mensaje = dato;
  }
}
```

### Resultado

Cuando el hijo emite `mandaMensaje`, el padre ejecuta `muestraMensaje` y actualiza
su propio estado.

## 4. Comunicación bidireccional

La teoría indica que es muy habitual combinar ambos mecanismos:

- `@Input` para mandar datos del padre al hijo
- `@Output` con `EventEmitter` para devolver eventos del hijo al padre

Esto se usa mucho cuando el padre muestra una colección y cada hijo representa un
elemento individual.

## Ejemplo con colección y borrado

La teoría plantea un caso de artículos renderizados como tarjetas. El padre itera los
artículos y el hijo emite un evento cuando quiere borrar uno.

### Idea clave

El hijo no borra directamente el dato del padre. Solo avisa mediante un evento.

### Componentes creados

```bash
ng g c /Components/cards
ng g c /Components/card
```

### HTML del padre `cards`

```html
<h2>Comunicación Padre-Hijo con @for Bidireccional</h2>

<div id="contenedor" class="row row-cols-1 row-cols-md-6 g-4">
  @for (articulo of articulos; track articulo.id) {
    <app-card [articulo]="articulo" (borrarArticulo)="borrar($event)">
    </app-card>
  } @empty {
    <div class="alert alert-danger" role="alert">
      No hay articulos
    </div>
  }
</div>
```

### TypeScript del padre `cards`

```ts
import { Component } from '@angular/core';
import { ARTICULOS, Articulo } from '../../Modelos/articulo';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  articulos: Articulo[] = ARTICULOS;

  borrar(id: string) {
    let pos = this.articulos.findIndex(a => a.id == id);
    this.articulos.splice(pos, 1);
  }
}
```

### HTML del hijo `card`

```html
<div class="card">
  <img src="assets/{{articulo.id}}.jpg">
  <div class="card-body">
    <h5 class="card-title">{{ articulo.nombre }}</h5>
    <p class="card-text">{{ articulo.descripcion }}</p>
    <b><p class="card-text text-center">{{ articulo.precio }}</p></b>
    <div class="card-text text-center">
      <button (click)="borrar(articulo.id)" class="btn btn-danger">
        Borrar
      </button>
    </div>
  </div>
</div>
```

### TypeScript del hijo `card`

```ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articulo } from '../../Modelos/articulo';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() articulo!: Articulo;
  @Output() borrarArticulo = new EventEmitter<string>();

  borrar(id: string) {
    this.borrarArticulo.emit(id);
  }
}
```

### Resultado

- el padre pasa cada artículo al hijo con `@Input`
- el hijo emite `borrarArticulo` con el `id`
- el padre recibe el evento y elimina el artículo

## Resumen operativo para este proyecto

Para `PREPARACION-EXAMEN`, este bloque fija estas bases:

- usar anidamiento para componer interfaz
- usar `@Input` para flujo padre-hijo
- usar `@Output` y `EventEmitter` para flujo hijo-padre
- combinar ambos para comunicación bidireccional
- mantener el estado principal en el padre cuando el hijo solo representa datos o
  acciones sobre ellos
