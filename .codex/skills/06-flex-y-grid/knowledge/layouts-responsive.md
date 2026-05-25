# Layouts Responsive

## Responsive confirmado por el tema

El bloque permite adaptar distribuciones con dos tecnicas concretas:

- Flexbox con `flex-wrap` cuando los elementos no caben en una linea.
- Grid con `repeat(auto-fit, minmax(...))` para variar las columnas disponibles.

## Adaptacion visual

Al trasladar la teoria a una pagina:

- identifica primero las areas que deben convivir;
- decide si se ordenan en un eje o en una rejilla;
- permite que el contenido se redistribuya sin perder sus regiones;
- conserva los componentes visuales separados del contenedor de layout.

## Responsive grids

- Usa columnas fraccionarias cuando el reparto relativo es importante.
- Usa `auto-fit` y `minmax` cuando el numero de columnas deba responder al ancho.
- Verifica que el minimo elegido sea compatible con el contenido.

## Responsive flex layouts

- Usa `flex-wrap` cuando los items puedan pasar a nuevas lineas.
- Revisa el efecto de `flex-basis`, crecimiento y reduccion.
- Usa separacion coherente con `gap`.

## Mobile first, breakpoints y reorganizacion

**Pendiente:** las paginas verificadas no concretan `mobile first`, breakpoints ni cambios de plantilla con media queries. `grid-template-areas` confirma la organizacion de una pagina, pero no una reorganizacion entre anchuras.

## Ejemplo

```css
/* Grid con auto-fit: numero de columnas variable segun el ancho (Tema 06) */

/* Columnas de tamano fijo: auto-fit ajusta cuantas caben */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
}

/* Columnas con minmax: caben todas las que quepan y crecen si hay espacio */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```

```css
/* gap: separacion entre celdas; funciona con flex y con grid (Tema 06) */
.container {
  gap: 15px 10px;  /* fila columna */
}
```

```html
<!-- Diferencia entre los cuatro tipos de grid del PDF (Tema 06) -->
<p>repeat(4, 1fr)</p>
<div class="container">  <!-- siempre 4 columnas -->
  <div>Item1</div> <div>Item2</div> <div>Item3</div> <div>Item4</div>
</div>

<p>repeat(auto-fit, 100px)</p>
<div class="container2">  <!-- tantas columnas de 100px como quepan -->
  <div>Item1</div> <div>Item2</div> <div>Item3</div> <div>Item4</div>
</div>

<p>repeat(auto-fit, minmax(100px, 1fr))</p>
<div class="container3">  <!-- columnas minimo 100px, crecen hasta 1fr -->
  <div>Item1</div> <div>Item2</div> <div>Item3</div> <div>Item4</div>
</div>
```

## Evitar overflow

Comprobar que no exista scroll horizontal inesperado es una validacion practica de un layout responsive. **Pendiente:** el PDF no lo formula como regla explicita dentro de este tema.

