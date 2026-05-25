# Estructura de la Aplicacion

## Propuesta del curso

El Tema 07 plantea:

```text
src/app/
|-- scss/
|-- components/
|   |-- ui/
|   `-- paginas/
```

`scss/` contiene Sass comun, `ui/` componentes reutilizables y `paginas/` vistas concretas que los componen.

## Paso previo

El tema tambien remite a configurar idioma, usar Angular Material y aplicar las reglas previas de BEM, CSS, SASS y Flex/Grid.

## Estado real

Esta estructura es una referencia objetivo; no debe afirmarse que existe en el repositorio sin inspeccionarlo o crearla en una tarea autorizada.

## Ejemplo

```text
Estructura completa del proyecto (Tema 07)

src/app/scss
├── 01_utilities/
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _index.scss
├── 02_base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _index.scss
├── 03_components/
│   ├── _cada_componente.scss
│   └── _index.scss
├── 04_global/
│   ├── _modificadores_globales.scss
│   └── _index.scss
└── main.scss

src/app/components/ui/       <- componentes reutilizables
├── c-button/
│   ├── c-button.ts
│   ├── c-button.html
│   └── c-button.scss
├── c-panel/
└── l-flex/

src/app/components/paginas/  <- vistas especificas
├── main/
├── productos/
└── login/
```

```scss
/* main.scss (Tema 07) */
@forward "./02_base";
@forward "./03_components";
@forward "./04_global";
```

```scss
/* styles.scss (Tema 07) */
@use './app/scss/main.scss' as *;
```

## Error comun

Crear una pagina dentro de `ui` o convertir un estilo global en un componente Angular sin necesidad.

