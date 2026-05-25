# Tema 08 - El Router

Fuente: `teoria.pdf`, páginas 77 a 94.

## 1. El router

Angular ofrece el router para navegar entre componentes.

### Idea principal

El objetivo es asociar cada ruta de la aplicación al componente que debe cargarse
cuando esa ruta se activa.

### Ubicación en Angular moderno

Desde Angular 17 la definición del router se realiza en `app.routes.ts`.

Ejemplo inicial:

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [];
```

### Propiedades básicas de una ruta

La teoría se centra primero en:

- `path`
- `component`

### Ejemplo de array de rutas

```ts
import { Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ArticulosComponent } from './Components/articulos/articulos.component';
import { ErrorComponent } from './Components/error/error.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: '**', component: ErrorComponent }
];
```

### Significado de las rutas

- `''`: ruta inicial de la app
- `'articulos'`: gestión de artículos
- `'**'`: captura de rutas no definidas

### Orden de las rutas

El orden importa porque Angular deja de evaluar cuando encuentra coincidencia.

Por eso la ruta comodín `**` debe quedar al final.

## Configuración en `app.config.ts`

Para usar el enrutamiento, hay que registrar `provideRouter`:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
```

## `router-outlet`

Los componentes resueltos por el router se cargan dentro de:

```html
<router-outlet></router-outlet>
```

La teoría indica que lo habitual es mantener el `header` fuera del outlet y dejar el
outlet como zona dinámica de carga:

```html
<app-header></app-header>
<router-outlet></router-outlet>
```

## 2. Navegación mediante links

La primera forma de navegar es desde plantilla.

### Uso de `routerLink`

Para usar `routerLink` en un componente standalone hay que importar `RouterLink`:

```ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
```

### Ejemplo en una barra de navegación

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="/">MiApp</a>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLink="/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/articulos">Articulos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Ejemplo en botón

```html
<button class="btn btn-primary" routerLink="/articulos">Articulos</button>
```

### Variante con property binding

También puede usarse:

```html
<a class="nav-link" [routerLink]="['/articulos']">Articulos</a>
<button class="btn btn-success" [routerLink]="['/articulos']">Articulos</button>
```

### Comportamiento

Cuando se navega a una ruta, Angular busca coincidencia en `routes` y carga el
componente asociado.

Si la ruta no existe, se aplica la ruta `**`.

## 3. Navegación mediante el objeto `Router`

Cuando la navegación debe hacerse desde TypeScript, no se usa `routerLink`.

### Importación

```ts
import { Router } from '@angular/router';
```

### Inyección

```ts
constructor(private router: Router) {}
```

### Navegación programática

```ts
volver() {
  this.router.navigate(['/articulos']);
}
```

## 4. Paso de parámetros en ruta

Angular permite pasar parámetros en la ruta de forma parecida a una API REST.

### Ejemplo de objetivo

Ruta deseada:

```text
/articulo/m1
```

### Definición en `routes`

```ts
{ path: 'articulo/:id', component: ArticuloComponent }
```

Aquí `id` es el nombre del parámetro.

### Llamadas posibles

Con `routerLink`:

```html
<button class="btn btn-success" routerLink="/articulo/m2">Ver Articulo m2</button>
```

Con `[routerLink]`:

```html
<button class="btn btn-success" [routerLink]="['/articulo/m2']">Articulo m2</button>
```

Con `Router`:

```ts
this.router.navigate(['/articulo/m2']);
```

### Ejemplo desde una tabla

```html
@for (articulo of articulos; track articulo.id) {
  <tr>
    <td>{{ articulo.id }}</td>
    <td>{{ articulo.nombre }}</td>
    <td>{{ articulo.descripcion }}</td>
    <td>{{ articulo.precio }}</td>
    <td>{{ articulo.unidades }}</td>
    <td>
      <button class="btn btn-success" routerLink="/articulo/{{articulo.id}}">
        Ver Articulo
      </button>
    </td>
  </tr>
}
```

## Recuperación de parámetros de ruta

Para leer el parámetro en el componente destino se usa `ActivatedRoute`.

### Importación

```ts
import { ActivatedRoute } from '@angular/router';
```

### Inyección

```ts
constructor(private miRutaActiva: ActivatedRoute) {}
```

### Uso con servicio

La teoría combina `ActivatedRoute` con el servicio de artículos:

```ts
export class ArticuloComponent {
  articulo!: Articulo;

  constructor(
    private miRutaActiva: ActivatedRoute,
    private miServicio: ArticulosService
  ) {}

  ngOnInit() {
    this.miRutaActiva.params.subscribe(
      params => (this.articulo = this.miServicio.getArticulo(params['id']))
    );
  }
}
```

### Resultado

Angular:

- carga el componente `ArticuloComponent`
- recupera el valor `id` desde la URL
- pide al servicio el artículo correspondiente
- lo guarda para interpolarlo en la vista

### Ejemplo de vista

