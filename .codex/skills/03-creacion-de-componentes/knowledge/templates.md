# Templates

## Proyeccion de contenido

El tema usa `ng-content` para que el consumidor determine el texto o contenido interior del boton sin duplicar componentes.

## Componentes basados en atributo

La fuente evoluciona el boton hacia un atributo aplicable a elementos que ya aportan semantica, como enlace o boton. De este modo se conserva la capacidad nativa del elemento host.

## Host y clases

Se documenta `HostBinding` para aplicar clases al host. El material advierte que sustituir la clase completa puede eliminar clases existentes; una asignacion compatible debe conservar otras utilidades aplicadas.

## Buenas practicas

- Mantener templates breves y semanticos.
- Proyectar contenido cuando la estructura lo admite.
- Aplicar clases de variante sin destruir clases externas legitimas.

## Ejemplo

```typescript
// boton.ts — componente basado en atributo con @HostBinding (Tema 03: Atributos)
import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'button[boton], a[boton]',
  template: '<ng-content></ng-content>',
  styleUrl: './boton.scss',
  encapsulation: ViewEncapsulation.None
})
export class Boton {
  @Input() funcion: 'normal' | 'alternativa' | 'peligrosa' = 'normal';

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
```

```scss
/* boton.scss — clases BEM en vez de funcion--* para evitar colisiones */
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
}

.boton--funcion-alternativa {
  border-color: #ed8936;
  background-color: #ed8936;
  color: #ffffff;
}

.boton--funcion-peligrosa {
  border-color: #c53030;
  background-color: #c53030;
  color: #ffffff;
}
```

```html
<!-- El consumidor elige button o a segun la semantica correcta -->
<button boton funcion="peligrosa">Eliminar</button>
<a boton funcion="normal" routerLink="/login">Iniciar sesión</a>

<!-- Clases externas no se eliminan gracias a Record<string, boolean> -->
<a boton class="g--background-color-verde-5">Hola mundo</a>
```

## Por que ViewEncapsulation.None

Con `ViewEncapsulation.None` los estilos del componente son globales (publicos). Esto es necesario cuando los estilos se aplican en el Host (etiqueta exterior) y no en el template interior. Sin ello los estilos BEM del boton no alcanzarian el elemento `<button>` o `<a>` que escribio el consumidor.

## Pendiente

El uso futuro de sintaxis de control `@if`, `@for` o `@switch` procede de la convencion global del proyecto, no de este tramo del PDF.

