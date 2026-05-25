# CSS Grid

## Funcion

Grid dispone areas en dos dimensiones. El tema lo presenta para columnas, filas, bloques por columnas y paginas con regiones nombradas.

## Propiedades documentadas

| Propiedad o funcion | Aplicacion |
| --- | --- |
| `display: grid` | Activa una rejilla. |
| `grid-template-columns` | Define numero y tamano de columnas. |
| `grid-template-rows` | Define las filas. |
| `fr` | Reparte fracciones del espacio libre. |
| `auto` | Ajusta la pista al contenido necesario. |
| `repeat(...)` | Reduce repeticion al definir columnas. |
| `gap` | Separa celdas. |
| `grid-column: span ...` | Extiende un area por varias columnas. |
| `grid-template-areas` | Describe las regiones de la pagina. |
| `grid-area` | Coloca un hijo en una region nombrada. |

## Grids fluidos

El tema muestra una rejilla que varia el numero de columnas segun el ancho disponible mediante:

```scss
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
```

La regla establece un minimo de columna y permite que las columnas crezcan o generen nuevas filas.

## `auto-fit` y `auto-fill`

- `auto-fit` esta explicado y ejemplificado.
- **Pendiente:** `auto-fill` no se localiza en las paginas consultadas.

## Layouts complejos

`grid-template-areas` se usa para una pagina con cabecera, laterales, cuerpo y pie. Esta composicion sirve para expresar zonas estructurales, sin incluir el estilo visual interior de cada componente.

## Ejemplo

```css
/* Grid basico con fr y gap (Tema 06) */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;   /* ultima columna el doble */
  grid-template-rows: 1fr 2fr;
}

.item {
  border: 1px solid red;
}
```

```css
/* repeat() para muchas columnas (Tema 06) */
/* En vez de: grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
.container {
  grid-template-columns: repeat(6, 1fr);
}

/* auto-fit con minmax: numero de columnas variable segun ancho (Tema 06) */
.container {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```

```scss
/* l-columns BEM: layout de columnas (Tema 06) */
.l-columns {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.l-columns--2 { grid-template-columns: repeat(2, 1fr); }
.l-columns--3 { grid-template-columns: repeat(3, 1fr); }
.l-columns--4 { grid-template-columns: repeat(4, 1fr); }
```

```html
<!-- l-columns con 3 columnas (Tema 06) -->
<div class="l-columns l-columns--3">
  <div><h2>Column A</h2></div>
  <div><h2>Column B</h2></div>
  <div><h2>Column C</h2></div>
  <div><h2>Column D</h2></div>
  <div><h2>Column E</h2></div>
  <div><h2>Column F</h2></div>
</div>
```

```scss
/* span: elemento que ocupa mas de una columna (Tema 06) */
.l-columns {
  display: grid;

  &--4 {
    grid-template-columns: repeat(4, 1fr);
  }

  &__area {
    &--span2 {
      grid-column: span 2;
    }
  }
}
```

```html
<!-- span2 dentro de 4 columnas -->
<div class="l-columns l-columns--4">
  <div class="l-columns__area"></div>
  <div class="l-columns__area"></div>
  <div class="l-columns__area"></div>
  <div class="l-columns__area"></div>
  <div class="l-columns__area"></div>
  <div class="l-columns__area l-columns__area--span2"></div>
  <div class="l-columns__area"></div>
</div>
```

```css
/* grid-template-areas: pagina con cabecera, laterales, cuerpo y pie (Tema 06) */
.contenedor {
  display: grid;
  grid-template-areas:
    "cabecera cabecera cabecera cabecera cabecera"
    "lateral-izquierdo cuerpo cuerpo cuerpo lateral-derecho"
    "pie pie pie pie pie";
}

.cabecera          { grid-area: cabecera; }
.cuerpo            { grid-area: cuerpo; }
.lateral-izquierdo { grid-area: lateral-izquierdo; }
.lateral-derecho   { grid-area: lateral-derecho; }
.pie               { grid-area: pie; }
```

```html
<div class="contenedor">
  <div class="cabecera">CABECERA</div>
  <div class="lateral-izquierdo">IZQUIERDA</div>
  <div class="cuerpo">CUERPO</div>
  <div class="lateral-derecho">DERECHA</div>
  <div class="pie">PIE</div>
</div>
```

```css
/* gap: separacion entre celdas; tambien funciona con flex (Tema 06) */
.container {
  gap: 15px 10px;  /* fila columna */
}
```

## Errores comunes

- Utilizar Grid para una fila sencilla que Flexbox resuelve con claridad.
- Crear pistas rigidas sin considerar la adaptacion necesaria.
- Asignar areas que no coinciden con la plantilla nombrada.
- Mezclar rejilla y apariencia del componente en el mismo bloque de layout.

