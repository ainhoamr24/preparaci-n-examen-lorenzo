# Componentes Angular

## Teoria

El tema crea un boton como componente visual formado por logica TypeScript, template HTML y SCSS. Para usar un componente, debe importarse en el componente que lo consume.

## Reglas practicas

- Un componente debe representar una responsabilidad visual reconocible.
- Mantiene separados logica, estructura y estilo cuando el template no sea trivial.
- Define su selector y dependencias de template de forma explicita.
- No dupliques el mismo componente dentro de varias paginas.

## Ejemplo conceptual

Un boton reutilizable recibe su variante funcional; una pagina decide cuando mostrarlo, no redefine sus estilos.

## Errores comunes

- No importar el componente antes de utilizarlo.
- Crear un componente para contenido que solo pertenece a una pagina.
- Introducir colores libres en lugar de variantes documentadas.

## Ejemplo

```typescript
// boton.ts — estructura del componente (Tema 03)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'boton',
  imports: [CommonModule],
  templateUrl: './boton.html',
  styleUrl: './boton.scss'
})
export class Boton {

}
```

```html
<!-- boton.html — proyeccion de contenido con ng-content -->
<button class="boton">
  <ng-content></ng-content>
</button>
```

```typescript
// Con @Input funcion (variante tipada)
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'boton',
  imports: [CommonModule],
  templateUrl: './boton.html',
  styleUrl: './boton.scss'
})
export class Boton {
  @Input() funcion: 'normal' | 'alternativa' | 'peligrosa' = 'normal';
}
```

```html
<!-- boton.html — clase CSS derivada del input -->
<button class="boton funcion--{{funcion}}">
  <ng-content></ng-content>
</button>
```

```scss
/* boton.scss */
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
```

```typescript
// app.ts — importar el componente antes de usarlo
import { Boton } from './shared/ui/boton/boton';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Boton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
```

## SCSS y Material

El boton propio puede coexistir con Material, pero no se debe mezclar ambos enfoques ni suponer la dependencia instalada sin una decision de proyecto.

