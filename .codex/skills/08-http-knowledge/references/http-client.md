# Tema 09 - Peticiones HTTP

Fuente: `teoria.pdf`, páginas 95 a 116.

## 1. Introducción

La mayoría de las aplicaciones frontend necesitan comunicarse con un servidor
mediante HTTP para:

- descargar datos
- enviar información
- acceder a servicios backend

### `fetch` en Angular

Angular puede usar `fetch` igual que React o Vue, porque `fetch` es una API nativa
de JavaScript.

### Ventaja de `fetch`

- no requiere importar módulos externos
- puede usarse directamente en TypeScript

### Ejemplo con `fetch`

La teoría propone un componente que carga artículos desde `json-server`.

TypeScript:

```ts
export class FetchComponent {
  articulos!: Articulo[];
  url = 'http://localhost:3000/articulosi';

  async ngOnInit() {
    try {
      let response = await fetch(this.url);
      let datos = await response.json();
      if (!response.ok) throw new Error('Error');

      this.articulos = datos;
    } catch (error) {
      console.log(error);
    }
  }
}
```

HTML:

```html
<h3>Articulos con Fetch</h3>
<div id="contenedor" class="row row-cols-1 row-cols-md-6 g-4">
  @for (articulo of articulos; track articulo.id) {
    <div class="card">
      <img src="assets/{{ articulo.id }}.jpg" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">
          {{ articulo.nombre }} ({{ articulo.unidades }})
        </h5>
        <p class="card-text">{{ articulo.descripcion }}</p>
        <b><p class="card-text text-center">{{ articulo.precio }}</p></b>
      </div>
      <button class="btn btn-primary">Comprar</button>
    </div>
  }
</div>
```

### Conclusión inicial

Aunque `fetch` funciona, la teoría indica que no es la mejor solución en Angular,
porque Angular ofrece su propio cliente HTTP.

## 2. HttpClient

Angular proporciona la clase `HttpClient`, incluida en `@angular/common/http`.

### Idea principal

`HttpClient` usa observables para realizar transacciones asíncronas.

### Dependencias reactivas

Para usar correctamente `HttpClient` suelen intervenir:

- observables de RxJS
- operadores de RxJS

## Configuración en Angular moderno

La teoría distingue dos contextos:

- antes de Angular 18: `HttpClientModule` en `AppModule`
- a partir de Angular 18 con standalone: `provideHttpClient()` en `app.config.ts`

### Configuración moderna

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
```

Esto le indica a Angular que el proyecto utilizará `HttpClient`.

## 2.1. La clase `HttpClient`

`HttpClient` tiene los métodos HTTP más comunes:

- `get`
- `post`
- `put`
- `delete`

### Esquema general

La teoría muestra dos variantes de `subscribe`.

Forma clásica:

```ts
httpClient.peticion<tipoDatosRespuesta>(url, options).subscribe(
  datos => procesarDatos,
  error => gestionarError
);
```

Forma recomendada con objeto:

```ts
httpClient.peticion<tipoDatosRespuesta>(url, options).subscribe({
  next: datos => procesarDatos,
  error: error => gestionarError
});
```

### Significado del esquema

- `httpClient`: variable inyectada de tipo `HttpClient`
- `peticion`: `get`, `post`, `put` o `delete`
- `tipoDatosRespuesta`: tipo esperado
- `url, options`: URL y opciones
- `subscribe`: recepción del resultado asíncrono
- `next`: datos recibidos
- `error`: error producido

## 2.2. Uso de `HttpClient`

La teoría plantea dos formas de uso:

### 1. Directamente en un componente

- se importa `HttpClient`
- se inyecta en el constructor
- se define la petición en el componente

### 2. A través de un servicio

- se importa `HttpClient` en un servicio
- se implementan allí las peticiones
- el componente usa el servicio y se suscribe a sus métodos

La teoría considera esta segunda opción la más correcta.

## Ejemplo de uso directo en componente

```ts
import { Component } from '@angular/core';
import { Articulo } from '../../Modelos/articulo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articulos-http',
  standalone: true,
  imports: [],
  templateUrl: './articulos-http.component.html',
  styleUrl: './articulos-http.component.css',
})
export class ArticulosHttpComponent {
  url = 'http://localhost:3000/articulos';
  articulos!: Articulo[];

