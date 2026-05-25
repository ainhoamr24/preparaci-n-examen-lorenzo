# Estructura del Proyecto PREPARACION-EXAMEN

## Resumen Ejecutivo

El proyecto `PREPARACION-EXAMEN` sigue una arquitectura Angular **simple, didáctica y coherente con el estilo del curso**. La estructura está diseñada para que los estudiantes entiendan claramente dónde va cada tipo de código sin necesidad de arquitecturas complejas.

---

## Carpeta: `Models/`

### Responsabilidad
Contiene interfaces, tipos y clases que definen la estructura de datos del proyecto.

### Archivos
- `tarea.ts` — Interfaz/clase que define la estructura de una tarea.
- `tareas.json` — Datos de ejemplo en formato JSON.
- `tareas-copia.json` — Copia de datos para respaldo o testing.

### Convención de Nombres
- Nombres en singular o plural según el contenido.
- Archivos `.ts` para interfaces/clases.
- Archivos `.json` para datos de ejemplo.

### Ejemplo: `tarea.ts`
```typescript
export interface Tarea {
  id: string;
  nombre: string;
  descripcion: string;
  estado: 'Pendiente' | 'Realizada';
  fechaCreacion: Date;
}
```

### Ejemplo: `tareas.json`
```json
[
  {
    "id": "1",
    "nombre": "Estudiar Angular",
    "descripcion": "Completar el módulo de Angular",
    "estado": "Pendiente",
    "fechaCreacion": "2024-05-20"
  },
  ...
]
```

### Cuándo agregar archivos
- Un nuevo modelo/entidad: crear `entidad.ts`
- Datos de ejemplo: crear `entidades.json`
- Datos de testing: crear `entidades-copia.json` o similar

---

## Carpeta: `Components/`

### Responsabilidad
Contiene todos los componentes Angular de la aplicación. Cada componente está en su propia carpeta con sus tres archivos (.ts, .html, .scss).

### Estructura de un Componente
```
Components/fin/
├── fin.component.ts       # Lógica del componente
├── fin.component.html     # Template
└── fin.component.scss     # Estilos
```

### Componentes del Proyecto

#### `fin/`
- **Propósito**: Mostrar detalles de una tarea finalizada.
- **Responsabilidad**: Recibir parámetro de ruta (tarea ID), obtener datos del servicio, mostrar detalles.
- **Rutas asociadas**: `/tareas/:id/fin`

#### `panel/`
- **Propósito**: Panel principal de administración de tareas.
- **Responsabilidad**: Listar tareas, permitir filtrado, acceso a crear/editar/borrar.
- **Rutas asociadas**: `/tareas/panel`
- **Guard**: `panel-guard.ts` (requiere autenticación)

#### `inicio/`
- **Propósito**: Página de inicio de la aplicación.
- **Responsabilidad**: Información general, navegación principal.
- **Rutas asociadas**: `/`

#### `tarea/`
- **Propósito**: Formulario para crear o editar una tarea individual.
- **Responsabilidad**: Validación de formulario, envío de datos al servicio.
- **Rutas asociadas**: `/tareas/crear`, `/tareas/:id/editar`

#### `tareas/`
- **Propósito**: Listado general de tareas.
- **Responsabilidad**: Mostrar todas las tareas, permitir filtrado por estado.
- **Rutas asociadas**: `/tareas`

#### `error/`
- **Propósito**: Página de error 404.
- **Responsabilidad**: Mostrar mensaje de error, enlace a inicio.
- **Rutas asociadas**: `**` (ruta catch-all)

#### `header/`
- **Propósito**: Encabezado de navegación.
- **Responsabilidad**: Mostrar navegación principal, enlaces globales.
- **Reutilización**: Incluido en `app.html` de forma global.

### Convención de Nombres en Componentes
- Folder: `nombre-componente/` (kebab-case, singular o plural según contexto)
- Archivo TS: `nombre-componente.component.ts`
- Archivo HTML: `nombre-componente.component.html`
- Archivo SCSS: `nombre-componente.component.scss`

### Ejemplo: Crear un nuevo componente `productos`

Carpeta:
```
Components/productos/
├── productos.component.ts
├── productos.component.html
└── productos.component.scss
```

