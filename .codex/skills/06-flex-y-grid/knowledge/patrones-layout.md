# Patrones de Layout

## Patrones confirmados

| Caso | Tecnica tratada | Opcion |
| --- | --- | --- |
| Items en fila o columna | `l-flex` | Flexbox |
| Grupos separados a izquierda y derecha | Margen automatico en flex | Flexbox |
| Rejilla de columnas | `l-columns` | Grid |
| Area que abarca columnas | `grid-column: span ...` | Grid |
| Grilla de contenido adaptable | `auto-fit` con `minmax` | Grid |
| Pagina con cabecera, laterales, cuerpo y pie | Areas nombradas | Grid |

## Cuando usar Flexbox

- Cuando el orden principal sea horizontal o vertical.
- Cuando se reparta el espacio entre items de una fila o columna.
- Cuando se necesite separar grupos lineales, como acciones de una barra.

## Cuando usar Grid

- Cuando filas y columnas forman la estructura.
- Cuando una pagina contiene regiones con posiciones relativas.
- Cuando se requiera una rejilla de columnas adaptables.

## Patrones solicitados y alcance

| Patron | Estado en el Tema 06 |
| --- | --- |
| Navbar | El tema ejemplifica una separacion util para menus y enlaza recursos; no define un componente navbar. |
| Sidebar | El ejemplo de areas incluye laterales; no desarrolla un patron sidebar independiente. |
| Grid de contenido | Confirmado mediante columnas y rejilla adaptable. |
| Dashboard | Pendiente: no se desarrolla. |
| Cards | Pendiente: no se desarrolla. |
| Hero section | Pendiente: no se desarrolla. |
| Galeria | Pendiente: no se desarrolla. |
| Layout administrativo | Pendiente: no se desarrolla. |

## Ejemplo

```scss
/* l-extremo: dos grupos en extremos opuestos con margin auto (Tema 06) */
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

```html
<!-- l-extremo: botones en extremos opuestos -->
<div class="l-extremo">
  <div class="l-extremo__area-izquierda">
    <div class="c-button">Pulsar Izquierda</div>
  </div>
  <div class="l-extremo__area-derecha">
    <div class="c-button">Pulsar Derecha</div>
  </div>
</div>

<!-- Un area puede combinarse directamente con un componente -->
<div class="l-extremo">
  <div class="l-extremo__area-izquierda c-button">Pulsar Izquierda</div>
  <div class="l-extremo__area-derecha c-button">Pulsar Derecha</div>
</div>
```

```scss
/* l-columns con @for: genera modificadores --1 a --11 (Tema 06) */
.l-columns {
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @for $i from 1 to 12 {
    &--#{$i} {
      grid-template-columns: repeat($i, 1fr);
    }
  }

  &__area {
  }
}
```

```scss
/* Regla de layout: CSS solo para posicion, no para apariencia (Tema 06) */
// ✅ Layout: solo posicion y tamano de areas
.l-extremo {
  display: flex;
  &__area-izquierda { margin-right: auto; }
  &__area-derecha   { margin-left: auto; }
}

// ❌ No agregar colores, fuentes ni bordes en clases l-
.l-extremo { background-color: #fff; }  // incorrecto: es responsabilidad del componente
```

## Regla de uso

Codex puede adaptar una tecnica confirmada a un requisito posterior, pero no debe declarar que un patron pendiente forma parte del PDF sin documentacion adicional.

