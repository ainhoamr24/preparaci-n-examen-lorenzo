# Fundamentos SASS

## Que es SASS

Sass es un preprocesador: se escribe una fuente con capacidades adicionales y se transforma en CSS que entiende el navegador. El tema menciona variables, funciones y bucles como herramientas para escribir menos CSS repetido.

La fuente indica que la implementacion mantenida es **Dart Sass** y que Angular lo usa de forma predeterminada desde versiones anteriores a las tratadas en el curso.

## CSS y SCSS

| Aspecto | CSS | SCSS usado con Sass |
| --- | --- | --- |
| Ejecucion | Lo interpreta el navegador. | Se procesa antes de entregar CSS. |
| Valores reutilizables | Puede usar variables CSS. | Puede usar variables `$` durante la generacion. |
| Repeticion | Se redacta en CSS o con variables nativas. | Puede reducirse con mixins, funciones y bucles. |
| Modulos | No es el foco del bloque. | Se organizan con `@use` y `@forward`. |

La documentacion del curso trabaja con archivos `.scss` en la arquitectura objetivo. **Pendiente:** el bloque SASS no desarrolla una comparacion formal entre la sintaxis indentada `.sass` y `.scss`.

## Ventajas confirmadas

- Reutilizar valores mediante variables.
- Recorrer listas y mapas.
- Generar clases globales repetitivas.
- Calcular valores con funciones.
- Compartir bloques de estilos con mixins.
- Agrupar recursos Sass en modulos.

## Compilacion y organizacion

- El SCSS se convierte en CSS antes de ejecutarse en navegador.
- En la arquitectura del curso, `main.scss` agrupa los estilos comunes.
- Los modulos de utilidades, base, componentes y globales se organizan mediante ficheros parciales.

## Ejemplo

```scss
// Variables (Tema 05)
$font-main: Helvetica, sans-serif;
$primary-color: #E4A23F;

body {
  font-family: $font-main;
  color: $primary-color;
}
// Se transforma en:
// body { font-family: Helvetica, sans-serif; color: #E4A23F; }
```

```scss
// Arrays: acceso con list.nth, indice empieza en 1 (Tema 05)
@use "sass:list";

$lista: (10px, 12px, 20px, 40px);
$primero: list.nth($lista, 1);       // 10px
$tamanyo: list.length($lista);       // 4
```

```scss
// Mapas: acceso con map.get (Tema 05)
@use "sass:map";

$mapa: (
  "a": enero,
  "b": febrero
);
$clave: a;
$valor: map.get($mapa, $clave);     // enero
```

```scss
// Bucle @for to: de 0 a n-1 (Tema 05)
@for $i from 0 to 4 {
  .g--border-#{$i} {
    border: 10px * $i solid #00FF00;
  }
}
// .g--border-0 { border: 0px ... }
// .g--border-1 { border: 10px ... }  ...hasta .g--border-3
```

```scss
// Bucle @for through: de 1 hasta n (Tema 05)
@for $i from 1 through 4 {
  .g--border-#{$i} {
    border: 10px * $i solid #00FF00;
  }
}
// .g--border-1 { border: 10px ... }  ...hasta .g--border-4
```

```scss
// Bucle @each sobre array (Tema 05)
$paddings: (3px, 6px, 7px, 9px);

@each $value in $paddings {
  .g--padding-#{$value} {
    padding: $value;
  }
}
// .g--padding-3px, .g--padding-6px, ...
```

```scss
// Bucle @each sobre mapa (Tema 05)
$map: (
  "s": 3px,
  "m": 6px,
  "l": 7px,
  "xl": 9px
);

@each $key, $value in $map {
  .g--padding-#{$key} {
    padding: $value;
  }
}
// .g--padding-s { padding: 3px; }
// .g--padding-m { padding: 6px; }  ...
```

```scss
// @use y @forward (Tema 05) — en lugar del obsoleto @import
// _variables.scss
$primary-color: #E4A23F;
$font-main: Helvetica, sans-serif;

// styles.scss con prefijo de modulo
@use 'variables';
body {
  font-family: variables.$font-main;
  color: variables.$primary-color;
}

// styles.scss sin prefijo
@use 'variables' as *;
body {
  font-family: $font-main;
  color: $primary-color;
}
```

```scss
// @forward: reexportar varios ficheros desde un _index.scss (Tema 05)
// utilidades/_index.scss
@forward '_colores.scss';
@forward '_fuentes.scss';
@forward '_mixins.scss';

// styles.scss — carga todos de golpe
@use 'utilidades';
body {
  font-family: utilidades.$main-font;
  @include utilidades.redondeado(10px);
}
```

## Errores comunes

- Tratar una variable Sass como si cambiara en tiempo de ejecucion.
- Copiar reglas repetitivas en vez de valorar un mapa, bucle o mixin.
- Usar `@import` cuando el material recomienda `@use` y `@forward`.
- Generar una gran familia de utilidades sin revisar el nombre o el valor producido.

