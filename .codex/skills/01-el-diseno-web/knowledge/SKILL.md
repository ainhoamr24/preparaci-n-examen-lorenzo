---
name: "01-el-diseno-web-knowledge"
description: "Conocimiento del Tema 01 de DIW, El diseno web. Usar para consultar teoria y ejemplos sobre diseno visual, color, botones, tipografia y usabilidad antes de explicar, revisar o implementar interfaces Angular y estilos SCSS."
---

# Knowledge: El diseno web

## Que contiene esta skill

Esta skill organiza los conocimientos practicos del tema inicial de Diseno de
Interfaces Web. Su objetivo es ayudar a razonar sobre una interfaz antes de
crear componentes Angular o escribir sus estilos.

| Archivo | Uso principal |
| --- | --- |
| `teoria.md` | Principios visuales generales del tema. |
| `reglas-diseno.md` | Reglas operativas y checklist para revisar una interfaz. |
| `colores.md` | Sistema de color, variaciones y contraste. |
| `botones.md` | Jerarquia y funcion de las acciones. |
| `tipografias.md` | Escala, peso y legibilidad del texto. |
| `ejercicios.md` | Practicas del tema y criterios de revision. |

## Cuando debe usarla Codex

Usar esta skill cuando la peticion trate sobre:

- valorar o mejorar el aspecto visual de una pagina;
- decidir jerarquia, espacios, alineacion, colores, botones o tipografia;
- preparar, corregir o explicar ejercicios del Tema 01;
- proponer criterios visuales para un componente o pagina Angular;
- revisar CSS/SCSS desde el punto de vista del diseno y la usabilidad.

No usar esta skill como autorizacion para crear codigo o dependencias si el
usuario solo pide teoria o documentacion.

## Que conocimientos aporta

- Separacion visual mediante espacio en blanco y alineacion consistente.
- Jerarquia para resaltar acciones o informacion importante y reducir el peso
  de lo secundario.
- Uso de un ancho de lectura controlado en pantallas grandes.
- Sistema de colores con gamas y colores semanticos.
- Clasificacion de botones por importancia y funcion.
- Criterios basicos de tipografia, escalas y experiencia de usuario.

## Relacion con el diseno del proyecto

En `preparacion-examen-lorenzo`, estas reglas orientan la futura interfaz
Angular y sus estilos SCSS. Deben traducirse a componentes reutilizables y a
tokens visuales coherentes cuando una tarea de implementacion lo solicite.

La convencion global del proyecto exige SCSS, clases BEM y variables CSS con
prefijo `--mlt-sys-*`. El tema aporta el criterio visual; la arquitectura y el
codigo real deben verificarse antes de aplicarlo.

## Orden de consulta

1. Leer `teoria.md` para entender el criterio general.
2. Leer `reglas-diseno.md` antes de proponer o revisar una interfaz.
3. Consultar `colores.md`, `botones.md` o `tipografias.md` segun el problema.
4. Consultar `ejercicios.md` cuando la tarea sea una practica o
   correccion.

## Skills relacionadas

- `../reviewer/SKILL.md`: revisar una propuesta, ejercicio o
  interfaz frente al tema.
- `../implementation/SKILL.md`: aplicar el tema de forma ordenada en una
  practica o futura implementacion.

## Limites

- Esta documentacion resume el tema; no reproduce literalmente el PDF.
- No presupone que exista ya ningun componente visual en la aplicacion.
- Cuando una imagen o sitio web de un ejercicio no este disponible, marcar la
  evaluacion visual como pendiente de recibir la referencia.