  constructor(private miHttp: HttpClient) {}

  ngOnInit() {
    this.miHttp.get<Articulo[]>(this.url).subscribe({
      next: articulos => (this.articulos = articulos),
      error: error => console.log('Error' + error),
    });
  }
}
```

### Conclusión

Funciona, pero no es lo más adecuado porque mezcla la gestión de datos con el
componente.

## 3. Servicio HttpClient

La teoría indica que lo habitual y recomendable es usar un servicio HTTP.

### Estructura inicial

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
}
```

A partir de aquí se implementan métodos para cada petición.

## 3.1. Petición `get`

### Método `getAll`

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../Modelos/articulo';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/articulos';

  getAll(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.url);
  }
}
```

### Opciones habituales de `get`

La teoría destaca que `get()` recibe:

- la URL
- un objeto opcional de configuración

Dentro de esas opciones aparecen, entre otras:

- `headers`
- `observe`
- `params`
- `reportProgress`
- `responseType`
- `withCredentials`

También indica que lo habitual es no pasar explícitamente el objeto de opciones
cuando basta con los valores por defecto, especialmente:

- `observe: 'body'`
- `responseType: 'json'`

### Consumo en componente

```ts
export class ArticulosComponent {
  articulos!: Articulo[];

  constructor(private miServicio: HttpService) {}

  ngOnInit() {
    this.miServicio.getAll().subscribe({
      next: datos => (this.articulos = datos),
      error: error => console.log('ERROR ' + error.status),
    });
  }
}
```

### `get` de un artículo

Servicio:

```ts
get(id: string): Observable<Articulo> {
  return this.http.get<Articulo>(`${this.url}/${id}`);
}
```

Componente:

```ts
ver(id: string) {
  this.miServicio.get(id).subscribe({
    next: articulo => console.log(articulo),
    error: error => console.log('Error' + error.status),
  });
}
```

Botón:

```html
<button class="btn btn-primary" (click)="ver(articulo.id)">Ver</button>
```

## 3.2. Petición `delete`

Servicio:

```ts
delete(id: string): Observable<Articulo> {
  return this.http.delete<Articulo>(`${this.url}/${id}`);
}
```

Componente:

```ts
borrar(id: string) {
  this.miServicio.delete(id).subscribe({
    next: dato => console.log('Articulo borrado'),
    error: error => console.log('ERROR ' + error.status),
  });
}
```

Botón:

```html
<button class="btn btn-danger" (click)="borrar(articulo.id)">Borrar</button>
```

### Recarga de tabla tras borrar

La teoría propone extraer la carga de artículos a un método reutilizable:

```ts
ngOnInit() {
  this.cargaArticulos();
}

