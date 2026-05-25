# Skill - Binding Steps

## Objetivo

Definir los pasos prácticos para aplicar la teoría de `data binding` del bloque 02
en `PREPARACION-EXAMEN`.

Proyecto: tienda Angular sin backend real.

Fuente teórica: `teoria.pdf`, páginas 14 a 23.

## Referencias obligatorias

Antes de implementar, revisar:

- `.codex/skills/02-binding-knowledge/SKILL.md`
- `.codex/skills/02-binding-knowledge/references/binding.md`
- `.codex/skills/02-binding-reviewer/SKILL.md`

## Cuándo usar esta skill

Usar esta guía cuando haya que:

- mostrar datos del componente en la vista
- enlazar propiedades HTML a valores del controlador
- responder a eventos del usuario
- sincronizar formularios con propiedades del componente
- introducir o revisar `ngModel`

## Procedimiento recomendado

### 1. Confirmar la dirección del flujo

Antes de tocar código, decidir qué tipo de enlace hace falta:

- controlador a vista
- vista a controlador
- bidireccional

Elegir el binding correcto evita plantillas confusas y código innecesario.

### 2. Si solo hay que mostrar texto, usar interpolación

Usar interpolación cuando el objetivo sea mostrar un valor textual en la plantilla.

Ejemplo:

```html
<h2>{{ titulo }}</h2>
```

Comprobar que:

- la propiedad exista en el componente
- la expresión sea simple
- no se esté usando interpolación para propiedades HTML

### 3. Si hay que enlazar una propiedad HTML, usar property binding

Usar corchetes cuando haya que asignar valores a propiedades del elemento.

Ejemplos:

```html
<img [src]="imagen">
<button [disabled]="desactivado">Boton</button>
```

Aplicar este patrón para:

- `src`
- `disabled`
- `value`
- `class`
- otras propiedades del DOM o de directivas

### 4. Mantener simples las expresiones del binding

Si se usa una expresión en plantilla:

- debe ser corta
- debe ser fácil de leer
- debe servir solo para presentación

Ejemplo aceptable:

```html
<button [class]="desactivado ? 'desactivado' : 'activado'">
  Boton
</button>
```

Si la lógica empieza a crecer, moverla al componente.

### 5. Si hay interacción del usuario, usar event binding

Usar paréntesis para enlazar eventos.

Ejemplos:

```html
<button (click)="onSave()">Save</button>
<button (click)="onSaveCliente('Pepe')">Save Cliente</button>
<button (click)="onSaveEvent($event)">Save Event</button>
```

En el componente:

- crear métodos con nombres claros
- tipar parámetros cuando proceda
- usar `$event` solo si se necesita

### 6. Si el formulario debe actualizar el componente y viceversa, usar two way binding

Usar `[(ngModel)]` cuando haya sincronización bidireccional real.

Ejemplo:

```html
<input type="text" [(ngModel)]="nombre">
```

Esto es adecuado para:

- cuadros de texto
- formularios simples
- entradas donde la UI y el estado deben reflejarse mutuamente

### 7. Importar `FormsModule` cuando se use `ngModel`

Si se usa `[(ngModel)]`, añadir `FormsModule` al componente que lo necesita.

En este proyecto eso implica:

- importar `FormsModule`
- añadirlo al array `imports` del componente `standalone`

Sin eso, Angular no reconocerá `ngModel`.

### 8. Verificar el comportamiento en ambas direcciones

Cuando haya `two way binding`, comprobar:

- que el valor inicial del componente aparece en el formulario
- que escribir en el formulario cambia la propiedad del componente
- que cambiar la propiedad desde TypeScript actualiza la vista

Una forma sencilla de probarlo es interpolar también la variable:

```html
<input type="text" [(ngModel)]="nombre">
<h3>{{ nombre }}</h3>
```

### 9. Cuidar el tipado en eventos y formularios

Si un método usa `prompt()` u otra API que puede devolver `null`, respetar el tipo.

Ejemplo:

```ts
let nuevoNombre: string | null = prompt('Nuevo valor');
```

Antes de asignar:

- comprobar si el valor es `null`
- evitar romper una propiedad declarada como `string`

### 10. Evitar malas prácticas

No hacer:

- `document.getElementById`
- cambios directos del DOM para estados visuales simples
- lógica larga dentro de atributos HTML
- uso de `ngModel` si basta con interpolación o `property binding`

### 11. Revisar SSR solo si aplica

Si se toca comportamiento que pueda chocar con SSR e hidratación, revisar si
procede usar:

```ts
host: { ngSkipHydration: 'true' }
```

No añadirlo por defecto si no existe necesidad real.

### 12. Revisar antes de cerrar

Checklist mínima:

- el tipo de binding elegido es el correcto
- las propiedades existen en el componente
- los métodos de eventos existen
- `FormsModule` está importado si se usa `ngModel`
- la plantilla sigue siendo legible
- no se ha tocado código no relacionado

## Resultado esperado

Al terminar este bloque, el proyecto debe quedar preparado para usar
interpolación, `property binding`, `event binding` y `two way data binding` de
forma clara, didáctica y coherente con Angular `standalone`.
