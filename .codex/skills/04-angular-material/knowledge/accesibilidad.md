# Accesibilidad

## Contenido confirmado

El generador de tema mostrado en el PDF ofrece crear overrides de alto contraste para usuarios que lo soliciten, relacionandolo con accesibilidad.

## Reglas aplicables

- Mantiene contraste suficiente en paletas y tokens.
- Conserva etiquetas comprensibles aunque se usen iconos.
- Revisa estados y jerarquia de botones.
- Valora la opcion de alto contraste cuando una futura configuracion de tema lo requiera.

## Pendiente

El bloque Material consultado no ofrece una guia WCAG completa ni desarrolla navegacion por teclado. Esos controles deben verificarse como requisitos adicionales al implementar.

## Ejemplo

```html
<!-- Boton Material con texto: el texto actua como etiqueta (Tema 02) -->
<!-- API de Material 20: atributo matButton, no mat-raised-button -->
<button matButton="filled">Guardar cambios</button>

<!-- Boton con icono decorativo: aria-hidden si el texto lo explica -->
<button matButton="filled">
  <mat-icon aria-hidden="true">save</mat-icon>
  Guardar
</button>

<!-- Icono Material aislado: necesita aria-label si no tiene texto visible -->
<button matButton aria-label="Eliminar elemento">
  <mat-icon>delete</mat-icon>
</button>
```

```scss
// Soporte de alto contraste (si el generador de tema lo produce)
@media (forced-colors: active) {
  .c-button--peligrosa {
    border: 2px solid ButtonText; // mantiene visibilidad en modo forzado
  }
}
```

## Error comun

Considerar que usar Material garantiza por si solo todos los requisitos de accesibilidad.

