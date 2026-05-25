# Tema 02 - Módulos y Componentes

Fuente: `teoria.pdf`, páginas 1 a 13.

## 1. Módulos

En Angular, un módulo es una clase decorada con `@NgModule` que agrupa
componentes, directivas, pipes y servicios relacionados.

### Ideas clave

- Sirven para organizar la aplicación en bloques cohesivos.
- Facilitan la gestión y el mantenimiento del proyecto.
- Actúan como contenedores de componentes y servicios.
- Una aplicación Angular puede verse como un árbol jerárquico de módulos.
- Desde un módulo raíz se enlazan otros módulos mediante importaciones.

### Decoradores

Un decorador es una función especial que añade metadatos a una clase,
propiedad o método. Se escribe justo encima del elemento decorado con la forma
`@NombreDecorador`.

### Cambio a partir de Angular 17

En versiones anteriores a Angular 17 era habitual que la aplicación tuviera un
módulo principal como `app.module.ts`.

A partir de Angular 17, Angular recomienda usar componentes `standalone`, que
no dependen de un módulo para declararse. En ese enfoque, cada componente
importa directamente lo que necesita.

### Creación manual de módulos

Si se quiere crear un módulo manualmente con CLI:

```bash
ng g m nombre_modulo
```

Ejemplo básico:

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class Modulo1Module {}
```

## 2. Componentes

Los componentes son los bloques básicos de construcción de una aplicación Angular.
Tienen dos partes principales:

- una parte visual en HTML, llamada vista
- una parte funcional en TypeScript, llamada controlador

Según la configuración del proyecto, un componente puede estar repartido en uno
o varios archivos, normalmente:

- archivo TypeScript del componente
- archivo HTML de plantilla
- archivo de estilos
- archivo de pruebas

## 2.1. El controlador (`.component.ts`)

Los componentes son clases TypeScript decoradas con `@Component()`.
Ese decorador recibe un objeto con metadatos de configuración.

### Ejemplo típico

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
```

### Qué hace el componente

- Define una nueva etiqueta HTML reutilizable.
- Puede ser usado dentro de otros componentes.
- El componente raíz se consume desde `index.html`.

### Importaciones habituales

- `Component`: necesario para usar el decorador `@Component`.
- `RouterOutlet`: permite usar el router dentro de la aplicación.

### Propiedades importantes de `@Component`

- `selector`: nombre de la etiqueta HTML que representa al componente.
- `standalone`: indica que el componente no depende de un módulo.
- `imports`: dependencias que el componente necesita importar.
- `templateUrl`: ruta del archivo HTML de la plantilla.
- `template`: alternativa para escribir la plantilla directamente en el decorador.
- `styleUrls` o `styleUrl`: ruta de los estilos del componente.

### Qué contiene la clase del componente

La clase exportada del componente incluye:

- propiedades y variables que representan el estado
- métodos que modifican el estado
- métodos que responden a eventos

## 2.2. La vista (`.component.html`)

La vista se define con HTML y puede usar capacidades propias de Angular.

### Elementos que puede incluir

- estructura HTML
- data binding
- directivas Angular

### Función de la vista

- definir la estructura visual del DOM
- conectar propiedades del componente con la plantilla
- añadir comportamiento mediante directivas

Angular genera inicialmente una plantilla mínima cuando se crea un componente.

## 2.3. Creación de componentes

Para crear un componente con Angular CLI:

```bash
ng g c nombre_componente
```

Buena práctica indicada en la teoría:

- agrupar componentes dentro de una carpeta específica
- mantener una organización clara dentro de `src`

Ejemplo de organización:

- `src/components/componente1`
- `src/components/componente2`

## 2.4. Uso de componentes

Para usar un componente se emplea su `selector`.

### Caso del componente raíz

El componente raíz arranca la aplicación. Su selector habitual es:

```html
<app-root></app-root>
```

Ese selector se usa dentro de `index.html`.

### Caso de componentes no raíz

Para usar un componente dentro de otro:

1. se importa el componente en el archivo TypeScript
2. se añade a la propiedad `imports` del decorador `@Component`
3. se utiliza su selector en el HTML

Ejemplo de importación:

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './Components/componente1/componente1.component';
import { Componente2Component } from './Components/componente2/componente2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente1Component, Componente2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
```

Ejemplo de uso en plantilla:

```html
<h2>App Component</h2>
<app-componente1></app-componente1>
<app-componente2></app-componente2>
```

### Idea importante

Si un componente no está importado en `imports`, Angular no reconocerá su
selector en la plantilla.

Esto establece una relación padre-hijo entre componentes y permite anidar
interfaces de forma ordenada.

## 2.5. Ciclo de vida de los componentes

Los componentes Angular tienen un ciclo de vida con distintas etapas, desde su
creación hasta su destrucción.

### Hooks principales

1. `ngOnChanges`: se ejecuta cuando cambian propiedades de entrada.
2. `ngOnInit`: se ejecuta una vez tras inicializar el componente.
3. `ngDoCheck`: permite comprobaciones personalizadas tras detección de cambios.
4. `ngAfterContentInit`: se ejecuta al inicializar el contenido proyectado.
5. `ngAfterContentChecked`: se ejecuta cuando Angular verifica ese contenido.
6. `ngAfterViewInit`: se ejecuta al inicializar la vista del componente.
7. `ngAfterViewChecked`: se ejecuta tras verificar cambios en la vista.
8. `ngOnDestroy`: se ejecuta antes de destruir el componente.

### Uso habitual de los hooks

- `ngOnChanges`: reaccionar a cambios en `@Input`.
- `ngOnInit`: inicializar datos una vez disponible el componente.
- `ngDoCheck`: aplicar lógica propia de detección de cambios.
- `ngAfterContentInit` y `ngAfterContentChecked`: trabajar con contenido hijo.
- `ngAfterViewInit` y `ngAfterViewChecked`: trabajar con la vista ya renderizada.
- `ngOnDestroy`: limpiar recursos, cancelar suscripciones y evitar fugas de memoria.

### Recomendación práctica de la teoría

Lo más habitual es:

- usar el constructor para inyección de dependencias
- usar `ngOnInit` para inicializar la lógica apoyada en esas dependencias
- usar `ngOnDestroy` para desuscribirse de observables y liberar recursos

### Ejemplo simple

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  constructor() {
    console.log('Se ejecuta constructor');
  }

  ngOnInit() {
    console.log('Se ejecuta ngOnInit');
  }
}
```

## 3. Proceso de arranque

### Angular moderno sin módulos

Desde Angular 17, si se trabaja sin módulos, el arranque se hace:

- indicando en `main.ts` cuál es el componente raíz
- incluyendo el selector del componente raíz en `index.html`

En este proyecto actual eso se refleja con esta estructura:

- `src/main.ts` arranca la aplicación
- `src/index.html` contiene `<app-root></app-root>`
- `src/app/app.ts` define el componente raíz

### Angular anterior a la versión 17

En el enfoque clásico:

- `AppModule` era el módulo principal
- el arranque apuntaba a `AppModule`
- dentro de `AppModule` se indicaba que `AppComponent` era el componente raíz

## Resumen operativo para este proyecto

Para `PREPARACION-EXAMEN`, esta primera parte de teoría fija estas bases:

- usar componentes como unidad principal de construcción
- mantener cada componente con responsabilidad clara
- preferir componentes `standalone`
- importar explícitamente dependencias en cada componente
- usar el componente raíz solo como punto de entrada y composición general
- preparar la estructura para anidación de componentes padre-hijo
