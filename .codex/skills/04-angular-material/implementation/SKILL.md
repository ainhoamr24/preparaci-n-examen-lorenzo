---
name: "04-angular-material-implementation"
description: "Guiar una futura integracion de Angular Material, theming, paletas y tokens en componentes standalone Angular con SCSS, una vez confirmadas las dependencias reales."
---

# Implementation: Angular Material

## Aplicacion en Angular

- Confirma primero que la tarea exige Material y que se va a incorporar o ya existe.
- Importa en cada componente standalone solo los elementos Material que utilice.
- Aplica componentes Material con una jerarquia visual definida.

## Buenas practicas y estructura

- Mantiene el tema y paletas en estilos globales organizados.
- Reserva componentes propios para necesidades que Material no cubra o que la tarea exija practicar.
- Diferencia tokens globales y overrides locales.

## SCSS y patrones reutilizables

- Usa el API Sass de Material documentado por el curso para temas y overrides.
- Coordina `--mat-sys-*` con `--mlt-sys-*` sin mezclar sus contratos.
- Reutiliza variantes de boton coherentes con importancia y funcion.

## Errores y validaciones

- No instalar Material por inferencia documental.
- No editar salidas generadas sin una razon respaldada.
- Verifica imports, tema, paletas, contraste y estados visuales.
- Comprueba accesibilidad adicional cuando se implemente una interfaz real.

