---
name: "07-arquitectura-reviewer"
description: "Revisar arquitectura Angular y SCSS del Tema 07, comprobando capas, componentes UI, paginas, reutilizacion, Material y fidelidad al estado real del repositorio."
---

# Reviewer: Arquitectura

## Checklist

- [ ] La estructura creada corresponde a una necesidad pedida.
- [ ] UI reusable y paginas especificas estan diferenciadas.
- [ ] SCSS se organiza por responsabilidades si se adopto la arquitectura.
- [ ] `@use` y `@forward` se aplican coherentemente.
- [ ] Componentes, layouts y utilidades siguen prefijos correctos.

## Errores graves

- Presentar como real una carpeta objetivo no implementada.
- Duplicar una misma responsabilidad entre CSS global y componente Angular.
- Incorporar Material o dependencias sin justificarlo.

## Problemas visuales e inconsistencias

- Verifica que tokens y componentes mantengan un sistema visual comun.
- Verifica que paginas no reescriban la apariencia de UI compartida.
- Contrasta convenciones con los temas anteriores.

## Aprobar o rechazar

- Aprobar si la arquitectura es clara, proporcional al alcance y escalable.
- Rechazar si crea capas innecesarias, mezcla responsabilidades o contradice el repositorio.

