# Arquitectura SCSS

## Procedencia

La arquitectura completa se expone en el Tema 07 del PDF, no en las paginas propias del Tema 05. Se incluye aqui porque aplica directamente `@use`, `@forward`, variables, funciones y mixins aprendidos en SASS.

## Estructura objetivo del curso

```text
src/app/scss/
|-- 01_utilities/
|   |-- _variables.scss
|   |-- _functions.scss
|   |-- _mixins.scss
|   `-- _index.scss
|-- 02_base/
|   |-- _reset.scss
|   |-- _typography.scss
|   `-- _index.scss
|-- 03_components/
|   |-- _c-button.scss
|   |-- _l-flex.scss
|   `-- _index.scss
|-- 04_global/
|   |-- _color.scss
|   |-- _font-size.scss
|   |-- _margin.scss
|   |-- _padding.scss
|   `-- _index.scss
`-- main.scss
```

Esta es una arquitectura objetivo del curso; no debe describirse como creada en `src/` sin comprobarlo.

## Partials y modulos

- Los parciales agrupan una responsabilidad concreta.
- Los `_index.scss` reexportan recursos mediante `@forward`.
- Los archivos que necesitan utilidades pueden cargarlas con `@use`.
- `main.scss` concentra el CSS Sass que debe incorporarse globalmente.

## Reglas de organizacion

- `01_utilities`: datos y herramientas Sass.
- `02_base`: reset y tipografia general.
- `03_components`: bloques visuales y layouts CSS reutilizables.
- `04_global`: modificadores `g--` generados para uso global.

## Ejemplo

```scss
// 01_utilities/_index.scss — barril (Tema 07)
@forward "./_variables.scss";
@forward "./_functions.scss";
@forward "./_mixins.scss";
```

```scss
// 02_base/_index.scss (Tema 07)
@forward "./_reset.scss";
@forward "./_typography.scss";
```

```scss
// 03_components/_index.scss (Tema 07)
@forward "./_c-button.scss";
@forward "./_c-panel.scss";
@forward "./_l-columns.scss";
@forward "./_l-flex.scss";
```

```scss
// 04_global/_index.scss (Tema 07)
@forward "./color";
@forward "./font-size";
@forward "./margin";
@forward "./padding";
```

```scss
// main.scss — punto de entrada: agrupa base, componentes y globales (Tema 07)
@forward "./02_base";
@forward "./03_components";
@forward "./04_global";
// Nota: 01_utilities no se incluye aqui porque solo es fuente Sass, no CSS
```

```scss
// styles.scss — Angular carga el SCSS desde aqui
@use './app/scss/main.scss' as *;
```

```scss
// Consumir utilidades en un partial que las necesite (Tema 07)
@use "../01_utilidades/index" as utilidades;
```

## Regla principal

Prefiere `@use` y `@forward`; evita `@import`, que el material identifica como obsoleto en Dart Sass.

