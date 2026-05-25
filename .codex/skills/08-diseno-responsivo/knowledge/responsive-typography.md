# Responsive Typography

## Fuente disponible

El Tema 01 trata legibilidad y jerarquia tipografica; el Tema 05 genera tokens de tamanos. **Pendiente:** no se localiza una escala tipografica responsive asociada a anchos de pantalla.

## Reglas de revision

- Mantener legibilidad y jerarquia en cualquier adaptacion.
- Reutilizar tokens tipograficos confirmados si existen.
- No añadir tamaños fluidos o escalas por breakpoint sin especificacion.

## Ejemplo

```scss
// Usar tokens tipograficos del sistema (Tema 05)
// La legibilidad se conserva sin escalas responsive no justificadas

.c-titulo-principal {
  font-size: var(--mlt-sys-font-size-xl);  // 2rem
  font-weight: 700;
  line-height: 1.2;
}

.c-titulo-seccion {
  font-size: var(--mlt-sys-font-size-lg);  // 1.5rem
  font-weight: 600;
}

.c-texto-base {
  font-size: var(--mlt-sys-font-size-md);  // 1rem
  line-height: 1.6;
}

.c-etiqueta {
  font-size: var(--mlt-sys-font-size-sm);  // 0.875rem
  color: var(--mlt-sys-color-gris-3);
}

// ❌ No añadir sin requisito verificado:
// font-size: clamp(1rem, 2.5vw, 2rem);  → escala fluida sin fuente
```

## Angular Material

El theming Material incluye tipografia, pero la fuente no establece una configuracion responsive de tipografia Material para esta app.

