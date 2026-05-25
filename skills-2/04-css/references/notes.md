# CSS

Fuente: `/Users/ainhoa/Downloads/2DAW/Lorenzo/Tema/1Eva.pdf`, páginas 46-67.

## Página 46

4. CSS
Añadir CSS en Angular
Para añadir estilos CSS en Angular se usa el fichero de SASS que está en src/styles.scss donde se indican los estilos globales de
la App. Aunque también cada componente tiene sus propios estilos.
Por otro lado si queremos añadir otros ficheros CSS o SASS deberemos añadirlos en el JSON de angular.json del raíz. En el
nodo /projects/EjemploComponentesAngular/architect/build/options/styles Siendo EjemploComponentesAngular el
nombre del proyecto.
Lo mismo se aplica a JavaScript que se añade en /projects/EjemploComponentesAngular/architect/build/options/scripts
Usar Boostrap en Angular
Por ejemplo para usar Bootstrap junto a su JavaScript se haría de la siguiente forma:
Descarga bootstrap. PAra ello ver la última versión en https://www.npmjs.com/package/bootstrap?activeTab=versions
[https://www.npmjs.com/package/bootstrap?activeTab=versions]
1 npm install bootstrap@v5.3.8
Eso descargará bootstrap en node
_
modules/bootstrap/
Y ahora añadir el CSS y JavsScript en :
angular.json
1
"build": {
2
"styles": [
3
"node_modules/bootstrap/dist/css/bootstrap.min.css",
4
"src/styles.scss"
5
],
6
"scripts": [
7
"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
8
]
9
}
Usar Tailwind CSS a Angular
Para usar Tailwind CSS [https://tailwindcss.com/] en Angular hay que seguir la guía Install Tailwind CSS with Angular - Tailwind
CSS [https://tailwindcss.com/docs/installation/framework-guides/angular]
Los pasos son:
Descargar Tailwind y PostCSS
1 npm install tailwindcss @tailwindcss/postcss
Si da error la instalación añadir –force al final de la línea

## Página 47

Añadir Tailwind a PostCSS [https://postcss.org/] creando el fichero .postcssrc.json en el raíz del proyecto con el
siguiente contenido:
.postcssrc.json
{
1
2
3
4
5
"plugins": {
"@tailwindcss/postcss": {}
}
}
En la página de estilos SASS ./src/styles.scss añadir Tailwind
styles.css
1 @use "tailwindcss";
Modelo de caja
El modelo de java le dice al navegador si cuando indicamos el ancho, ese ancho incluye o no al padding y al borde. Por defecto no
los incluye pero lo ideal es que el ancho si que incluya el padding y el borde, por eso hay que usar la propiedad "box-sizing:
border-box" de CSS.
1
2
3
4
5
6
box-sizing [https://css-tricks.com/box-sizing/]
.mi_caja {
width: 80px;
padding: 5px;
border: 5px solid red;
margin: 10px;
}
Como indicar correctamente el box-sizing:
1
2
3
html {
box-sizing: border-box;
}

## Página 48

4
5
6
7
*, *:before, *:after {
box-sizing: inherit;
}
Siempre deberíamos poner estas lineas en cualquier proyecto HTML+CSS
Se puede ver un ejemplo en https://codepen.io/logongas/pen/yyeOxGo [https://codepen.io/logongas/pen/yyeOxGo]
display: inline, inline-block y block
En la propiedad "display" de CSS hay muchos posibles valores , ahora vamos a ver 3 que se suelen confundir:
display:inline: Para un elemento que forma parte de un párrafo. No se puede especificar el ancho y el alto.
display:inline-block: Como "inline" pero se puede especificar el ancho y el alto.
display:block: Después del elemento se genera un salto de linea y también permite especificar el ancho y el alto.
Se puede ver un ejemplo en https://codepen.io/logongas/pen/gbaVNyX [https://codepen.io/logongas/pen/gbaVNyX]
Se suelen usar tanto con el tag span como con div.
Por defecto span tiene display:inline
Pro defecto div tiene display:iinline-block
Si usamos display:inline y display:inline-block con div pero está dentro del tag p se generan saltos de
linea antes.
Mas información:
How to remove the space between inline-block elements? [http://stackoverflow.com/questions/5078239/how-to-remove-the-
space-between-inline-block-elements]
display:none o visibility:hidden
"display:none" es como si el elemento no existiera por lo que el resto de elementos se desplazan para ocupar su hueco
"visibility:hidden" el element es invisible pero sigue ocupando su hueco.
Un ejemplo se puede ver en : https://codepen.io/CybMeta/pen/xGwoyd [https://codepen.io/CybMeta/pen/xGwoyd]
&nbsp;
Hace que un espacio con "&nbsp;" sea como una letra mas por lo que no partirá la frase por ese espacio.
Un ejemplo se puede ver en : https://codepen.io/logongas/pen/xbZVJMd [https://codepen.io/logongas/pen/xbZVJMd]
Reset CSS
¿Alguna vez has notado que, incluso con una página HTML sin una sola línea de CSS propia, los navegadores ya aplican ciertos
estilos? Esto no es un error, sino una característica: cada navegador incorpora un CSS por defecto conocido como "User Agent
Stylesheet".
Por ejemplo, es habitual ver que el elemento <body> viene con unos márgenes aplicados de serie, o que las etiquetas de
encabezado (<h1>, <h2>, etc.) no solo tienen un tamaño de fuente específico, sino también márgenes.

## Página 49

Esto introduce un desafío clave para el desarrollo: la inconsistencia. Los detalles exactos de estos estilos predeterminados a
menudo varían ligeramente de un navegador a otro. Una cantidad de padding o un tamaño de fuente en un elemento pueden no
ser idénticos en Chrome y en Safari.
Esta falta de uniformidad inicial complica el proceso de garantizar un look and feel exactamente igual en todas las plataformas.
De ahí surge la necesidad de la técnica del Reset CSS para establecer un estilo común y consistente antes de aplicar nuestro
diseño.
Algo que añadir siempre a nuestro Reset CSS sería:
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
html {
box-sizing: border-box;
}
*, *:before, *:after {
box-sizing: inherit;
}
body {
margin: 0;
padding: 0;
}
¿Que ponemos en nuestro Reset CSS? Pues a lo largo del tiempo se han ido creando varios CSS que han ido quedando
anticuados debido a los cambios en los navegadores. Yo me he decantado por usar el que utilizar Tailwind CSS llamado
preflight.css
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
*,
::after,
::before,
::backdrop,
::file-selector-button {
box-sizing: border-box;
margin: 0;
padding: 0;
border: 0 solid;
}
html,
:host {
line-height: 1.5;
-webkit-text-size-adjust: 100%;
tab-size: 4;
font-family: --theme(
--default-font-family,
ui-sans-serif,
system-ui,
sans-serif,
'Apple Color Emoji',
'Segoe UI Emoji',
'Segoe UI Symbol',
'Noto Color Emoji'
);
font-feature-settings: --theme(--default-font-feature-settings, normal);
font-variation-settings: --theme(--default-font-variation-settings, normal);
-webkit-tap-highlight-color: transparent;
}
hr {
height: 0;
color: inherit;
border-top-width: 1px;
}
abbr:where([title]) {
-webkit-text-decoration: underline dotted;

## Página 50

40
text-decoration: underline dotted;
41
}
42
43
44
45
46
47
48
49
50
h1,
h2,
h3,
h4,
h5,
h6 {
font-size: inherit;
font-weight: inherit;
51
}
52
53
a {
54
55
56
color: inherit;
-webkit-text-decoration: inherit;
text-decoration: inherit;
57
}
58
59
b,
60
strong {
61
font-weight: bolder;
62
}
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
code,
kbd,
samp,
pre {
font-family: --theme(
--default-mono-font-family,
ui-monospace,
SFMono-Regular,
Menlo,
Monaco,
Consolas,
'Liberation Mono',
'Courier New',
monospace
78
79
80
81
);
font-feature-settings: --theme(--default-mono-font-feature-settings, normal);
font-variation-settings: --theme(--default-mono-font-variation-settings, normal);
font-size: 1em;
82
}
83
84
small {
85
font-size: 80%;
86
}
87
88
89
90
91
92
93
sub,
sup {
font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
94
}
95
sub {
96
bottom: -0.25em;
97
}
98
sup {
99
top: -0.5em;
100
}
101
102
103
104
105
table {
text-indent: 0;
border-color: inherit;
border-collapse: collapse;
106
}
107

## Página 51

108
:-moz-focusring {
109
outline: auto;
110
}
111
112
113
progress {
vertical-align: baseline;
114
}
115
116
117
summary {
display: list-item;
118
}
119
120
121
122
123
ol,
ul,
menu {
list-style: none;
124
}
125
126
127
128
129
130
131
132
133
134
135
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
display: block;
vertical-align: middle;
136
}
137
138
139
140
141
img,
video {
max-width: 100%;
height: auto;
142
}
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
button,
input,
select,
optgroup,
textarea,
::file-selector-button {
font: inherit;
font-feature-settings: inherit;
font-variation-settings: inherit;
letter-spacing: inherit;
color: inherit;
border-radius: 0;
background-color: transparent;
opacity: 1;
158
}
159
160
161
:where(select:is([multiple], [size])) optgroup {
font-weight: bolder;
162
}
163
164
165
:where(select:is([multiple], [size])) optgroup option {
padding-inline-start: 20px;
166
}
167
168
169
::file-selector-button {
margin-inline-end: 4px;
170
}
171
172
173
::placeholder {
opacity: 1;
174
}
175

## Página 52

176
@supports (not (-webkit-appearance: -apple-pay-button)) or
177
(contain-intrinsic-size: 1px) {
178
::placeholder {
179
color: color-mix(in oklab, currentcolor 50%, transparent);
180
}
181
}
182
183
184
textarea {
resize: vertical;
185
}
186
187
188
::-webkit-search-decoration {
-webkit-appearance: none;
189
}
190
191
192
193
::-webkit-date-and-time-value {
min-height: 1lh;
text-align: inherit;
194
}
195
196
197
::-webkit-datetime-edit {
display: inline-flex;
198
}
199
200
201
::-webkit-datetime-edit-fields-wrapper {
padding: 0;
202
203
204
205
206
207
208
209
210
211
212
}
::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
padding-block: 0;
213
}
214
215
216
::-webkit-calendar-picker-indicator {
line-height: 1;
217
}
218
219
220
:-moz-ui-invalid {
box-shadow: none;
221
}
222
223
224
225
226
button,
input:where([type='button'], [type='reset'], [type='submit']),
::file-selector-button {
appearance: button;
227
}
228
229
230
231
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
height: auto;
232
}
233
234
235
[hidden]:where(:not([hidden='until-found'])) {
display: none !important;
Mas información
Reset CSS [https://lenguajecss.com/cascada-css/herencia/reset-css/]: Lista de Reset CSS que hay

## Página 53

Variables CSS
Veamos el siguiente estilo de CSS que hemos hecho.
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
}
border-radius: 6px;
border-width: 1px;
border-style: solid;
display: inline-block;
cursor: pointer;
text-decoration: none;
border-color: #0056b8;
background-color: #0056b8;
color: #ffffff;
CSS.
.boton {
font-family: sans-serif;
font-size: 16px;
padding: 6px;
Desgraciadamente tiene muchos números mágicos, es decir números puestos directamente. Para evitar eso habría que usar variables
Veamos como funcionan.
A las variables del ponemos el prefijo mlt (de Mislata) de la misma forma que mat es de Angular Material.
Y añadimos sys al igual que hace Angular Material para decir que son variable que se usan en todo el sistema
ya que afectan a todos los componentes.
–mlt-sys-color-alternativo-5: En nuestro framework de clase en Mislata
–mat-sys-secondary: En Angular Material
1
2
3
1
2
3
1
2
3
1
2
Las variables de CSS se crean así:
:root {
--mlt-sys-color-alternativo-5: #E67519;
}
Desde CSS se usan así.
.boton {
background-color:var(--mlt-sys-color-alternativo-5)
}
Se puede definir un valor por defecto como segundo parámetro
.boton {
background-color:var(--mlt-sys-color-alternativo-5,#E67519)
}
Desde JavaScript se modifican así:
let root = document.documentElement;
root.style.setProperty('--mlt-sys-color-normal-5', "#FF0000");
Desde JavaScript se leen así:

## Página 54

1
2
let root = document.documentElement;
let colorNormal=getComputedStyle(root).getPropertyValue("--mlt-sys-color-normal-5");
Creación de variables
Al principio del curso vimos que debemos limitar nuestras opciones a usar serie de valores. Para limitar los valores deberemos
usar variables y usar siempre usas variables
:root {
--mlt-sys-color-principal-1: #011019;
--mlt-sys-color-principal-2: #052F4D;
--mlt-sys-color-principal-3: #0B4D83;
--mlt-sys-color-principal-4: #1363B4;
--mlt-sys-color-principal-5: #1979E6;
--mlt-sys-color-principal-6: #4B8EEC;
--mlt-sys-color-principal-7: #80ADF4;
--mlt-sys-color-principal-8: #B2CAFA;
--mlt-sys-color-principal-9: #E6EDFE;
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
56
57
--mlt-sys-color-alternativo-1: #190801;
--mlt-sys-color-alternativo-2: #4D1D05;
--mlt-sys-color-alternativo-3: #83370B;
--mlt-sys-color-alternativo-4: #B45613;
--mlt-sys-color-alternativo-5: #E67519;
--mlt-sys-color-alternativo-6: #EC9C4B;
--mlt-sys-color-alternativo-7: #F4BE80;
--mlt-sys-color-alternativo-8: #FADCB2;
--mlt-sys-color-alternativo-9: #FEF5E6;
--mlt-sys-color-rojo-1: #190501;
--mlt-sys-color-rojo-2: #4D0D05;
--mlt-sys-color-rojo-3: #83150B;
--mlt-sys-color-rojo-4: #B41813;
--mlt-sys-color-rojo-5: #E61919;
--mlt-sys-color-rojo-6: #EC534B;
--mlt-sys-color-rojo-7: #F48A80;
--mlt-sys-color-rojo-8: #FABCB2;
--mlt-sys-color-rojo-9: #FEEAE6;
--mlt-sys-color-gris-1: #1D2830;
--mlt-sys-color-gris-2: #323E49;
--mlt-sys-color-gris-3: #485461;
--mlt-sys-color-gris-4: #5C6775;
--mlt-sys-color-gris-5: #717D8E;
--mlt-sys-color-gris-6: #8A93A3;
--mlt-sys-color-gris-7: #A1A9BA;
--mlt-sys-color-gris-8: #B6BDCD;
--mlt-sys-color-gris-9: #CFD4E2;
--mlt-sys-color-blanco-1: #EBEBEB;
--mlt-sys-color-blanco-2: #EDEDED;
--mlt-sys-color-blanco-3: #F0F0F0;
--mlt-sys-color-blanco-4: #F2F2F2;
--mlt-sys-color-blanco-5: #F5F5F5;
--mlt-sys-color-blanco-6: #F7F7F7;
--mlt-sys-color-blanco-7: #FAFAFA;
--mlt-sys-color-blanco-8: #FCFCFC;

## Página 55

58
--mlt-sys-color-blanco-9: #FFFFFF;
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
69
70
--mlt-sys-color-amarillo-1: #6D5303;
--mlt-sys-color-amarillo-2: #9A7809;
--mlt-sys-color-amarillo-3: #C69C10;
--mlt-sys-color-amarillo-4: #E9BC1C;
--mlt-sys-color-amarillo-5: #ECC94B;
--mlt-sys-color-amarillo-6: #F2D978;
--mlt-sys-color-amarillo-7: #F7E7A6;
--mlt-sys-color-amarillo-8: #FCF4CF;
--mlt-sys-color-amarillo-9: #FFFFFF;
71
72
73
74
75
76
77
--mlt-sys-font-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
--mlt-sys-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mon
--mlt-sys-font-serif: Palatino, "Palatino Linotype", "Book Antiqua", Georgia, "Tim
--mlt-sys-font-default: var(--mlt-sys-font-sans-serif);
78
79
80
81
82
83
84
85
86
87
88
89
--mlt-sys-font-size-1: 10px;
--mlt-sys-font-size-2: 12px;
--mlt-sys-font-size-3: 14px;
--mlt-sys-font-size-4: 16px;
--mlt-sys-font-size-5: 18px;
--mlt-sys-font-size-6: 20px;
--mlt-sys-font-size-7: 22px;
--mlt-sys-font-size-8: 24px;
--mlt-sys-font-size-9: 26px;
--mlt-sys-font-size-10: 28px;
--mlt-sys-font-size-11: 30px;
90
91
92
93
94
95
96
97
98
99
100
101
--mlt-sys-margin-0: 0px;
--mlt-sys-margin-1: 4px;
--mlt-sys-margin-2: 8px;
--mlt-sys-margin-3: 12px;
--mlt-sys-margin-4: 16px;
--mlt-sys-margin-5: 20px;
--mlt-sys-margin-6: 24px;
--mlt-sys-margin-7: 28px;
--mlt-sys-margin-8: 32px;
--mlt-sys-margin-9: 36px;
--mlt-sys-margin-10: 40px;
102
103
104
105
106
107
108
109
110
111
112
113
--mlt-sys-padding-0: 0px;
--mlt-sys-padding-1: 4px;
--mlt-sys-padding-2: 8px;
--mlt-sys-padding-3: 12px;
--mlt-sys-padding-4: 16px;
--mlt-sys-padding-5: 20px;
--mlt-sys-padding-6: 24px;
--mlt-sys-padding-7: 28px;
--mlt-sys-padding-8: 32px;
--mlt-sys-padding-9: 36px;
--mlt-sys-padding-10: 40px;
114
115
116
117
118
--mlt-sys-border-radius-1: 1px;
--mlt-sys-border-radius-2: 2px;
--mlt-sys-border-radius-3: 4px;
--mlt-sys-border-radius-4: 6px;
119
120
121
122
123
124
125
--mlt-sys-width-0: 0px;
--mlt-sys-width-1: 1px;
--mlt-sys-width-2: 4px;
--mlt-sys-width-3: 8px;
--mlt-sys-width-4: 12px;
--mlt-sys-width-5: 16px;

## Página 56

126
127
128
129
130
131
--mlt-sys-width-6: 20px;
--mlt-sys-width-7: 24px;
--mlt-sys-width-8: 28px;
--mlt-sys-width-9: 32px;
--mlt-sys-width-10: 36px;
--mlt-sys-width-11: 40px;
Esa variables se usarán siempre en vez de poner directamente números
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
.boton {
font-family: var(--mlt-sys-font-default);
font-size: var(--mlt-sys-font-size-4);
padding: var(--mlt-sys-padding-3)
border-radius: var(--mlt-sys-border-radius-4);
border-width: var(--mlt-sys-width-1);
border-style: solid;
display: inline-block;
cursor: pointer;
text-decoration: none;
border-color: var(--mlt-sys-color-principal-5);
background-color: var(--mlt-sys-color-principal-5);
color: var(--mlt-sys-color-blanco-9);
}
El usar variable nos lleva a tener muchísimas variables en CSS lo que nos puede llevar a pensar si eso afectará
al rendimiento. En el documento CSS Variables performance benchmark 2021 nos indica que no afecta
prácticamente nada al rendimiento.
Algunas de las variables de colores en la página principal de google, ¿te suena de algo?:

## Página 57

Pero aun se tiene que mejorar la legibilidad del código . En vez de usar directamente las variables debemos abstraerlo:
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
.boton {
//Parte pública del componente
--boton-color-strong:var(--mlt-sys-color-principal-5);
--boton-color-weak:var(--mlt-sys-color-blanco-9);
--boton-background-color:var(--boton-color-strong);
--boton-border-color:var(--boton-color-strong);
--boton-text-color: var(--boton-color-weak);
--boton-font-family: var(--mlt-sys-font-default);
--boton-font-size: var(--mlt-sys-font-size-4);
--boton-padding: var(--mlt-sys-padding-3);
--boton-width:var(--mlt-sys-width-1);
--boton-border-radius:var(--mlt-sys-border-radius-4);
//Parte privada del componente
font-family: var(--boton-font-family);
font-size: var(--boton-font-size);
padding: var(--boton-padding);
border-radius: var(--boton-border-radius);
border-width: var(--boton-width);
border-style: solid;
display: inline-block;
cursor: pointer;

## Página 58

text-decoration: none;
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
border-color: var(--boton-border-color);
background-color: var(--boton-background-color);
color: var(--boton-text-color);
}
.boton--funcion-normal {
--boton-color-strong:var(--mlt-sys-color-principal-5);
}
.boton--funcion-alternativa {
--boton-color-strong: var(--mlt-sys-color-alternativo-5);
}
.boton--funcion-peligrosa {
--boton-color-strong: var(--mlt-sys-color-rojo-5);
}
.boton--importancia-primaria {
--boton-background-color:var(--boton-color-strong);
--boton-border-color:var(--boton-color-strong);
--boton-text-color: var(--boton-color-weak);
}
.boton--importancia-secundaria {
--boton-background-color:var(--boton-color-weak);
--boton-border-color:var(--boton-color-strong);
--boton-text-color: var(--boton-color-strong);
}
.boton--importancia-terciaria {
--boton-background-color:var(--boton-color-weak);
--boton-border-color:var(--boton-color-weak);
--boton-text-color: var(--boton-color-strong);
}
La variable –button-color-strong va a indicar el color del botón (independiente de donde se use). Esta variable se va a modificar
según la función del botón (normal, alternativa y peligrosa).
La variable –boton-color-weak es el otro color que se usa en el botón y es el blanco.
Por otro lado, las variables –boton-background-color, –boton-border-color, –boton-color definen como se ve el botón
independientemente del color. Estas variables se van a modificar según la importancia del botón (primaria, secundaria y terciaria)
Es decir que dentro del componente creamos una serie de variables publicas que se puede modificar fácilmente por cualquiera y
luego en las propiedades CSS se usan esas variable públicas. De esa forma cambiar el componente no afecta a la parte pública del
componente.
Utility Clases
Hemos visto como crear las variables para dejar de usar números en nuestras clases CSS pero actualmente para personalizar un
componentes se usas unas clases llamadas Utility clases.
Veamos un ejemplo
1 <button boton>Aceptar</button>
¿Pero que pasa si queremos que un botón en concreto tenga un tamaño mayor? Deberemos añadir style
1 <button boton style="font-size:var(--mlt-font-size-5);padding:var(--mlt-padding-4)">Ac

## Página 59

El problema de usar ésto es doble:
Es tedioso de escribir.
NO permite valores responsivos.
Para evitar eso se han creado las Utility clases.
1 <button boton class="g--font-size-5;g--padding-4">Aceptar</button>
Estas clases tienen el código CSS que habíamos puesto en style
1
2
3
4
5
6
.g--font-size-5 {
font-size:var(--mlt-font-size-5) !important;
}
.g--padding-4 {
padding:var(--mlt-padding-4) !important;
}
A estas clases pequeñas que solo hacen una única cosa se le llaman Utility clases y combinándolas se puede tener mucha versatilidad.
Sin embargo su uso debe ser usado sin excesos.
El framework CSS Tailwind CSS [https://tailwindcss.com/] es un framework que solo usa Utility clases.
Por otro lado Bootstrap [https://getbootstrap.com/] que está orientado a componentes también ha incorporado Utility clases en
Utility API [https://getbootstrap.com/docs/5.3/utilities/api/] y un ejemplo es Spacing
[https://getbootstrap.com/docs/5.3/utilities/spacing/]
Es uso de utility clases nos lleva a tener lo siguiente:
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
.g--font-size-1 {
font-size: var(--mlt-sys-font-size-1) !important;
}
.g--font-size-2 {
font-size: var(--mlt-sys-font-size-2) !important;
}
.g--font-size-3 {
font-size: var(--mlt-sys-font-size-3) !important;
}
.g--font-size-4 {
font-size: var(--mlt-sys-font-size-4) !important;
}
.g--font-size-5 {
font-size: var(--mlt-sys-font-size-5) !important;
}
.g--font-size-6 {
font-size: var(--mlt-sys-font-size-6) !important;
}
.g--font-size-7 {
font-size: var(--mlt-sys-font-size-7) !important;
}
.g--font-size-8 {
font-size: var(--mlt-sys-font-size-8) !important;
}
.g--font-size-9 {
font-size: var(--mlt-sys-font-size-9) !important;
}
.g--font-size-10 {
font-size: var(--mlt-sys-font-size-10) !important;
}
.g--font-size-11 {
font-size: var(--mlt-sys-font-size-11) !important;
}
.g--margin-0 {
margin: var(--mlt-sys-margin-0) !important;

## Página 60

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
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
}
.g--margin-1 {
margin: var(--mlt-sys-margin-1) !important;
}
.g--margin-2 {
margin: var(--mlt-sys-margin-2) !important;
}
.g--margin-3 {
margin: var(--mlt-sys-margin-3) !important;
}
.g--margin-4 {
margin: var(--mlt-sys-margin-4) !important;
}
.g--margin-5 {
margin: var(--mlt-sys-margin-5) !important;
}
.g--margin-6 {
margin: var(--mlt-sys-margin-6) !important;
}
.g--margin-7 {
margin: var(--mlt-sys-margin-7) !important;
}
.g--margin-8 {
margin: var(--mlt-sys-margin-8) !important;
}
.g--margin-9 {
margin: var(--mlt-sys-margin-9) !important;
}
.g--margin-10 {
margin: var(--mlt-sys-margin-10) !important;
}
.g--margin-horizontal-0 {
margin-left: var(--mlt-sys-margin-0) !important;
margin-right: var(--mlt-sys-margin-0) !important;
}
.g--margin-vertical-0 {
margin-top: var(--mlt-sys-margin-0) !important;
margin-bottom: var(--mlt-sys-margin-0) !important;
}
.g--margin-horizontal-1 {
margin-left: var(--mlt-sys-margin-1) !important;
margin-right: var(--mlt-sys-margin-1) !important;
}
.g--margin-vertical-1 {
margin-top: var(--mlt-sys-margin-1) !important;
margin-bottom: var(--mlt-sys-margin-1) !important;
}
.g--margin-horizontal-2 {
margin-left: var(--mlt-sys-margin-2) !important;
margin-right: var(--mlt-sys-margin-2) !important;
}
.g--margin-vertical-2 {
margin-top: var(--mlt-sys-margin-2) !important;
margin-bottom: var(--mlt-sys-margin-2) !important;
}
.g--margin-horizontal-3 {
margin-left: var(--mlt-sys-margin-3) !important;
margin-right: var(--mlt-sys-margin-3) !important;
}
.g--margin-vertical-3 {
margin-top: var(--mlt-sys-margin-3) !important;
margin-bottom: var(--mlt-sys-margin-3) !important;
}
.g--margin-horizontal-4 {
margin-left: var(--mlt-sys-margin-4) !important;
margin-right: var(--mlt-sys-margin-4) !important;
}
.g--margin-vertical-4 {

## Página 61

106
margin-top: var(--mlt-sys-margin-4) !important;
107
margin-bottom: var(--mlt-sys-margin-4) !important;
108
}
109
.g--margin-horizontal-5 {
110
margin-left: var(--mlt-sys-margin-5) !important;
111
margin-right: var(--mlt-sys-margin-5) !important;
112
}
113
.g--margin-vertical-5 {
114
margin-top: var(--mlt-sys-margin-5) !important;
115
margin-bottom: var(--mlt-sys-margin-5) !important;
116
}
117
.g--margin-horizontal-6 {
118
margin-left: var(--mlt-sys-margin-6) !important;
119
margin-right: var(--mlt-sys-margin-6) !important;
120
}
121
.g--margin-vertical-6 {
122
margin-top: var(--mlt-sys-margin-6) !important;
123
margin-bottom: var(--mlt-sys-margin-6) !important;
124
}
125
.g--margin-horizontal-7 {
126
margin-left: var(--mlt-sys-margin-7) !important;
127
margin-right: var(--mlt-sys-margin-7) !important;
128
}
129
.g--margin-vertical-7 {
130
margin-top: var(--mlt-sys-margin-7) !important;
131
margin-bottom: var(--mlt-sys-margin-7) !important;
132
}
133
.g--margin-horizontal-8 {
134
margin-left: var(--mlt-sys-margin-8) !important;
135
margin-right: var(--mlt-sys-margin-8) !important;
136
}
137
.g--margin-vertical-8 {
138
margin-top: var(--mlt-sys-margin-8) !important;
139
margin-bottom: var(--mlt-sys-margin-8) !important;
140
}
141
142
143
.g--margin-horizontal-9 {
margin-left: var(--mlt-sys-margin-9) !important;
margin-right: var(--mlt-sys-margin-9) !important;
144
}
145
146
147
.g--margin-vertical-9 {
margin-top: var(--mlt-sys-margin-9) !important;
margin-bottom: var(--mlt-sys-margin-9) !important;
148
}
149
150
151
.g--margin-horizontal-10 {
margin-left: var(--mlt-sys-margin-10) !important;
margin-right: var(--mlt-sys-margin-10) !important;
152
}
153
154
155
.g--margin-vertical-10 {
margin-top: var(--mlt-sys-margin-10) !important;
margin-bottom: var(--mlt-sys-margin-10) !important;
156
}
157
158
.g--margin-top-0 {
margin-top: var(--mlt-sys-margin-0) !important;
159
}
160
161
.g--margin-bottom-0 {
margin-bottom: var(--mlt-sys-margin-0) !important;
162
}
163
164
.g--margin-right-0 {
margin-right: var(--mlt-sys-margin-0) !important;
165
}
166
167
.g--margin-left-0 {
margin-left: var(--mlt-sys-margin-0) !important;
168
}
169
170
.g--margin-top-1 {
margin-top: var(--mlt-sys-margin-1) !important;
171
}
172
173
.g--margin-bottom-1 {
margin-bottom: var(--mlt-sys-margin-1) !important;

## Página 62

174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
}
.g--margin-right-1 {
margin-right: var(--mlt-sys-margin-1) !important;
}
.g--margin-left-1 {
margin-left: var(--mlt-sys-margin-1) !important;
}
.g--margin-top-2 {
margin-top: var(--mlt-sys-margin-2) !important;
}
.g--margin-bottom-2 {
margin-bottom: var(--mlt-sys-margin-2) !important;
}
.g--margin-right-2 {
margin-right: var(--mlt-sys-margin-2) !important;
}
.g--margin-left-2 {
margin-left: var(--mlt-sys-margin-2) !important;
}
.g--margin-top-3 {
margin-top: var(--mlt-sys-margin-3) !important;
}
.g--margin-bottom-3 {
margin-bottom: var(--mlt-sys-margin-3) !important;
}
.g--margin-right-3 {
margin-right: var(--mlt-sys-margin-3) !important;
}
.g--margin-left-3 {
margin-left: var(--mlt-sys-margin-3) !important;
}
.g--margin-top-4 {
margin-top: var(--mlt-sys-margin-4) !important;
}
.g--margin-bottom-4 {
margin-bottom: var(--mlt-sys-margin-4) !important;
}
.g--margin-right-4 {
margin-right: var(--mlt-sys-margin-4) !important;
}
.g--margin-left-4 {
margin-left: var(--mlt-sys-margin-4) !important;
}
.g--margin-top-5 {
margin-top: var(--mlt-sys-margin-5) !important;
}
.g--margin-bottom-5 {
margin-bottom: var(--mlt-sys-margin-5) !important;
}
.g--margin-right-5 {
margin-right: var(--mlt-sys-margin-5) !important;
}
.g--margin-left-5 {
margin-left: var(--mlt-sys-margin-5) !important;
}
.g--margin-top-6 {
margin-top: var(--mlt-sys-margin-6) !important;
}
.g--margin-bottom-6 {
margin-bottom: var(--mlt-sys-margin-6) !important;
}
.g--margin-right-6 {
margin-right: var(--mlt-sys-margin-6) !important;
}
.g--margin-left-6 {
margin-left: var(--mlt-sys-margin-6) !important;
}
.g--margin-top-7 {

## Página 63

242
margin-top: var(--mlt-sys-margin-7) !important;
243
}
244
.g--margin-bottom-7 {
245
margin-bottom: var(--mlt-sys-margin-7) !important;
246
}
247
.g--margin-right-7 {
248
margin-right: var(--mlt-sys-margin-7) !important;
249
}
250
.g--margin-left-7 {
251
margin-left: var(--mlt-sys-margin-7) !important;
252
}
253
.g--margin-top-8 {
254
margin-top: var(--mlt-sys-margin-8) !important;
255
}
256
.g--margin-bottom-8 {
257
margin-bottom: var(--mlt-sys-margin-8) !important;
258
}
259
.g--margin-right-8 {
260
margin-right: var(--mlt-sys-margin-8) !important;
261
}
262
.g--margin-left-8 {
263
margin-left: var(--mlt-sys-margin-8) !important;
264
}
265
.g--margin-top-9 {
266
margin-top: var(--mlt-sys-margin-9) !important;
267
}
268
.g--margin-bottom-9 {
269
margin-bottom: var(--mlt-sys-margin-9) !important;
270
}
271
.g--margin-right-9 {
272
margin-right: var(--mlt-sys-margin-9) !important;
273
}
274
.g--margin-left-9 {
275
margin-left: var(--mlt-sys-margin-9) !important;
276
}
277
278
.g--margin-top-10 {
margin-top: var(--mlt-sys-margin-10) !important;
279
}
280
281
.g--margin-bottom-10 {
margin-bottom: var(--mlt-sys-margin-10) !important;
282
}
283
284
.g--margin-right-10 {
margin-right: var(--mlt-sys-margin-10) !important;
285
}
286
287
.g--margin-left-10 {
margin-left: var(--mlt-sys-margin-10) !important;
288
}
289
290
291
292
293
294
.g--padding-0 {
padding: var(--mlt-sys-padding-1) !important;
295
}
296
297
.g--padding-1 {
padding: var(--mlt-sys-padding-2) !important;
298
}
299
300
.g--padding-2 {
padding: var(--mlt-sys-padding-3) !important;
301
}
302
303
.g--padding-3 {
padding: var(--mlt-sys-padding-4) !important;
304
}
305
306
.g--padding-4 {
padding: var(--mlt-sys-padding-5) !important;
307
}
308
309
.g--padding-5 {
padding: var(--mlt-sys-padding-6) !important;

## Página 64

310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
}
.g--padding-6 {
padding: var(--mlt-sys-padding-7) !important;
}
.g--padding-7 {
padding: var(--mlt-sys-padding-8) !important;
}
.g--padding-8 {
padding: var(--mlt-sys-padding-9) !important;
}
.g--padding-9 {
padding: var(--mlt-sys-padding-10) !important;
}
.g--padding-10 {
padding: var(--mlt-sys-padding-11) !important;
}
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
padding-right: var(--mlt-sys-padding-2) !important;
}
.g--padding-vertical-2 {
padding-top: var(--mlt-sys-padding-2) !important;
padding-bottom: var(--mlt-sys-padding-2) !important;
}
.g--padding-horizontal-3 {
padding-left: var(--mlt-sys-padding-3) !important;
padding-right: var(--mlt-sys-padding-3) !important;
}
.g--padding-vertical-3 {
padding-top: var(--mlt-sys-padding-3) !important;
padding-bottom: var(--mlt-sys-padding-3) !important;
}
.g--padding-horizontal-4 {
padding-left: var(--mlt-sys-padding-4) !important;
padding-right: var(--mlt-sys-padding-4) !important;
}
.g--padding-vertical-4 {
padding-top: var(--mlt-sys-padding-4) !important;
padding-bottom: var(--mlt-sys-padding-4) !important;
}
.g--padding-horizontal-5 {
padding-left: var(--mlt-sys-padding-5) !important;
padding-right: var(--mlt-sys-padding-5) !important;
}
.g--padding-vertical-5 {
padding-top: var(--mlt-sys-padding-5) !important;
padding-bottom: var(--mlt-sys-padding-5) !important;
}
.g--padding-horizontal-6 {
padding-left: var(--mlt-sys-padding-6) !important;
padding-right: var(--mlt-sys-padding-6) !important;
}

## Página 65

378
.g--padding-vertical-6 {
379
padding-top: var(--mlt-sys-padding-6) !important;
380
padding-bottom: var(--mlt-sys-padding-6) !important;
381
}
382
383
384
.g--padding-horizontal-7 {
padding-left: var(--mlt-sys-padding-7) !important;
padding-right: var(--mlt-sys-padding-7) !important;
385
}
386
387
388
.g--padding-vertical-7 {
padding-top: var(--mlt-sys-padding-7) !important;
padding-bottom: var(--mlt-sys-padding-7) !important;
389
}
390
391
392
.g--padding-horizontal-8 {
padding-left: var(--mlt-sys-padding-8) !important;
padding-right: var(--mlt-sys-padding-8) !important;
393
}
394
395
396
.g--padding-vertical-8 {
padding-top: var(--mlt-sys-padding-8) !important;
padding-bottom: var(--mlt-sys-padding-8) !important;
397
}
398
399
400
.g--padding-horizontal-9 {
padding-left: var(--mlt-sys-padding-9) !important;
padding-right: var(--mlt-sys-padding-9) !important;
401
}
402
403
404
.g--padding-vertical-9 {
padding-top: var(--mlt-sys-padding-9) !important;
padding-bottom: var(--mlt-sys-padding-9) !important;
405
}
406
407
408
.g--padding-horizontal-10 {
padding-left: var(--mlt-sys-padding-10) !important;
padding-right: var(--mlt-sys-padding-10) !important;
409
}
410
411
412
.g--padding-vertical-10 {
padding-top: var(--mlt-sys-padding-10) !important;
padding-bottom: var(--mlt-sys-padding-10) !important;
413
}
414
415
.g--padding-top--0 {
padding-top: var(--mlt-sys-padding-0) !important;
416
}
417
418
.g--padding-bottom-0 {
padding-bottom: var(--mlt-sys-padding-0) !important;
419
}
420
421
.g--padding-right-0 {
padding-right: var(--mlt-sys-padding-0) !important;
422
}
423
424
.g--padding-left-0 {
padding-left: var(--mlt-sys-padding-0) !important;
425
}
426
427
.g--padding-top--1 {
padding-top: var(--mlt-sys-padding-1) !important;
428
}
429
430
.g--padding-bottom-1 {
padding-bottom: var(--mlt-sys-padding-1) !important;
431
}
432
433
.g--padding-right-1 {
padding-right: var(--mlt-sys-padding-1) !important;
434
}
435
436
.g--padding-left-1 {
padding-left: var(--mlt-sys-padding-1) !important;
437
}
438
439
.g--padding-top--2 {
padding-top: var(--mlt-sys-padding-2) !important;
440
}
441
442
.g--padding-bottom-2 {
padding-bottom: var(--mlt-sys-padding-2) !important;
443
}
444
445
.g--padding-right-2 {
padding-right: var(--mlt-sys-padding-2) !important;

## Página 66

446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
}
.g--padding-left-2 {
padding-left: var(--mlt-sys-padding-2) !important;
}
.g--padding-top--3 {
padding-top: var(--mlt-sys-padding-3) !important;
}
.g--padding-bottom-3 {
padding-bottom: var(--mlt-sys-padding-3) !important;
}
.g--padding-right-3 {
padding-right: var(--mlt-sys-padding-3) !important;
}
.g--padding-left-3 {
padding-left: var(--mlt-sys-padding-3) !important;
}
.g--padding-top--4 {
padding-top: var(--mlt-sys-padding-4) !important;
}
.g--padding-bottom-4 {
padding-bottom: var(--mlt-sys-padding-4) !important;
}
.g--padding-right-4 {
padding-right: var(--mlt-sys-padding-4) !important;
}
.g--padding-left-4 {
padding-left: var(--mlt-sys-padding-4) !important;
}
.g--padding-top--5 {
padding-top: var(--mlt-sys-padding-5) !important;
}
.g--padding-bottom-5 {
padding-bottom: var(--mlt-sys-padding-5) !important;
}
.g--padding-right-5 {
padding-right: var(--mlt-sys-padding-5) !important;
}
.g--padding-left-5 {
padding-left: var(--mlt-sys-padding-5) !important;
}
.g--padding-top--6 {
padding-top: var(--mlt-sys-padding-6) !important;
}
.g--padding-bottom-6 {
padding-bottom: var(--mlt-sys-padding-6) !important;
}
.g--padding-right-6 {
padding-right: var(--mlt-sys-padding-6) !important;
}
.g--padding-left-6 {
padding-left: var(--mlt-sys-padding-6) !important;
}
.g--padding-top--7 {
padding-top: var(--mlt-sys-padding-7) !important;
}
.g--padding-bottom-7 {
padding-bottom: var(--mlt-sys-padding-7) !important;
}
.g--padding-right-7 {
padding-right: var(--mlt-sys-padding-7) !important;
}
.g--padding-left-7 {
padding-left: var(--mlt-sys-padding-7) !important;
}
.g--padding-top--8 {
padding-top: var(--mlt-sys-padding-8) !important;
}
.g--padding-bottom-8 {

## Página 67

514
padding-bottom: var(--mlt-sys-padding-8) !important;
515
}
516
.g--padding-right-8 {
517
padding-right: var(--mlt-sys-padding-8) !important;
518
}
519
.g--padding-left-8 {
520
padding-left: var(--mlt-sys-padding-8) !important;
521
}
522
.g--padding-top--9 {
523
padding-top: var(--mlt-sys-padding-9) !important;
524
}
525
.g--padding-bottom-9 {
526
padding-bottom: var(--mlt-sys-padding-9) !important;
527
}
528
.g--padding-right-9 {
529
padding-right: var(--mlt-sys-padding-9) !important;
530
}
531
532
.g--padding-left-9 {
padding-left: var(--mlt-sys-padding-9) !important;
533
}
534
535
.g--padding-top--10 {
padding-top: var(--mlt-sys-padding-10) !important;
536
}
537
538
.g--padding-bottom-10 {
padding-bottom: var(--mlt-sys-padding-10) !important;
539
}
540
541
.g--padding-right-10 {
padding-right: var(--mlt-sys-padding-10) !important;
542
}
543
544
.g--padding-left-10 {
padding-left: var(--mlt-sys-padding-10) !important;
545
}
Y muchas más clases CSS faltarían aun.
