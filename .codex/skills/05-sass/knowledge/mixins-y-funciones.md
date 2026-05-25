# Mixins y Funciones

## Funciones

La fuente muestra funciones Sass que calculan y devuelven un valor, por ejemplo un grosor de borde a partir de un parametro. Tambien utiliza funciones del modulo de color para obtener variaciones de una base.

Usalas cuando una regla necesita un valor derivado de forma repetible.

## Mixins

Un mixin encapsula propiedades CSS reutilizables y puede recibir parametros. El ejemplo del tema aplica una sombra parametrizada a mas de un componente.

Usalos cuando varios bloques necesiten el mismo conjunto de declaraciones con variaciones controladas.

## Generacion de estilos

El tema incluye:

- `@if` para variar una regla segun una condicion;
- `@for` y `@each` para producir utilidades;
- listas y mapas como datos de origen;
- interpolacion para nombrar clases generadas.

La aplicacion central es crear tokens y utilidades `g--` sin duplicar manualmente cada regla.

## Responsive mixins

**Pendiente:** las paginas del Tema 05 consultadas no definen mixins de breakpoints ni una estrategia responsive. No deben presentarse como norma del tema sin otra fuente.

## Ejemplo

```scss
// Funcion: calcula y devuelve un valor (Tema 05)
@function getBorderSize($size) {
  @return 10px * $size;
}

.c-button {
  color: #FF0000;
  border: getBorderSize(2) solid #00FF00;
}

// Se transforma en:
// .c-button { color: #FF0000; border: 20px solid #00FF00; }
```

```scss
// Mixin: encapsula propiedades CSS reutilizables (Tema 05)
@mixin box-shadow($color) {
  -webkit-box-shadow: 2px 10px 24px $color;
  -moz-box-shadow: 2px 10px 24px $color;
  box-shadow: 2px 10px 24px $color;
}

.c-button {
  color: #FF0000;
  @include box-shadow(#FF0000);
}

.c-panel {
  color: #00FF00;
  @include box-shadow(#00FF00);
}

// Se transforma en:
// .c-button { color: #FF0000; -webkit-box-shadow: 2px 10px 24px #FF0000; ... }
// .c-panel  { color: #00FF00; -webkit-box-shadow: 2px 10px 24px #00FF00; ... }
```

```scss
// Condicional @if dentro de un mixin (Tema 05)
@mixin border($size) {
  @if $size >= 3 {
    $color: #FF0000;
  } @else {
    $color: #00FF00;
  }

  border: $size * 2 solid $color;
}

.c-caja1 { color: #FF0000; @include border(2px); }  // → border: 4px solid #00FF00
.c-caja2 { color: #FF0000; @include border(5px); }  // → border: 10px solid #FF0000
```

```scss
// Funciones de color (Tema 05)
@use "sass:color";

$color-fondo: #F456E3;
$color-borde: color.darken($color-fondo, 30%);

.c-caja {
  background-color: $color-fondo;   // #F456E3
  border: 4px solid $color-borde;   // #a60b95
}
```

## Criterios de reutilizacion

- Usa funcion para obtener un valor.
- Usa mixin para emitir un grupo de declaraciones.
- Usa bucle cuando existe una escala o coleccion definida.
- Evita generar clases que no respondan a una necesidad del proyecto.
- Revisa el CSS resultante, especialmente en ejercicios que multiplican utilidades.

