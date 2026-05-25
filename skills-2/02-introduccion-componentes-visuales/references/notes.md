# Introducción a los componentes visuales

Fuente: `/Users/ainhoa/Downloads/2DAW/Lorenzo/Tema/1Eva.pdf`, páginas 15-23.

## Página 15

2. Introducción a los componentes visuales
Crear una aplicación de Angular
Instala Angular CLI v20
1 npm install @angular/cli@20 -g
Crea una aplicación de Angular
1 ng new prueba
Las preguntas que hacen se response de la siguiente forma:
Which stylesheet format would you like to use? : Sass (SCSS)
Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? : N
Do you want to create a 'zoneless' application without zone.js? : N
Which AI tools do you want to configure with Angular best practices? : None
Establecer el idioma y moneda
Una cosa importante que siempre hay que hacer en un proyecto de Angular es definir que el idioma y la moneda es 'es-ES' y
'EUR' para ello modificaremos el fichero app.config.ts
app.config.ts
1
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDete
2
import { provideRouter } from '@angular/router';
3
import { routes } from './app.routes';
4
5
import localeEs from '@angular/common/locales/es';
6
import { registerLocaleData } from '@angular/common';
7
import { LOCALE_ID,DEFAULT_CURRENCY_CODE } from '@angular/core';
8
9
registerLocaleData(localeEs);
10
11
12
13
14
15
16
17
export const appConfig: ApplicationConfig = {
providers: [
provideBrowserGlobalErrorListeners(),
provideZoneChangeDetection({ eventCoalescing: true }),
provideRouter(routes),
{provide: LOCALE_ID, useValue: 'es-ES' },
{provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
18
]
19
};
Ejecutar la App
Dentro de la carpeta del proyecto, ejecutar
1 ng serve
Navegar a http://localhost:4200 [http://localhost:4200]

## Página 16

2. Introducción a los componentes visuales [logongas]
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
Modifica el fichero app.html de forma que quede así:
<style>
</style>
<h1 >Hola mundo</h1>
<button >
Aceptar
</button>
<router-outlet />
Los dos ficheros importantes son:
app.ts: Es el fichero TypeScript que contiene la lógica del componente. Es la parte que hay que programar.
app.html: Es el fichero HTML que contiene como se muestra ese componente.
Vamos a dejar el componente de app de la siguiente forma
app.ts
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
}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
selector: 'app-root',
imports: [RouterOutlet],
templateUrl: './app.html',
styleUrl: './app.scss'
})
export class App {
protected readonly title = signal('prueba');
app.html
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
<style>
</style>
<h1 >Hola mundo</h1>
<button >
Aceptar
</button>
<router-outlet />
Añadir Angular Material
La librería que vamos a usar en este módulo es Angular Material [https://material.angular.dev/]
Para añadirla al proyecto se usa:
1 ng add @angular/material
Las preguntas que hacen se response de la siguiente forma:
Select a pair of starter prebuilt color palettes for your Angular Material theme : Azure/Blue

## Página 17

2. Introducción a los componentes visuales [logongas]
Para usar un componente,primero debes importarlo en TypeScript.
Lo primero es buscar el componente en https://material.angular.dev/components/categories
[https://material.angular.dev/components/categories] y una vez en el componente copiar el import que hay en la pestaña API.
Veamos el ejemplo con el componente Button [https://material.angular.dev/components/button/overview].
Navega a Button [https://material.angular.dev/components/button/overview] y pincha en la pestaña de API, copia lo siguiente:
1 import {MatButtonModule} from '@angular/material/button';
Ves al fichero app.ts pega lo que acabas de copiar.
En el array de imports añade lo que has importado; que es MatButtonModule:
1 imports: [RouterOutlet,MatButtonModule],
El fichero app.ts debe quedar así:
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
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
@Component({
selector: 'app-root',
imports: [RouterOutlet, MatButtonModule],
templateUrl: './app.html',
styleUrl: './app.scss'
})
export class App {
protected readonly title = signal('EjemploComponentesAngular');
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
}
Ahora ya puedes transformar un botón "normal" en un botón de Angular Material añadiendo el atributo matButton
<style>
</style>
<h1 >Hola mundo</h1>
<button matButton>
Aceptar
</button>
<router-outlet />
Personalizar componentes
1
2
3
4
5
6
7
8
9
Cambia para que sea matButton=
"filled" y verás como cambia el estilo del botón.
<style>
</style>
<h1 >Hola mundo</h1>
<button matButton="filled">
Aceptar
</button>

## Página 18

10 <router-outlet />
Vuelve a los ejemplos que hay en Button [https://material.angular.dev/components/button/overview] y prueba otros estilos de
botones
Prueba ahora a añadir un icono de Angular Material para ello ves a https://material.angular.dev/components/icon/overview
[https://material.angular.dev/components/icon/overview]
Y fíjate que ahora ya no se añade un atributo a una etiqueta HTML sino que directamente es la etiqueta mat-icon.
Design Tokens
Vamos a ver como personalizar los componentes de Angular Material. Para personalizarlo se usa el concepto llamado "Tokens de
diseño" que no son más que propiedades CSS de los componentes.
El la documentación del componente Button está la pestaña de styling [https://material.angular.dev/components/button/styling] que
contiene una descripción de todos los Tokens de diseño que podemos modificar.
Para el componente Button, los tokens están agrupados en estos 3 grupos (realmente está agrupados en mixins de sass:
fab-overrides: Para los botones que solo son iconos y parecen que estén como flotando sobre la página por eso se
llaman Floating Action Button (FAB)
icon-button-overrides: Para los iconos de los botones
button-overrides: Para cada botón.
Para cada grupo (mixing) hay una serie de tokens de diseño. Vamos a ver algún ejemplo con button-overrides:
filled-label-text-size: El tamaño de fuente para botones filled.
outlined-label-text-size: El tamaño de fuente para botones outlined.
¿Como cambiamos entonces esos valores? Pues creamos una clase CSS en SASS con lo siguiente:
1
2
3
4
5
6
7
8
@use '@angular/material' as mat;
.botones-grandes {
@include mat.button-overrides((
filled-label-text-size: 20px,
outlined-label-text-size: 20px
));
}
Si queremos que sea para todos los componentes no hay más que hacer:
1
2
3
4
5
6
7
8
@use '@angular/material' as mat;
html {
@include mat.button-overrides((
filled-label-text-size: 20px,
outlined-label-text-size: 20px
));
}
Actualmente en Angular Material 20, todos esos Tokens de diseño realmente se transforman en variables CSS
Veamos algunos ejemplos:
Para botones filled
filled-container-color: Color del fondo
filled-label-text-color: Color del texto
filled-container-shape: Es el border radious
filled-horizontal-padding: El padding horizontal

## Página 19

filled-label-text-size: Tamaño de fuente
Para botones outlined
outlined-label-text-color: Color del texto
outlined-outline-color: Color del borde
outlined-state-layer-color: Color del fondo al hacer "hover"
outlined-container-shape: Es el border radious
outlined-horizontal-padding: El padding horizontal
outlined-label-text-size: Tamaño de fuente
Para botones text
text-label-text-color: Color del texto
text-state-layer-color: Color del fondo al hacer "hover"
text-container-shape: Es el border radious
text-horizontal-padding: El padding horizontal
text-label-text-size: Tamaño de fuente
Propiedades CSS
Para botones filled
–mat-button-filled-container-color
–mat-button-filled-label-text-color
–mat-button-filled-container-shape
–mat-button-filled-horizontal-padding
–mat-button-filled-label-text-size
Para botones outlined
–mat-button-outlined-label-text-color
–mat-button-outlined-outline-color
–mat-button-outlined-state-layer-color
–mat-button-outlined-container-shape
–mat-button-outlined-horizontal-padding
–mat-button-outlined-label-text-size
Para botones text
–mat-button-text-label-text-color
–mat-button-text-state-layer-color
–mat-button-text-container-shape
–mat-button-text-horizontal-padding
–mat-button-text-label-text-size
System Tokens
Resulta que si vemos el código CSS que usa Angular Material para los Design Tokens, podemos comprobar que es de la siguiente
forma:
filled
1
2
3
4
5
background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
border-radius:var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
outlined
1
2
3
4
5
6
color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
background-color:var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size))

## Página 20

1
2
3
4
5
2. Introducción a los componentes visuales [logongas]
color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
background-color:var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
border-radius:var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
padding: 0 var(--mat-button-text-horizontal-padding, 12px);
font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
Es decir que hay una serie de variable CSS globales que afectan a todo Angular Material. Esas variables CSS globales se llaman
System Tokens. Y que como vemos empieza por –mat-sys:
–mat-sys-primary
–mat-sys-on-primary
–mat-sys-corner-full
–mat-sys-outline
–mat-sys-label-large-size
¿Como podemos saber el listado completo de variables globales (System Tokens)? Creando una paleta nueva Custom Color
Palettes [https://material.angular.dev/guide/theming#custom-color-palettes] mediante ng generate @angular/material:theme-color
pero indicando que la queremos CSS y no SASS
La pregunta importante es que No queremos SASS
logongas@beren:~/Documentos/ensenyament/2daw-diw/EjemploComponentesAngular$ ng generate @angular/material:theme-
color
✔ What HEX color should be used to generate the M3 theme? It will represent your primary color palette. (ex.
#ffffff) #1979E6
✔ What HEX color should be used represent the secondary color palette? (Leave blank to use generated colors from
Material) #E67519
✔ What HEX color should be used represent the tertiary color palette? (Leave blank to use generated colors from
Material)
✔ What HEX color should be used represent the neutral color palette? (Leave blank to use generated colors from
Material)
✔ What HEX color should be used represent the neutral variant palette? (Leave blank to use generated colors from
Material)
✔ What HEX color should be used represent the error palette? (Leave blank to use generated colors from Material)
✔ Do you want to generate high contrast value override mixins for your themes?. Providing a high contrast
version of your theme when a user specifies helps increase the accesibility of your application. No
✔ What is the directory you want to place the generated theme file in? (Enter the relative path such as
'src/app/styles/' or leave blank to generate at your project root) src/app/styles/variables
material.css
_
✔ Do you want the generated file to be a scss file? This is the recommended way of setting up theming in your
application. If not, a CSS file will be generated with all the system variables defined. (Leave blank to
generate a scss file) No
CREATE src/app/styles/variables
_
material.csstheme.css (13578 bytes)
Y generará un fichero CSS con todas las variables (System Tokens) , un ejemplo es este fichero: variables_material.csstheme.css
Pero para modificar los System Tokens no deberíamos modificar directamente las variables de ese fichero sino usando el mixing
de crear un tema mat.theme
Al añadir Angular Material se añade el siguiente código en styles.scss
styles.scss
1
2
3
4
5
6
7
html {
@include mat.theme((
color: (
primary: mat.$azure-palette,
tertiary: mat.$blue-palette
),
typography: Roboto,

## Página 21

9
10
}
valores
2. Introducción a los componentes visuales [logongas]
density: 0,
));
Pues si queremos definir algún System Tokens no tenemos que añadir más que un map con los System Tokens y sus nuevos
styles.scss
1
html {
2
@include mat.theme((
3
color: (
4
primary: mat.$azure-palette,
5
tertiary: mat.$blue-palette
6
7
8
9
10
11
12
),
typography: Roboto,
density: 0,
),(
corner-full:6px,
label-large-size: 30px
));
13
}
Vemos en el ejemplo que ahora el border-radious sería de 6px al haber cambiado el valor del System Token corner-full,
mientras que el tipo de letra grande ahora sería de 30px al haber definido el System Token de label-large-size
Paletas de colores
Para terminar nuestra personalización de Angular Material, nos hace falta definir los colores.
En Angular Material hay 5 tipos de colores pero los importantes son:
primary : El color principal
secondary: Otro color para diferenciarse un poco del primario pero que no destaca , se usa para que todo no tenga el
mismo color y no sea todo tan uniforme
tertiary: Es el color que queremos que destaque sobre el primario.
Para generar nuestra paleta de colores tenemos que volver a usar el comando ng generate @angular/material:theme-color
pero esta vez si que le diremos que sea SASS y definiremos los colores que queremos.
ng generate @angular/material:theme-color
✔ What HEX color should be used to generate the M3 theme? It will represent your primary color palette. (ex.
#ffffff) #57BF40
✔ What HEX color should be used represent the secondary color palette? (Leave blank to use generated colors from
Material) #A840BF
✔ What HEX color should be used represent the tertiary color palette? (Leave blank to use generated colors from
Material) #40BDBF
✔ What HEX color should be used represent the neutral color palette? (Leave blank to use generated colors from
Material)
✔ What HEX color should be used represent the neutral variant palette? (Leave blank to use generated colors from
Material)
✔ What HEX color should be used represent the error palette? (Leave blank to use generated colors from Material)
✔ Do you want to generate high contrast value override mixins for your themes?. Providing a high contrast
version of your theme when a user specifies helps increase the accesibility of your application. No
✔ What is the directory you want to place the generated theme file in? (Enter the relative path such as
'src/app/styles/' or leave blank to generate at your project root) src/app/styles/colores-verde-morado-
azulPastel.scss
✔ Do you want the generated file to be a scss file? This is the recommended way of setting up theming in your
application. If not, a CSS file will be generated with all the system variables defined. (Leave blank to
generate a scss file) Yes
CREATE src/app/styles/colores-verde-morado-azulPastel.scss
_
theme-colors.scss (2555 bytes)
En el ejemplo se ha creado el fichero _colores-verde-morado-azulPastel.scss_theme-colors.scss
_colores-verde-morado-azulPastel.scss_theme-colors.scss

## Página 22

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
2. Introducción a los componentes visuales [logongas]
// This file was generated by running 'ng generate @angular/material:theme-color'.
// Proceed with caution if making changes to this file.
@use 'sass:map';
@use '@angular/material' as mat;
// Note: Color palettes are generated from primary: #4084BF, secondary: #B5BF40, tert
$_palettes: (
primary: (0: #000000,10: #001d34,20: #003355,25: #003e66,30: #004a78,35: #00568b,40
secondary: (0: #000000,10: #1b1d00,20: #2f3300,25: #3a3f00,30: #454a00,35: #515700,
tertiary: (0: #000000,10: #410005,20: #68000d,25: #7a0a15,30: #8b191f,35: #9b2629,4
neutral: (0: #000000,10: #111d26,20: #26323b,25: #313d46,30: #3c4852,35: #48545e,40
neutral-variant: (0: #000000,10: #101d27,20: #25323c,25: #303d47,30: #3b4853,35: #4
error: (0: #000000,10: #410005,20: #68000d,25: #790c16,30: #8a1a20,35: #9a272a,40:
);
$_rest: (
secondary: map.get($_palettes, secondary),
neutral: map.get($_palettes, neutral),
neutral-variant: map.get($_palettes, neutral-variant),
error: map.get($_palettes, error),
);
$primary-palette: map.merge(map.get($_palettes, primary), $_rest);
$tertiary-palette: map.merge(map.get($_palettes, tertiary), $_rest);
Este fichero crea las variables SASS con las paletas de colores.
$primary-palette
$tertiary-palette
Cada paleta (variable de SASS) ya incluye además los colores secondary, neutral, neutral-variant y error.
Y ahora ya podemos usarlos para crear nuestro tema con nuestros colores y nuestros System Tokens
styles.scss
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
html {
@include mat.theme((
color: (
primary: $primary-palette,
tertiary: $tertiary-palette
),
typography: Roboto,
density: 0,
),(
corner-full:6px,
label-large-size: 30px
));
}
El ejemplo completo con todo el código se puede ver en GitHub en https://github.com/lgonzalezmislata/personalizar-angular-
material [https://github.com/lgonzalezmislata/personalizar-angular-material]
Más información
Customizing Angular Material Buttons with Design Tokens - Part 1 [https://www.youtube.com/watch?v=ppNEwZ8RYgk]:
Personalizar los colores de los botones
Can Angular Material Buttons Really Look Like shadcn? (Part 2) [https://www.youtube.com/watch?v=3D5sl-ChI9g]:
Personalizar la forma de los botones
Angular Customizable Dashboard with Material 3 [https://www.youtube.com/playlist?list=PLHbz-DWIAPJAUZSossNgj6-
ds1MwSL2f
_]: Lista de reproducción
Angular Material 3 Theming: Design Tokens and System Variables [https://konstantin-denerz.com/angular-material-3-theming-
design-tokens-and-system-variables/]

## Página 23

System Tokens [https://material.angular.dev/guide/theming#system-tokens]
