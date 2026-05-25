# Separacion de Responsabilidades

## Regla destacada del tema

El Tema 07 distingue entre:

- una clase CSS de layout, que distribuye elementos;
- un componente Angular de layout, que aporta estructura o comportamiento.

La fuente indica que normalmente se elegiria una alternativa u otra para un caso concreto.

## Matriz de decision

| Necesidad | Zona apropiada |
| --- | --- |
| Valor o herramienta Sass | `01_utilities/` |
| Reset o tipografia base | `02_base/` |
| Bloque visual CSS reutilizable | `03_components/` |
| Utilidad global | `04_global/` |
| UI Angular reusable | `components/ui/` |
| Vista especifica | `components/paginas/` |

## Ejemplo

```scss
// ✅ Layout: solo posiciona y dimensiona areas, sin color ni tipografia
.l-pagina {
  display: grid;
  grid-template-areas: "lateral contenido";
  grid-template-columns: 240px 1fr;
  gap: var(--mlt-sys-padding-5);
}

// ✅ Componente visual: solo define su aspecto, sin saber donde va
.c-panel {
  background: var(--mlt-sys-color-gris-1);
  border-radius: 8px;
  padding: var(--mlt-sys-padding-5);
  box-shadow: var(--mlt-sys-shadow-1);
}

// ❌ Mezcla incorrecta: el layout no debe definir colores de sus areas
.l-pagina__lateral {
  grid-area: lateral;
  background: #f0f0f0; // esto pertenece al componente que vive aqui, no al layout
}
```

```
Matriz de responsabilidades:

  Token    → define el valor del sistema (color, espacio, sombra)
  Layout   → coloca y dimensiona areas (grid, flex)
  Comp UI  → presenta visualmente (BEM, SCSS del componente)
  Pagina   → compone componentes UI dentro de un layout
```

## Regla visual

Un layout coloca; un componente visual presenta; un token define el sistema; una pagina compone.

