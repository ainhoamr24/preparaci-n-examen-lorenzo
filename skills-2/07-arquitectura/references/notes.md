# Arquitectura

Fuente: `/Users/ainhoa/Downloads/2DAW/Lorenzo/Tema/1Eva.pdf`, páginas 96-99.

## Página 96

7. Arquitectura
Vamos finalmente a unificar todo y crear la arquitectura definitiva que vamos a usar en clase.
Para crear una buena arquitectura vamos a hacer lo siguiente:
Indicar a Angular que el proyecto es en Español
Añadir Angular Material
Crear el CSS común a todo el proyecto
Crear los Componentes reusables de Angular
Crear las páginas del proyecto.
Indicar a Angular que el proyecto es en Español
Véase: establecer_el_idioma_y_moneda
Usar Angular Material
Véase: anadir_angular_material
src/app/scss
/01
utilities
_
/02
base
_
/03
_
components
/04
_global
main.scss
src/app/components/ui
/c-button
/c-panel
src/app/components/paginas
/main
/productos
/login
Crear el CSS común a todo el proyecto
Se tiene que crear la carpeta src/app/scss donde irá todo nuestro SASS. El fichero que contendrá todo el SASS es
src/app/scss/main.scss
En el fichero styles.scss añadir la linea siguiente para que Angular sepa donde está nuestro SASS:
styles.scss
1 @use './app/scss/main.scss' as *;
Dentro de la carpeta src/app/scss , habrá la siguiente estructura de ficheros:
src/app/scss
/01
utilities
_
variables.scss
_
functions.scss
_
mixins.scss
_
index.scss
_
/02
base
_

## Página 97

reset.scss
_
_
typography.scss
index.scss
_
/03
_
components
cada
uno
de
los
_
_
_
_
_
componentes.scss
index.scss
_
/04
_global
cada
una
de
los
modificadores
_
_
_
_
_
_globales.scss
index.scss
_
main.scss
La explicación de cada carpeta es la siguiente:
1
2
3
1
2
1
2
3
4
1
2
3
4
/01_utilities
_variables.scss: Variables de SASS como por ejemplo los colores o tamaños de margen ,etc
_functions.scss: Funciones de SASS
_mixins.scss: Mixins de SASS
_index.scss: Los imports de cada fichero de esta carpeta.
@forward "./_variables.scss";
@forward "./_functions.scss";
@forward "./_mixins.scss";
/02_base
_reset.scss: El reset que usemos
_typography.scss: Para importar tipos de letra
_index.scss: Los imports de cada fichero de esta carpeta.
@forward "./_reset.scss";
@forward "./_typography.scss";
/03_components
_cada_uno_de_los_componentes.scss: Habrá un fichero por cada Bloque que sea de tipo Componente pero que
NO sean de Angular. Por ejemplo _
c-button.scss, _
l-flex.scss , _
l-columns.scss o
_
c-panel.scss. Más
información en 3. Creación de componentes: BEM , 4. CSS, 5. SASS, 6. Flex y Grid
_index.scss: Los imports de cada fichero de esta carpeta.
@forward "./_c-button.scss";
@forward "./_c-panel.scss";
@forward "./_l-columns.scss";
@forward "./_l-flex.scss";
/04_global
_cada_una_de_los_modificadores globales.scss: Habrá un fichero por cada tipo de modificador que haya. Por
ejemplo _g–margin.scss, _g–padding.scss, _
font-size.scss o
color.scss. Más información en 3. Creación de
_
componentes: BEM , 4. CSS, 5. SASS
_index.scss: Los imports de cada fichero de esta carpeta.
@forward "./color";
@forward "./font-size";
@forward "./margin";
@forward "./padding";
main.scss: Aquí se agrupa todo el código de SASS y es el único fichero que se transforma en CSS.
main.scss
1
2
3
@forward "./02_base";
@forward "./03_components";
@forward "./04_global";

## Página 98

Dentro de cada fichero .scss que use algo de las utilidaes (como variables, SASS, funciones o utilidades) se añadirá la referencia a
las utilidades con la siguiente linea:
1 @use "../01_utilidades/index" as utilidades;
Al crear el CSS/SASS es importante seguir las directrices de:
BEM: 3. Creación de componentes: BEM
Variables: variables_css
Crear los Componentes reusables de Angular
Ahora hay que crear la carpeta donde estarán nuestros componentes de Angular. Para ello crearemos la carpeta
src/app/components/ui. En esta carpeta deben estar todos los componentes reusables por toda la aplicación.
src/app/components/ui
/c-button
c-button.ts
c-button.html
c-button.scss
/c-panel
c-panel.ts
c-panel.html
c-panel.scss
/l-flex
l-flex.ts
l-flex.html
l-flex.scss
Para crear el SCSS se seguirán las mismas normas que al crear el SCSS común a todo el proyecto.
Más información en:
3. Creación de componentes
3. Creación de componentes: Atributos
3. Creación de componentes: BEM
4. CSS
5. SASS
6. Flex y Grid
Notar la diferencia por ejemplo entre el fichero src/app/scss/03
_
components/l-flex y la carpeta
src/app/components/ui/l-flex
src/app/scss/03
_
components/l-flex: Estamos creando clases CSS para flex
src/app/components/ui/l-flex: Estamos creando componentes o atributos Angular para flex
Lo normal es que esté uno o el otro. Lo mismo se podría aplicar a cualquier otro layout o componentes como
c-button.
Crear las páginas del proyecto.
Finalmente en la carpeta src/app/components/paginas, añadiremos todos los componentes específicos de la aplicación. Aquí es
donde se hace uso de los distintos elementos reusables que creamos en src/app/components/ui

## Página 99
