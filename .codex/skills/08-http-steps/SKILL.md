# Skill - HTTP Steps

## Objetivo

Definir los pasos prácticos para aplicar la teoría de peticiones HTTP del bloque 08
en `PREPARACION-EXAMEN`.

Proyecto: tienda Angular sin backend real.

Fuente teórica: `teoria.pdf`, páginas 95 a 116.

## Referencias obligatorias

Antes de implementar, revisar:

- `.codex/skills/08-http-knowledge/SKILL.md`
- `.codex/skills/08-http-knowledge/references/http-client.md`
- `.codex/skills/08-http-reviewer/SKILL.md`

## Cuándo usar esta skill

Usar esta guía cuando haya que:

- consumir una API desde Angular
- mover acceso HTTP a un servicio
- implementar operaciones CRUD remotas
- gestionar errores HTTP
- transformar respuestas del backend

## Procedimiento recomendado

### 1. Confirmar si la necesidad es realmente HTTP

Antes de tocar código, decidir si:

- los datos vienen de servidor o mock HTTP
- la operación es `get`, `post`, `put` o `delete`
- hace falta transformación de la respuesta

### 2. Configurar `provideHttpClient()` en standalone

En el contexto moderno del proyecto:

```ts
providers: [provideRouter(routes), provideHttpClient()]
```

No usar `HttpClient` sin registrar antes su proveedor.

### 3. Preferir `HttpClient` sobre `fetch`

`fetch` puede servir para demostraciones rápidas, pero en Angular:

- priorizar `HttpClient`
- aprovechar observables
- integrar mejor la gestión de errores y operadores RxJS

### 4. Centralizar peticiones en un servicio

Si la petición va a reutilizarse o forma parte del acceso a datos principal:

- crear un servicio HTTP
- inyectar `HttpClient` en él
- definir allí los métodos CRUD

Ejemplo:

```ts
constructor(private http: HttpClient) {}
```

### 5. Tipar correctamente cada respuesta

Usar tipos claros en los observables:

- `Observable<Articulo[]>`
- `Observable<Articulo>`
- u otros tipos específicos

Evitar `any` salvo que no exista tipado fiable aún.

### 6. Implementar métodos CRUD claros

Ejemplos típicos:

- `getAll()`
- `get(id)`
- `post(articulo)`
- `put(id, articulo)`
- `delete(id)`

Mantener nombres coherentes y previsibles.

### 7. Suscribirse en el componente consumidor

En el componente:

- inyectar el servicio
- llamar al método
- suscribirse con `next` y `error`

Ejemplo:

```ts
this.miServicio.getAll().subscribe({
  next: datos => (this.articulos = datos),
  error: error => console.log('ERROR ' + error.status),
});
```

### 8. Reutilizar la carga de datos tras operaciones de escritura

Después de `post`, `put` o `delete`, si la vista depende de la colección actual:

- extraer la carga a un método como `cargaArticulos()`
- reutilizarlo tras modificar datos

Esto evita duplicar lógica y mantiene la tabla sincronizada.

### 9. Gestionar errores dentro del servicio cuando aporte valor

Si el proyecto necesita mensajes o control uniforme:

- crear `handleError`
- usar `catchError`
- devolver errores ya procesados

Esto reduce lógica repetida en los componentes.

### 10. Usar `retry` y `map` con criterio

Usar:

- `retry(n)` cuando tenga sentido reintentar
- `map(...)` cuando la respuesta de la API no encaje directamente
- `pipe(...)` para encadenar `retry`, `catchError` y `map`

No añadir operadores sin una necesidad clara.

### 11. Mantener la separación de responsabilidades

El servicio debe:

- hablar con la API
- tipar respuestas
- transformar y manejar errores si hace falta

El componente debe:

- iniciar acciones
- mostrar resultados
- reaccionar al éxito o error

### 12. Revisar antes de cerrar

Checklist mínima:

- `provideHttpClient()` está configurado
- `HttpClient` se inyecta correctamente
- las peticiones viven en un servicio cuando corresponde
- las respuestas están tipadas
- los errores se gestionan
- la vista se actualiza tras cambios remotos

## Resultado esperado

Al terminar este bloque, el proyecto debe quedar preparado para consumir APIs y
gestionar CRUD HTTP de forma clara, didáctica y coherente con Angular
`standalone`, usando `HttpClient`, observables y operadores RxJS de forma
controlada.
