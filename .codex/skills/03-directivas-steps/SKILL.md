# Skill - Directivas Steps

## Objetivo

Definir los pasos prácticos para aplicar la teoría de directivas del bloque 03 en
`PREPARACION-EXAMEN`.

Proyecto: tienda Angular sin backend real.

Fuente teórica: `teoria.pdf`, páginas 24 a 38.

## Referencias obligatorias

Antes de implementar, revisar:

- `.codex/skills/03-directivas-knowledge/SKILL.md`
- `.codex/skills/03-directivas-knowledge/references/directivas.md`
- `.codex/skills/03-directivas-reviewer/SKILL.md`

## Cuándo usar esta skill

Usar esta guía cuando haya que:

- mostrar u ocultar bloques HTML
- elegir entre varios bloques de renderizado
- iterar listas o colecciones
- aplicar clases o estilos dinámicos
- combinar lógica de plantilla con Angular 17 standalone

## Procedimiento recomendado

### 1. Identificar el tipo de problema

Antes de tocar código, decidir si la plantilla necesita:

- una directiva de atributo
- una directiva estructural
- una directiva de componente

Elegir bien el tipo evita plantillas confusas.

### 2. Si el problema es visual, considerar directivas de atributo

Usar directivas de atributo cuando haga falta:

- cambiar clases
- cambiar estilos
- enlazar formularios con `ngModel`

Ejemplos típicos:

- `[ngClass]`
- `[ngStyle]`
- `[(ngModel)]`

### 3. Si hay renderizado condicional, elegir `@if`

Usar estas directivas cuando haya que mostrar u ocultar HTML según una condición.

Usar la sintaxis moderna de Angular 17.

### 4. Si hay múltiples casos excluyentes, elegir `@switch`

Usar estas directivas cuando una variable determine uno entre varios bloques
posibles.

Aplican bien a casos como:

- estados visuales
- textos según nivel o tipo
- vistas simples según valor

### 5. Si hay listas o colecciones, elegir `@for`

Usar estas directivas para iterar arrays o colecciones.

Usar `@for` con `track` y `@empty` cuando haga falta.

### 6. Si se usa `@for`, definir bien `track`

Con `@for`, el `track` es obligatorio.

Elegir una propiedad única y estable, por ejemplo:

```html
@for (articulo of articulos; track articulo.id) {
  <li>{{ articulo.nombre }}</li>
}
```

### 7. Controlar correctamente el caso vacío

Si una colección puede estar vacía:

- usar `@empty` con `@for`
- o una condición moderna clara con `@if`

No dejar listas vacías sin feedback si el caso afecta a la experiencia de usuario.

### 8. No poner dos directivas estructurales en el mismo elemento

Angular no permite varias directivas estructurales en un único elemento.

Evitar casos como:

```html
<li></li>
```

Si hace falta combinar estructuras, usar `ng-container`.

### 9. Usar `ng-container` cuando haga falta combinar estructura sin HTML extra

`ng-container` permite:

- envolver bloques Angular
- evitar nodos innecesarios en el DOM
- separar iteración y condición de forma válida

Ejemplo:

```html
<ul>
  @for (articulo of articulos; track articulo.id) {
    <li>{{ articulo.nombre }}</li>
  }
</ul>
```

### 10. Mantener la lógica de plantilla controlada

Las directivas deben mejorar la plantilla, no volverla difícil de leer.

Evitar:

- demasiadas condiciones anidadas
- expresiones largas
- mezclar demasiada responsabilidad en el mismo bloque

Si la plantilla crece demasiado, dividir en componentes.

### 11. Revisar imports del componente standalone

Antes de cerrar, comprobar:

- `FormsModule` si aparece `ngModel`
- cualquier otra dependencia de plantilla necesaria

### 12. Revisar antes de cerrar

Checklist mínima:

- la directiva elegida es la correcta
- la condición o colección existe en el componente
- `track` existe si se usa `@for`
- no hay dos directivas estructurales en el mismo elemento
- la plantilla sigue siendo legible

## Resultado esperado

Al terminar este bloque, el proyecto debe quedar preparado para usar directivas
de atributo y estructurales de forma clara, didáctica y coherente con Angular 17 y
componentes `standalone`.
