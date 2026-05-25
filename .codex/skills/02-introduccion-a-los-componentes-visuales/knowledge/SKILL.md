---
name: "02-introduccion-a-los-componentes-visuales-knowledge"
description: "Conocimiento del Tema 02 de DIW, Introduccion a los componentes visuales. Usar para consultar el arranque Angular, la configuracion regional, Angular Material, botones, iconos, design tokens y paletas antes de explicar o preparar una interfaz."
---

# Knowledge: Introduccion a los componentes visuales

## Proposito

Organizar el contenido del Tema 02 para que un agente pueda preparar una
interfaz Angular visualmente coherente sin confundir ejemplos del curso con
funcionalidades ya instaladas en el proyecto.

## Alcance verificado

Fuente: `teoria.pdf`, paginas 15-23.

El tema desarrolla:

- creacion de una aplicacion con Angular CLI 20, SCSS, sin SSR/SSG y sin modo
  zoneless;
- configuracion `es-ES` y `EUR`;
- separacion entre `app.ts` y `app.html`;
- incorporacion y uso de Angular Material mediante botones e iconos;
- personalizacion mediante design tokens, system tokens y paletas.

No desarrolla de forma concreta grids, Flexbox, cards, sidebars, tabs,
formularios visuales ni ejercicios finales. Esos puntos se mantienen como
pendientes en los archivos solicitados.

## Cuando usarla

- Al explicar el Tema 02 o preparar preguntas de examen.
- Antes de proponer el uso de componentes de Angular Material.
- Al razonar sobre botones, iconos, tokens o paletas Material.
- Al revisar si una propuesta diferencia la teoria del estado real de la app.

## Conocimientos que aporta

- Inicio de una app orientada al curso y configuracion regional.
- Mecanica de importar un componente visual para utilizarlo en una plantilla.
- Distincion entre un atributo visual de boton y un componente de icono.
- Papel de los tokens de componente y tokens globales del sistema.
- Papel de las paletas `primary`, `secondary` y `tertiary`.

## Relacion con componentes Angular

El tema presenta el componente raiz con un archivo TypeScript para su
configuracion y un HTML para su representacion. Tambien establece que un
componente de Angular Material debe importarse antes de usarse en la plantilla.

En este repositorio, comprobar siempre el codigo y `package.json` antes de
suponer que Angular Material o la configuracion regional existen.

## Relacion con diseno visual

La consistencia visual se introduce mediante variantes de botones, iconos,
paletas y tokens que controlan color, forma, padding y tipografia. La teoria no
define por si sola el layout completo de una pagina.

## Orden de consulta

1. Leer `componentes-visuales.md`.
2. Leer `jerarquia-visual.md` y `espaciado.md` para botones y tokens.
3. Consultar `composicion.md` y `patrones-ui.md` segun la tarea.
4. Leer `layouts.md` para conocer los limites del alcance del tema.
5. Consultar `ejercicios.md` cuando se trate de practicar el recorrido guiado.

## Resultado esperado

Esta skill ayuda a construir interfaces consistentes porque obliga a:

- elegir componentes visuales de forma explicita;
- centralizar decisiones visuales en tokens y paletas;
- distinguir el contenido realmente explicado de los patrones aun no tratados;
- no generar codigo Angular mientras la tarea sea solo documental.
