# System Tokens

## Que son

Los tokens son valores compartidos que mantienen coherencia visual. En el material aparecen dos familias relacionadas:

| Familia | Procedencia | Funcion |
| --- | --- | --- |
| `--mat-sys-*` | Angular Material, Tema 02. | Variables globales que afectan a componentes Material. |
| `--mlt-sys-*` | CSS/SASS del curso, Temas 04 y 05. | Variables propias del sistema visual del proyecto. |

## Tokens propios `--mlt-sys-*`

El Tema 05 utiliza Sass para generar variables CSS y utilidades a partir de colecciones:

- paletas de color;
- escala de font size;
- escalas de padding y margin;
- familias tipograficas.

La finalidad es evitar valores sueltos y dar a las clases globales `g--` una fuente comun.

## Tokens Angular Material `--mat-sys-*`

El Tema 02 describe System Tokens de Material como valores globales usados por sus componentes, por ejemplo para color primario, color sobre primario, forma o tamano de etiqueta.

Los tokens de un componente pueden apoyarse en esos System Tokens cuando no existe una personalizacion mas especifica.

## Integracion y personalizacion

- Los tokens `--mlt-sys-*` gobiernan el sistema propio documentado del curso.
- Los tokens `--mat-sys-*` pertenecen al theming Material.
- Cuando convivan, deben coordinarse visualmente, pero no confundirse por nombre ni propiedad.
- Para Material, la fuente recomienda configurar el tema mediante `mat.theme`, no editar a mano un fichero generado de System Tokens.

## Ejemplo

```scss
/* Ejemplo del @each de mapa (Tema 05 Ejercicio 1) — genera tokens y utilidades */
/* Tokens: --mlt-sys-principal-1..9 (SIN segmento "color") */
/* Utilidades: .g--color-principal-1 que consume --mlt-sys-color-principal-1 (CON "color") */

$colores: (
  'principal':   (#011019, #052F4D, #0B4D83, #1363B4, #1979E6, #4B8EEC, #80ADF4, #B2CAFA, #E6EDFE),
  'alternativo': (#190801, #4D1D05, #83370B, #B45613, #E67519, #EC9C4B, #F4BE80, #FADCB2, #FEF5E6),
  'rojo':        (#190501, #4D0D05, #83150B, #B41813, #E61919, #EC534B, #F48A80, #FABCB2, #FEEAE6),
  'gris':        (#1D2830, #323E49, #485461, #5C6775, #717D8E, #8A93A3, #A1A9BA, #B6BDCD, #CFD4E2),
  'blanco':      (#EBEBEB, #EDEDED, #F0F0F0, #F2F2F2, #F5F5F5, #F7F7F7, #FAFAFA, #FCFCFC, #FFFFFF),
  'amarillo':    (#6D5303, #9A7809, #C69C10, #E9BC1C, #ECC94B, #F2D978, #F7E7A6, #FCF4CF, #FFFFFF),
);
/* Produce:
   --mlt-sys-principal-1: #011019;
   --mlt-sys-principal-2: #052F4D;
   ...
   --mlt-sys-alternativo-1: #190801; ... */
```

```scss
/* Utilidades de color generadas (Tema 05 Ejercicio 1) */
/* Consumen tokens con el segmento "color": --mlt-sys-color-principal-1 */
/* .g--color-principal-1 { color: var(--mlt-sys-color-principal-1) !important; } */
/* .g--background-color-principal-1 { background-color: var(--mlt-sys-color-principal-1) !important; } */
/* .g--border-color-principal-1 { border-color: var(--mlt-sys-color-principal-1) !important; } */
```

```scss
/* Tokens de font-size (Tema 05 Ejercicio 2) */
$font-sizes: (10px, 12px, 14px, 16px, 18px, 20px, 22px, 24px, 26px, 28px, 30px);
/* Produce: --mlt-sys-font-size-1: 10px; ... --mlt-sys-font-size-11: 30px; */
/* Utilidades: .g--font-size-1 { font-size: var(--mlt-sys-font-size-1) !important; } */
```

```scss
/* Tokens de padding (Tema 05 Ejercicio 3) */
$paddings: (0px, 4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 36px, 40px);
/* Produce: --mlt-sys-padding-0: 0px; ... --mlt-sys-padding-10: 40px; */
/* Utilidades: .g--padding-0 { padding: var(--mlt-sys-padding-1) !important; } */
/*            .g--padding-horizontal-0 { padding-left: var(...); padding-right: var(...); } */
```

```scss
/* Tokens de font-family (Tema 05 Ejercicio 5) */
$font-families: (
  'sans-serif': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...',
  'serif': 'Palatino, "Palatino Linotype", ...',
  'monospace': 'SFMono-Regular, Menlo, Monaco, ...',
  'default': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...',
);
/* Produce: --mlt-sys-font-family-sans-serif: ...; */
/* Utilidades: .g--font-family-sans-serif { font-family: var(--mlt-sys-font-family-sans-serif); } */
```

```css
/* Variables CSS propias: definicion y uso (Tema 04) */
:root {
  --mlt-sys-color-principal-1: #011019;
  --mlt-sys-color-alternativo-5: #E67519;
}

.boton {
  background-color: var(--mlt-sys-color-alternativo-5);
  /* Con valor por defecto: */
  background-color: var(--mlt-sys-color-alternativo-5, #E67519);
}
```

## Dudas documentadas

- El ejercicio SASS alterna `--mlt-sys-principal-*` y `--mlt-sys-color-principal-*`; debe fijarse una variante antes de implementar.
- El proyecto real no debe asumir Angular Material instalado hasta verificar sus dependencias.

