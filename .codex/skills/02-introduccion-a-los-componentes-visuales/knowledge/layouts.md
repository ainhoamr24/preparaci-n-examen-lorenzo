# Layouts

## Alcance del Tema 02

El Tema 02 no desarrolla una teoria de layouts. Presenta una pagina inicial muy
simple con un titulo, un boton y el punto de salida del router, y despues se
centra en Angular Material y sus tokens.

## Conceptos solicitados y estado

| Concepto | Estado en el PDF, Tema 02 |
| --- | --- |
| Layout principal | Solo aparece la plantilla inicial simple. |
| Estructura visual | Limitada a introducir elementos visuales en `app.html`. |
| Columnas | Pendiente: no se explica en este tema. |
| Contenedores | Pendiente: no se establece un patron. |
| Grids | Pendiente: no se explica en este tema. |
| Flexbox | Pendiente: no se explica en este tema. |
| Alineacion y distribucion | Pendiente: no se fijan reglas nuevas. |
| Responsive layout | Pendiente: no se trata en las paginas 15-23. |

## Uso para agentes

- No atribuir al Tema 02 decisiones de Grid o Flexbox.
- Si una futura implementacion requiere layout, consultar el tema especifico
  correspondiente antes de crear reglas SCSS.
- Limitar las conclusiones de este archivo a que los componentes visuales deben
  insertarse en una plantilla Angular organizada.

## Relacion con Angular

El punto verificable es que la vista vive en la plantilla del componente y que
los componentes Material usados deben importarse. La organizacion responsive
del arbol de componentes queda pendiente de una fuente posterior o una
peticion concreta.
