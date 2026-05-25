# Alineacion y Distribucion

## Alineacion Flexbox

| Necesidad | Herramienta confirmada |
| --- | --- |
| Disponer elementos en horizontal o vertical | `flex-direction` |
| Repartir espacio en el eje principal | `justify-content` |
| Alinear elementos en el eje secundario | `align-items` |
| Repartir varias lineas | `align-content` |
| Separar items de forma consistente | `gap` |
| Alejar grupos hacia extremos opuestos | Margen automatico en un hijo flex |

El centrado es uno de los valores mostrados para distribucion y alineacion; debe elegirse segun la funcion del contenido, no aplicarse indiscriminadamente.

## Alineacion Grid

- `fr` reparte el espacio disponible entre columnas.
- `gap` mantiene separacion constante entre celdas.
- Las areas nombradas ayudan a alinear regiones amplias como cabecera, cuerpo y pie.

## Spacing y ritmo visual

El tema confirma `gap` como separacion del layout. La eleccion de una escala completa de espaciado y el ritmo visual se relacionan con las skills de diseno y SASS, no se desarrollan aqui.

## Ejemplo

```html
<!-- Truco margin auto en flex: alejar grupos al extremo opuesto (Tema 06) -->
<!-- Item1, Item2, Item3 a la izquierda; Item4 y Item5 a la derecha -->
<div style="display: flex">
  <div>Item1</div>
  <div>Item2</div>
  <div>Item3</div>
  <div style="margin-left: auto">Item4</div>
  <div>Item5</div>
</div>
```

```scss
/* l-extremo: patron BEM para separar grupos (Tema 06) */
.l-extremo {
  display: flex;

  &__area-izquierda {
    margin-right: auto;
  }

  &__area-derecha {
    margin-left: auto;
  }
}
```

```scss
/* Distribucion con justify-content en l-flex (Tema 06) */
.l-flex {
  display: flex;

  &--justify-content-center {
    justify-content: center;
  }

  &--direction-row {
    flex-direction: row;
  }
}
```

```css
/* Grid: repartir espacio con fr (Tema 06) */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;  /* ultima el doble que las primeras */
  gap: 15px 10px;
}
```

## Errores frecuentes

- Olvidar que los ejes cambian al pasar de fila a columna.
- Ajustar elementos aislados cuando un `gap` comun resuelve la separacion.
- Distribuir espacio de modo que las acciones pierdan su agrupacion.
- Mezclar tipografia o color con reglas de alineacion.

