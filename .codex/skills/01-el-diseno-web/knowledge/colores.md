# Colores

## Sistema de color

El tema propone trabajar con gamas de colores, no con valores escogidos de
forma aislada. Una interfaz necesita variaciones para fondos, estados,
contraste y jerarquia.

## Color principal

- Es la gama utilizada con mayor frecuencia en la interfaz.
- Puede identificar las acciones habituales o los elementos de identidad
  visual.
- Debe disponer de variaciones claras y oscuras para distintos fondos y
  niveles de contraste.

## Color alternativo

- Sirve para destacar algo diferente del flujo normal.
- No debe competir constantemente con el color principal.
- La diferencia entre una accion normal y una alternativa puede responder a
  una decision estetica, siempre que la jerarquia se conserve.

## Grises y blancos

- Permiten construir fondos, superficies y texto de distinto nivel visual.
- Los grises ayudan a desenfatizar informacion secundaria.
- Las superficies elevadas pueden percibirse mas claras cuando se aplica el
  principio de luz desde arriba.

## Colores semanticos

| Gama | Uso indicado por el tema |
| --- | --- |
| Roja | Acciones peligrosas, como borrar o vaciar contenido. |
| Verde | Situaciones concretas que deban comunicar ese color; significado exacto pendiente del diseño. |
| Amarilla | Situaciones concretas que deban comunicar ese color; significado exacto pendiente del diseño. |

El rojo aparece expresamente ejemplificado para una accion de borrado. Las
notas disponibles nombran verde y amarillo como gamas semanticas, pero no
fijan en este bloque un significado mas concreto; confirmarlo al diseñar cada
pantalla.

## Contraste

- Asegurar contraste suficiente entre texto, fondo y controles.
- Usar contraste para guiar la atencion, no para que todos los elementos
  destaquen a la vez.
- Revisar especialmente acciones principales, texto secundario y estados
  semanticos.

## Paletas con variaciones

El tema recomienda construir escalas de:

- blancos y grises;
- color principal;
- color alternativo;
- colores semanticos necesarios.

Para CSS/SCSS, la futura implementacion debe reunir esas escalas en variables
del sistema, con nombres coherentes y prefijo del proyecto
`--mlt-sys-*`. Esta es una regla de organizacion; los valores concretos quedan
pendientes del diseño que se implemente.

## Ejemplo

```css
/* Variables CSS del proyecto con valores reales del PDF (Tema 04) */
:root {
  /* Gama principal (9 variaciones, de mas oscuro a mas claro) */
  --mlt-sys-color-principal-1: #011019;
  --mlt-sys-color-principal-2: #052F4D;
  --mlt-sys-color-principal-3: #0B4D83;
  --mlt-sys-color-principal-4: #1363B4;
  --mlt-sys-color-principal-5: #1979E6;
  --mlt-sys-color-principal-6: #4B8EEC;
  --mlt-sys-color-principal-7: #80ADF4;
  --mlt-sys-color-principal-8: #B2CAFA;
  --mlt-sys-color-principal-9: #E6EDFE;

  /* Gama alternativa */
  --mlt-sys-color-alternativo-5: #E67519;

  /* Gama roja (peligro/borrado) */
  --mlt-sys-color-rojo-1: #190501;
  --mlt-sys-color-rojo-5: #E61919;

  /* Grises */
  --mlt-sys-color-gris-1: #1D2830;
  --mlt-sys-color-gris-5: #717D8E;
  --mlt-sys-color-gris-9: #CFD4E2;

  /* Blancos */
  --mlt-sys-color-blanco-9: #FFFFFF;

  /* Amarillos */
  --mlt-sys-color-amarillo-5: #ECC94B;
}

/* Uso: el color siempre procede del sistema de tokens */
.boton {
  border-color: #0056b8;
  background-color: #0056b8;
  color: #ffffff;
}

.funcion--peligrosa {
  border-color: #c53030;
  background-color: #c53030;
  color: #ffffff;
}
```

## Regla de control

No introducir colores sueltos en un componente solo porque resuelvan una
pantalla inmediata. Antes de usarlos, decidir a que gama y funcion pertenecen
y comprobar que la variacion mantiene contraste y coherencia con el resto de
la interfaz.
