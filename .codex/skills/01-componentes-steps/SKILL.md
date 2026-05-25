# Skill - Componentes Steps

## Objetivo

Definir los pasos prácticos para aplicar la teoría de módulos y componentes del
bloque 01 en `PREPARACION-EXAMEN`.

Proyecto: tienda Angular sin backend real.

Fuente teórica: `teoria.pdf`, páginas 1 a 13.

## Referencias obligatorias

Antes de implementar, revisar:

- `.codex/skills/01-componentes-knowledge/SKILL.md`
- `.codex/skills/01-componentes-knowledge/references/componentes.md`
- `.codex/skills/01-componentes-reviewer/SKILL.md`

## Cuándo usar esta skill

Usar esta guía cuando haya que:

- crear componentes nuevos
- reorganizar la estructura visual de la app
- dividir una pantalla grande en componentes más pequeños
- conectar componentes padre e hijo
- adaptar la app al enfoque `standalone`

## Procedimiento recomendado

### 1. Confirmar el alcance

Antes de tocar código:

- identificar qué parte de la interfaz se va a construir
- definir si hace falta un componente nuevo o solo ajustar uno existente
- comprobar que el cambio pertenece a componentes y no a servicios, router o HTTP

### 2. Definir la responsabilidad del componente

Cada componente debe tener una única responsabilidad clara.

Ejemplos válidos en esta tienda:

- `header` para cabecera
- `product-list` para listado
- `product-card` para una tarjeta individual
- `cart-page` para la página de carrito
- `cart-summary` para resumen de importes

Evitar:

- meter todo en `AppComponent`
- mezclar catálogo, carrito y checkout en el mismo componente

### 3. Elegir ubicación y nombre

Usar nombres claros y consistentes.

Preferencias:

- una carpeta por componente
- nombres descriptivos
- estructura agrupada por dominio o por bloque visual

Ejemplos:

- `src/app/components/product-card/`
- `src/app/components/product-list/`
- `src/app/components/layout/header/`

### 4. Crear el componente

Generar el componente con Angular CLI:

```bash
ng g c ruta/nombre-componente
```

Si el proyecto sigue enfoque moderno, el componente debe quedar preparado para
uso `standalone`.

### 5. Revisar el archivo TypeScript

En el archivo `.ts` del componente:

- comprobar el decorador `@Component`
- validar el `selector`
- confirmar `standalone: true` si procede
- añadir en `imports` solo lo que realmente use
- definir propiedades para el estado visual
- definir métodos para responder a eventos

El TypeScript del componente debe contener lógica de presentación, no lógica de
negocio compleja ni acceso repetido a almacenamiento local.

### 6. Construir la plantilla HTML

En el archivo `.html`:

- mantener HTML legible
- usar binding cuando haga falta mostrar datos
- usar eventos Angular cuando haya interacción
- preparar una estructura fácil de dividir si crece demasiado

Evitar:

- manipulación manual del DOM
- `document.getElementById`
- `innerHTML` sin necesidad
- plantillas excesivamente largas

### 7. Añadir estilos locales

En el archivo de estilos del componente:

- mantener estilos encapsulados cuando sea posible
- usar clases claras
- evitar mover estilos al global si solo pertenecen al componente

### 8. Usar el componente dentro de otro

Para renderizar un componente hijo dentro de otro:

1. importar el componente hijo en el `.ts` del padre
2. añadirlo a `imports`
3. usar su selector en el `.html` del padre

Ejemplo conceptual:

```ts
imports: [ProductCardComponent]
```

```html
<app-product-card></app-product-card>
```

Si falta el import en `imports`, Angular no reconocerá el selector.

### 9. Mantener `AppComponent` como raíz de composición

Usar `AppComponent` principalmente para:

- arrancar la aplicación
- contener layout general
- montar componentes principales

Evitar cargar ahí toda la implementación funcional.

### 10. Considerar ciclo de vida solo si hace falta

Usar hooks cuando exista una necesidad real:

- `ngOnInit` para inicialización
- `ngOnChanges` para reaccionar a entradas
- `ngOnDestroy` para limpieza

No añadir hooks por costumbre si no hacen nada útil.

### 11. Verificar el arranque

Comprobar que la estructura raíz sigue siendo coherente:

- `src/main.ts` arranca la app
- `src/index.html` contiene el selector raíz
- `src/app/app.ts` define el componente raíz

No crear `AppModule` salvo que exista una razón explícita.

### 12. Revisar antes de cerrar

Checklist mínima:

- el componente tiene responsabilidad clara
- el selector es coherente
- las dependencias están en `imports`
- el HTML no contiene lógica compleja
- no se ha tocado código no relacionado
- la estructura sigue siendo la de una tienda Angular sin backend

## Resultado esperado

Al terminar este bloque, el proyecto debe quedar preparado para construir la
tienda a partir de componentes pequeños, reutilizables, bien organizados y
alineados con Angular `standalone`.
