---
name: "01-el-diseno-web-implementation"
description: "Guiar paso a paso la aplicacion del Tema 01 de DIW en ejercicios, paginas o componentes visuales Angular. Usar para transformar criterios de espacio, color, botones y tipografia en decisiones ordenadas de diseno y SCSS."
---

# Implementation: El diseno web

## Objetivo

Aplicar los criterios del tema en orden, desde la composicion general hasta
los detalles visuales, sin inventar una implementacion no solicitada.

## Referencias obligatorias

1. Leer `../knowledge/SKILL.md`.
2. Leer `../knowledge/teoria.md`.
3. Leer `../knowledge/reglas-diseno.md`.
4. Abrir `colores.md`, `botones.md`, `tipografias.md` o `ejercicios.md` cuando
   esa parte forme parte de la tarea.

## Pasos de aplicacion

### 1. Definir el objetivo

- Identificar si se esta diseñando, explicando o resolviendo un ejercicio.
- Determinar el contenido principal y la accion que debe recibir mas atencion.

### 2. Ordenar la composicion

- Agrupar contenido relacionado.
- Separar los bloques distintos con espacio suficiente.
- Marcar una alineacion principal.
- Decidir si el contenido necesita ancho maximo.

### 3. Construir la jerarquia

- Resaltar solo la informacion o accion prioritaria.
- Desenfatizar etiquetas y datos auxiliares sin volverlos ilegibles.
- Evitar carruseles y elementos que oculten el contenido relevante.

### 4. Elegir el sistema visual

- Definir gamas de color principal, alternativo, grises y colores semanticos
  que realmente se necesiten.
- Elegir una escala reducida de espacios y tamanos tipograficos.
- Usar sombras o radios de manera coherente cuando formen parte del diseño.

### 5. Clasificar las acciones

- Asignar a cada boton una importancia: `primaria`, `secundaria` o `terciaria`.
- Asignar una funcion: `normal`, `alternativa` o `peligrosa`.
- Comprobar que una accion destructiva se comunica como peligrosa.

### 6. Preparar una futura implementacion

- Si el usuario pide codigo, llevar las decisiones a componentes reutilizables
  y SCSS organizado conforme a `AGENTS.md`.
- Si el usuario solo pide documentacion o teoria, detenerse antes de crear
  archivos Angular o estilos ejecutables.

### 7. Revisar el resultado

- Usar la checklist de
  `../knowledge/reglas-diseno.md`.
- Para una correccion formal, usar también
  `../reviewer/SKILL.md`.

## Ejemplo de uso

Para diseñar un formulario de acceso, primero se decide que `Entrar` es la
accion principal. Después se distribuye el espacio y la alineacion, se reduce
el peso visual de acciones auxiliares y finalmente se clasifica cada boton.
Este ejemplo orienta la decision visual; no crea aun el componente Angular.

## Estructura, patrones y SCSS

- Aplicar el criterio visual en componentes standalone reutilizables cuando se autorice implementacion.
- Separar componentes `c-`, layouts `l-` y utilidades `g--`.
- Expresar colores, medidas y tipografia repetidos mediante tokens `--mlt-sys-*`.
- Usar Angular Material solo si la tarea y las dependencias reales lo justifican.

## Errores y validaciones

- Evitar acciones sin jerarquia, colores aislados, tipografia arbitraria o espaciado irregular.
- Comprobar contraste, legibilidad, orden visual y clasificacion de botones.
- Contrastar cualquier futura plantilla o SCSS con el estado real del proyecto.
