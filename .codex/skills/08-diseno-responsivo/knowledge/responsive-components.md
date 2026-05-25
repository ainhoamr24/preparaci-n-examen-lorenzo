# Responsive Components

## Alcance

La fuente disponible trata layouts, no una API especifica de componentes responsive Angular.

## Reglas aplicables

- Mantiene componentes standalone reutilizables dentro de layouts adaptables.
- Evita que una pagina modifique arbitrariamente el SCSS interior de cada componente.
- Comprueba que botones y acciones sigan siendo distinguibles y utilizables.
- Si se usa Material, conserva coherencia de tema y contraste.

## Pendiente

No se documentan componentes Angular que cambien comportamiento segun viewport, ni APIs o servicios para hacerlo.

## Ejemplo

```html
<!-- La pagina define el layout adaptable; el componente no cambia -->
<div class="l-grid-adaptable">
  @for (producto of productos; track producto.id) {
    <app-tarjeta-producto [producto]="producto" />
  }
</div>
```

```scss
// El componente define su aspecto sin conocer el layout exterior
.c-tarjeta {
  padding: var(--mlt-sys-space-md);
  background: var(--mlt-sys-color-gris-1);
  border-radius: 8px;
  // ✅ No tiene width fijo: se adapta al area que le da el layout
}

// El layout decide cuantas columnas hay
.l-grid-adaptable {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: var(--mlt-sys-space-md);
}
```

## Error comun

Añadir logica responsive Angular cuando el requisito solo necesita un layout CSS adaptable.

