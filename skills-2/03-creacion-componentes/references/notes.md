# Creación de componentes

Fuente: `/Users/ainhoa/Downloads/2DAW/Lorenzo/Tema/1Eva.pdf`, páginas 24-45.

## Página 24

3. Creación de componentes
En este tema vamos a crear nuevo componentes de Angular
Crear tu nuevo componente botón
Vamos a crear nosotros un nuevo componente boton.
Para ello vamos a crear los 3 ficheros que necesitas todo componente:
boton/boton.ts: El código TypeScript que tiene la lógica del botón
boton/boton.html: El HTML correspondiente al botón
boton/boton.scss: Los estilos en SASS del botón. Por ahora es simplemente estilos CSS.
Los 3 ficheros los crearás dentro de la carpeta src/app/components/ui
src/
└─ minecraft/
└─ components/
├─ ui/
│ ├─ boton/
│ │ ├─ boton.ts
│ │ ├─ boton.html
│ │ └─ boton.scss
│ └─ panel/
└─ paginas/
├─ minecraft-main/
│ ├─ minecraft-main.ts
│ ├─ minecraft-main.html
│ └─ minecraft-main.scss
└─ productos/
├─ productos.ts
├─ productos.html
└─ productos.scss
El contenido de cada uno de ellos será:
boton.ts
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
import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
selector: 'boton',
imports: [CommonModule],
templateUrl: './boton.html',
styleUrl: './boton.scss'
export class Boton {
})
}
La parte más importante es el objeto que se le pasa al decocador @Componente. Veamos sus propiedades:
selector: Es la etiqueta que usaremos cuando queramos usar el componente. <boton></boton>
imports: Importamos otros componentes para poder usarlos dentro del HTML del componente.

## Página 25

styleUrl: El nombre del fichero SCSS de estilos
boton.html
1 <button class="boton">Aceptar</button>
3. Creación de componentes [logongas]
boton.scss
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
font-family: sans-serif;
font-size: 16px;
padding: 6px;
border-radius: 6px;
border-width: 1px;
border-style: solid;
display: inline-block;
cursor: pointer;
text-decoration: none;
border-color: #0056b8;
background-color: #0056b8;
color: #ffffff;
}
Usando un componente
Como ya hicimos en el tema anterior, hay que importarlo en el .ts donde quedamos usarlo y añadirlo al array de imports.
Primero lo importamos en el app.ts.
Primero lo importamos en el app.ts.
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
16
17
}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Boton } from './shared/ui/boton/boton';
@Component({
selector: 'app-root',
imports: [RouterOutlet, MatButtonModule,Boton],
templateUrl: './app.html',
styleUrl: './app.scss'
})
export class App {
protected readonly title = signal('EjemploComponentesAngular');
Y ahora ya podemos usar la etiquetya <boton></boton> en el app.html
app.html
1
2
3
4
5
6
<style>
</style>
<h1 >Hola mundo</h1>
<button matButton="filled">

## Página 26

8
9
10
11
12
13
14
15
3. Creación de componentes [logongas]
Aceptar
</button>
<br>
<br>
<boton></boton>
<router-outlet />
Contenido de la etiqueta
Nuestros botones es muy pobre porque no permite indicar el texto del botón. Para poder hacerlo simplemente hay que usar la
etiqueta <ng-content></ng-content> en el boton.html
boton.html
1
2
3
<button class="boton">
<ng-content></ng-content>
</button>
Y ahora ya podremos cambiar el texto:
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
11
12
13
14
15
<style>
</style>
<h1 >Hola mundo</h1>
<button matButton="filled">
Aceptar
</button>
<br>
<br>
<boton>Hola mundo</boton>
<router-outlet />
Personalizar del componente
Vamos ahora añadir atributos a nuestro componente para poder personalizarlo. Para ello vamos a añadir propiedades a la clase
TypeScript del componente con el decorador Input()
Nuestro objetivo es poder hacer lo siguiente:
1 <boton [backgroundColor]="'#FF0000'" [color]="'#00FF00'">Hola mundo</boton>
Lo primero es añadir las propiedades backgroundColor y color a la clase Boton.
boton.ts
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
import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
selector: 'boton',
imports: [CommonModule],
templateUrl: './boton.html',
styleUrl: './boton.scss'
})
export class Boton {
@Input() backgroundColor: string = '#0B5CD5';

## Página 27

13
}
3. Creación de componentes [logongas]
@Input() color: string = '#F5F7FF';
Para usarlas en el boton.html hay 3 formas distintas:
Directamente interpolando los valores:
boton.html
1
2
3
<button class="boton" style="color:{{color}};background-color:{{backgroundColor}}">
<ng-content></ng-content>
</button>
Usando [style] de Angular:
boton.html
1
2
3
<button class="boton" [style.color]="color" [style.backgroundColor]="backgroundColor">
<ng-content></ng-content>
</button>
Usando [ngStyle] de Angular:
boton.html
1
2
3
<button class="boton" [ngStyle]="{'color': color, 'background-color': backgroundColor}
<ng-content></ng-content>
</button>
Por último lo ideal siempre es usar clases CSS y evitar usar style:
boton.html
1
2
3
<button class="boton" [ngClass]="[colorClass, backgroundClass]">
<ng-content></ng-content>
</button>
boton.html
1
2
3
<button class="boton color--{{color}} background--{{backgroundColor}}">
<ng-content></ng-content>
</button>
boton.html
1
2
3
<button class="boton" [ngClass]="['color--'+color, 'background--'+backgroundColor]">
<ng-content></ng-content>
</button>
Pero en ese caso hay que limitar los posibles valores, definir las clases, relacionarlas con las propiedades TypeScript. Esto lo
veremos en el siguiente apartado.
Limitando los valores
En el apartado anterior hemos visto como definir los colores de los botones pero como vimos en el primer tema, realmente hay
únicamente unos valores de colores que puede haber

