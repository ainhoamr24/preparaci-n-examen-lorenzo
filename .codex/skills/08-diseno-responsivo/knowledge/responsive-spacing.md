# Responsive Spacing

## Fuente disponible

El Tema 05 documenta tokens y utilidades de espaciado. El Tema 06 documenta `gap` para layouts. **Pendiente:** no aparece una escala de espacios que cambie por viewport.

## Reglas practicas

- Usa separaciones consistentes en layouts.
- Prefiere tokens `--mlt-sys-*` a numeros aislados cuando se implemente el sistema.
- No inventes variantes responsive de padding o margin.
- Comprueba que al adaptarse el layout los bloques sigan separados y alineados.

## Ejemplo

```scss
// Espaciado coherente en layouts: usar tokens, no valores sueltos
.l-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: var(--mlt-sys-space-md);         // separacion entre celdas
}

.l-seccion {
  padding-block: var(--mlt-sys-space-xl); // ritmo vertical entre secciones
}

// Espaciado interno de un componente: tambien desde tokens
.c-panel {
  padding: var(--mlt-sys-space-md);
}

// ❌ No inventar variantes responsive sin base verificada
// .c-panel { padding: clamp(1rem, 4vw, 3rem); } → sin requisito documentado
```

## Error comun

Corregir una distribucion rota agregando margenes puntuales sin revisar el layout base.

