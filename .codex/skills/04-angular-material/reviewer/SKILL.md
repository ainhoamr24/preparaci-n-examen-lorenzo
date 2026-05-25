---
name: "04-angular-material-reviewer"
description: "Revisar propuestas o implementaciones Angular Material, paletas, temas y tokens, comprobando dependencias, SCSS, coherencia visual y alcance del material del curso."
---

# Reviewer: Angular Material

## Checklist

- [ ] Material esta requerido y disponible en el proyecto.
- [ ] Cada componente standalone importa lo que utiliza.
- [ ] El tema centraliza color, tipografia y densidad cuando procede.
- [ ] Tokens globales y overrides locales tienen alcance correcto.
- [ ] La interfaz mantiene contraste, jerarquia y acciones distinguibles.

## Errores graves

- Usar o instalar Material sin autorizacion ni comprobacion.
- Tratar `--mat-sys-*` y `--mlt-sys-*` como el mismo sistema.
- Personalizar globalmente un componente por una necesidad aislada.
- Afirmar que un componente no tratado forma parte del ejercicio confirmado.

## Arquitectura, visual e inconsistencias

- Revisa ubicacion de temas y paletas.
- Revisa compatibilidad entre componentes Material y SCSS propio.
- Revisa la version academica frente a la version real.

## Aprobar o rechazar

- Aprobar si la integracion esta justificada, centralizada y visualmente coherente.
- Rechazar si depende de supuestos, rompe el sistema de tokens o empeora accesibilidad.

