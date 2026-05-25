# Variables

## Variables SCSS y variables CSS

| Tipo | Ejemplo de nombre | Momento de uso | Aplicacion del tema |
| --- | --- | --- | --- |
| Variable Sass | `$primary-color` | Durante el procesado SCSS. | Guardar valores, listas o mapas para generar CSS. |
| Variable CSS | `--mlt-sys-font-size-1` | En el CSS resultante. | Exponer tokens globales reutilizables. |

Una variable `$` puede ayudar a generar muchas variables CSS o clases globales. No son equivalentes: una desaparece al compilar y la otra queda disponible para las reglas CSS.

## Colecciones confirmadas

- Listas para escalas como tamanos de fuente o paddings.
- Mapas para agrupar paletas por nombre.
- Acceso modular mediante `sass:list` y `sass:map`.
- Interpolacion `#{$variable}` para construir nombres de clases.

## Sistema `--mlt-sys-*`

Los ejercicios piden generar tokens de:

- colores: principal, alternativo, rojo, gris, blanco y amarillo;
- tamanos de fuente;
- padding y, en un ejercicio posterior, margin;
- familias tipograficas.

Estos tokens permiten que utilidades `g--` consuman valores globales en lugar de repetir literales.

## Inconsistencia detectada

En el ejercicio de color aparecen dos formas:

- una salida inicial con `--mlt-sys-principal-*`;
- utilidades posteriores que consumen `--mlt-sys-color-principal-*`.

Antes de implementar debe confirmarse la convencion elegida. La documentacion general del curso sobre variables CSS utiliza el segmento `color`, pero esta skill no corrige silenciosamente el enunciado.

## Ejemplo

```scss
// Variables SASS — desaparecen al compilar (Tema 05)
$font-main: Helvetica, sans-serif;
$primary-color: #E4A23F;

body {
  font-family: $font-main;
  color: $primary-color;
}
```

```scss
// Mapa de colores del proyecto (Ejercicio 1, Tema 05)
@use 'sass:list';

$colores: (
  'principal':   (#011019, #052F4D, #0B4D83, #1363B4, #1979E6, #4B8EEC, #80ADF4, #B2CAFA, #E6EDFE),
  'alternativo': (#190801, #4D1D05, #83370B, #B45613, #E67519, #EC9C4B, #F4BE80, #FADCB2, #FEF5E6),
  'rojo':        (#190501, #4D0D05, #83150B, #B41813, #E61919, #EC534B, #F48A80, #FABCB2, #FEEAE6),
  'gris':        (#1D2830, #323E49, #485461, #5C6775, #717D8E, #8A93A3, #A1A9BA, #B6BDCD, #CFD4E2),
  'blanco':      (#EBEBEB, #EDEDED, #F0F0F0, #F2F2F2, #F5F5F5, #F7F7F7, #FAFAFA, #FCFCFC, #FFFFFF),
  'amarillo':    (#6D5303, #9A7809, #C69C10, #E9BC1C, #ECC94B, #F2D978, #F7E7A6, #FCF4CF, #FFFFFF),
);

// Genera: --mlt-sys-principal-1 ... --mlt-sys-principal-9
// (sin el segmento "color" en los tokens; las clases g-- si usan --mlt-sys-color-*)
:root {
  @each $nombre, $lista in $colores {
    @for $i from 1 through 9 {
      --mlt-sys-#{$nombre}-#{$i}: #{list.nth($lista, $i)};
    }
  }
}
```

```scss
// Variables CSS — quedan en el CSS compilado (Tema 04)
:root {
  --mlt-sys-color-principal-1: #011019;
  --mlt-sys-color-principal-5: #1979E6;
  --mlt-sys-color-alternativo-5: #E67519;
}

// Uso con var()
.boton {
  background-color: var(--mlt-sys-color-alternativo-5);
  // Valor por defecto como segundo parametro:
  background-color: var(--mlt-sys-color-alternativo-5, #E67519);
}
```

```scss
// Lista de tamanos de fuente (Ejercicio 2, Tema 05)
$font-sizes: (10px, 12px, 14px, 16px, 18px, 20px, 22px, 24px, 26px, 28px, 30px);

// Lista de paddings (Ejercicio 3, Tema 05)
$paddings: (0px, 4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 36px, 40px);
// Genera: --mlt-sys-padding-0: 0px; ... --mlt-sys-padding-10: 40px;
```

## Buenas practicas

- Define una sola convencion para cada familia de tokens.
- Genera escalas desde listas o mapas cuando la repeticion sea real.
- Usa tokens para color, tipografia y espaciado coherentes.
- Mantiene variables Sass como fuente de generacion y variables CSS como contrato visual consumible.

