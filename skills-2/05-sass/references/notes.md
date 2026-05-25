# SASS

Fuente: `/Users/ainhoa/Downloads/2DAW/Lorenzo/Tema/1Eva.pdf`, páginas 68-81.

## Página 68

5. SASS
SASS es un preprocesador de CSS. Es como añadir funcionalidad a CSS que no tiene pero no de cosas del navegador sino para
ayudar a escribir menos CSS. El código se escribe en SASS y se transforma en CSS. Permite bucles, funciones, variables ,etc.
Actualmente, la implementación oficial de SASS es Dart Sass. Otras implementaciones como LibSass y node-
sass ya no se mantienen y no deberían usarse en proyectos nuevos. Angular, por ejemplo, usa Dart Sass de
forma predeterminada desde la versión 12.
Enlaces con mas información de SASS:
Sass Guidelines [https://sass-guidelin.es/]
Sass: @mixin and @include [https://sass-lang.com/documentation/at-rules/mixin/]
Sass: @function [https://sass-lang.com/documentation/at-rules/function/]
Sass control directives: @if, @for, @each and @while [http://thesassway.com/intermediate/if-for-each-while]
Sass: @if and @else [https://sass-lang.com/documentation/at-rules/control/if]
Sass: @for [https://sass-lang.com/documentation/at-rules/control/for]
sass: @each with maps [https://sass-lang.com/documentation/at-rules/control/each#with-maps]
Instalar SASS en node [https://teamtreehouse.com/community/-can-someone-tell-me-how-i-can-install-sass-on-windows-by-
nodejs-httpnodejsorg]
Página del lenguaje SASS [https://sass-lang.com/]
Guía básica de SASS [https://sass-lang.com/guide]
Curso de SASS:
Variables
Preprocesadores de CSS [https://www.chucksacademy.com/es/topic/css-preprocessors]
Las variables en SASS empiezan por el símbolo $.
$font-main: Helvetica, sans-serif;
$primary-color: #E4A23F;
1
2
3
4
5
6
7
body {
font-family: $font-main;
color: $primary-color;
8
}
9
Se transforma en
1
2
3
body {
font-family: Helvetica, sans-serif;
color: #E4A23F;
4
}
Arrays

## Página 69

Veamos ahora como usar los arrays
1
2
3
4
5
Para acceder a un elemento de un array se usa la función list.nth. El índice empieza por 1 y no por cero.
@use "sass:list";
$lista:(10px,12px,20px,40px);
$primero: list.nth($lista, 1);
Para obtener el tamaño de un array se usa la función length:
1
2
3
4
5
@use "sass:list";
$lista:(10px,12px,20px,40px);
$tamanyo:list.length($lista);
Mapas
Veamos ahora las funciones de maps
Para acceder a un elemento de un map se usa la función map-get:
1
2
3
4
5
6
7
8
@use "sass:map";
$mapa:(
"a": enero,
"b": febrero
);
$clave:a;
$valor:map.get($mapa,$clave);
Para obtener las claves de un map.:
1
2
3
4
5
6
7
8
@use "sass:map";
$mapa:(
"a": enero,
"b": febrero
);
$keys:map.keys($mapa);
Se obtiene un array los valores a y b.
Bucle @for to
Se usa para hacer un bucle desde 0 a n-1
Bucle con índice.
1
2
3
4
}
5
}
se transforma en
1
2
3
4
@for $i from 0 to 4 {
.g--border-#{$i} {
border: 10px * $i solid #00FF00;
.g--border-0 {
border: 0px solid #00FF00;
}

## Página 70

.g--border-1 {
border: 10px solid #00FF00;
5
6
7
8
9
10
11
12
13
14
15
}
.g--border-2 {
border: 20px solid #00FF00;
}
.g--border-3 {
border: 30px solid #00FF00;
}
Bucle @for through
Se usa para hacer un bucle desde 1 hasta n
Bucle con índice.
1
2
3
4
5
@for $i from 1 through 4 {
.g--border-#{$i} {
border: 10px * $i solid #00FF00;
}
}
se transforma en
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
.g--border-1 {
border: 10px solid #00FF00;
}
.g--border-2 {
border: 20px solid #00FF00;
}
.g--border-3 {
border: 30px solid #00FF00;
}
.g--border-4 {
border: 40px solid #00FF00;
}
Bucle @each de un array
Recorre los elementos de una lista
1
2
3
4
5
6
7
1
2
3
4
5
6
7
8
9
10
11
$paddings:(3px,6px,7px,9px);
@each $value in $paddings {
.g--padding-#{$value} {
padding: $value;
}
}
.g--padding-3px {
padding: 3px;
}
.g--padding-6px {
padding: 6px;
}
.g--padding-7px {
padding: 7px;
}
.g--padding-9px {
padding: 9px;

## Página 71

12 }
Bucle @each de un Map
Para recorrer un map la forma más sencilla es la siguiente:
$map:(
"s":3px,
"m":6px,
"l":7px,
"xl":9px
1
2
3
4
5
6
7
8
9
10
11
12
1
2
3
4
5
6
7
8
9
10
11
12
);
@each $key,$value in $map {
.g--padding-#{$key} {
padding: $value;
}
}
.g--padding-s {
padding: 3px;
}
.g--padding-m {
padding: 6px;
}
.g--padding-l {
padding: 7px;
}
.g--padding-xl {
padding: 9px;
}
La sintaxis de usar una variable en SASS cuando es el nombre de una clase CSS es un poco distinta. Hay que
usar lo siguiente #{$variable}
Selector Padre
El uso de "&" en SASS te permite escribir menos con el nombre de las clases, ya que el "&" se convierte en el nombre de la clase
"padre.
1
AAA {
2
color:red;
3
4
5
&__BBB {
padding:5px;
6
}
7
}
se transforma en:
1
AAA {
2
color:red;
3
}
4
5
6
AAA__BBB {
padding:5px;
7
}
Mas información en The Sass Ampersand [https://css-tricks.com/the-sass-ampersand/]
Funciones

## Página 72

En SASS también existen funciones "normales" que calculan un valor.
1
2
3
4
5
6
7
8
@function getBorderSize($size) {
@return 10px * $size;
}
.c-button {
color: #FF0000;
border: getBorderSize(2) solid #00FF00;
}
se transforma en
1
2
3
4
.c-button {
color: #FF0000;
border: 20px solid #00FF00;
}
Mixings
Son como trozos de código CSS que puedes añadir en otra clase CSS. Es como llamar a una "función" pero con CSS. Son muy
útiles para evitar repetir código CSS.
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
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
se transforma en
1
2
3
4
5
6
7
8
9
10
11
12
13
.c-button {
color: #FF0000;
-webkit-box-shadow: 2px 10px 24px #FF0000;
-moz-box-shadow: 2px 10px 24px #FF0000;
box-shadow: 2px 10px 24px #FF0000;
}
.c-panel {
color: #00FF00;
-webkit-box-shadow: 2px 10px 24px #00FF00;
-moz-box-shadow: 2px 10px 24px #00FF00;
box-shadow: 2px 10px 24px #00FF00;
}
@use
En versiones antiguas de SASS se usaba `@import`, pero en Dart Sass está obsoleto. Ahora se recomienda usar @use y
@forward, que permiten una mejor organización del código.
Ejemplo:
_variables.scss

## Página 73

1
2
$primary-color: #E4A23F;
$font-main: Helvetica, sans-serif;
styles.scss
1
@use 'variables';
2
3
4
5
6
}
body {
font-family: variables.$font-main;
color: variables.$primary-color;
Con @use se cargan los estilos de otro fichero y, para evitar conflictos, las variables se acceden con el prefijo del nombre del
fichero nombreFichero.$nombreVariable.
Si quieres usar las variables directamente sin el prefijo, puedes añadir la opción as *:
_variables.scss
1
2
$primary-color: #E4A23F;
$font-main: Helvetica, sans-serif;
styles.scss
1
2
3
4
5
6
@use 'variables' as *;
body {
font-family: $font-main;
color: $primary-color;
}
@forward
Cuando tenemos varios ficheros con variables, mixins o funciones, puede ser pesado tener que importarlos uno por uno en cada
archivo SASS.
Para simplificar, usamos @forward, que actúa como un "reexportador".Permite centralizar varios ficheros en uno solo y luego
usarlos todos de golpe.
Además @forward hace que se incluya el CSS que se ha generado y @use no lo hace.
Estructura de ejemplo:
proyecto ├─ utilidades │ ├─ _colores.scss
│ ├─ _fuentes.scss
│ ├─ _mixings.scss
│ └─ _index.scss └─ styles.scss
Contenido de los ficheros:
_colores.scss
1 $primary-color: #E4A23F;
_fuentes.scss
1 $main-font: Helvetica, sans-serif;
_mixins.scss
1
2
3
@mixin redondeado($radio) {
border-radius: $radio;

## Página 74

}
_index.scss
1
2
3
@forward '_colores.scss';
@forward '_fuentes.scss';
@forward '_mixins.scss';
styles.scss
1
2
3
4
5
6
7
8
@use 'utilidades';
body {
font-family: utilidades.$main-font;
color: utilidades.$primary-color;
@include utilidades.redondeado(10px);
}
Fijarse que si creamos un fichero llamado
_
index.scss lo carga automáticamente. Véase loading-a-directory
[https://sass-lang.com/documentation/at-rules/use/#loading-a-directory]
Otra diferencia entre
Condicional @if
@mixin border($size) {
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
@if $size>=3 {
$color:#FF0000;
} @else {
$color:#00FF00;
}
border: $size*2 solid $color;
}
.c-caja1 {
color: #FF0000;
@include border(2px);
}
.c-caja2 {
color: #FF0000;
@include border(5px);
}
se transforma en
1
2
3
4
5
6
7
8
9
.c-caja1 {
color: #FF0000;
border: 4px solid #00FF00;
}
.c-caja2 {
color: #FF0000;
border: 10px solid #FF0000;
}
Funciones de Color

## Página 75

Ya existen una serie de funciones predefinidas en SASS: Sass Color Functions
[https://www.w3schools.com/sass/sass
functions
_
_
color.asp]
Entre las mas útiles están:
color.lighten: Incrementa la luminosidad de un color
color.darken: Decrementa la luminosidad de un color
color.saturate: Incrementa la saturación de un color
color.desaturate: Decrementa la saturación de un color
@use "sass:color";
$color-fondo: #F456E3;
$color-borde: color.darken($color-fondo,30%);
.c-caja {
background-color: $color-fondo;
border: 4px solid $color-borde;
1
2
3
4
5
6
7
8
9
}
se transforma en
1
2
3
.c-caja {
background-color: #F456E3;
border: 4px solid #a60b95;
4
}
Ejercicios
Ejercicio 1
Usando la herramienta Colos Chemes Generator [https://logongas.github.io/color-schemes-generator/] vamos a generar los siguientes
"nombres" de colores y sus valores:
principal [https://logongas.github.io/color-schemes-generator/?p0=202-95-5&p1=205-88-16&p2=207-84-28&p3=210-81-
39&p4=212-80-50&p5=215-81-61&p6=217-84-73&p7=220-88-84&p8=222-95-95&minLightness=5&maxSaturation=95&rotate-
hue=10&ecuacion=parabola&tasa-crecimiento=8]: #011019, #052F4D, #0B4D83, #1363B4, #1979E6, #4B8EEC, #80ADF4,
#B2CAFA, #E6EDFE
alternativo [https://logongas.github.io/color-schemes-generator/?p0=17-95-5&p1=20-88-16&p2=22-84-28&p3=25-81-39&p4=27-
80-50&p5=30-81-61&p6=32-84-73&p7=35-88-84&p8=37-95-95&minLightness=5&maxSaturation=95&rotate-
hue=10&ecuacion=parabola&tasa-crecimiento=8]: #190801, #4D1D05, #83370B, #B45613, #E67519, #EC9C4B, #F4BE80,
#FADCB2, #FEF5E6
rojo [https://logongas.github.io/color-schemes-generator/?p0=370-95-5&p1=367-88-16&p2=365-84-28&p3=362-81-39&p4=0-80-
50&p5=3-81-61&p6=5-84-73&p7=8-88-84&p8=10-95-95&minLightness=5&maxSaturation=95&rotate-
hue=10&ecuacion=parabola&tasa-crecimiento=8]: #190501, #4D0D05, #83150B, #B41813, #E61919, #EC534B, #F48A80,
#FABCB2, #FEEAE6
gris [https://logongas.github.io/color-schemes-generator/?p0=205-25-15&p1=208-19-24&p2=210-15-33&p3=213-12-41&p4=215-
11-50&p5=218-12-59&p6=220-15-68&p7=223-19-76&p8=225-25-85&minLightness=15&maxSaturation=25&rotate-
hue=10&ecuacion=parabola&tasa-crecimiento=8]: #1D2830, #323E49, #485461, #5C6775, #717D8E, #8A93A3, #A1A9BA,
#B6BDCD, #CFD4E2
blanco [https://logongas.github.io/color-schemes-generator/?p0=180-0-92&p1=180-0-93&p2=180-0-94&p3=180-0-95&p4=180-0-
96&p5=180-0-97&p6=180-0-98&p7=180-0-99&p8=180-0-100&minLightness=10&maxSaturation=95&rotate-
hue=0&ecuacion=constante&tasa-crecimiento=8]: #EBEBEB, #EDEDED, #F0F0F0, #F2F2F2, #F5F5F5, #F7F7F7, #FAFAFA,
#FCFCFC, #FFFFFF
amarillo [https://logongas.github.io/color-schemes-generator/?p0=45-95-22&p1=46-89-32&p2=46-85-42&p3=47-82-51&p4=47-81-
61&p5=48-82-71&p6=48-84-81&p7=49-89-90&p8=49-95-100&minLightness=15&maxSaturation=95&rotate-
hue=2&ecuacion=parabola&tasa-crecimiento=8]: #6D5303, #9A7809, #C69C10, #E9BC1C, #ECC94B, #F2D978, #F7E7A6,
#FCF4CF, #FFFFFF
Para ello crearemos la variable "$colores":

## Página 76

1
2
3
4
5
6
7
8
$colores:(
'principal': (#011019, #052F4D, #0B4D83, #1363B4, #1979E6, #4B8EEC, #80ADF4, #B2CAFA
'alternativo': (#190801, #4D1D05, #83370B, #B45613, #E67519, #EC9C4B, #F4BE80, #FADC
'rojo': (#190501, #4D0D05, #83150B, #B41813, #E61919, #EC534B, #F48A80, #FABCB2, #FE
'gris': (#1D2830, #323E49, #485461, #5C6775, #717D8E, #8A93A3, #A1A9BA, #B6BDCD, #CF
'blanco': (#EBEBEB, #EDEDED, #F0F0F0, #F2F2F2, #F5F5F5, #F7F7F7, #FAFAFA, #FCFCFC, #
'amarillo': (#6D5303, #9A7809, #C69C10, #E9BC1C, #ECC94B, #F2D978, #F7E7A6, #FCF4CF,
);
Genera las siguientes variables CSS:
--mlt-sys-principal-1: #011019;
--mlt-sys-principal-2: #052F4D;
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
...
--mlt-sys-principal-8: #B2CAFA;
--mlt-sys-principal-9: #E6EDFE;
--mlt-sys-alternativo-1: #190801;
--mlt-sys-alternativo-2: #4D1D05;
...
--mlt-sys-alternativo-8: #FADCB2;
--mlt-sys-alternativo-9: #FEF5E6;
--mlt-sys-rojo-1: #190501;
--mlt-sys-rojo-2: #4D0D05;
...
--mlt-sys-rojo-8: #FABCB2;
--mlt-sys-rojo-9: #FEEAE6;
--mlt-sys-gris-2: #323E49;
--mlt-sys-gris-3: #485461;
...
--mlt-sys-gris-8: #B6BDCD;
--mlt-sys-gris-9: #CFD4E2;
--mlt-sys-blanco-1: #EBEBEB;
--mlt-sys-blanco-2: #EDEDED;
...
--mlt-sys-blanco-8: #FCFCFC;
--mlt-sys-blanco-9: #FFFFFF;

## Página 77

--mlt-sys-amarillo-1: #6D5303;
--mlt-sys-amarillo-2: #9A7809;
56
57
58
59
60
61
62
...
--mlt-sys-amarillo-8: #FCF4CF;
--mlt-sys-amarillo-9: #FFFFFF;
Genera el siguiente código CSS:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
.g--color-principal-1 {
color: var(--mlt-sys-color-principal-1) !important;
}
.g--background-color-principal-1 {
background-color: var(--mlt-sys-color-principal-1) !important;
}
.g--border-color-principal-1 {
border-color: var(--mlt-sys-color-principal-1) !important;
}
.g--color-principal-2 {
color: var(--mlt-sys-color-principal-2) !important;
}
.g--background-color-principal-2 {
background-color: var(--mlt-sys-color-principal-2) !important;
}
.g--border-color-principal-2 {
border-color: var(--mlt-sys-color-principal-2) !important;
}
....
.g--color-amarillo-9 {
color: var(--mlt-sys-color-amarillo-9) !important;
}
.g--background-color-amarillo-9 {
background-color: var(--mlt-sys-color-amarillo-9) !important;
}
.g--border-color-amarillo-9 {
border-color: var(--mlt-sys-color-amarillo-9) !important;
}
Ejercicio 2
Dado la variable "$font-sizes":
1 $font-sizes:(10px, 12px, 14px, 16px, 18px, 20px, 22px, 24px, 26px, 28px, 30px);
Genera las siguientes variables CSS:
1
2
3
4
5
6
7
--mlt-sys-font-size-1:10px;
--mlt-sys-font-size-2:12px;
..
--mlt-sys-font-size-10:28px;
--mlt-sys-font-size-11:30px;
Genera el siguiente código CSS:
1
2
3
4
5
.g--font-size-1 {
font-size: var(--mlt-sys-font-size-2) !important;
}
.g--font-size-2 {
font-size: var(--mlt-sys-font-size-2) !important;

## Página 78

6
7
8
9
10
11
12
13
14
15
}
...
.g--font-size-10 {
font-size: var(--mlt-sys-font-size-10) !important;
}
.g--font-size-11 {
font-size: var(--mlt-sys-font-size-11) !important;
}
Ejercicio 3
Dado la variable "$paddings":
1 $paddings:(0px, 4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 36px, 40px);
Genera las siguientes variables CSS:
1
2
3
4
5
6
7
--mlt-sys-padding-0:0px;
--mlt-sys-padding-1:4px;
..
--mlt-sys-padding-9:36px;
--mlt-sys-padding-10:40px;
Genera el siguiente código CSS:
.g--padding-0 {
padding: var(--mlt-sys-padding-1) !important;
}
.g--padding-1 {
padding: var(--mlt-sys-padding-2) !important;
}
.g--padding-2 {
padding: var(--mlt-sys-padding-3) !important;
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
......
.g--padding-9 {
padding: var(--mlt-sys-padding-10) !important;
}
.g--padding-10 {
padding: var(--mlt-sys-padding-11) !important;
}
.g--padding-0 {
margin: var(--mlt-sys-padding-0) !important;
}
.g--padding-1 {
margin: var(--mlt-sys-padding-1) !important;
}
.g--padding-2 {
margin: var(--mlt-sys-padding-2) !important;
}
.....
.g--padding-9 {
margin: var(--mlt-sys-padding-9) !important;
}
.g--padding-10 {
margin: var(--mlt-sys-padding-10) !important;

## Página 79

20 }
Y el siguiente código CSS:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
.g--padding-horizontal-0 {
padding-left: var(--mlt-sys-padding-0) !important;
padding-right: var(--mlt-sys-padding-0) !important;
}
.g--padding-vertical-0 {
padding-top: var(--mlt-sys-padding-0) !important;
padding-bottom: var(--mlt-sys-padding-0) !important;
}
.g--padding-horizontal-1 {
padding-left: var(--mlt-sys-padding-1) !important;
padding-right: var(--mlt-sys-padding-1) !important;
}
.g--padding-vertical-1 {
padding-top: var(--mlt-sys-padding-1) !important;
padding-bottom: var(--mlt-sys-padding-1) !important;
}
.g--padding-horizontal-2 {
padding-left: var(--mlt-sys-padding-2) !important;
margin-right: var(--mlt-sys-padding-2) !important;
}
.g--padding-vertical-2 {
padding-top: var(--mlt-sys-padding-2) !important;
padding-bottom: var(--mlt-sys-padding-2) !important;
}
......
.g--padding-horizontal-9 {
padding-left: var(--mlt-sys-padding-9) !important;
padding-right: var(--mlt-sys-padding-9) !important;
}
.g--padding-vertical-9 {
padding-top: var(--mlt-sys-padding-9) !important;
padding-bottom: var(--mlt-sys-padding-9) !important;
}
.g--padding-horizontal-10 {
padding-left: var(--mlt-sys-padding-10) !important;
padding-right: var(--mlt-sys-padding-10) !important;
}
.g--padding-vertical-10 {
padding-top: var(--mlt-sys-padding-10) !important;
padding-bottom: var(--mlt-sys-padding-10) !important;
}
Y el siguiente código CSS:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
.g--padding-top--0 {
padding-top: var(--mlt-sys-padding-0) !important;
}
.g--padding-bottom-0 {
padding-bottom: var(--mlt-sys-padding-0) !important;
}
.g--padding-right-0 {
padding-right: var(--mlt-sys-padding-0) !important;
}
.g--padding-left-0 {
padding-left: var(--mlt-sys-padding-0) !important;
}
.g--padding-top--1 {
padding-top: var(--mlt-sys-padding-1) !important;
}

## Página 80

.g--padding-bottom-1 {
padding-bottom: var(--mlt-sys-padding-1) !important;
}
.g--padding-right-1 {
padding-right: var(--mlt-sys-padding-1) !important;
}
.g--padding-left-1 {
padding-left: var(--mlt-sys-padding-1) !important;
}
.g--padding-top--2 {
padding-top: var(--mlt-sys-padding-2) !important;
}
.g--padding-bottom-2 {
padding-bottom: var(--mlt-sys-padding-2) !important;
}
.g--padding-right-2 {
padding-right: var(--mlt-sys-padding-2) !important;
}
.g--padding-left-2 {
padding-left: var(--mlt-sys-padding-2) !important;
}
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
......
.g--padding-left-8 {
padding-left: var(--mlt-sys-padding-8) !important;
}
.g--padding-top--9 {
padding-top: var(--mlt-sys-padding-9) !important;
}
.g--padding-bottom-9 {
padding-bottom: var(--mlt-sys-padding-9) !important;
}
.g--padding-right-9 {
padding-right: var(--mlt-sys-padding-9) !important;
}
.g--padding-left-9 {
padding-left: var(--mlt-sys-padding-9) !important;
}
.g--padding-top--10 {
padding-top: var(--mlt-sys-padding-10) !important;
}
.g--padding-bottom-10 {
padding-bottom: var(--mlt-sys-padding-10) !important;
}
.g--padding-right-10 {
padding-right: var(--mlt-sys-padding-10) !important;
}
.g--padding-left-10 {
padding-left: var(--mlt-sys-padding-10) !important;
}
Es importante saber que no es posible en un único bucle no es posible generar todo el CSS.
Piensa tu el motivo y luego mira a ver si una IA lo sabe.
Ejercicio 4
Repite el ejercicio anterior pero ahora con $margins
Ejercicio 5

## Página 81

Dado la variable:
1
2
3
4
5
6
$font-families:(
'sans-serif': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neu
'serif': 'Palatino, "Palatino Linotype", "Book Antiqua", Georgia, "Times New Roman",
'monospace': 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier N
'default': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
);
genera las siguientes variables:
1
2
3
4
--mlt-sys-font-family-sans-serif:-apple-system, BlinkMacSystemFont, "Segoe UI",
--mlt-sys-font-family-serif:Palatino, "Palatino Linotype", "Book Antiqua", Ge
--mlt-sys-font-family-monospace:SFMono-Regular, Menlo, Monaco, Consolas,
"
--mlt-sys-font-family-default:-apple-system, BlinkMacSystemFont, "Segoe UI",
y los siguientes globales:
1
2
3
4
5
6
7
8
9
10
11
12
.g--font-family-sans-serif {
font-family: var(--mlt-sys-font-family-sans-serif);
}
.g--font-family-serif {
font-family: var(--mlt-sys-font-family-serif);
}
.g--font-family-monospace {
font-family: var(--mlt-sys-font-family-monospace);
}
.g--font-family-default {
font-family: var(--mlt-sys-font-family-default);
}
