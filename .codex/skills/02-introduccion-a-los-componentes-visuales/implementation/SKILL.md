---
name: "02-introduccion-a-los-componentes-visuales-implementation"
description: "Guiar una futura aplicacion del Tema 02 en Angular y SCSS: configuracion base, seleccion de componentes Material, tokens y paletas. Usar solo cuando se solicite pasar de teoria a una implementacion verificable."
---

# Implementation: Introduccion a los componentes visuales

## Proposito

Definir el proceso para traducir la teoria confirmada del Tema 02 a una
implementacion futura. Este documento no autoriza a crear codigo por si mismo.

## Referencias previas

1. Leer `../knowledge/SKILL.md`.
2. Leer `../knowledge/componentes-visuales.md`.
3. Consultar `../knowledge/jerarquia-visual.md` y
   `../knowledge/espaciado.md` antes de decidir tokens.
4. Revisar `AGENTS.md` y el estado real de `package.json`, `angular.json` y
   `src/`.

## Traducir teoria visual a componentes Angular

1. Confirmar si la tarea requiere Angular Material.
2. Comprobar si la dependencia existe; no asumirla por aparecer en el PDF.
3. Seleccionar solo los componentes visuales necesarios, inicialmente botones
   o iconos si la tarea sigue el contenido de este tema.
4. Mantener la logica en TypeScript y la representacion en el template.
5. Importar explicitamente cada dependencia visual utilizada.

## Estructurar componentes y templates

- Conservar componentes standalone segun las reglas del proyecto.
- Mantener templates legibles y limitados a la composicion necesaria.
- No concentrar un catalogo entero de componentes Material en una pagina de
  demostracion si la tarea solo necesita uno.
- No crear layouts, cards, formularios o navegacion atribuidos a este tema sin
  referencia o requisito adicional.

## Layouts reutilizables

Pendiente: el Tema 02 no desarrolla Flexbox, Grid o responsive layout. Si una
implementacion los requiere, consultar el tema correspondiente antes de
definir componentes o SCSS de layout.

## Espaciado y coherencia visual

- Usar tokens de componente para ajustes propios de botones cuando proceda.
- Usar system tokens o el tema Material para decisiones globales documentadas.
- Trabajar con paletas coherentes en lugar de colores sueltos.
- Respetar SCSS y la organizacion del proyecto cuando se autorice codigo.

## Evitar interfaces desordenadas

- No aplicar estilos puntuales que contradigan tokens globales.
- No mezclar componentes visuales sin justificar su necesidad.
- No atribuir a Material una coherencia automatica: comprobar variantes,
  paletas y tipografia elegidas.

## Validacion futura

Cuando exista codigo que revisar:

- comprobar imports de componentes Material;
- comprobar configuracion regional si forma parte del cambio;
- comprobar que las personalizaciones utilizan tokens de forma coherente;
- comprobar la compilacion de la app;
- pasar la revision de `../reviewer/SKILL.md`.