## Página 28

Así que realmente lo que queremos es solo definir la función del botón.De forma que se use de la siguiente manera:
app.html
1 <boton [funcion]="'peligrosa'">Hola mundo</boton>
Por lo tanto el atributo del botón va a ser funcion con los posibles valores de 'normal' | 'alternativa' | 'peligrosa' .
boton.html
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
import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
selector: 'boton',
imports: [CommonModule],
templateUrl: './boton.html',
styleUrl: './boton.scss'
})
export class Boton {
@Input() funcion:'normal' | 'alternativa' | 'peligrosa'='normal';
}
Ahora hay que definir las clases CSS en el archivo boton.scss
boton.scss
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
.boton {
font-family: sans-serif;
font-size: 16px;
padding: 6px;
border-radius: 6px;
border-width: 1px;
border-style: solid;
display: inline-block;
cursor: pointer;
text-decoration: none;
border-color: #0056b8;
background-color: #0056b8;
color: #ffffff;
}
.funcion--normal {
border-color: #0056b8;
background-color: #0056b8;
color: #ffffff;
}
.funcion--alternativa {
border-color: #ed8936;
background-color: #ed8936;
color: #ffffff;
}
.funcion--peligrosa {
border-color: #c53030;
background-color: #c53030;
color: #ffffff;
}
Y por último relacionamos la propiedad TypScript funcion con las clases CSS en el HTML de la siguiente forma:

## Página 29

1
2
3
<button class="boton funcion--{{funcion}}">
<ng-content></ng-content>
</button>
3. Creación de componentes [logongas]
Notar el truco de class=
"funcion–{{funcion}}"
Otra forma alternativa sería:
boton.html
1
2
3
<button class="boton" [ngClass]="['funcion--'+funcion]">
<ng-content></ng-content>
</button>
Acción de href
Por último vamos a añadir acciones al botón, como el onClick y el href
Para crear el atributo href hay que hacer 3 cambios:
Añadir la propiedad href a la clase Boton
Usar la propiedad en el HTML
Cambiar de tipo <button> a <a>
boton.ts
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
import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
selector: 'boton',
imports: [CommonModule],
templateUrl: './boton.html',
styleUrl: './boton.scss'
})
export class Boton {
@Input() funcion:'normal' | 'alternativa' | 'peligrosa'='normal';
@Input() href:string=
"";
}
boton.html
1
2
3
<a class="boton funcion--{{funcion}}" [attr.href]="href || null">
<ng-content></ng-content>
</a>
Hay que destacar que además de usar ahora href también hemos cambiado la etiqueta a <a>.
Hemos puesto
[attr.href]=
"href || null"
en vez de simplemente
href={{ href }}
porque si no hay nada en href, no se añadirá el atributo

## Página 30