Archivo TS:
```typescript
import { Component } from '@angular/core';
import { ProductoService } from '../../Services/producto.service.ts';
import { Producto } from '../../Models/producto.ts';

export class ProductosComponent {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getAll().subscribe({
      next: productos => this.productos = productos,
      error: error => console.log('ERROR ' + error.status),
    });
  }
}
```

Archivo HTML:
```html
<div class="container">
  @for (producto of productos; track producto.id) {
    <div class="card">
      <h3>{{ producto.nombre }}</h3>
      <p>{{ producto.precio }}</p>
    </div>
  } @empty {
    <p>No hay productos disponibles.</p>
  }
</div>
```

---

## Carpeta: `Services/`

### Responsabilidad
Contiene servicios que manejan la lógica de negocio, comunicación HTTP, y gestión de datos. Los servicios son inyectados en componentes mediante el constructor.

### Convención de Nombres
- Archivo: `nombre.service.ts` (singular, kebab-case)
- Nombre de clase: `NombreService` (PascalCase)

### Ejemplo Real: `tareas-service.ts`

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../Models/tarea';

@Injectable()
export class TareasService {
  private url: string = 'http://localhost:3000/tareas';

  constructor(private httpClient: HttpClient) {}

  // Leer todas las tareas
  getAll(): Observable<Tarea[]> {
    return this.httpClient.get<Tarea[]>(this.url);
  }

  // Leer una tarea específica
  get(id: string): Observable<Tarea> {
    return this.httpClient.get<Tarea>(`${this.url}/${id}`);
  }

  // Crear una tarea
  post(tarea: Tarea): Observable<Tarea> {
    return this.httpClient.post<Tarea>(this.url, tarea);
  }

  // Actualizar una tarea
  put(id: string, tarea: Tarea): Observable<Tarea> {
    return this.httpClient.put<Tarea>(`${this.url}/${id}`, tarea);
  }

  // Borrar una tarea
  delete(id: string): Observable<Tarea> {
    return this.httpClient.delete<Tarea>(`${this.url}/${id}`);
  }
}
```

### Características Esperadas
- ✅ Métodos CRUD simples.
- ✅ Retorna Observables directos.
- ✅ No hace suscripciones internas.
- ✅ Usa HttpClient para comunicación.
- ✅ Nombres claros: `getAll()`, `get()`, `post()`, `put()`, `delete()`.

### Cuándo Agregar Servicios
- Una nueva entidad requiere operaciones CRUD.
- Lógica que se reutiliza en varios componentes.
- Comunicación con backend o APIs.
- Manipulación de datos compartidos.

---

## Carpeta: `Guards/`

### Responsabilidad
Contiene guardias que protegen rutas, validando acceso antes de que se carguen componentes.

### Convención de Nombres
- Archivo: `nombre.guard.ts` (kebab-case)
- Nombre de clase: `NombreGuard` (PascalCase)

### Ejemplo Real: `panel-guard.guard.ts`

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PanelGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Lógica de autenticación/validación
    const usuarioAutenticado = localStorage.getItem('usuario');

    if (usuarioAutenticado) {
      return true;
    } else {
      this.router.navigate(['/inicio']);
      return false;
    }
  }
}
```

### Uso en Rutas
```typescript
// app.routes.ts
export const routes: Routes = [
  { path: 'tareas/panel', component: PanelComponent, canActivate: [PanelGuard] },
  ...
];
```

### Tipos de Guards
- `CanActivate`: Protege acceso a una ruta.
- `CanDeactivate`: Protege contra abandono sin guardar (no usado en este proyecto aún).

---

## Archivo: `app.routes.ts`

### Responsabilidad
Define todas las rutas de la aplicación. Es el punto central de navegación.

### Estructura Esperada
```typescript
import { Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { TareasComponent } from './Components/tareas/tareas.component';
import { PanelComponent } from './Components/panel/panel.component';
import { FinComponent } from './Components/fin/fin.component';
import { ErrorComponent } from './Components/error/error.component';
import { PanelGuard } from './Guards/panel-guard-guard';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'tareas/panel', component: PanelComponent, canActivate: [PanelGuard] },
  { path: 'tareas/:id', component: FinComponent },
  { path: '**', component: ErrorComponent }
];
```

