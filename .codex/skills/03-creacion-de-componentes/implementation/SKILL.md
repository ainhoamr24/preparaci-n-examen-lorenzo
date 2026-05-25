---
name: "03-creacion-de-componentes-implementation"
description: "Guiar la futura implementacion de componentes standalone Angular, entradas, salidas, templates y SCSS BEM del Tema 03. Usar cuando se solicite construir componentes UI."
---

# Implementation: Creacion de Componentes

## Aplicacion en Angular

- Identifica si el elemento es UI reutilizable o pagina.
- Define una API tipada y limitada antes de escribir template o estilos.
- Usa componentes standalone e imports explicitos segun la convencion del proyecto.

## Buenas practicas y estructura

- Organiza componentes reutilizables bajo `src/app/components/ui/` cuando la arquitectura se implemente.
- Separa logica, HTML y SCSS salvo templates realmente minimos.
- Usa proyeccion de contenido para etiquetas interiores configurables.

## Patrones reutilizables e integracion SCSS

- Usa modificadores BEM para variantes.
- Reserva `c-`, `l-` y `g--` para sus responsabilidades.
- Conecta funciones e importancias de botones con variantes visuales consistentes.
- Si se usa Material, decide si se envuelve o sustituye un componente propio.

## Errores comunes y validaciones

- No expongas propiedades CSS arbitrarias como API principal.
- No elimines clases del host al aplicar variantes.
- Comprueba semantica de enlace frente a boton, tipos de entradas y eventos.
- Valida reutilizacion, template, estilos y accesibilidad antes de aprobar.

