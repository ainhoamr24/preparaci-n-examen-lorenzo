# Patrones

## Patrones respaldados

- Barril Sass mediante `_index.scss` y `@forward`.
- Entrada global de Sass mediante `main.scss`.
- Componentes visuales BEM en la capa de componentes.
- Utilidades globales generadas o mantenidas en su capa propia.
- Separacion de UI reutilizable y paginas.

## Angular Material

El tema incluye Material como parte de la preparacion general, pero remite a su explicacion anterior. La ubicacion concreta de temas Material debe decidirse al implementar segun la estructura adoptada.

## Ejemplo conceptual

Un login compone un panel y un boton de UI; el espaciado global procede de tokens/utilidades; la pagina no replica el SCSS del boton.

## Ejemplo

```scss
/* Patron barril: _index.scss reexporta los ficheros de la carpeta (Tema 07) */
/* src/app/scss/01_utilities/_index.scss */
@forward "./_variables.scss";
@forward "./_functions.scss";
@forward "./_mixins.scss";

/* src/app/scss/03_components/_index.scss */
@forward "./_c-button.scss";
@forward "./_c-panel.scss";
@forward "./_l-columns.scss";
@forward "./_l-flex.scss";

/* src/app/scss/04_global/_index.scss */
@forward "./color";
@forward "./font-size";
@forward "./margin";
@forward "./padding";
```

```scss
/* Patron punto de entrada global: main.scss (Tema 07) */
/* src/app/scss/main.scss */
@forward "./02_base";
@forward "./03_components";
@forward "./04_global";
/* 01_utilities no se incluye aqui: solo genera CSS indirectamente a traves de los otros */
```

```scss
/* styles.scss: Angular carga el SCSS del proyecto (Tema 07) */
@use './app/scss/main.scss' as *;
```

```scss
/* Consumir utilidades en un fichero partial (Tema 07) */
@use "../01_utilidades/index" as utilidades;
```

```text
Componentes Angular (Tema 07)

src/app/components/ui/        <- reutilizables en toda la app
  c-button/
    c-button.ts
    c-button.html
    c-button.scss
  c-panel/
  l-flex/

src/app/components/paginas/   <- especificos de cada vista
  main/
  productos/
  login/

/* Las paginas importan componentes UI; nunca al reves */
```

## Pendiente

El bloque no define servicios, rutas ni gestion de datos como parte de esta arquitectura visual.

