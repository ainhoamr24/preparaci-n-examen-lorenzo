---
name: "00-proyecto-base-reviewer"
description: "Revisar cambios globales del proyecto Angular y su documentacion, comprobando fidelidad al curso, compatibilidad con el repositorio real, SCSS, Material y arquitectura."
---

# Reviewer: Proyecto Base

## Checklist

- [ ] Se identifica la fuente de cada decision importante.
- [ ] Se distingue el objetivo Angular 20 de las dependencias Angular 21 actuales.
- [ ] No se presupone Angular Material instalado.
- [ ] La estructura propuesta respeta componentes, paginas y estilos.
- [ ] SCSS, BEM y tokens mantienen coherencia visual.

## Errores graves

- Cambiar dependencias o arquitectura sin solicitud suficiente.
- Inventar requisitos del PDF.
- Mezclar componentes reutilizables y paginas sin justificacion.
- Introducir reglas visuales incompatibles con las skills tematicas.

## Problemas de arquitectura y visuales

- Comprueba separacion de responsabilidades y nomenclatura.
- Comprueba que un layout no asuma el aspecto del componente.
- Comprueba jerarquia, contraste y sistema de tokens en cambios visuales.

## Aprobar o rechazar

- Aprobar cuando la propuesta es verificable, minima y compatible con curso y repositorio.
- Rechazar cuando oculta una diferencia de version, inventa una dependencia o rompe las convenciones globales.

