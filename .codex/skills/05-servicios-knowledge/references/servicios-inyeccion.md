# Tema 06 - Servicios e Inyección de Dependencias

Fuente: `teoria.pdf`, páginas 52 a 62.

## 1. Los servicios

Los componentes de una aplicación Angular deben presentar datos y permitir la
interacción del usuario, pero no deberían asumir la responsabilidad de consultar o
almacenar esos datos.

### Responsabilidad de un servicio

El trabajo de un servicio es controlar la información:

- obtenerla
- almacenarla
- actualizarla
- compartirla con componentes

### Idea clave

Un servicio en Angular es una clase, normalmente decorada con `@Injectable`, que
se integra con los componentes mediante el inyector de dependencias.

### Patrón singleton

Los servicios se comportan como objetos singleton:

- no se crean dos objetos distintos del mismo servicio dentro del mismo ámbito
- si varios componentes usan el mismo servicio, comparten la misma instancia
- si un componente modifica la información del servicio, los demás pueden ver ese
  cambio

### Cuándo usar un servicio

La teoría resume que un servicio debe usarse cuando:

- queremos consultar datos para la aplicación
- queremos almacenar información, remota o local
- queremos compartir datos entre componentes
- queremos encapsular lógica de acceso y manipulación de datos

## Creación de servicios

La teoría propone crear una carpeta específica para servicios.

Para crear un servicio con Angular CLI:

```bash
ng g s /Services/articulos
```

Angular genera un esqueleto inicial como este:

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  constructor() {}
}
```

### Qué aporta `@Injectable`

El decorador `@Injectable` permite que Angular pueda inyectar el servicio en
componentes u otros servicios.

## Ejemplo de servicio de artículos

La teoría propone un servicio que manipule los datos de artículos de la aplicación.

### Objetivo del servicio

- leer la colección de artículos
- obtener un artículo concreto
- insertar nuevos artículos
- actualizar artículos existentes
- eliminar artículos

### Código de ejemplo

```ts
import { Injectable } from '@angular/core';
import { ARTICULOS, Articulo } from '../Modelos/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  constructor() {}

  articulos: Articulo[] = ARTICULOS;

  getArticulos() {
    return this.articulos;
  }

  getArticulo(id: string) {
    let pos = this.articulos.findIndex(a => a.id == id);
    return this.articulos[pos];
  }

  postArticulo(articulo: Articulo) {
    let pos = this.articulos.findIndex(a => a.id == articulo.id);
    if (pos == -1) {
      this.articulos.push(articulo);
    } else {
      alert('Ya existe un artículo con ese id');
    }
  }

  putArticulo(articulo: Articulo) {
    let pos = this.articulos.findIndex(a => a.id == articulo.id);
    this.articulos[pos] = articulo;
  }

  deleteArticulo(id: string) {
    let pos = this.articulos.findIndex(a => a.id == id);
    this.articulos.splice(pos, 1);
  }
}
```

### Observación

La teoría lo plantea como una API tipo REST simulada con métodos:

- `getArticulos`
- `getArticulo`
- `postArticulo`
- `putArticulo`
- `deleteArticulo`

## 2. Inyección de dependencias

Una vez creado el servicio, los componentes deben poder usarlo. Para eso Angular
utiliza la inyección de dependencias.

### Definición

La inyección de dependencias es una pieza clave del framework que permite
proporcionar a componentes y otras clases los servicios que necesitan.

### Elementos implicados

- `@Injectable`: marca clases inyectables
- inyector: crea y reutiliza dependencias
- proveedor: indica cómo obtener o crear la dependencia

### Papel del inyector

Angular crea un inyector principal para la aplicación en el arranque y puede crear
otros adicionales si hace falta.

El inyector:

- crea dependencias
- mantiene un contenedor de instancias
- reutiliza instancias cuando es posible

### Papel del proveedor

Un proveedor es el objeto que indica al inyector cómo obtener o crear una
dependencia.

En servicios, normalmente el proveedor es la propia clase del servicio.

## Inyectar un servicio en un componente

La teoría plantea un componente `articulos`:

```bash
ng g c /Components/articulos
```

Para usar el servicio, hay que importarlo y pedirlo en el constructor:

```ts
import { ArticulosService } from '../../Services/articulos.service';

