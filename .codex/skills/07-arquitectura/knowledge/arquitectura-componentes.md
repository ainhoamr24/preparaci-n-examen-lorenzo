# Arquitectura de Componentes

## Componentes UI

El curso propone componentes reutilizables como `c-button`, `c-panel` o, cuando se justifique como componente Angular, un layout.

## Paginas

Las paginas usan componentes de UI para representar casos de la aplicacion, como una pagina principal, productos o login.

## Componentes standalone

La convencion del proyecto exige componentes standalone. Una futura aplicacion debe mantener imports explicitos y una API tipada, aunque la arquitectura de carpetas proceda del PDF.

## SCSS

Los estilos comunes de un bloque pueden residir en la capa SCSS correspondiente; los estilos particulares del componente Angular deben evitar duplicacion o conflicto con esa decision.

## Ejemplo

```typescript
// components/ui/panel/panel.ts — UI reutilizable
@Component({
  selector: 'panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  @Input() titulo = '';
}
```

```typescript
// components/paginas/login/login.ts — pagina que compone UI
@Component({
  selector: 'app-pagina-login',
  standalone: true,
  imports: [Panel, Boton],
  template: `
    <div class="l-centrado">
      <panel titulo="Acceso">
        <button boton funcion="normal" (click)="entrar()">Entrar</button>
      </panel>
    </div>
  `,
  styleUrl: './login.scss',
})
export class PaginaLogin {
  entrar() { /* logica de la pagina, no del boton */ }
}
```

## Error comun

Tener simultaneamente una clase global y un componente Angular que solucionan el mismo layout sin una razon clara.

