# Teoria: principios de diseno web

## Idea central

Una interfaz clara dirige la atencion: separa lo que no esta relacionado,
agrupa lo que si lo esta y hace evidente que informacion o accion es
prioritaria. El diseno no consiste en llenar la pantalla, sino en facilitar la
lectura y el uso.

## Espacio en blanco

- Separar ampliamente bloques que cumplen funciones distintas.
- Acercar elementos relacionados solo cuando su relacion sea clara.
- Usar el espacio para que el usuario identifique grupos sin explicaciones
  innecesarias.

En una pagina Angular, esto afecta a la composicion entre cabecera, formulario,
contenido, tarjetas y zona de acciones, no solo al margen de un elemento.

## Alineacion

- Alinear contenidos siguiendo ejes visuales claros.
- Mantener coherencia entre titulos, textos, campos y botones.
- Evitar pequeñas desviaciones que hagan que la interfaz parezca desordenada.

## Jerarquia visual

La jerarquia indica que se debe mirar o pulsar primero.

- Reservar el mayor contraste y presencia para lo importante.
- No hacer competir varios elementos por la misma prioridad.
- Un titulo semantico (`h1`) no tiene que dominar visualmente si el contexto ya
  explica la pagina.

## Resaltar lo importante

- Usar contraste, ubicacion y peso tipografico para destacar.
- Preferir un aumento de peso de fuente antes que agrandar texto sin control.
- Dar mas importancia visual a la accion que se espera del usuario.

## Desenfatizar lo secundario

- Usar grises o menor contraste para datos auxiliares y etiquetas que sean
  necesarias.
- Evitar labels redundantes cuando el contenido se entienda solo.
- Si una etiqueta aporta significado, integrarla de forma natural, por
  ejemplo una expresion como `3 en stock`.

## Ancho maximo de pagina

- No obligar al contenido a ocupar todo el ancho de una pantalla grande.
- Limitar el ancho ayuda a conservar alineaciones y lectura confortable.
- La medida concreta debe decidirse al implementar el layout del proyecto,
  dentro de su sistema de tamanos.

## Evitar carruseles

El tema indica que no se deben usar carruseles. Para una interfaz del proyecto,
seguir esa regla y priorizar contenido visible y organizado en secciones.

## Profundidad visual

El tema relaciona sombras y luminosidad con una luz procedente de arriba:

- Los elementos elevados pueden verse algo mas claros que el fondo.
- Las sombras pueden comunicar profundidad sin depender siempre de bordes.
- Las sombras deben formar un sistema coherente, no aplicarse de forma
  arbitraria.

## Ejemplo

```scss
// Ancho maximo de pagina para conservar la lectura en pantallas grandes
.l-pagina {
  max-width: 72rem;       // ~1152px
  margin-inline: auto;
  padding-inline: var(--mlt-sys-space-md);
}

// Sistema coherente de sombras (tres niveles, no valores sueltos)
:root {
  --mlt-sys-shadow-1: 0 1px 3px rgb(0 0 0 / 12%);   // tarjeta en reposo
  --mlt-sys-shadow-2: 0 4px 8px rgb(0 0 0 / 16%);   // tarjeta elevada
  --mlt-sys-shadow-3: 0 8px 24px rgb(0 0 0 / 20%);  // modal o drawer
}

// Separacion clara entre bloques de funciones distintas
.l-seccion + .l-seccion {
  margin-block-start: var(--mlt-sys-space-xl);
}
```
