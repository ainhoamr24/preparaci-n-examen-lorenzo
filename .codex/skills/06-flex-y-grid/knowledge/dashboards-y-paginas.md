# Dashboards y Paginas

## Pagina documentada

El Tema 06 no presenta un dashboard completo. Su ejemplo estructural distribuye:

- cabecera;
- lateral izquierdo;
- cuerpo;
- lateral derecho;
- pie.

Para esta pagina, Grid permite describir cada zona mediante `grid-template-areas` y asociarla con `grid-area`.

## Layouts escalables

- Define un contenedor padre y areas hijas.
- Usa la clase de layout solo para colocar o dimensionar areas.
- Coloca componentes visuales dentro de las areas sin trasladar su aspecto al layout.
- Usa Flexbox dentro de un area cuando su contenido requiera una distribucion lineal.

## Elementos pedidos no desarrollados

| Elemento | Estado |
| --- | --- |
| Dashboards | Pendiente: no hay definicion ni ejemplo completo. |
| Paneles y widgets | Pendiente: no se describen. |
| Tablas distribuidas | Pendiente: no se describen. |
| Formularios complejos | Solo se enlazan recursos externos sobre formularios Grid; no hay reglas del tema. |
| Paginas responsive | Se confirma la rejilla adaptable; no se define una pagina responsive completa. |
| Jerarquia visual | Debe consultarse en diseno visual; no es una regla propia de este bloque. |

## Ejemplo

```css
/* Pagina completa con grid-template-areas: el ejemplo del PDF (Tema 06) */
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
<!-- HTML correspondiente (Tema 06) -->
<div class="contenedor">
  <div class="cabecera">CABECERA</div>
  <div class="lateral-izquierdo">IZQUIERDA</div>
  <div class="cuerpo">CUERPO</div>
  <div class="lateral-derecho">DERECHA</div>
  <div class="pie">PIE</div>
</div>
```

```html
<!-- Ejercicio 1 de Tema 06: componentes Angular para grid de pagina -->
<landing-page>
  <landing-page__cabecera>CABECERA</landing-page__cabecera>
  <landing-page__lateral-izquierdo>IZQUIERDA</landing-page__lateral-izquierdo>
  <landing-page__cuerpo>CUERPO</landing-page__cuerpo>
  <landing-page__lateral-derecho>DERECHA</landing-page__lateral-derecho>
  <landing-page__pie>PIE</landing-page__pie>
</landing-page>
```

## Criterio para agentes

Si el usuario solicita un dashboard o una pagina compleja, usa esta skill para decidir la distribucion, pero confirma el contenido, la jerarquia y las interacciones antes de documentar o implementar componentes.

