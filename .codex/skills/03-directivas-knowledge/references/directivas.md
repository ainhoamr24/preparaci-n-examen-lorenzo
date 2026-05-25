# Tema 04 - Directivas

Fuente: `teoria.pdf`, páginas 24 a 38.

## 1. Directivas

En Angular es muy habitual trabajar con directivas porque son fáciles de leer,
rápidas de añadir y aportan funcionalidad directamente en la plantilla HTML.

### Qué son

Las directivas son elementos que se aplican al código HTML como si fueran
atributos para añadir nueva funcionalidad a las etiquetas.

### Qué permiten hacer

- modificar la estructura del DOM
- modificar la apariencia visual
- añadir comportamiento a elementos del template

### Idea clave

Las directivas son instrucciones interpretadas por Angular en la plantilla. Junto con
los componentes, son elementos clave para renderizar vistas.

## 2. Tipos de directivas en Angular

Cada directiva tiene un nombre y una funcionalidad concreta. Puede usarse en un
elemento, atributo, componente o clase.

Las directivas se dividen en:

- directivas de componente
- directivas de atributo
- directivas estructurales

## 2.1. Directivas de componente

Son directivas especiales para crear bloques reutilizables con:

- plantilla HTML
- lógica propia
- estilos propios

Los componentes son directivas con template. Se definen con el decorador
`@Component`.

### Subtipos mencionados en la teoría

- directivas de Angular como `@Component` o `@Module`
- directivas personalizadas creadas por el desarrollador

### Creación de directivas personalizadas

La teoría indica el uso de CLI para crearlas:

```bash
ng g directives nombre
```

## 2.2. Directivas de atributo

Se aplican como atributos a elementos HTML.

### Qué hacen

Modifican el DOM, pero no crean ni destruyen el elemento HTML al que se aplican.

### Ejemplos

- `[ngStyle]`: cambia propiedades de estilo
- `[ngClass]`: añade clases dinámicamente
- `[ngModel]`: permite `two way data binding`

## 2.3. Directivas estructurales

Son directivas que cambian el DOM y afectan a la presencia de elementos HTML.

### Qué permiten

- mostrar u ocultar elementos
- iterar colecciones
- cambiar el contenido renderizado según condiciones

### Directivas incluidas

- `@if`
- `@switch`
- `@for`

### Cambio a partir de Angular 17

Desde Angular 17 aparece una nueva sintaxis de control de flujo más cercana a
JavaScript y basada en bloques.

## 2.3.1. `@if`

Ambas directivas permiten mostrar u ocultar elementos del DOM según una
condición.

Son equivalentes a una condicional simple o doble de JavaScript.

### Sintaxis básica

```html
@if (condicion) {
  HTML
}
```

### Ejemplo simple

En el controlador:

```ts
isLogged: boolean = true;
```

En la plantilla:

```html
<h2>Directiva @if</h2>

@if (isLogged) {
  <div class="alert alert-danger" role="alert">
    A simple primary alert-check it out!
  </div>
}
```

Si `isLogged` vale `true`, el `div` se renderiza. Si vale `false`, no aparece.

### Uso con `@else`

Para manejar el caso verdadero y falso se usa `@else`.

```html
@if (isLogged) {
  <div class="alert alert-success" role="alert">
    El usuario esta logueado
  </div>
} @else {
  <div class="alert alert-danger" role="alert">
    El usuario no esta logueado
  </div>
}
```

### Cambio de estado con botones

En el HTML:

```html
<button class="btn btn-primary" (click)="logIn()">Login</button>
<button class="btn btn-danger" (click)="logOut()">No Login</button>
```

En el TypeScript:

```ts
logIn() {
  alert('Simulamos que está logueado...');
  this.isLogged = true;
}

logOut() {
  alert('Simulamos que no está logueado...');
  this.isLogged = false;
}
```

Cada clic cambia la variable y Angular renderiza el bloque correspondiente.

Desde Angular 17 existe una sintaxis de bloques más parecida a JavaScript.

### Sintaxis

```html
@if (condicion) {
  HTML true
} @else {
  HTML false
}
```

### Ventaja principal

- no requiere `ng-template`
- la sintaxis es más cercana a JavaScript

### Ejemplo

```html
@if (isLogged) {
  <div class="alert alert-success" role="alert">
    El usuario esta logueado
  </div>
} @else {
  <div class="alert alert-danger" role="alert">
    El usuario no esta logueado
  </div>
}
```

## 2.3.2. `@switch`

Permiten mostrar un bloque u otro según el valor de una expresión.

Equivalen conceptualmente a un `switch` de JavaScript.

### Estructura

```html
@switch(variable) {
  @case(valor1) {
    HTML 1
  }
  @case(valor2) {
    HTML 2
  }
  @case(valorn) {
    HTML n
  }
  @default {
    HTML otro valor
  }
}
```

### Ejemplo

