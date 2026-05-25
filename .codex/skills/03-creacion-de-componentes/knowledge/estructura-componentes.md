# Estructura de Componentes

## Organizacion propuesta

El tema separa:

- `src/app/components/ui/` para componentes reutilizables;
- `src/app/components/paginas/` para vistas especificas.

Un componente de UI dispone normalmente de archivo de logica, template y SCSS.

## Encapsulacion

La fuente describe los modos de encapsulacion y usa estilos publicos en el ejemplo basado en atributo para que afecten al host. Esa eleccion exige nombres que no colisionen.

## BEM

- `c-`: componente visual.
- `l-`: layout dedicado a colocar otros bloques.
- `g--`: modificador global de uso compartido.

## Ejemplo

```text
Estructura de carpetas (Tema 03)

src/
└─ minecraft/
   └─ components/
      ├─ ui/
      │  ├─ boton/
      │  │  ├─ boton.ts
      │  │  ├─ boton.html
      │  │  └─ boton.scss
      │  └─ panel/
      └─ paginas/
         ├─ minecraft-main/
         │  ├─ minecraft-main.ts
         │  ├─ minecraft-main.html
         │  └─ minecraft-main.scss
         └─ productos/
```

```text
Estructura Angular reutilizable (Tema 07)

src/app/components/ui/
├─ c-button/
│  ├─ c-button.ts
│  ├─ c-button.html
│  └─ c-button.scss
├─ c-panel/
└─ l-flex/

src/app/components/paginas/
├─ main/
├─ productos/
└─ login/
```

```typescript
// boton.ts — selector simple, sin sufijo Component, sin prefijo app- (Tema 03)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'boton',
  imports: [CommonModule],
  templateUrl: './boton.html',
  styleUrl: './boton.scss'
})
export class Boton { }
```

```scss
/* boton.scss — clases BEM sin colision entre componentes (Tema 03 Atributos) */
.boton--funcion-normal     { border-color: #0056b8; background-color: #0056b8; color: #ffffff; }
.boton--funcion-alternativa { border-color: #ed8936; background-color: #ed8936; color: #ffffff; }
.boton--funcion-peligrosa  { border-color: #c53030; background-color: #c53030; color: #ffffff; }
```

## Regla de responsabilidad

Una pagina compone; un componente UI se reutiliza; un layout distribuye; una utilidad ajusta un valor global acotado.