cargaArticulos() {
  this.miServicio.getAll().subscribe({
    next: datos => (this.articulos = datos),
    error: error => console.log('ERROR ' + error.status),
  });
}
```

Y luego reutilizarlo:

```ts
borrar(id: string) {
  this.miServicio.delete(id).subscribe({
    next: dato => {
      console.log('Articulo borrado');
      this.cargaArticulos();
    },
    error: error => console.log('ERROR ' + error.status),
  });
}
```

## 3.3. Petición `post`

Servicio:

```ts
post(articulo: Articulo): Observable<Articulo> {
  return this.http.post<Articulo>(this.url, articulo);
}
```

Componente:

```ts
nuevo() {
  let articulo: Articulo = {
    id: prompt('Id del artículo:') || '',
    categoria: prompt('Categoria del artículo:') || '',
    nombre: prompt('Nombre del artículo:') || '',
    descripcion: prompt('Descripción del artículo:') || '',
    precio: Number(prompt('Precio del artículo:') || 0),
    unidades: Number(prompt('Unidades del artículo:') || 0),
  };

  this.miServicio.post(articulo).subscribe({
    next: dato => {
      console.log('Articulo insertado');
      this.cargaArticulos();
    },
    error: error => console.log('Error ' + error.status),
  });
}
```

Botón:

```html
<button class="btn btn-success" (click)="nuevo()">Nuevo articulo</button>
```

## 3.4. Petición `put`

Servicio:

```ts
put(id: string, articulo: Articulo): Observable<Articulo> {
  return this.http.put<Articulo>(`${this.url}/${id}`, articulo);
}
```

Componente:

```ts
modificar(articulo: Articulo) {
  let artModificado: Articulo = {
    id: articulo.id,
    categoria: prompt('Nueva Categoria: ', articulo.categoria) || '',
    nombre: prompt('Nuevo Nombre: ', articulo.nombre) || '',
    descripcion: prompt('Nueva Descripción: ', articulo.descripcion) || '',
    precio: Number(prompt('Nuevo Precio: ', articulo.precio.toString()) || 0),
    unidades: Number(prompt('Nuevas Unidades: ', articulo.unidades.toString()) || 0)
  };

  this.miServicio.put(articulo.id, artModificado).subscribe({
    next: dato => {
      console.log('Articulo modificado');
      this.cargaArticulos();
    },
    error: error => console.log('Error ' + error.status),
  });
}
```

Botón:

```html
<button class="btn btn-dark" (click)="modificar(articulo)">Modificar</button>
```

## 4. Gestión de errores

La teoría propone centralizar el tratamiento de errores dentro del servicio.

### Función `handleError`

```ts
private handleError(error: HttpErrorResponse) {
  let mensajeError = 'Error desconocido';
  if (error.error instanceof ErrorEvent) {
    mensajeError = `Error: ${error.error.message}`;
  } else {
    switch (error.status) {
      case 400:
        mensajeError = 'Solicitud incorrecta (Bad Request)';
        break;
      case 401:
        mensajeError = 'No autorizado (Unauthorized)';
        break;
      case 403:
        mensajeError = 'Prohibido (Forbidden)';
        break;
      case 404:
        mensajeError = 'No encontrado (Not Found)';
        break;
      case 500:
        mensajeError = 'Error interno del servidor (Internal Server Error)';
        break;
      case 502:
        mensajeError = 'Bad Gateway';
        break;
      default:
        mensajeError = `Error del servidor: ${error.status}`;
    }
  }

  return throwError(() => new Error(mensajeError));
}
```

### Dependencias necesarias

Para evitar errores de compilación hay que importar:

- `HttpErrorResponse`
- `throwError`

### Uso de `catchError`

Se encadena mediante `pipe`:

```ts
getAll(): Observable<Articulo[]> {
  return this.http.get<Articulo[]>(this.url).pipe(
    catchError(this.handleError)
  );
}
```

### Uso de `retry`

La teoría añade `retry` antes de `catchError`:

```ts
getAll(): Observable<Articulo[]> {
  return this.http.get<Articulo[]>(this.url).pipe(
    retry(3),
    catchError(this.handleError)
  );
}
```

Esto reintenta la petición antes de propagar el error final ya tratado.

## 5. Transformando la información

A veces la API devuelve un formato que no encaja exactamente con lo que necesita la
aplicación.

En esos casos la teoría propone transformar la información usando operadores RxJS
como `map`.

Esto se hace encadenando operadores dentro de `pipe(...)` sobre el observable
devuelto por `HttpClient`.

## Ejemplo `totalCategoria`

Objetivo:

- recibir una categoría
- devolver un observable con un objeto `{ nombre, total }`

Servicio:

```ts
totalCategoria(
  categoria: string
): Observable<{ nombre: string; total: number }> {
  return this.http.get<Articulo[]>(this.url).pipe(
    retry(3),
    catchError(this.handleError),
    map((datos) => {
      let total = datos.filter((d) => d.categoria == categoria).length;
      return { nombre: categoria, total: total };
    })
  );
}
```

### Consumo en componente

```ts
ngOnInit() {
  this.miServicio.totalCategoria('Moviles').subscribe({
    next: datos => console.log(datos),
    error: error => console.log(error),
  });
  this.cargaArticulos();
}
```

### Idea principal

`map` permite transformar la respuesta HTTP en el formato exacto que necesita la
aplicación antes de entregarla al componente.

## Resumen operativo para este proyecto

Para `PREPARACION-EXAMEN`, este bloque fija estas bases:

- `fetch` puede usarse, pero `HttpClient` es la opción recomendada en Angular
- `provideHttpClient()` es la base de configuración moderna
- las peticiones HTTP deben vivir preferentemente en servicios
- `get`, `post`, `put` y `delete` deben devolver observables tipados
- el tratamiento de errores debe centralizarse con `catchError`
- `retry` y `map` permiten mejorar robustez y adaptar datos al formato necesario