3. Creación de componentes [logongas]
Queremos que se ejecute la función alerta() de nuestra aplicación al pulsar en el botón.
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
16
17
18
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
alerta() : void {
alert('Hola mundo');
}
}
En el HTML lo indicaremos así
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
11
12
13
14
15
<style>
</style>
<h1 >Hola mundo</h1>
<button matButton="filled">
Aceptar
</button>
<br>
<br>
<boton [funcion]="'peligrosa'" (onClick)="alerta()" >Hola mundo</boton>
<router-outlet />
Para ello tenemos que hacer 3 cosas en el botón:
Decir que vamos a emitir un evento
Emitir el evento desde TypeScript
Enlazar el click de <a> con el TS
boton.ts
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
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
selector: 'boton',
imports: [CommonModule],
templateUrl: './boton.html',
styleUrl: './boton.scss'
})
export class Boton {
@Input() funcion:'normal' | 'alternativa' | 'peligrosa'='normal';
@Input() href:string=
"";
@Output() onClick = new EventEmitter<void>();

## Página 31

15
16
17
18
19
}
3. Creación de componentes [logongas]
handleOnClick(): void {
this.onClick.emit();
}
boton.html
<a class="boton funcion--{{funcion}}" [attr.href]="href || null" (click)="handleOnClic
<ng-content></ng-content>
</a>
1
2
3
Filtros
Angular permite modificar los datos cuando se interpolan en el html.
currency [https://angular.dev/api/common/CurrencyPipe] : Permite mostrar un número como una moneda. En nuestro caso
mostrará el símbolo del "€"
1 <p>{{precio | currency}}</p>
date [https://angular.dev/api/common/DatePipe] : Permite formatear una fecha
1 <p>{{fechaCompra | date:'shortDate'}}</p>
Los formatos predefinidos de fecha se pueden ver en Pre-defined format options [https://angular.dev/api/common/DatePipe#pre-
defined-format-options]
Ejercicios
Ejercicio 1
Usando el elemento HTML de <progress> [https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/progress].
1
2
3
<label for="file">File progress:</label>
<progress id="file" max="100" value="70">70%</progress>
Crea el componente <progreso>
1
2
3
<progreso [title]="'File progress:'" [porcentajeRealizado]="70" />
<boton (onClick)="incrementar()">Incrementar 10</boton>
y que muestre:
Añade en la página un botón de forma que al pulsarlo se incremente en 10 el valor.
Para generar los id se usa la librería uuid
1
2
1
2
3
npm install uuid
npm install --save-dev @types/uuid
import { v4 as uuidv4 } from 'uuid';
class MiClase{

## Página 32

4
5
6
7
8
9
uniqueId: string;
constructor() {
this.uniqueId =uuidv4();
}
}
Ejercicio 2
Crea un componente llamado panel que permita hacer los siguientes paneles
Y crea una página HTML donde se vean los paneles.
Ejercicio 3
Crea ahora un componente para crear los siguientes botones:
Importancia
Función Primaria Secundaria Terciaria
Normal
Alternativa
Peligrosa

## Página 33



## Página 34

asir
fhw
1eval
2eval
3eval
Fundamentos de Hardware
daw
daw
diw
1eval
2eval
Despliegue de Aplicaciones Web
1eval
1. El diseño web
2. Introducción a los componentes visuales
3. Creación de componentes
3. Creación de componentes: Atributos
3. Creación de componentes: BEM
4. CSS
5. SASS
6. Flex y Grid
7. Arquitectura
8. Diseño Responsivo
2eval
Diseño de interfaces Web
proyecto
si
1eval
Proyecto
1eval
2eval
3eval
Sistemas Informáticos
iabd
pia
1eval
2eval
experimentos
matematicas
proyectos
Documentación
Programación de Inteligencia Artificial
linux
bash
Discos
log
Linux
systemd
xargs
Zona Horaria

## Página 35

3. Creación de componentes: Atributos
Hemos visto como crear un componente que genera todo el HTML:
1 <boton funcion="peligrosa" (onClick)="alerta()" >Hola mundo</boton>
Sin embargo este componente tiene dos problemas.
No podemos elegir si genera un <a> o <button>
No es tan personlizable porque no podemos cambiar nada sino es modificando el propio componente botón.
Para mejorar eso, podríamos modificar el componente botón y hacer que solo fuera un atributo de la siguiente forma:
1 <a boton funcion="peligrosa" (click)="alerta()" >Hola mundo</a>
¿Que hemos ganado ahora? Pues que tenemos ahora toda la potencia del tag <a>. Y podemos hacer cosas como la siguientes sin
modificar el componente <boton>:
1 <a boton funcion="peligrosa" routerLink="/login" style="padding:var(-mlt-sys-padding-2
Es decir podemos añadir todos los atributos que habría en un <a> sin perder la funcionalidad de un <boton>.
Empecemos desde el principio del :
boton.ts
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
import {Component, Input, ViewEncapsulation} from '@angular/core';
@Component({
selector: 'button[boton], a[boton]',
template: '<ng-content></ng-content>',
styleUrl: './boton.scss',
encapsulation: ViewEncapsulation.None
})
export class Boton {
@Input() funcion:'normal' | 'alternativa' | 'peligrosa'='normal';
}
El valor del selector ahora es button[boton], a[boton]. Y es para decir que se aplica este componente cuando un tag
<a> o un <boton> tiene el atributo boton.
Ya no usamos templateUrl sino template que es paraa indicar directamente la plantilla en vez referenciar un fichero. Y lo
hacemos porque ahora la plantilla es solo '<ng-content></ng-content> y no necesitamos un fichero solo para eso.
Por último decimos en encapsulation que ahora los estilos ya no son privados a nuestro componente sino que son
"públicos". Eso nos genera un problema porque tenemos las clases CSS funcion–normal tanto en <boton> como en
<panel>. Y son distintos
Etiqueta Host
¿Que queremos que haga realmente nuestro componente? Pues simplemente es establecer el valor del atributo class, pero en el
tag que ha escrito el usuario . Es decir que el el que está "fuera" en la página HTML. A ese tag se le llama Host.
Veamos unos ejemplo de que es Host
Host hace referencia a la etiqueta <a>
1 <a boton funcion="peligrosa" routerLink="/login" style="padding:var(-mlt-sys-padding-2

## Página 36

Host hace referencia a la etiqueta <button>
1 <button boton funcion="peligrosa" >Hola mundo</button>
@HostBinding
Pues lo que queremos es que nuestro componente modifique el atributo class de nuestro host. Pues para ello usamos el
decorador de Angular @HostBinding(hostPropertyName?: string) [https://angular.dev/api/core/HostBinding]
boton.ts
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
import {Component, Input, ViewEncapsulation, HostBinding} from '@angular/core';
@Component({
selector: 'button[boton], a[boton]',
template: '<ng-content></ng-content>',
styleUrl: './boton.scss',
encapsulation: ViewEncapsulation.None
})
export class Boton implements OnChanges {
@Input() funcion:'normal' | 'alternativa' | 'peligrosa'='normal';
@HostBinding('class')
get clazz(): string {
return `boton funcion-${this.funcion}`;
}
}
El decorador @HostBinding('class') hace que el valor de la propiedad class siempre sea el valor que tiene la propiedad clazz
Recuerda que clazz es una propiedad solo que calculada a través de la función clazz()
1
2
3
get clazz(): string {
return `boton funcion-${this.funcion}`;
}
El problema aquí el que no podríamos tener valores en class en el Host ya que la propiedad clazz elimina lo que hay y pone los
datos de únicamente nuestras clases.
Es decir que el siguiente ejemplo no funcionaría, ya que eliminaría g–bg-color-verde-5:
1 <a boton class="g--background-color-verde-5">Hola mundo</a>
Aunque si que funcionaría el siguiente ya que nuestro componente no modifica ni el atributo routerLink ni style:
1 <a boton routerLink="/login" style="padding:var(-mlt-sys-padding-2)">Hola mundo</a>
Así que ¿como lo arreglamos? Pues retornando un objeto con las clases que vamos a añadir en vez de un string y de esa forma
no se modifica lo que ya hay.
boton.ts
1
2
3
4
5
6
7
import {Component, Input, ViewEncapsulation, HostBinding} from '@angular/core';
@Component({
selector: 'button[boton], a[boton]',
template: '<ng-content></ng-content>',
styleUrl: './boton.scss',
encapsulation: ViewEncapsulation.None

## Página 37

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
3. Creación de componentes: Atributos [logongas]
})
export class Boton {
@Input() funcion:'normal' | 'alternativa' | 'peligrosa'='normal';
@HostBinding('class')
get clazz(): Record<string, boolean> {
return {
'boton': true,
'funcion--normal': this.funcion === 'normal',
'funcion--alternativa': this.funcion === 'alternativa',
'funcion--peligrosa': this.funcion === 'peligrosa',
};
}
}
Ahora retornamos un objeto con las clases CSS que podrían haber y son un booleano indicando si está finalmente o no, dejando
sin tocar el resto de clases.
Fíjate en que el tipo de datos de la propiedad clazz es Record<string, boolean> que es simplemente como
decir que retorna { [key: string]: boolean }. Que significa que es un objeto cuyas claves son un string y
cuyos valores son un boolean.
La definición de Record es exactamente la siguiente:
1
2
3
type Record<K extends keyof any, T> = {
[P in K]: T;
};
Mas información:
Level up your TypeScript with Record types [https://blog.logrocket.com/typescript-record-types/]
ViewEncapsulation
Nos falta por explicar el valor de encapsulation que depende del enumerado ViewEncapsulation
[https://angular.dev/api/core/ViewEncapsulation]
boton.ts
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
import {Component, Input, ViewEncapsulation, HostBinding} from '@angular/core';
@Component({
selector: 'button[boton], a[boton]',
template: '<ng-content></ng-content>',
styleUrl: './boton.scss',
encapsulation: ViewEncapsulation.None
})
export class Boton {
@Input() funcion:'normal' | 'alternativa' | 'peligrosa'='normal';
@Input() importancia : 'primaria' | 'secundaria' | 'terciaria'="primaria";
@HostBinding('class')
get clazz(): Record<string, boolean> {
return {
'boton': true,
'funcion--normal': this.funcion === 'normal',
'funcion--alternativa': this.funcion === 'alternativa',
'funcion--peligrosa': this.funcion === 'peligrosa',

## Página 38

23
24
25
}
3. Creación de componentes: Atributos [logongas]
};
}
El enumerado ViewEncapsulation [https://angular.dev/api/core/ViewEncapsulation] indica la visibilidad de los estilos CSS de un
componente.
ViewEncapsulation.None : Los estilos CSS del componente son visibles desde cualquier otra parte de la aplicación es
como hacer los estilos CSS como públicos.
ViewEncapsulation.ShadowDom : Los estilos CSS del componente solo se pueden ver en las etiquetas del propio template
del componente es como hacer los estilos CSS como privados. Para implementarlo se usa el API de Shadow DOM del
navegador.
ViewEncapsulation.Emulated : Los estilos CSS del componente solo se pueden ver en las etiquetas del propio template
del componente es como hacer los estilos CSS como privados. Para implementarlo se ocupa Angular sin el soporte del
navegador. Este es el valor por defecto.
Existe ViewEncapsulation.Emulated además de ViewEncapsulation.ShadowDom ya que el soporte del API de Shadow DOM en el
navegador ha sido muy malo durante mucho tiempo.
¿Porque es importante ahora esta propiedad y porque la hemos cambiado a ViewEncapsulation.None?
Resulta que si ponemos el valor por defecto de ViewEncapsulation.Emulated o su alternativa ViewEncapsulation.ShadowDom los
estilos solo se pueden usar en los tag que hay dentro de template. Sin embargo , con el cambio que hemos hecho , los estilos CSS
se van a usar ahora fuera de los tags de template porque los vamos a usar en Host, así que es necesario hacer los estilos CSS
públicos, no encapsularlos y por lo tanto usar ViewEncapsulation.None
Vale, pero ahora tenemos un problema. Tenemos las clases CSS funcion–normal tanto en <boton> como en <panel>. Y son
distintos. Por lo tanto debemos cambiar los estilos de los componentes para que no choquen entre los distintos componentes.
Para evitar que choquen los nombres de los estilos CSS entre los distintos componentes se usan las nomenclaturas de:
BEM [https://getbem.com/]
SUIT CSS [https://suitcss.github.io/]
Más adelante en el curso se explicará en que consisten estas nomenclaturas.
Pero los estilos ahora quedan de la siguiente forma:
boton.scss
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
.boton {
font-family: sans-serif;
font-size: 16px;
padding: 6px;
border-radius: 6px;
border-width: 1px;
border-style: solid;
display: inline-block;
cursor: pointer;
text-decoration: none;
border-color: #0056b8;
background-color: #0056b8;
color: #ffffff;
}
.boton--funcion-normal {
border-color: #0056b8;
background-color: #0056b8;
color: #ffffff;

## Página 39

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
}
}
}
3. Creación de componentes: Atributos [logongas]
.boton--funcion-alternativa {
border-color: #ed8936;
background-color: #ed8936;
color: #ffffff;
.boton--funcion-peligrosa {
border-color: #c53030;
background-color: #c53030;
color: #ffffff;
Y el código queda finalmente así:
boton.ts
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
import {Component, Input, ViewEncapsulation, HostBinding} from '@angular/core';
@Component({
selector: 'button[boton], a[boton]',
template: '<ng-content></ng-content>',
styleUrl: './boton.scss',
encapsulation: ViewEncapsulation.None
})
export class Boton {
@Input() funcion:'normal' | 'alternativa' | 'peligrosa'='normal';
@HostBinding('class')
get clazz(): Record<string, boolean> {
return {
'boton': true,
'boton--funcion-normal': this.funcion === 'normal',
'boton--funcion-alternativa': this.funcion === 'alternativa',
'boton--funcion-peligrosa': this.funcion === 'peligrosa',
};
}
}
clase/daw/diw/1eval/tema03.b.txt · Última modificación: 2025/11/03 11:37 por 127.0.0.1

## Página 40

3. Creación de componentes: BEM
Vamos ahora a ver lo mas importante de todo el módulo. ¡Como organizar nuestras clases CSS!. Antes de empezar puede leer este artículo que habla sobre la importancia de una arquitectura CSS:
¿Por qué nos olvidamos de la Arquitectura CSS? [https://www.paradigmadigital.com/techbiz/por-que-nos-olvidamos-de-arquitectura-css/]
Arquitectura CSS
Cuando nos enfrentamos a proyectos grandes, puede que nuestros compañeros no entiendan nuestras líneas de código, para eso se crearon las arquitecturas de CSS.
Los objetivos son:
Predecible: Escribir reglas claras.
Reutilizable: No escribir código redundante.
Mantenible: Que sea fácil de leer y adaptarnos a los estándares.
Escalable: Que pueda crecer fácilmente pero sin afectar el rendimiento.
Buenas prácticas
Establecer reglas para que el equipo se entienda.
Explicar la estructura base o dar los fundamentos del proyecto a un nuevo integrante.
Evitar hojas de estilo muy extensas.
Tener una buena documentación explicando ciertos aspectos del código.
BEM
Como arquitectura CSS vamos a seguir durante todo el curso una llamada BEM [http://getbem.com/].
OOCSS, BEM, SMACSS, ITCSS y Atomic Design [https://platzi.com/tutoriales/1640-frontend-developer-2019/9913-oocss-bem-smacss-itcss-y-atomic-design/]
Bloques y Elementos
Lo primero es identificar los bloques de nuestra página. Esos bloque son como componentes u objetos que la página. En las siguientes imágenes podemos ver ejemplos de bloques.
Vemos que un bloque puede o no tener dentro otro bloque. En bloque "head" tiene dentro muchos bloques.
Como los bloques pueden ser muy complejos, cada bloque puede tener si lo necesita de "elementos". Veamos un ejemplo:
El componentes de "Tab" tiene 4 pestañas.
Por último nos quedarían los modificadores que luego veremos.
Así que BEM significa lo siguiente:

## Página 41

Bloque
Elemento
Modificador
Así que vamos a tener clases CSS que serán de tipo Bloque, de tipo Elemento o de tipo Modificador. Pasemos a ver un ejemplo.
Imaginar el siguiente panel:
Su HTML sería una cosa así:
1
2
3
4
5
6
7
<div>
<div>Cabecera</div>
<div>
<p>Contenido</p>
<p>Mas contenido</p>
</div>
</div>
Todo ese HTML forma el bloque "Panel" que está compuesto dos por elementos "Titulo" y "Contenido". Así que las clases CSS van a ser las siguientes
Bloque: panel
Elemento: panel__titulo
Elemento: panel__contenido
1
2
3
4
5
6
7
<div class="c-panel">
<div class="c-panel__titulo">Cabecera</div>
<div class="c-panel__contenido">
<p>Contenido</p>
<p>Mas contenido</p>
</div>
</div>
Como vemos el nombre de la clase CSS de un bloques es como el nombre del bloque con el prefijo "c-". Mientras que el nombre de un elemento es como el nombre del elemento prefijado con el
nombre del bloque y "__". Es importante recordar que son necesarias las "__". No se puede poner otra cosa que no sea eso.
¿Que ocurre con el tag <p>. No forma parte del panel . Es otro bloque que podemos meter dentro del panel pero no forma parte del bloque "panel".
Veamos otro ejemplo con un botón:
Solo hay un bloque llamado "c-boton" y no hay elementos.
1 <div class="c-boton">Mas información</div>
Por último nos faltan los modificadores. Imaginar que queremos que el panel pueda tener varios colores:
Modificadores
¿Como modificamos el CSS para incluir esos nuevos colores? Pues con un modificador.

## Página 42

2
3
4
5
6
7
<div class="c-panel c-panel--warning">
<div class="c-panel__titulo c-panel__titulo--warning">Cabecera</div>
<div class="c-panel__contenido c-panel__contenido--warning">
<p>Contenido</p>
<p>Mas contenido</p>
</div>
</div>
3. Creación de componentes: BEM [logongas]
Vemos que hemos añadido a todas las clases una nueva clase que se llama igual a la que ya hay pero acabada "–warning". Pues bien , esa nueva clases, es el modificador. El modificador realmente se
llama "warning" pero para que se sepamos que es un modificador y para saber a que bloque o elemento pertenece se separa por "–" (dos guiones) al nombre del bloque o elemento.
Así que pasemos ahora a ver una serie de reglas:
En cada tag solo puede haber una clase de bloque o de elemento
Las clases de elemento siempre estarán en un tag que está dentro de otro tag de tipo bloque.
Un elemento o un bloque puede tener mas clases CSS siempre que sean de tipo modificador y que sean modificadores del bloque o elemento al que pertenecen.
BEM
<div class="block"></div>
<div class="block">
<div class="block__element">
<div class="block__element">
</div>
<div class="block block--modifier">
<div class="block__element block__element--modifier">
<div class="block__element block__element--modifier">
</div>
source [https://ray.so/?
title=BEM&theme=candy&spacing=128&background=true&darkMode=false&code=PGRpdiBjbGFzcz0iYmxvY2siPjwvZGl2PgoKPGRpdiBjbGFzcz0iYmxvY2siPgogIDxkaXYgY2xhc3M9ImJsb2NrX19lbGVtZW50
CjwvZGl2PgogCjxkaXYgY2xhc3M9ImJsb2NrIGJsb2NrLS1tb2RpZmllciI-
CiAgPGRpdiBjbGFzcz0iYmxvY2tfX2VsZW1lbnQgYmxvY2tfX2VsZW1lbnQtLW1vZGlmaWVyIj4KICA8ZGl2IGNsYXNzPSJibG9ja19fZWxlbWVudCBibG9ja19fZWxlbWVudC0tbW9kaWZpZXIiPgo8L2Rpdj4KIC
Hemos visto que los bloques empiezan por "c-" , eso es porque son como componentes visuales. Veamos los prefijos que pueden haber:
c-: Para bloques que son componentes visuales. Como paneles, botones, árboles, etc.
l-: Para bloques que son de Layout. El layout es un tipo de bloque que solo se dedica a indicar como se colocan otros bloques dentro de él. Sirve para organizar los divs dentro de la página.
Un componente visual también dice como se organizan sus elementos dentro de la página pero no se dedica en exlusiva a colocar cosas.
Dentro de los modificadores hay de otro tipo que es el modificador global que empieza por g– (la letra g y dos guiones). Es un modificador que se puede usar con cualquier componente. Se suele
usar para definir cosas como los margenes, los paddings, etc. De esa forma no es necesario tener el mismo modificador en cada componente.
Veamos ahora un ejemplo un poco mas complejo
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
<body class="c-body">
<div class="l-page">
<div class="l-page__header">
<img class="c-logo">
<div class="c-menu">
<div class="c-menu__item ">Nuevo</div>
<div class="c-menu__item menu__item--active">Editar</div>
<div class="c-menu__item menu__item--disable">Borrar</div>
</div>
</div>
<div class="l-page__body">
<form class="c-form g--margin-4 g--margin-bottom-6">
<input class="c-input" >
<input class="c-input" >
<input class="c-input" >
<button class="c-button c-button--primary c-button--normal">Guardar</button>
</form>
</div>
<div class="l-page__footer">
<div class="l-horizontal">
<img class="c-social" src="facebook.png">
<img class="c-social" src="youtube.png">
<img class="c-social" src="instagram.png">
<img class="c-social" src="twitter.png">
</div>
</div>
</div>
</body>
Están los siguientes bloques de tipo componentes y sus elementos:
c-body
c-logo

## Página 43

3. Creación de componentes: BEM [logongas]
c-menu__item
c-form
c-input
c-button
c-social
Luego están los Layouts
l-page
l-horizontal
Están los modificadores de cada componente o elemento
c-menu__item
menu__item--active
menu__item--disable
c-button
c-button–primary
c-button–normal
Y por último están los modificadores globales:
g–margin-4
g–margin-bottom-6
Sobre BEM hay mucha documentación, aquí os dejo varios links para que podáis entenderlo mejor:
Metodología BEM
BEM 101 [https://css-tricks.com/bem-101/]
Una introducción a la metodología BEM [https://webdesign.tutsplus.com/es/articles/an-introduction-to-the-bem-methodology--cms-19403]
BEM: A New Front-End Methodology [https://www.smashingmagazine.com/2012/04/a-new-front-end-methodology-bem/]
BEM by Example [https://seesparkbox.com/foundry/bem
_
by_
example]
BEM Methodology [https://en.bem.info/methodology/]
CSS and Beers is Awesome.Presentación
Video:Buenas prácticas en arquitecturas CSS. Codemotion [https://youtu.be/qnSbqv6rqx4]
Vídeo:Guía rápida para escribir CSS mantenible y escalable. Codemotion [https://youtu.be/07lk3GLKoa4]
Normandy is a CSS boilerplate that gives you an initial structure for your CSS [https://github.com/calidae/normandy-css/blob/master/README.md]
Tailwind versus BEM [https://thoughtbot.com/blog/tailwind-versus-bem]
BEM Avanzado
Battling BEM CSS: 10 Common Problems And How To Avoid Them [https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-
avoid-them/]
BEMIT: Taking the BEM Naming Convention a Step Further. BEM+ITCSS [https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/]
More Transparent UI Code with Namespaces [https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/]
ABEM. A more useful adaptation of BEM. [https://css-tricks.com/abem-useful-adaptation-bem/]
Thoughtful CSS Architecture [https://seesparkbox.com/foundry/thoughtful
css
_
_
architecture]
Otras metodologías o arquitecturas.
CSS Guidelines [http://cssguidelin.es/]
Scalable and Modular Architecture for CSS (SMACSS) [https://smacss.com/book/]
CSS Architecture [https://philipwalton.com/articles/css-architecture/]
ITCSS: Scalable and Maintainable CSS Architecture [https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/]
Ejercicios
Ejercicio 1.A
Crea un componente que tenga lo siguiente:

## Página 44

La imagen es esta: monitor.webp [https://logongas.es/lib/exe/fetch.php?cache=&media=clase:daw:diw:1eval:monitor.webp]
Los caracteres de la estrella y el camión son:
⭐
🚚
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
<c-articulo
nombre="Monitor Acer Nitro KG241YX3BIP 23.8' FHD 200Hz VA FreeSync Premium HDR10"
urlImagen="https://logongas.es/lib/exe/fetch.php?cache=&media=clase:daw:diw:1eval:monitor.webp"
[precioActual]="89.99"
[precioAnterior]="99.99"
[valoracion]="4.6"
[numeroOpiniones]="1472"
[fechaEntrega]="fechaEntrega"
[precioEnvio]="0.00"
[otrosEnvios]="true"
/>
c-articulo.ts
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
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
selector: 'c-articulo',
imports: [CommonModule],
templateUrl: './c-articulo.html',
styleUrl: './c-articulo.scss'
})
export class CArticulo {
@Input() nombre:string=
"";
@Input() urlImagen:string=
"";
@Input() precioActual:number=0;
@Input() precioAnterior:number=0;
@Input() valoracion:number=0;
@Input() numeroOpiniones:number=0;
@Input() fechaEntrega:Date=new Date();
@Input() precioEnvio:number=0;
@Input() otrosEnvios:boolean=false;
}
c-articulo.html
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
<div class="c-articulo">
<img class="c-articulo__image" src="{{urlImagen}}" >
<h3 class="c-articulo__title">{{nombre}}</h3>
<p class="g--margin-vertical-2">
<span class="c-articulo__precio c-articulo__precio--actual">{{precioActual | currency}}</span>
&nbsp;
<span class="c-articulo__precio c-articulo__precio--anterior">{{precioAnterior | currency}}</span>
</p>
<p>
<span class="c-articulo__valoracion">{{valoracion}}/5</span>&nbsp;
<span class="g--font-size-4">⭐</span>&nbsp;
<span class="c-articulo__opiniones">{{numeroOpiniones}} opiniones</span>
</p>
<p class=
"">
🚚&nbsp;
<span class="c-articulo__entrega c-articulo__entrega--positivo">{{precioEnvio | currency}}</span>&nbsp;
<span class="c-articulo__entrega c-articulo__entrega--negativo">{{fechaEntrega| date:'shortDate'}}</span>
</p>
<p class="c-articulo__otras-opciones g--margin-top-2">
Otras opciones disponibles
</p>
</div>
c-articulo.scss
1
2
3
4
5
6
7
8
9
.c-articulo {
font-family: "Open Sans", Arial, sans-serif;
width: 197px;
color: #333;
&__title {
font-size: 14px;
font-weight: 500;
color: #333;

## Página 45

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
58
59
60
3. Creación de componentes: BEM [logongas]
}
&__precio {
&--actual {
font-size: 17px;
font-weight: 700;
color: #bf0019;
}
&--anterior {
font-size: 14px;
color: #6e6e6e;
text-decoration: line-through;
}
&-envio {
color: #ff7a00;
font-weight: 600;
}
}
&__valoracion {
font-size: 13px;
font-weight: 600;
color: #333;
}
&__opiniones {
color: #333333;
font-size: 13px;
}
&__entrega {
font-size: 13px;
font-weight: 700;
&--positivo {
color: #008000;
}
&--negativo {
color: #333333;
}
}
&__otras-opciones {
font-size: 13px;
color: #777;
font-weight: 600;
}
}
Ejercicio 1.B
Modifica ahora el componente para que
Si los gastos de envío
Son 0€ se muestre "Entrega gratis." de color verde
Sino que no es muestre nada.
Si la fecha de entrega es
Mañana que muestre "Recíbelo mañana" en color verde
Sino mostrara "Recíbelo a partir del jueves 13 de noviembre" en color negro. (Obviamente hay que poner la fecha de entrega en letras)
Si no hay precio anterior que no lo muestre
Si no hay otras opciones disponibles que no muestre el texto
clase/daw/diw/1eval/tema03.c.txt · Última modificación: 2025/11/10 11:52 por Lorenzo
