# Componentes UI

## Componentes tratados

El material trabaja un boton y plantea ejercicios de progreso, panel y variantes de boton. Tambien desarrolla un componente de articulo en el apartado BEM.

## Botones

- Funciones confirmadas: `normal`, `alternativa` y `peligrosa`.
- El ejercicio contempla importancia primaria, secundaria y terciaria.
- La presentacion visual debe corresponder a la funcion y a la importancia.

## Componentes y CSS

Un bloque visual tiene un nombre propio, elementos internos si son necesarios y modificadores para variantes. La nomenclatura evita que un panel y un boton compartan clases ambiguas.

## Angular Material

El tema parte de ejemplos donde Material ya se habia introducido, pero los componentes propios son una practica distinta. Codex debe aclarar si se pide componer con Material o construir una UI propia.

## Ejemplo

```html
<!-- Pagina con componentes BEM: ejemplo complejo de la fuente (Tema 03 BEM) -->
<body class="c-body">
  <div class="l-page">
    <div class="l-page__header">
      <img class="c-logo">
      <div class="c-menu">
        <div class="c-menu__item">Nuevo</div>
        <div class="c-menu__item menu__item--active">Editar</div>
        <div class="c-menu__item menu__item--disable">Borrar</div>
      </div>
    </div>
    <div class="l-page__body">
      <form class="c-form g--margin-4 g--margin-bottom-6">
        <input class="c-input">
        <input class="c-input">
        <input class="c-input">
        <button class="c-button c-button--primary c-button--normal">Guardar</button>
      </form>
    </div>
  </div>
</body>
```

```html
<!-- Panel BEM con titulo y contenido (Tema 03 BEM) -->
<div class="c-panel">
  <div class="c-panel__titulo">Cabecera</div>
  <div class="c-panel__contenido">
    <p>Contenido</p>
    <p>Mas contenido</p>
  </div>
</div>

<!-- Panel con modificador de color -->
<div class="c-panel c-panel--warning">
  <div class="c-panel__titulo c-panel__titulo--warning">Cabecera</div>
  <div class="c-panel__contenido c-panel__contenido--warning">
    <p>Contenido</p>
  </div>
</div>
```

```typescript
/* Ejercicio 3: boton con dos ejes — importancia y funcion (Tema 03) */
/* Ejercicio del PDF: crear botones para 3 importancias x 3 funciones = 9 variantes */
/* Importancia: primaria, secundaria, terciaria */
/* Funcion: normal, alternativa, peligrosa */
```

## Error comun

Crear variantes mediante estilos inline o valores libres cuando la interfaz requiere un sistema estable.

