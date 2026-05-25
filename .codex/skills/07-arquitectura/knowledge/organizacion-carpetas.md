# Organizacion de Carpetas

## SCSS por capas

| Carpeta objetivo | Responsabilidad |
| --- | --- |
| `01_utilities/` | Variables, funciones y mixins Sass. |
| `02_base/` | Reset y tipografia base. |
| `03_components/` | Clases visuales `c-` y layouts `l-` no Angular. |
| `04_global/` | Utilidades globales `g--`, como color o espaciado. |

Cada zona puede exponer un `_index.scss` mediante `@forward`, y `main.scss` agrupa el CSS comun.

## Angular

- `components/ui/`: elementos reutilizables, por ejemplo boton o panel.
- `components/paginas/`: componentes especificos de la aplicacion.

## Ejemplo

```scss
// 01_utilities/_index.scss (Tema 07)
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
// main.scss: agrupa base, componentes y globales (Tema 07)
@forward "./02_base";
@forward "./03_components";
@forward "./04_global";
```

```scss
// styles.scss: Angular sabe donde esta el SCSS del proyecto (Tema 07)
@use './app/scss/main.scss' as *;
```

```scss
// Dentro de cada fichero que use utilidades (Tema 07)
@use "../01_utilidades/index" as utilidades;
```

## Buenas practicas

- Mantiene una responsabilidad por carpeta.
- Evita duplicar un bloque visual en cada pagina.
- No crea capas si una tarea concreta no las necesita.