### Convenciones
- Ruta raíz `/`: Página de inicio.
- Rutas de entidades: `/entidad` (plural para listado).
- Rutas de detalle: `/entidad/:id`.
- Rutas de acciones: `/entidad/accion` (crear, editar, borrar).
- Rutas protegidas: Aplicar `canActivate: [Guard]`.
- Ruta catch-all `**`: Siempre al final, para página 404.

---

## Archivo: `app.config.ts`

### Responsabilidad
Contiene la configuración global de la aplicación Angular.

### Contenido Típico
```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

### Qué va aquí
- Configuración de rutas.
- Proveedores HTTP.
- Servicios globales.
- Interceptores (si es necesario).

---

## Archivo: `app.ts`

### Responsabilidad
Componente raíz de la aplicación. Actúa como contenedor principal.

### Contenido Típico
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'PREPARACION-EXAMEN';
}
```

### Qué va aquí
- Importación de componentes globales (header, footer).
- Punto de entrada de rutas (`<router-outlet>`).
- Estilos globales.

---

## Archivo: `app.html`

### Responsabilidad
Template principal que incluye componentes globales y punto de salida de rutas.

### Contenido Típico
```html
<app-header></app-header>

<main class="main-content">
  <router-outlet></router-outlet>
</main>
```

---

## Archivo: `app.scss`

### Responsabilidad
Estilos globales de la aplicación.

### Contenido Típico
- Variables globales de color, fuente, tamaño.
- Estilos base de elementos HTML.
- Clases utilitarias reutilizables.

---

## Reglas de Organización del Curso

### 1. Separación Clara de Responsabilidades
- **Componentes**: UI y lógica de presentación.
- **Servicios**: Lógica de negocio y comunicación HTTP.
- **Modelos**: Estructura de datos.
- **Guards**: Protección de rutas.

### 2. Una Carpeta = Un Componente
Cada componente debe estar en su propia carpeta dentro de `Components/`.

### 3. Servicios Centralizados
Todos los servicios van en `Services/`, nunca duplicados.

### 4. Modelos Explícitos
Cada entidad tiene su interfaz/clase en `Models/`.

### 5. Nombres Simples y Coherentes
- Kebab-case para nombres de carpetas y archivos.
- PascalCase para clases y componentes.
- Nombres descriptivos que indiquen responsabilidad.

### 6. Sin Arquitectura Enterprise
Mantener estructura simple, didáctica, sin NgRx, Store, efectos, etc.

### 7. Fácil de Agregar Nuevas Funcionalidades
La estructura debe permitir crear nuevas entidades sin reorganizar existentes.

---

## Mapa Mental de Carpetas

```
Models/        → Interfaces, tipos, clases
  ↓
Services/      → Lógica, HTTP, datos compartidos
  ↓
Components/    → UI, presentación
  ↓
app.routes.ts  → Navegación
  ↓
Guards/        → Protección
  ↓
app.ts         → Raíz (app-root)
```

---

## Resumen: Pasos para Agregar una Nueva Entidad

### 1. Crear Modelo
```
src/app/Models/producto.ts
```

### 2. Crear Servicio
```
src/app/Services/producto.service.ts
```

### 3. Crear Componente(s)
```
src/app/Components/productos/
├── productos.component.ts
├── productos.component.html
└── productos.component.scss
```

### 4. Actualizar Rutas
```typescript
// app.routes.ts
{ path: 'productos', component: ProductosComponent },
```

### 5. Crear Guard (si es necesario)
```
src/app/Guards/producto.guard.ts
```

### 6. Aplicar Guard a Rutas (si es necesario)
```typescript
// app.routes.ts
{ path: 'productos', component: ProductosComponent, canActivate: [ProductoGuard] },
```

---

## Conclusión

La estructura del proyecto `PREPARACION-EXAMEN` es **simple, escalable y educativa**. Cada carpeta tiene una responsabilidad clara, los nombres son autoexplicativos, y el patrón se puede replicar fácilmente para nuevas funcionalidades sin necesidad de reorganizar código existente.
