# Flexbox

## Funcion

Flexbox coloca areas en sentido horizontal o vertical. El contenedor se activa con `display: flex` y sus hijos pueden crecer, reducirse o partir de un tamano inicial.

## Ejes y direccion

- El eje principal corresponde a la direccion elegida.
- Con `flex-direction: row`, los elementos avanzan horizontalmente.
- Con `flex-direction: column`, los elementos avanzan verticalmente.
- El eje secundario es perpendicular al principal.

## Propiedades documentadas

| Propiedad | Responsabilidad |
| --- | --- |
| `display: flex` | Convierte el elemento en contenedor flex. |
| `flex-direction` | Selecciona layout horizontal o vertical. |
| `flex-wrap` | Pasa elementos a la linea siguiente si no caben. |
| `justify-content` | Distribuye espacio en el eje principal. |
| `align-items` | Alinea los items en el eje secundario. |
| `align-content` | Reparte espacio entre lineas cuando hay varias. |
| `gap` | Separa items; la fuente confirma que tambien funciona con flex. |
| `flex-grow` | Permite crecer al hijo si existe espacio libre. |
| `flex-shrink` | Permite reducir al hijo si falta espacio. |
| `flex-basis` | Determina el tamano inicial del hijo. |

## `align-self`

**Pendiente:** `align-self` se pide en esta documentacion, pero no aparece explicado en las paginas 82-95 verificadas. No debe tratarse como contenido confirmado del examen sin otra fuente.

## Casos de uso confirmados

- Filas y columnas de areas.
- Separacion de grupos en un menu mediante margen automatico.
- Distribucion de hijos que deben repartirse el espacio.
- Contenedores que deben dejar que su contenido cambie de linea.

## Relacion con BEM

El tema utiliza un layout tipo `l-flex`, modificadores para direccion o distribucion y areas hijas como `l-flex__area`. Un area puede alojar un componente visual sin asumir sus colores ni sus fuentes.

## Ejemplo

```html
<!-- Uso de l-flex con modificadores BEM (Tema 06) -->
<div class="l-flex l-flex--direction-row l-flex--justify-content-center">
  <div class="l-flex__area">Item1</div>
  <div class="l-flex__area">Item2</div>
  <div class="l-flex__area l-flex__area--grow-2">Item3</div>
  <div class="l-flex__area">Item4</div>
  <div class="l-flex__area">Item5</div>
</div>
```

```scss
/* l-flex.scss — layout flex con modificadores BEM (Tema 06) */
.l-flex {
  display: flex;

  &--direction-row {
    flex-direction: row;
  }

  &--justify-content-center {
    justify-content: center;
  }

  &__area {
    // Si tuvieras mas propiedades para el area, las pondrias aqui
    &--grow2 {
      flex-grow: 2;
    }
  }
}
```

```html
<!-- Truco margin auto: Item4 y Item5 van a la derecha (Tema 06) -->
<div style="display: flex">
  <div>Item1</div>
  <div>Item2</div>
  <div>Item3</div>
  <div style="margin-left: auto">Item4</div>
  <div>Item5</div>
</div>
```

```html
<!-- flex-grow: el segundo y tercero crecen; el tercero el doble que el segundo -->
<div style="display: flex;">
  <div style="flex-grow: 0; border: 1px solid red">AAAAA</div>
  <div style="flex-grow: 1; border: 1px solid red">BBBBB</div>
  <div style="flex-grow: 2; border: 1px solid red">CCCCC</div>
</div>
```

```css
/* flex-basis y flex-shrink juntos (Tema 06) */
.item1 {
  flex-basis: 300px;
  flex-shrink: 1;   /* puede reducirse */
}
.item2 {
  flex-basis: 300px;
  flex-shrink: 0;   /* no se reduce */
}
.item3 {
  flex-grow: 1;     /* ocupa todo el espacio libre */
}
```

## Errores comunes

- Confundir propiedades del contenedor y propiedades de sus hijos.
- Mezclar `flex-grow`, `flex-shrink` y `flex-basis` sin comprobar el resultado.
- Elegir Flexbox para una pagina que exige relacion entre filas y columnas.
- Definir apariencia visual desde una clase `l-`.

