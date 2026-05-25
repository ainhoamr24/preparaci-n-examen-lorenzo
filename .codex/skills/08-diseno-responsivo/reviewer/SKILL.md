---
name: "08-diseno-responsivo-reviewer"
description: "Revisar decisiones responsive en layouts Angular y SCSS, diferenciando tecnicas confirmadas por Flex/Grid de breakpoints o patrones pendientes de fuente."
---

# Reviewer: Diseno Responsivo

## Checklist

- [ ] La adaptacion responde a un requisito comprobable.
- [ ] Flexbox o Grid se eligen segun el tipo de layout.
- [ ] No aparece overflow horizontal inesperado.
- [ ] Jerarquia, tipografia y espaciado conservan legibilidad.
- [ ] Las decisiones no documentadas en el PDF estan identificadas como adicionales.

## Errores graves

- Afirmar que mobile first o determinados breakpoints pertenecen a un tema no localizado.
- Ocultar un layout roto con ajustes aislados.
- Romper componentes o tema Material por reglas responsive dispersas.

## Arquitectura, visual e inconsistencias

- Revisa separacion entre layout y componente.
- Revisa tokens y BEM en SCSS.
- Revisa coherencia con Tema 01, Tema 05 y Tema 06.

## Aprobar o rechazar

- Aprobar si se usan tecnicas respaldadas o decisiones adicionales claramente justificadas.
- Rechazar si se inventan reglas academicas, permanece overflow o la interfaz pierde claridad.