```html
@switch(numero) {
  @case(1) {
    <div>Uno</div>
  }
  @case(2) {
    <div>Dos</div>
  }
  @case(3) {
    <div>Tres</div>
  }
  @default {
    <div class="alert alert-danger">Fuera de [1-3]</div>
  }
}
```

Si cambia `numero`, Angular muestra el caso correspondiente o el bloque por
defecto.

### Ejemplo combinado con `ngModel`

```html
Numero <input type="number" size="3" [(ngModel)]="numero" id="number">

@switch(numero) {
  @case(1) {
    <div>Uno</div>
  }
  @case(2) {
    <div>Dos</div>
  }
  @case(3) {
    <div>Tres</div>
  }
  @default {
    <div class="alert alert-danger">Fuera de [1-3]</div>
  }
}
```

Así, al cambiar el valor del input, cambia el resultado renderizado.

Desde Angular 17, esta estructura usa una sintaxis de bloques más cercana a
JavaScript.

### Sintaxis

```html
@switch(variable) {
  @case(valor1) {
    HTML 1
  }
  @case(valor2) {
    HTML 2
  }
  @case(valorn) {
    HTML n
  }
  @default {
    HTML otro valor
  }
}
```

### Ejemplo

```html
@switch(numero) {
  @case(1) {
    <div>Uno</div>
  }
  @case(2) {
    <div>Dos</div>
  }
  @case(3) {
    <div>Tres</div>
  }
  @default {
    <div class="alert alert-danger">Fuera de [1-3]</div>
  }
}
```

## 2.3.3. `@for`

Son directivas estructurales que permiten iterar una colección de datos y
renderizar HTML para cada elemento.

Equivalen a los bucles de JavaScript.

### Funcionamiento

1. definir una colección de datos
2. aplicar `ngFor` al elemento
3. indicar la colección a iterar
4. definir el bloque HTML por cada elemento

### Estructura

```html
@for (item of items; track item.id) {
  <elemento>HTML {{ item }}</elemento>
}
```

### Ejemplo con artículos

En el TypeScript:

```ts
import { Component } from '@angular/core';
import { ARTICULOS } from '../Modelos/articulo';

@Component({
  selector: 'app-ejemplo-for',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo-for.component.html',
  styleUrl: './ejemplo-for.component.css'
})
export class EjemploForComponent {
  articulos = ARTICULOS;
}
```

En el HTML:

```html
<ul>
  @for (articulo of articulos; track articulo.id) {
    <li>{{ articulo.nombre }}</li>
  }
</ul>
```

### Caso de array vacío

Si el array está vacío:

```ts
articulos2: Articulo[] = [];
```

y se usa:

```html
<ul>
  @for (articulo of articulos2; track articulo.id) {
    <li>{{ articulo.nombre }}</li>
  }
</ul>
```

no se mostrará nada.

### Caso vacío con sintaxis moderna

Con control de flujo moderno, el caso vacío se resuelve mejor con `@empty`.

## Uso de `ng-container`

Para evitar ese problema Angular proporciona `ng-container`.

### Qué es

Es un contenedor especial que no introduce HTML adicional en el DOM.

### Ejemplo

```html
<ul>
  @for (articulo of articulos2; track articulo.id) {
    <ng-container>
      <li>{{ articulo.nombre }}</li>
    </ng-container>
  } @empty {
    <div class="alert alert-danger">No hay articulos</div>
  }
</ul>
```

Así se puede envolver contenido sin añadir nodos extra al DOM.

Desde Angular 17 aparece la sintaxis `@for` con cambios importantes.

### Características

- sintaxis de bloques más cercana a JavaScript
- uso obligatorio de `track`
- soporte de `@empty`

### `track`

La propiedad `track` permite identificar cada elemento de forma única y mejora el
rendimiento en la diferenciación de elementos cuando hay cambios.

### `@empty`

Permite definir HTML específico cuando la colección está vacía.

### Estructura

```html
@for (item of items; track item.id) {
  <elemento>{{ item }}</elemento>
}
@empty {
  HTML items vacio
}
```

### Ejemplo

```html
<ul>
  @for (articulo of articulos; track articulo.id) {
    <li>{{ articulo.nombre }}</li>
  }
  @empty {
    <div class="alert alert-danger">No hay articulos</div>
  }
</ul>
```

Con esta sintaxis se resuelven en una sola estructura tanto la iteración como el
caso de colección vacía.

## Resumen operativo para este proyecto

Para `PREPARACION-EXAMEN`, este bloque fija estas bases:

- usar directivas para controlar estructura y comportamiento en plantilla
- usar directivas de atributo para estilos, clases y `ngModel`
- usar directivas estructurales para condiciones, selección e iteración
- usar `ng-container` para combinar estructuras sin añadir nodos al DOM
- usar la sintaxis moderna `@if`, `@switch` y `@for` de Angular 17
