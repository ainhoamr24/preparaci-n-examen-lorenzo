# Skill - Comunicación Componentes Steps

## Objetivo

Definir los pasos prácticos para aplicar la teoría de comunicación entre
componentes del bloque 04 en `PREPARACION-EXAMEN`.

Proyecto: tienda Angular sin backend real.

Fuente teórica: `teoria.pdf`, páginas 39 a 51.

## Referencias obligatorias

Antes de implementar, revisar:

- `.codex/skills/04-comunicacion-componentes-knowledge/SKILL.md`
- `.codex/skills/04-comunicacion-componentes-knowledge/references/comunicacion-componentes.md`
- `.codex/skills/04-comunicacion-componentes-reviewer/SKILL.md`

## Cuándo usar esta skill

Usar esta guía cuando haya que:

- renderizar un componente dentro de otro
- pasar datos del padre al hijo
- notificar acciones del hijo al padre
- coordinar listas de elementos con componentes hijos

## Procedimiento recomendado

### 1. Confirmar la relación entre componentes

Antes de tocar código, decidir si el caso es:

- anidamiento simple
- comunicación padre-hijo
- comunicación hijo-padre
- comunicación bidireccional

### 2. Si solo hay composición visual, usar anidamiento simple

Cuando el padre solo necesita mostrar un hijo:

- crear el componente hijo
- importar el hijo en el padre
- usar su selector en la plantilla del padre

Ejemplo:

```html
<app-header></app-header>
```

### 3. Si el padre debe enviar datos, usar `@Input`

Usar `property binding` en la llamada:

```html
<app-hijo [dato]="variable"></app-hijo>
```

En el hijo:

```ts
@Input() dato!: number;
```

Aplicar este patrón cuando el hijo solo necesita consumir información del padre.

### 4. Tipar correctamente los datos de entrada

Al definir `@Input`:

- usar un nombre claro
- definir el tipo correcto
- usar `!` si la inicialización depende del padre y no hay valor inicial local

### 5. Si el hijo debe avisar al padre, usar `@Output` y `EventEmitter`

Definir en el hijo:

```ts
@Output() mandaMensaje = new EventEmitter<string>();
```

Emitir desde un método:

```ts
this.mandaMensaje.emit(valor);
```

Escuchar en el padre:

```html
<app-hijo (mandaMensaje)="muestraMensaje($event)"></app-hijo>
```

### 6. Mantener la responsabilidad del estado en el padre

Si el hijo dispara una acción sobre datos compartidos:

- el hijo emite el evento
- el padre decide qué hacer

El hijo no debe alterar directamente la colección principal del padre.

### 7. Para listas de elementos, combinar `@for` con componentes hijos

Cuando haya una colección:

- iterar en el padre
- renderizar un hijo por elemento
- pasar cada dato con `@Input`
- recuperar acciones con `@Output`

Ejemplo:

```html
@for (articulo of articulos; track articulo.id) {
  <app-card [articulo]="articulo" (borrarArticulo)="borrar($event)"></app-card>
}
```

### 8. Tipar correctamente eventos y parámetros

Los `EventEmitter` deben tiparse.

Ejemplos:

- `new EventEmitter<string>()`
- `new EventEmitter<number>()`

Los métodos asociados también deben usar tipos coherentes.

### 9. Cuidar casos como `prompt()` y valores nulos

Si el hijo usa `prompt()`:

- contemplar `string | null`
- transformar o validar antes de emitir

No propagar `null` a propiedades que esperan `string` si no está previsto.

### 10. Mantener las plantillas claras

En los templates:

- que los nombres de inputs y outputs sean explícitos
- que los bindings se entiendan al leerlos
- que no haya demasiada lógica mezclada en una sola etiqueta

### 11. Revisar imports de standalone

Antes de cerrar:

- comprobar que el padre importa al hijo
- comprobar que cualquier dependencia adicional está declarada
- evitar crear módulos clásicos innecesarios

### 12. Revisar antes de cerrar

Checklist mínima:

- el hijo está importado en el padre
- el selector usado es correcto
- `@Input` está bien definido y tipado
- `@Output` está bien definido y tipado
- el padre gestiona el estado que le corresponde
- la plantilla sigue siendo legible

## Resultado esperado

Al terminar este bloque, el proyecto debe quedar preparado para comunicar
componentes de forma clara, didáctica y coherente con Angular `standalone`,
manteniendo bien separados datos, eventos y responsabilidades.
