# Arquitectura Angular

## Modelo de trabajo

- Componentes standalone, conforme a la convencion indicada para este proyecto.
- Componentes de UI reutilizables separados de paginas especificas.
- Templates claros y estilos SCSS asociados cuando un componente lo necesite.
- Imports explicitos de las dependencias usadas por cada componente.

## Relacion con el PDF

El Tema 02 muestra la creacion de una app Angular con SCSS, sin SSR/SSG y sin modo zoneless, ademas de configurar idioma `es-ES` y moneda `EUR`. El Tema 07 propone la organizacion final de componentes y estilos.

## Ejemplo conceptual

Una pagina de productos compone componentes de UI ya definidos; no redefine el boton ni el panel global. Un layout coloca componentes, mientras cada componente conserva su aspecto.

## Ejemplo

```typescript
// Componente UI reutilizable (Tema 03 — selector sin prefijo app-, clase sin sufijo Component)
@Component({
  selector: 'button[boton], a[boton]',
  standalone: true,
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './boton.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Boton {
  @Input() funcion: 'normal' | 'alternativa' | 'peligrosa' = 'normal';
}
```

```typescript
// Pagina — compone componentes; no redefine sus estilos
@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [Boton],
  template: `
    <button boton funcion="normal">Empezar</button>
    <button boton funcion="peligrosa">Cancelar</button>
  `,
})
export class PaginaInicio {}
```

## Errores comunes

- Crear carpetas objetivo y afirmar que ya eran parte del proyecto.
- Convertir un ejemplo de clase en dependencia o arquitectura obligatoria sin solicitud.
- Mezclar logica de pagina con componentes destinados a reutilizarse.

