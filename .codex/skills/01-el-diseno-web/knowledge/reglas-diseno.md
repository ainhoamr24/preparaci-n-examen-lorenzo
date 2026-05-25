# Reglas practicas de diseno

## Aplicacion al proyecto

Cuando Codex tenga que crear o revisar una pagina o componente visual:

1. Identificar el contenido principal y la accion principal.
2. Separar los bloques no relacionados con espacio suficiente.
3. Establecer una alineacion comun entre elementos relacionados.
4. Limitar el ancho del contenido cuando una pagina ancha perjudique la
   lectura.
5. Escoger colores, tamanos y sombras desde un sistema, no elemento a elemento.
6. Clasificar cada boton por importancia y funcion antes de estilizarlo.
7. Comprobar que la informacion secundaria no compite con la principal.

## Orientacion Angular y SCSS

- Pensar en bloques reutilizables antes de repetir el mismo patron visual.
- Mantener la jerarquia visual expresable mediante variantes claras de los
  componentes, no mediante excepciones puntuales.
- Preparar los estilos para una escala controlada de colores, espacios, radios,
  sombras y tipografias.
- Respetar las convenciones globales del proyecto al implementar: SCSS, BEM y
  variables CSS `--mlt-sys-*`.
- No crear codigo desde esta documentacion sin una peticion de implementacion.

## Reglas breves

- Dar protagonismo a una unica accion cuando sea posible.
- Usar colores semanticos solo cuando comuniquen significado.
- Diferenciar elementos por contraste y peso, no acumulando adornos.
- Mantener pocos tamanos relacionados entre si.
- Evitar labels innecesarias y carruseles.
- Revisar el contraste entre texto, fondo y acciones.

## Checklist visual

- [ ] Los bloques distintos estan separados con espacio suficiente.
- [ ] Los elementos relacionados comparten una alineacion reconocible.
- [ ] Se entiende rapidamente cual es la informacion principal.
- [ ] La accion principal destaca sobre acciones secundarias o de abandono.
- [ ] Los datos auxiliares tienen menor contraste sin perder legibilidad.
- [ ] La pagina no se estira de forma incomoda en pantallas amplias.
- [ ] La paleta usa variaciones coherentes, no colores aislados.
- [ ] Los colores de peligro, exito o aviso solo aparecen con ese significado.
- [ ] Los botones estan clasificados por importancia y funcion.
- [ ] La tipografia emplea una escala limitada y pesos intencionados.
- [ ] No se ha introducido un carrusel.

## Ejemplo

```scss
// Regla 2: separar bloques no relacionados con espacio suficiente
.l-seccion {
  padding-block: var(--mlt-sys-space-xl);
}

// Regla 4: limitar el ancho cuando una pagina ancha perjudica la lectura
.l-contenido-lectura {
  max-width: 72rem;
  margin-inline: auto;
}

// Regla 5: colores desde el sistema, no elemento a elemento
.c-estado-peligro {
  color: var(--mlt-sys-color-rojo-1); // siempre desde token
}

// Regla 6: boton con importancia y funcion tipadas
// importancia="primaria" funcion="peligrosa" → rojo + maximo peso visual
```

```html
<!-- Regla 1: identificar contenido principal y accion principal -->
<section class="l-seccion">
  <h2>Resumen del pedido</h2>
  <p class="c-texto-secundario">3 articulos en tu carrito</p>

  <!-- Regla 6: importancia primaria = matButton filled; funcion normal = color principal -->
  <button boton funcion="normal" matButton="filled">
    Confirmar pedido
  </button>

  <!-- Regla 6: importancia terciaria = matButton text; funcion peligrosa = color rojo -->
  <button boton funcion="peligrosa" matButton="text">
    Vaciar carrito
  </button>
</section>
```

## Pendiente al revisar capturas

Si la tarea depende de una captura, diseño de referencia o web externa que no
se haya proporcionado o no pueda consultarse, Codex debe pedir esa evidencia
antes de valorar detalles concretos.