constructor(private miServicio: ArticulosService) {}
```

### Qué hace Angular

Cuando Angular detecta que el componente depende de un servicio:

- comprueba si ya existe una instancia
- si no existe, la crea con el proveedor registrado
- la guarda en el inyector
- la pasa al constructor del componente

### Consecuencia práctica

No hace falta crear manualmente una variable del tipo servicio; Angular la resuelve
en el constructor.

## Uso del servicio en `ngOnInit`

La teoría indica que es habitual cargar datos iniciales del servicio en `ngOnInit`.

### Ejemplo

```ts
import { Component } from '@angular/core';
import { ArticulosService } from '../../Services/articulos.service';
import { Articulo } from '../../Modelos/articulo';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent {
  articulos!: Articulo[];

  constructor(private miServicio: ArticulosService) {}

  ngOnInit() {
    this.articulos = this.miServicio.getArticulos();
  }
}
```

### `private` y `public`

La variable inyectada en el constructor debe declararse con ámbito `private` o
`public`.

#### Si se usa `private`

- el servicio se usa solo en el controlador del componente
- no puede interpolarse directamente desde la plantilla

#### Si se usa `public`

- el servicio puede usarse tanto en el controlador como en la plantilla

## Ejemplo de plantilla consumiendo datos del servicio

La teoría usa una tabla y la sintaxis moderna `@for`:

```html
<h3>Listado de articulos</h3>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Precio</th>
      <th scope="col">Unidades</th>
    </tr>
  </thead>
  <tbody>
    @for (articulo of articulos; track articulo.id) {
      <tr>
        <td>{{ articulo.id }}</td>
        <td>{{ articulo.nombre }}</td>
        <td>{{ articulo.descripcion }}</td>
        <td>{{ articulo.precio }}</td>
        <td>{{ articulo.unidades }}</td>
      </tr>
    } @empty {
      <tr>
        <td colspan="5">
          <div class="alert alert-danger">No hay articulos</div>
        </td>
      </tr>
    }
  </tbody>
</table>
```

## 3. Proporcionar servicios

Todo servicio que vaya a usarse debe registrar al menos un proveedor. Según dónde
se registre, cambia el ámbito del servicio.

La teoría distingue tres niveles:

- metadatos del servicio con `@Injectable()`
- metadatos de `@Component()`
- metadatos de `@NgModule()`

## Registro en `@Injectable()`

Es la forma habitual y la que Angular CLI genera por defecto:

```ts
@Injectable({
  providedIn: 'root'
})
```

### Qué implica `providedIn: 'root'`

- Angular crea una única instancia compartida
- esa instancia puede inyectarse en cualquier clase que la solicite
- Angular puede optimizar la aplicación eliminando el servicio si no se usa

### Qué ocurre si se elimina

Si el servicio no tiene inyector registrado, el componente no podrá acceder a él y
aparecerá un error.

## Registro en `@Component()`

También puede registrarse en la propiedad `providers` del componente:

```ts
@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  providers: [ArticulosService],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
```

### Efecto

Cuando el proveedor se registra en el componente:

- cada nueva instancia del componente obtiene una nueva instancia del servicio

## Registro en `@NgModule()`

La teoría también explica el caso clásico de módulos:

```ts
@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ArticulosService],
  bootstrap: [AppComponent]
})
```

### Efecto

Cuando se registra en un módulo:

- la misma instancia del servicio está disponible para todos los componentes de ese
  módulo

## Resumen operativo para este proyecto

Para `PREPARACION-EXAMEN`, este bloque fija estas bases:

- usar servicios para encapsular acceso y manipulación de datos
- no cargar esa responsabilidad en componentes
- inyectar servicios mediante constructor
- aprovechar el patrón singleton para compartir estado
- priorizar `providedIn: 'root'` en un proyecto Angular moderno `standalone`
