# Composicion

## Composicion visual mostrada

El recorrido inicial del tema parte de una plantilla Angular minima compuesta
por:

- un titulo;
- un boton;
- la salida del router.

Luego el boton se convierte en un elemento visual de Angular Material y se
propone añadir un icono Material.

## Agrupacion y proximidad

Pendiente: el Tema 02 no define reglas de proximidad o agrupacion de bloques.
Para aplicarlas a una interfaz, consultar la teoria visual del Tema 01 o la
fuente que corresponda.

## Repeticion y consistencia

La consistencia que si consta en el tema surge de:

- personalizar componentes del mismo tipo mediante design tokens;
- usar system tokens para valores globales;
- usar paletas compartidas para el tema Material.

## Patrones visuales

Los patrones concretos desarrollados son el boton y el icono Material. El PDF
remite a la documentacion de componentes Material para explorar otros
componentes, pero no los documenta uno por uno.

## Equilibrio visual

Pendiente: no se describe una regla de equilibrio de pagina en el Tema 02.
Codex no debe convertir una composicion de ejemplo en un criterio general sin
otra referencia.

## Ejemplo

```typescript
// app.ts — logica separada de la representacion
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterOutlet],
  templateUrl: './app.html',
})
export class AppComponent {
  titulo = 'Mi aplicacion';
}
```

```html
<!-- app.html — representacion separada de la logica (Tema 02) -->
<h1>Hola mundo</h1>

<!-- Boton Material: atributo matButton, no mat-raised-button -->
<button matButton="filled">
  Aceptar
</button>

<router-outlet />
```

## Relacion con componentes reutilizables

La futura aplicacion puede reutilizar componentes y tokens, pero la creacion de
componentes propios queda fuera de esta fase documental y se trata con mayor
detalle en temas posteriores.
