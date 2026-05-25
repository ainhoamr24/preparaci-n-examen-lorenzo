---
name: "03-creacion-de-componentes-reviewer"
description: "Revisar componentes standalone Angular y su SCSS segun el Tema 03, detectando APIs fragiles, plantillas incorrectas, estilos no mantenibles y BEM inconsistente."
---

# Reviewer: Creacion de Componentes

## Checklist

- [ ] El componente tiene una responsabilidad reutilizable clara.
- [ ] Entradas y salidas son necesarias y estan tipadas.
- [ ] El contenido proyectado se usa solo cuando aporta flexibilidad real.
- [ ] El elemento host conserva su semantica y clases necesarias.
- [ ] El SCSS sigue BEM y la convencion de prefijos.

## Errores graves

- Usar valores visuales libres donde se requiere una variante limitada.
- Perder clases del host o romper su comportamiento.
- Mezclar pagina especifica dentro de un componente UI global.
- Exponer estilos que colisionan por falta de nomenclatura.

## Problemas de arquitectura y visuales

- Revisa separacion entre `ui` y `paginas`.
- Revisa que funciones e importancias de boton sean visualmente distinguibles.
- Revisa integracion Material solo si esta justificada.

## Aprobar o rechazar

- Aprobar si la API es pequena, tipada, reutilizable y sus estilos son coherentes.
- Rechazar si el componente introduce acoplamiento, colisiones CSS o variantes no respaldadas.

