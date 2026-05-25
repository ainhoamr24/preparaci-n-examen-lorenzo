# Tipografias

## Escala de tamanos

El tema propone limitar los tamaños, como se hace con los colores. La lista de
referencia para fuentes incluye:

`12px`, `14px`, `16px`, `18px`, `20px`, `24px`, `30px`, `36px`, `48px`,
`64px`.

No es obligatorio emplearlos todos. Al implementar una interfaz, elegir una
escala reducida y reutilizable para textos pequeños, texto base y títulos.

## Peso de fuente

- Enfatizar no consiste solo en aumentar el tamaño.
- Un mayor peso puede comunicar importancia con menor alteración del layout.
- El texto auxiliar puede perder protagonismo usando menor contraste, en lugar
  de competir por tamaño.

## Enfatizar y desenfatizar

| Necesidad | Criterio visual |
| --- | --- |
| Resaltar un dato o accion | Aumentar peso o contraste de forma controlada. |
| Reducir protagonismo | Usar un gris legible o menor contraste. |
| Mostrar una etiqueta secundaria | Evitar que compita con el valor principal. |

## Titulos y textos pequenos

El tema señala estas diferencias tipograficas:

- Para textos grandes o titulos, puede funcionar una fuente con menor altura
  de minusculas y menor espaciado entre letras.
- Para textos pequeños, conviene mayor altura de minusculas y mas espaciado
  para favorecer la lectura.
- La forma de determinadas letras puede transmitir mayor formalidad o
  informalidad.

## Legibilidad

- Mantener contraste suficiente entre el texto y su fondo.
- No convertir toda la pagina en texto destacado.
- Evitar escalas arbitrarias o cambios de peso sin una razon de jerarquia.
- Revisar especialmente textos pequeños, labels y mensajes secundarios.

## Ejemplo

```scss
// Escala reducida de tamaños tipograficos como tokens del sistema
:root {
  --mlt-sys-font-size-xs: 0.75rem;   // 12px — etiquetas secundarias
  --mlt-sys-font-size-sm: 0.875rem;  // 14px — texto auxiliar
  --mlt-sys-font-size-md: 1rem;      // 16px — texto base
  --mlt-sys-font-size-lg: 1.5rem;    // 24px — titulos de seccion
  --mlt-sys-font-size-xl: 2rem;      // 32px — titulo principal
}

// Uso en componentes: siempre desde el token, nunca valor suelto
.c-titulo-seccion {
  font-size: var(--mlt-sys-font-size-lg);
  font-weight: 700;
}

.c-etiqueta-auxiliar {
  font-size: var(--mlt-sys-font-size-sm);
  color: var(--mlt-sys-color-gris-3); // menor contraste, no menor tamaño
}
```

## Aplicacion a CSS/SCSS

La futura hoja de estilos debe expresar la escala y los pesos como valores
reutilizables del sistema, en lugar de repetir tamaños aislados en cada
componente. Los tokens concretos quedan pendientes de la fase de
implementacion.
