# Layouts Fluidos

## Tecnicas confirmadas

El Tema 06 documenta:

- una fila flex que puede envolver elementos con `flex-wrap`;
- una rejilla basada en `repeat(auto-fit, minmax(...))`;
- columnas fraccionarias y `gap`;
- areas Grid para estructuras de pagina.

## Reglas practicas

- Usa Flexbox si la adaptacion ocurre principalmente en un eje.
- Usa Grid si el contenido forma columnas o regiones.
- Comprueba que los minimos elegidos no rompan el contenido.
- Mantiene layout y aspecto del componente separados.

## Ejemplo conceptual

Una coleccion de elementos puede reducir el numero de columnas disponible y crear filas nuevas sin que sus componentes cambien de responsabilidad.

## Ejemplo

```scss
// Grid adaptable: columnas se ajustan al ancho disponible
.l-coleccion {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: var(--mlt-sys-space-md);
}

// Flex adaptable: items pasan a nuevas filas cuando no caben
.l-fila-adaptable {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mlt-sys-space-sm);

  & > * { flex: 1 1 12rem; } // minimo 12rem, luego crece
}
```

```html
<!-- Los componentes internos no cambian; solo el layout se adapta -->
<div class="l-coleccion">
  @for (item of items; track item.id) {
    <app-tarjeta [item]="item" />
  }
</div>
```

## Pendiente

No se explica en la fuente como reorganizar areas completas entre breakpoints.