```html
<div class="text-center">
  <p>Datos del articulo {{ articulo.id }}</p>
  <p>Nombre: {{ articulo.nombre }}</p>
  <p>Descripción: {{ articulo.descripcion }}</p>
  <p>Unidades: {{ articulo.unidades }}</p>
  <p>Precio: {{ articulo.precio }}</p>
</div>
```

## 5. Paso de parámetros en `queryString`

Angular permite pasar más de un parámetro usando `queryParams`.

### Formato general

```text
url?parametro1=valor1&parametro2=valor2
```

### Ejemplo

```text
/verArticulos?precio=300&orden=asc
```

## Envío de `queryParams` desde plantilla

Se usa `routerLink` junto con `queryParams`:

```html
<li class="nav-item">
  <a
    class="nav-link"
    routerLink="/verArticulos"
    [queryParams]="{ precio: 300, orden: 'asc' }">
    Ver Articulos (routerLink)
  </a>
</li>
```

## Envío de `queryParams` desde `Router`

También puede hacerse de forma programática:

En el HTML:

```html
<li class="nav-item">
  <a class="nav-link" (click)="verArticulos()">Ver Articulos (router)</a>
</li>
```

En el TypeScript:

```ts
constructor(private miRouter: Router) {}

verArticulos() {
  this.miRouter.navigate(['/verArticulos'], {
    queryParams: { precio: 300, orden: 'asc' }
  });
}
```

## Recepción de `queryParams`

Para recibirlos se usa `ActivatedRoute.queryParams`, que devuelve un observable.

### Esquema

```ts
activatedRoute.queryParams.subscribe(params => {
  variable1 = params['parametro1'];
  variable2 = params['parametro2'];
});
```

### Ejemplo con servicio de filtrado

Método del servicio:

```ts
filtroArticulos(precio: number, orden: string) {
  let articulosFiltrados: Articulo[];
  articulosFiltrados = this.articulos.filter(a => a.precio > precio);
  if (orden == 'asc') {
    return articulosFiltrados.sort((a, b) => a.precio - b.precio);
  } else {
    return articulosFiltrados.sort((a, b) => a.precio - b.precio);
  }
}
```

Componente:

```ts
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Articulo } from '../../Modelos/articulo';
import { ArticulosService } from '../../Services/articulos.service';

@Component({
  selector: 'app-ver-articulos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ver-articulos.component.html',
  styleUrl: './ver-articulos.component.css'
})
export class VerArticulosComponent {
  articulos!: Articulo[];

  constructor(
    private miRutaActiva: ActivatedRoute,
    private miServicio: ArticulosService
  ) {}

  ngOnInit() {
    let precio: number;
    let orden: string;

    this.miRutaActiva.queryParams.subscribe(params => {
      precio = params['precio'];
      orden = params['orden'];
      this.articulos = this.miServicio.filtroArticulos(precio, orden);
    });
  }
}
```

### Pasos indicados por la teoría

- definir en el servicio `filtroArticulos(precio, orden)`
- importar `ActivatedRoute` y el servicio
- inyectarlos en el constructor
- crear una variable para la vista
- suscribirse a `queryParams`
- recuperar `precio` y `orden`
- cargar `articulos` con el resultado del servicio

## 6. Protección de las rutas

Angular permite proteger rutas con guards.

### Qué hacen los guards

Son middlewares que se ejecutan antes de cargar una ruta para decidir si se permite
o no la navegación.

### Creación con CLI

```bash
ng g g nombreGuarda
```

### Tipos de guards mencionados

1. `CanActivate`
2. `CanActivateChild`
3. `CanDeactivate`
4. `CanMatch`

La teoría indica que el más utilizado es `CanActivate`.

## Ejemplo de guard

Archivo inicial:

```ts
import { CanActivateFn } from '@angular/router';

export const guarda1Guard: CanActivateFn = (route, state) => {
  return true;
};
```

### Significado

- si devuelve `true`, la ruta sigue cargando
- si devuelve `false`, la ruta no se activa

## Asociación del guard a una ruta

```ts
{
  path: 'articulos',
  component: ArticulosComponent,
  canActivate: [guarda1Guard]
}
```

Cada vez que se intente entrar en `/articulos`, Angular ejecutará el guard antes de
cargar el componente.

## Lógica del guard

La teoría indica que dentro del guard se suele:

- comprobar una condición
- devolver `true` o `false`
- navegar con `Router` a otra ruta si no se autoriza el acceso

### Ejemplo de intención

Permitir acceso solo si la hora es mayor o igual a las 10:00, y si no:

- redirigir a inicio
- devolver `false`

### Idea práctica

Es muy habitual inyectar:

- `Router`
- servicios

para decidir si se activa la ruta y redirigir en caso necesario.

## Resumen operativo para este proyecto

Para `PREPARACION-EXAMEN`, este bloque fija estas bases:

- definir rutas en `app.routes.ts`
- registrar navegación con `provideRouter`
- cargar componentes mediante `router-outlet`
- usar `routerLink` en plantilla y `Router` en TypeScript
- recuperar parámetros con `ActivatedRoute`
- usar `queryParams` para filtros o consultas
- proteger rutas con guards cuando haga falta controlar acceso
