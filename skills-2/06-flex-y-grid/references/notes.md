# Flex y Grid

Fuente: `/Users/ainhoa/Downloads/2DAW/Lorenzo/Tema/1Eva.pdf`, páginas 82-95.

## Página 82

6. Flex y Grid
En este tema vamos a explicar principalmente el layout en CSS con flexbox y grid.
Flexbox
Flex se utiliza para colocar cosas de forma horizontal o vertical.
A Complete Guide to Flexbox [https://css-tricks.com/snippets/css/a-guide-to-flexbox/]
Flexbox Layout Cheatsheet. Otra gía rápida de flexbox
The Complete CSS Flex Box Tutorial [https://medium.com/@js
_
tut/the-complete-css-flex-box-tutorial-d17971950bdc]
Flexbox
—
The Animated Tutorial [https://medium.com/@js
_
tut/flexbox-the-animated-tutorial-8075cbe4c1b2]
In CSS Flexbox, why are there no “justify-items” and “justify-self ” properties?
[https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties]
Flexbox Froggy - A game for learning CSS flexbox [https://flexboxfroggy.com/#es].
Vamos a explicar flex con el siguiente ejemplo:
1
2
3
4
5
6
7
<div class="l-flex l-flex--direction-row l-flex--justify-content-center">
<div class="l-flex__area">Item1</div>
<div class="l-flex__area">Item2</div>
<div class="l-flex__area l-flex__area--grow-2">Item3</div>
<div class="l-flex__area">Item4</div>
<div class="l-flex__area">Item5</div>
</div>
.l-flex {
display: flex;
&--direction-row {
flex-direction: row;
}
&--justify-content-center {
justify-content: center;
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
&__area {
&--grow2 {
flex-grow: 2;
// Si tuvieras más propiedades para el área, las pondrías aquí
}
}
}
Como vemos hay dos tipos de elementos, el contenedor y los items que hay centro. El contenedor siempre tendrá la siguiente
línea display:flex;.
* Veamos otro ejemplo:
1
2
3
4
5
6
<div class="l-flex l-flex--direction-row l-flex--justify-content-center">
<div class="l-flex-area">
<div class="l-flex l-flex--direction-row l-flex--justify-content-center">
<div class="l-flex-area"></div>
<div class="l-flex-area"></div>
</div>

## Página 83

8
9
10
11
12
6. Flex y Grid [logongas]
</div>
<div class="l-flex__area">Item2</div>
<div class="l-flex__area l-flex__area--grow2">Item3</div>
<div class="l-flex__area">Item4</div>
<div class="l-flex__area">Item5</div>
</div>
Ahora veremos algunas de las opciones que permite flex.
flex-direction
Para hacer que los item se muestren de forma vertical u horizontal. Sus valores son
* flex-direction:row Los items se colocan en horizontal. Es decir en una única línea.
* flex-direction:column Los items que solocal en vertical. Es decir en una única línea.
flex-wrap
Para hacer que si no caben en una línea, se pasen a la línea siguiente. * flex-wrap:wrap Si se añade se pasa de línea en vez de
mantenerse en la misma
justify-content
Es como se distribuye el espacio sobrante en horizontal. Hacía la izquierda, derecha, ocupando todo el espacio, etc, etc.
Alguno de sus posibles valores son: * justify-content:flex-start * justify-content:flex-end * justify-content:center
* justify-content:space-between * justify-content:space-around * justify-content:space-evenly

## Página 84

align-content
Es como se distribuye el espacio sobrante en vertical. Hacía arriba, abajo, ocupando todo el espacio, etc, etc.
Alguno de sus posibles valores son: * align-content:flex-start * align-content:flex-end * align-content:center *
align-content:strech * align-content:space-between * align-content:space-around

## Página 85

align-items
Si los elementos se justifican hacía arriba, abajo, ocupando todo el espacio, etc, etc.
Alguno de sus posibles valores son: * align-items:flex-start * align-items:flex-end * align-items:center * align-
items:stretch * align-items:baseline

## Página 86

6. Flex y Grid [logongas]
Permite que crezca el item si hay mas espacio. Por defecto el valor es 0 que significa que no crece, sino que se queda con el
espacio que necesita para su contenido.
* flex-grow:1: Todos los items con este valor crecerán para ocupar más espacio pero todos los que tengan este valor tendrán el
mismo tamaño entre ellos * flex-grow:2: Como al anterior pero todos los que tengan este valor tendrán el mismo tamaño entre
ellos pero el doble que los de flex-grow:1 * flex-grow:3: Como al anterior pero todos los que tengan este valor tendrán el
mismo tamaño entre ellos pero el triple que los de flex-grow:2
Se usa entro de los "hijos"
En el siguiente ejemplo, AAAAA tendrá el espacio mínimo para que quepa el texto mientras que BBBBB y CCCCC se expandirán hasta
ocupar todo el espacio disponible pero CCCCC ocupará el doble que BBBBB
1
2
3
4
5
<div style="display: flex;">
<div style="flex-grow: 0;border:1px solid red">AAAAA</div>
<div style="flex-grow: 1;border:1px solid red">BBBBB</div>
<div style="flex-grow: 2;border:1px solid red">CCCCC</div>
</div>
Si definimos flex-grow, el item crecerá hasta tener un tamaño mayor o justo el den contenido, así que no tiene
sentido usar flex-shrink:1 ya que ya se podría hacer más pequeño ni usar flex-basis ya que no tendrá un
tamaño fijo.
flex-shrink
Indica que un item puede reducir su tamaño en comparación con otros items cuando el contenedor es más pequeño que el
tamaño total de los elementos.
* flex-shrink:1: Los items con este valor pueden reducir su tamaño para ajustarse al contenedor. * flex-shrink:0: Los items
con este valor no se reducirá, independientemente del tamaño del contenedor.
Ejemplo: Si tienes tres elementos en un contenedor y uno tiene flex-shrink: 0, este no se reducirá, mientras que los otros dos se
reducirán según sea necesario para encajar en el contenedor.
Se usa entro de los "hijos"
Solo tiene sentido usar flex-shrink:1 si se indica flex-basis y si valor no es auto.
Ya que si flex-basis:auto el item ya tendré el tamaño mínimo del contenido así que no se podrá hacer más
pequeño y por lo tanto no se necesita flex-shrink:1

## Página 87

6. Flex y Grid [logongas]
Define el tamaño inicial de un item antes de que se aplique el crecimiento o la reducción. Es el tamaño en el que se basa el
elemento antes de que el espacio adicional sea distribuido (con flex-grow) o el espacio sea reducido (con flex-shrink). El
tamaño inicial se puede establecer en px, %, em, etc. Por defecto el tamaño inicial es auto y significa que el tamaño es el del
contenido.
Se usa entro de los "hijos"
Veamos ahora un ejemplo completo de las 3 propiedades:
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
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ejemplo de Flexbox</title>
<style>
.container {
display: flex;
}
.item {
border: 1px solid #FF0000;
}
.item1 {
flex-basis: 300px;
flex-shrink: 1;
}
.item2 {
flex-basis: 300px;
flex-shrink: 0;
}
.item3 {
flex-grow:1
}
</style>
</head>
<body>
<div class="container">
<div class="item item1">AAAAAAAAAAAAAAA</div>
<div class="item item2">BBBBBBBBBBBBBBB</div>
<div class="item item3">CCCCCCCCCCCCCCC</div>
</div>
</body>
</html>
La explicación es: * El item1 empieza con un tamaño de 300px (por flex-basis: 300px;) pero se puede hacer más pequeño si
es necesario (por flex-shrink: 1;) * El item2 empieza con un tamaño de 300px (por flex-basis: 300px;) pero NO se puede
hacer más pequeño (por flex-shrink: 0;) * El item3 ocupará todo el espacio que haya libre (por flex-grow:1) y eso incluye
hacerlo más grande o pequeño
flex
Es poner en una misma linea flex-grow, flex-shrink y flex-basis
Se usa entro de los "hijos"

## Página 88

Mas información en: * Understanding flex-grow, flex-shrink, and flex-basis [https://css-tricks.com/understanding-flex-grow-flex-
shrink-and-flex-basis/] * Diferencia entre flex basis y width [https://www.paradigmadigital.com/dev/diferencia-flex-basis-width/] *
Guia definitiva de Flexbox (2): Flex basis, flex-frow, flex-shrink [https://ed.team/blog/guia-definitiva-de-flexbox-2-flex-basis-flex-frow-
flex-shrink] * Las propiedades flex-grow, flex-shrink y flex-basis [https://www.desarrollolibre.net/blog/css/las-propiedades-flex-grow-
flex-shrink-y-flex-basis]
margin y auto
Una utilidad de flexbox es hacer menús pero a veces queremos mover algunos item hacia la derecha.El truco para hacerlo es usar
margin-left: auto; En los siguientes páginas se indica como hacerlos.
1
2
3
4
5
6
7
<div style="display:flex">
<div >Item1</div>
<div >Item2</div>
<div >Item3</div>
<div style="margin-left:auto">Item4</div>
<div >Item5</div>
</div>
En el ejemplo, los items 1 , 2 y 3 estarán pegados a la izquierda y los items 4 y 5 estarán pegados a la derecha.
Mas información en:
* The Most Popular Navigation Bars created with Flexbox [https://medium.com/flexbox-and-grids/the-most-popular-navigation-bars-
created-with-flexbox-6c0f59f55686] * Understanding Flexbox - auto-margin [https://github.com/ohansemmanuel/Understanding-
Flexbox/blob/master/05.%20Auto%20margin%20alignment/auto_margin.md]
Para aprender flexbox puede jugar a Flexbox Froggy - A game for learning CSS flexbox
[https://flexboxfroggy.com/#es]
Grid
Grid permite colocar cosas en dos dimensiones. Como si fuera una rejilla (un grid en inglés).
* Guías completas de Grid: * Getting Started with CSS Grid [https://css-tricks.com/getting-started-css-grid/] * A Complete
Guide to Grid [https://css-tricks.com/snippets/css/complete-guide-grid] * CSS Grid is a two-dimensional layout system created
specifically to tackle grid-based user interfaces on the web. [https://tympanus.net/codrops/css
_
reference/grid/] * The Ultimate
CSS Grid Tutorial for Beginners (With Interactive Examples) [https://www.codeinwp.com/blog/css-grid-tutorial-layout/] *
css_grid_layout_cheatsheet.pdf * Grid vs FlexBox: * Video:l-flexbox vs. CSS Grid — Which is Better?
[https://www.youtube.com/watch?v=hs3piaN4b5I] * Does CSS Grid Replace l-flexbox? [https://css-tricks.com/css-grid-replace-
flexbox/] * Mas información: * justify-items [https://css-tricks.com/almanac/properties/j/justify-items/] * Los 9 grandes errores
con CSS Grid [https://www.youtube.com/watch?v=0Gr1XSyxZy0] * Things I’ve Learned About CSS Grid Layout [https://css-
tricks.com/things-ive-learned-css-grid-layout/] * Notes on using CSS Grid in production [https://www.webstoemp.com/blog/notes-
on-using-css-grid-in-production/]: Tiene de interesante el uso de "@movil" y el uso de bucles en SASS * Grid by Example
[https://gridbyexample.com/]
1
2
3
4
5
6
.container {
display:grid;
grid-template-columns: 1fr 1fr 2fr;
grid-template-rows: 1fr 2fr;
}

## Página 89

8
9
1
2
3
4
5
6
7
8
.item {
}
6. Flex y Grid [logongas]
border:1px solid red;
<div class="container">
<div class="item">Item1</div>
<div class="item">Item2</div>
<div class="item">Item3</div>
<div class="item">Item4</div>
<div class="item">Item5</div>
<div class="item">Item6</div>
</div>
grid-template-columns
Indica el tamaño de cada columna
Las unidades pueden ser: * Tamaño fijo: Usar px * auto: Coje el menos tamaño posible * fr: Es una fracción del espacio libre
después de quitar las columnas de tamaño fijo (Las 2 formas anteriores, px y auto)
Ejemplos: * grid-template-columns: 1fr 1fr 2fr La última columna tendrá el doble de tamaño que las anteriores * grid-
template-columns: 1fr 1fr 50px La segunda columna tendrá el mismo de tamaño que la primera. La última siempre 50px *
grid-template-columns: 1fr 2fr 80px auto La última tendrá un tamaño mínimo posible, la tercera tendrá 80px, la segunda el
doble que la primera.
repeat
Si hay muchas columnas y todas del mismo tamaño en vez de
.container {
1
2
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
3
4
}
se puede escribir:
1 grid-template-columns: repeat(6, 1fr);
o en vez de
1
2
.container {
grid-template-columns: 100px 100px 100px 100px 100px 100px ;
3
4
}
se puede escribir:
1 grid-template-columns: repeat(6, 100px );
auto-fit
Si el tamaño de las columnas es fijo se puede hacer lo siguiente para no especificar el número de columnas y que sea variable
según el ancho de la ventana:
1
2
3
4
.container {
grid-template-columns: repeat(auto-fit, 100px );
}

## Página 90

6. Flex y Grid [logongas]
En ese caso ocupará todas las filas que sea necesario para poder poner ponerlo todo. Es una forma de hacer las cosas
Por último se puede usar la función minmax de CSS para hacerlo de la siguiente forma
1
2
3
.container {
grid-template-columns: repeat( auto-fit, minmax( 100px, 1fr ) );
}
Que hará que cada columna ocupe como mínimo 100px y si hay mas espacio crecerá hasta ocupar todo. Pero se crearán tantas
filas como sea necesario. Mas información en repeat,auto-fit,minmax,1fr [https://timwright.org/blog/2017/08/26/css-grid-layout/]
y en MinMax in CSS Grid — 3/3 Flexibility [https://www.youtube.com/watch?v=mVQiNpqXov8]
La función minmax es similar a las propiedades css de: * min-width * min-height * max-width * max-
height
Veamos ahora un ejemplo de la diferencia entre repeat(4,1fr) , repeat(auto-fit,100px) y repeat( auto-fit, minmax( 100px,
Ejemplo
1fr ) )
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
1
2
3
4
5
6
7
.container {
display:grid;
grid-template-columns: repeat(4,1fr);
.container2 {
display:grid;
grid-template-columns: repeat(auto-fit,100px);
.container3 {
display:grid;
grid-template-columns: repeat( auto-fit, minmax( 100px, 1fr ) );
}
}
}
}
.item {
border:1px solid red;
}
.item2 {
border:1px solid green;
}
.item3 {
border:1px solid blue;
}
.item4 {
border:1px solid pink;
}
.container4 {
display:grid;
grid-template-columns: repeat( 4, minmax( 100px, 1fr ) );
<p>repeat(4,1fr)</p>
<div class="container">
<div class="item">Item1</div>
<div class="item">Item2</div>
<div class="item">Item3</div>
<div class="item">Item4</div>
<div class="item">Item5</div>

## Página 91

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
6. Flex y Grid [logongas]
<div class="item">Item6</div>
<div class="item">Item7</div>
<div class="item">Item8</div>
</div>
<br>
<p>repeat(auto-fit,100px)</p>
<div class="container2">
<div class="item2">Item1</div>
<div class="item2">Item2</div>
<div class="item2">Item3</div>
<div class="item2">Item4</div>
<div class="item2">Item5</div>
<div class="item2">Item6</div>
<div class="item2">Item7</div>
<div class="item2">Item8</div>
</div>
<br>
<p>repeat( auto-fit, minmax( 100px, 1fr ) )</p>
<div class="container3">
<div class="item3">Item1</div>
<div class="item3">Item2</div>
<div class="item3">Item3</div>
<div class="item3">Item4</div>
<div class="item3">Item5</div>
<div class="item3">Item6</div>
<div class="item3">Item7</div>
<div class="item3">Item8</div>
</div>
<p>repeat( 4, minmax( 100px, 1fr ) )</p>
<div class="container4">
<div class="item4">Item1</div>
<div class="item4">Item2</div>
<div class="item4">Item3</div>
<div class="item4">Item4</div>
<div class="item4">Item5</div>
<div class="item4">Item6</div>
<div class="item4">Item7</div>
<div class="item4">Item8</div>
</div>
grid-template-rows
Es lo mismo que grid-template-columns pero referido a las filas.
gap
Indica la separación entre cada una de las celdas del grid.
1
2
3
.container {
gap: 15px 10px;
}

## Página 92

La propiedad gap también funciona con l-flex
Bloque de Layout por columnas
Ejemplo de Layout con BEM por columnas.
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
.l-columns {
display: grid;
grid-template-columns: repeat(1, 1fr);
}
.l-columns--2 {
grid-template-columns: repeat(2, 1fr);
}
.l-columns--3 {
grid-template-columns: repeat(3, 1fr);
}
.l-columns--4 {
grid-template-columns: repeat(4, 1fr);
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
19
20
<div class="l-columns l-columns--3">
<div>
<h2>Column A </h2>
</div>
<div >
<h2>Column B</h2>
</div>
<div>
<h2>Column C </h2>
</div>
<div>
<h2>Column D</h2>
</div>
<div>
<h2>Column E</h2>
</div>
<div>
<h2>Column F</h2>
</div>
</div>
span
Se puede hacer que un elemento ocupe más de una columna con grid-column: span x; siendo x el número de columnas que
quieres que se expanda.

## Página 93

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
1
2
3
4
5
6
7
8
9
6. Flex y Grid [logongas]
.l-columns {
display: grid;
&--4 {
grid-template-columns: repeat(4, 1fr);
}
&__area {
&--span2 {
grid-column: span 2;
// Si tuvieras más estilos para el área, irían aquí
}
}
}
<div class="l-columns l-columns--4">
<div class="l-columns__area"></div>
<div class="l-columns__area"></div>
<div class="l-columns__area"></div>
<div class="l-columns__area"></div>
<div class="l-columns__area"></div>
<div class="l-columns__area l-columns__area--span2"></div>
<div class="l-columns__area"></div>
</div>
* Mas información * How to Build Web Form Layouts With CSS Grid [https://webdesign.tutsplus.com/how-to-build-web-form-
layouts-with-css-grid--cms-28776t] * Tutorial: A Responsive Form Layout with CSS Grid [https://www.scale.at/blog/responsive-form-
layout-css-grid]
grid-template-areas
la propiedad grid-template-areas permite especificar exactamente como colocar los div en un contenedor. Para explicarlo lo
vamos a ver con un ejemplo.
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
<!DOCTYPE html>
<html>
<head>
<title>TODO supply a title</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
.contenedor {
display: grid;
grid-template-areas:
"cabecera cabecera cabecera cabecera cabecera"
"lateral-izquierdo cuerpo cuerpo cuerpo lateral-derecho"
"pie pie pie pie pie";
}
.cabecera {
grid-area: cabecera;
}
.cuerpo {
grid-area: cuerpo;
}
.lateral-izquierdo {
grid-area: lateral-izquierdo;
}
.lateral-derecho {
grid-area: lateral-derecho;
}
.pie {

## Página 94

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
6. Flex y Grid [logongas]
grid-area: pie;
}
</style>
</head>
<body>
<div class="contenedor">
<div class="cabecera">CABECERA</div>
<div class="lateral-izquierdo">IZQUIERDA</div>
<div class="cuerpo">CUERPO</div>
<div class="lateral-derecho">DERECHA</div>
<div class="pie">PIE</div>
</div>
</body>
</html>
Mas información: * grid-template-areas [https://css-tricks.com/almanac/properties/g/grid-template-areas/] * Understanding CSS
Grid: Grid Template Areas [https://www.smashingmagazine.com/understanding-css-grid-template-areas/]
Reglas de Layout
Para hacer una clase de Layout hay que seguir las siguientes reglas: * Siempre con dos elementos. * El div principal, al que
llamaremos "padre" * Los div hijos que llamaremos "áreas" (Es para seguir la nomenclatura de grid) * El CSS solo debe tener
cosas para modificar la posición (y a veces tamaño) de las Áreas pero no cambiar ni sus colores, fuentes, etc.
* Puede ser optativo poner en las areas la clase del elemento si no tiene utilidad. * Las clases CSS de los elementos que son area
se llamará &-area o &-areaYYYY.
.l-extremo {
display:flex
&__area-izquierda {
margin-right: auto;
}
&__area-derecha {
margin-left: auto;
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
1
2
3
4
5
6
}
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
<div class="l-extremo">
<div class="l-extremo__area-izquierda">
<div class="c-button">Pulsar Izquierda</div>
</div>
<div class="l-extremo__area-derecha">
<div class="c-button">Pulsar Derecha</div>

## Página 95

8
6. Flex y Grid [logongas]
</div>
</div>
* En un área se podría poner un componente ya que sus propiedades CSS no van a chocar.
1
2
3
4
<div class="l-extremo">
<div class="l-extremo__area-izquierda c-button">Pulsar Izquierda</div>
<div class="l-extremo__area-derecha c-button">Pulsar Derecha</div>
</div>
Artículos en general sobre Layout * 1-Line Layouts.10 Modern CSS layout and sizing techniques [http://1linelayouts.glitch.me/] *
Modern CSS Solutions [https://moderncss.dev/]
Ejercicios
Ejercicio 1
Crea los componentes que necesites para que funcione lo siguiente:
1
2
3
4
5
6
7
<landing-page>
<landing-page__cabecera>CABECERA</landing-page__cabecera>
<landing-page__lateral-izquierdo>IZQUIERDA</landing-page__lateral-izquierdo>
<landing-page__cuerpo>CUERPO</landing-page__cuerpo>
<landing-page__lateralDerecho>DERECHA</landing-page__lateral-derecho>
<landing-page__pie>PIE</landing-page__pie>
</landing-page>
