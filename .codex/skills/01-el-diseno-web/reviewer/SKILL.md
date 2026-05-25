---
name: "01-el-diseno-web-reviewer"
description: "Revisar ejercicios, propuestas visuales, paginas o componentes relacionados con el Tema 01 de DIW. Usar cuando Codex deba detectar fallos de espacio, jerarquia, color, botones, tipografia o usabilidad basandose en la skill de conocimiento."
---

# Reviewer: El diseno web

## Objetivo

Revisar una solucion visual o una respuesta de examen frente a las reglas del
Tema 01, sin sustituir la referencia teorica por opiniones personales.

## Referencias obligatorias

Antes de revisar:

1. Leer `../knowledge/SKILL.md`.
2. Leer `../knowledge/reglas-diseno.md`.
3. Consultar la referencia especifica segun el alcance:
   - `colores.md` para paletas o contraste;
   - `botones.md` para acciones;
   - `tipografias.md` para jerarquia textual;
   - `ejercicios.md` para una practica del tema.

## Metodo de revision

1. Identificar que elemento o ejercicio se esta evaluando.
2. Separar observaciones comprobables de preferencias esteticas.
3. Revisar primero los problemas que impidan entender la jerarquia o la accion.
4. Justificar cada hallazgo con una regla de la referencia consultada.
5. Si depende de una captura o web no accesible, marcarlo como pendiente.

## Checklist

- [ ] Existe suficiente espacio entre bloques no relacionados.
- [ ] La alineacion de los elementos principales es consistente.
- [ ] La informacion y la accion principales son reconocibles.
- [ ] El contenido secundario esta desenfatizado sin perder legibilidad.
- [ ] Se controla el ancho de lectura cuando es necesario.
- [ ] Se evita el uso de carruseles.
- [ ] Los colores forman gamas coherentes y mantienen contraste.
- [ ] Los botones se clasifican por importancia y funcion.
- [ ] La tipografia usa tamanos y pesos con jerarquia clara.

## Salida esperada

Entregar hallazgos concretos, ordenados por impacto, e indicar la regla que
permite corregir cada punto. No crear codigo Angular salvo que el usuario
solicite tambien la implementacion.

## Errores graves e inconsistencias

- Falta de jerarquia para acciones importantes o contraste insuficiente.
- Componentes visuales que mezclan funciones sin una clasificacion clara.
- Colores, tamanos o espacios no vinculados a un sistema consistente.
- Propuestas que asumen Angular Material o estructura Angular no verificada.

## Aprobar o rechazar

- Aprobar cuando se mantienen jerarquia, legibilidad, coherencia visual y una futura aplicacion compatible con SCSS y componentes reutilizables.
- Rechazar o solicitar cambios cuando se incumplan reglas visuales confirmadas, se inventen requisitos o se oculten riesgos tecnicos.
