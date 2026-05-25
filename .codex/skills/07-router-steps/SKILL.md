# Skill - Router Steps

## Objetivo

Definir los pasos prácticos para aplicar la teoría del router del bloque 07 en
`PREPARACION-EXAMEN`.

Proyecto: tienda Angular sin backend real.

Fuente teórica: `teoria.pdf`, páginas 77 a 94.

## Referencias obligatorias

Antes de implementar, revisar:

- `.codex/skills/07-router-knowledge/SKILL.md`
- `.codex/skills/07-router-knowledge/references/router.md`
- `.codex/skills/07-router-reviewer/SKILL.md`

## Cuándo usar esta skill

Usar esta guía cuando haya que:

- añadir navegación entre vistas
- asociar rutas a componentes
- navegar desde plantilla o TypeScript
- pasar parámetros en la URL
- proteger rutas

## Procedimiento recomendado

### 1. Definir primero el mapa de rutas

Antes de tocar componentes, decidir:

- qué rutas existirán
- qué componente carga cada una
- cuál será la ruta inicial
- cuál será la ruta de error

### 2. Configurar `app.routes.ts`

Crear o completar el array `routes` con objetos de tipo ruta.

Ejemplo:

```ts
export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: '**', component: ErrorComponent }
];
```

Mantener `**` al final.

### 3. Registrar el router con `provideRouter`

En el contexto standalone del proyecto:

```ts
providers: [provideRouter(routes)]
```

No dejar rutas definidas sin registrar.

### 4. Colocar correctamente `router-outlet`

El `router-outlet` debe marcar la zona donde se cargarán las vistas resueltas por el
router.

Si hay layout fijo como cabecera, dejarlo fuera del outlet.

### 5. Usar `routerLink` para navegación desde plantilla

Cuando la navegación se hace desde HTML:

- importar `RouterLink`
- usar `routerLink` o `[routerLink]`

Ejemplos:

```html
<a routerLink="/articulos">Articulos</a>
<button [routerLink]="['/articulos']">Articulos</button>
```

### 6. Usar `Router` para navegación desde TypeScript

Cuando la navegación debe ocurrir en respuesta a lógica del componente:

```ts
constructor(private router: Router) {}

volver() {
  this.router.navigate(['/articulos']);
}
```

No usar `routerLink` si la navegación nace desde código.

### 7. Definir parámetros de ruta cuando el recurso lo requiera

Si una vista depende de un identificador:

```ts
{ path: 'articulo/:id', component: ArticuloComponent }
```

El nombre del parámetro debe ser claro y coherente con su uso posterior.

### 8. Recuperar parámetros con `ActivatedRoute`

En el componente destino:

- inyectar `ActivatedRoute`
- leer `params` normalmente en `ngOnInit`

Ejemplo:

```ts
this.miRutaActiva.params.subscribe(
  params => (this.articulo = this.miServicio.getArticulo(params['id']))
);
```

### 9. Usar `queryParams` para filtros o consultas

Si la navegación requiere parámetros opcionales o de consulta:

Desde plantilla:

```html
[queryParams]="{ precio: 300, orden: 'asc' }"
```

Desde TypeScript:

```ts
this.miRouter.navigate(['/verArticulos'], {
  queryParams: { precio: 300, orden: 'asc' }
});
```

### 10. Recuperar `queryParams` por suscripción

Usar:

```ts
this.miRutaActiva.queryParams.subscribe(params => {
  precio = params['precio'];
  orden = params['orden'];
});
```

Si los parámetros alimentan una consulta o filtro, delegar esa lógica a un servicio
cuando tenga sentido.

### 11. Proteger rutas con guards si el acceso depende de una condición

Crear el guard con CLI:

```bash
ng g g nombreGuarda
```

Asociarlo a la ruta:

```ts
canActivate: [guarda1Guard]
```

Dentro del guard:

- comprobar condición
- devolver `true` o `false`
- redirigir con `Router` si procede

### 12. Revisar antes de cerrar

Checklist mínima:

- las rutas están bien definidas
- `provideRouter` está configurado
- `router-outlet` está bien colocado
- `RouterLink`, `Router` y `ActivatedRoute` se usan correctamente
- los parámetros se recuperan con el nombre correcto
- los guards se aplican donde toca

## Resultado esperado

Al terminar este bloque, el proyecto debe quedar preparado para navegar entre
vistas, recibir parámetros y proteger accesos de forma clara, didáctica y coherente
con Angular `standalone`.
