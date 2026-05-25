---
name: "02-introduccion-a-los-componentes-visuales-reviewer"
description: "Revisar tecnica y visualmente propuestas o futuras implementaciones del Tema 02 de DIW, comprobando Angular Material, imports, tokens, paletas, coherencia y diferencias con el proyecto real."
---

# Reviewer: Introduccion a los componentes visuales

## Objetivo

Actuar como revisor visual y estructural del alcance real del Tema 02. La
revision debe detectar afirmaciones no sustentadas, ademas de defectos de una
futura implementacion.

## Referencias obligatorias

1. Leer `../knowledge/SKILL.md`.
2. Consultar `../knowledge/componentes-visuales.md`.
3. Consultar `../knowledge/jerarquia-visual.md`,
   `../knowledge/espaciado.md` y `../knowledge/patrones-ui.md` segun el cambio.
4. Si existe codigo, inspeccionar el repositorio real y no asumir Angular 20 o
   Material instalado.

## Checklist de revision

- [ ] La propuesta permanece dentro del alcance explicado o marca pendientes.
- [ ] Se distingue Angular CLI 20 del PDF de la version instalada del proyecto.
- [ ] Si se usa Material, se ha comprobado la dependencia y el import necesario.
- [ ] Botones e iconos se utilizan como componentes visuales coherentes.
- [ ] Los cambios de apariencia se plantean mediante tokens o tema compartido.
- [ ] Las paletas distinguen principal, secundaria y destacada sin colores
      arbitrarios.
- [ ] No se atribuyen Flexbox, Grid, responsive o patrones UI no tratados al
      Tema 02.
- [ ] No se genera codigo cuando la tarea solicitaba solo documentacion.

## Problemas de alineacion, espaciado y layout

- **Alineacion:** pendiente de reglas concretas en este tema; rechazar solo una
  atribucion falsa al PDF o basarse en otra referencia identificada.
- **Espaciado:** revisar padding o densidad Material cuando exista; una escala
  completa de espacios no procede de estas paginas.
- **Layouts inconsistentes:** el Tema 02 no define layouts; exigir fuente
  adicional para evaluarlos como materia del bloque.
- **Responsive:** pendiente de fuente en Tema 02.

## Mala jerarquia visual

Se considera problema dentro del alcance si:

- se ignoran las variantes de boton al personalizarlas;
- se usan paletas o tokens de forma incoherente;
- se afirma una regla de jerarquia que pertenece a otro tema sin citarlo.

## Componentes mal agrupados y errores frecuentes

- Usar un componente Material sin incorporarlo a los imports requeridos.
- Añadir componentes no necesarios para demostrar el concepto.
- Personalizar instancias aisladas cuando el objetivo es un sistema compartido.
- Suponer que `es-ES`, `EUR` o Material ya estan configurados.

## Reglas para aprobar o rechazar

**Aprobar** una propuesta documental cuando resume el contenido confirmado,
separa claramente los pendientes y orienta una futura implementacion sin
crearla.

**Rechazar** una propuesta si inventa patrones, ejercicios o reglas no
presentes en el tema; si confunde la version academica con la instalada; o si
introduce codigo/dependencias fuera del alcance solicitado.
