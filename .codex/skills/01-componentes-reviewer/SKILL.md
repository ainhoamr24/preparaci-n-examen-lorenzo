# Skill — Componentes Reviewer

## Objetivo

Usar esta skill para revisar cambios relacionados con módulos, componentes y estructura de componentes Angular.

Proyecto: `PREPARACION-EXAMEN`.

Tipo de aplicación: tienda Angular sin backend real.

## Archivos de referencia

Antes de revisar, consultar:

- `.codex/skills/componentes-knowledge/SKILL.md`
- `.codex/skills/componentes-knowledge/references/componentes.md`
- `.codex/skills/componentes-steps/SKILL.md`

## Checklist general

- [ ] El cambio afecta solo a los componentes necesarios.
- [ ] No se ha modificado código no relacionado.
- [ ] No se ha creado backend.
- [ ] No se ha añadido autenticación real.
- [ ] No se ha añadido pago real.
- [ ] No se han añadido librerías innecesarias.
- [ ] El proyecto sigue siendo una tienda Angular sin backend.

## Checklist de componentes standalone

- [ ] Los componentes nuevos son `standalone` si el proyecto usa Angular moderno.
- [ ] No se ha creado `AppModule` sin necesidad.
- [ ] Los componentes usados en templates están importados en `imports`.
- [ ] No faltan imports de directivas, pipes o componentes necesarios.
- [ ] Los selectores son coherentes.
- [ ] Los nombres de carpetas son claros.

## Checklist de responsabilidad

- [ ] Cada componente tiene una responsabilidad clara.
- [ ] `AppComponent` no concentra toda la lógica.
- [ ] El catálogo está separado del carrito.
- [ ] El carrito está separado del checkout.
- [ ] La tarjeta de producto está separada del listado si se repite.
- [ ] No hay componentes excesivamente grandes.
- [ ] No hay lógica de negocio duplicada.

## Checklist de estructura de tienda

Revisar si existen o si el cambio apunta hacia estos bloques:

- [ ] `layout/header`
- [ ] `layout/footer`
- [ ] `products/product-list`
- [ ] `products/product-card`
- [ ] `products/product-detail`
- [ ] `cart/cart-page`
- [ ] `cart/cart-item`
- [ ] `cart/cart-summary`
- [ ] `checkout/checkout-form`

No todos tienen que existir desde el principio, pero si se crean, deben seguir una responsabilidad clara.

## Checklist de templates

- [ ] El HTML es legible.
- [ ] No contiene lógica compleja.
- [ ] Usa binding de Angular cuando procede.
- [ ] Usa eventos de Angular cuando procede.
- [ ] No usa `document.getElementById`.
- [ ] No usa manipulación manual de DOM.
- [ ] No usa `innerHTML` sin justificación.
- [ ] No repite bloques visuales que deberían ser componentes.

## Checklist de TypeScript

- [ ] No se usa `any` sin justificación.
- [ ] Las propiedades tienen nombres claros.
- [ ] Los métodos tienen nombres claros.
- [ ] No hay imports sin usar.
- [ ] No hay lógica excesiva en el componente.
- [ ] No se accede directamente a `localStorage` si debe estar en un servicio.
- [ ] No se accede directamente a datos mock desde muchos componentes.

## Checklist de estilos

- [ ] Los estilos son locales al componente cuando sea posible.
- [ ] No se han hecho cambios globales innecesarios.
- [ ] Las clases CSS son claras.
- [ ] La UI sigue siendo comprensible.
- [ ] El diseño es adecuado para catálogo, carrito o checkout.

## Checklist de compilación

Antes de cerrar:

- [ ] Ejecutar build si es posible.
- [ ] Revisar errores TypeScript.
- [ ] Revisar errores de template Angular.
- [ ] Revisar que no faltan imports standalone.
- [ ] Revisar que no se rompe el arranque de la aplicación.
- [ ] Revisar que `AppComponent` sigue cargando correctamente.

## Problemas frecuentes

Marcar como problema si aparece:

- Un componente nuevo sin `standalone` en un proyecto standalone.
- Uso de un componente en HTML sin importarlo.
- `AppComponent` con catálogo, carrito y checkout completos.
- Cálculo del total del carrito en varios componentes.
- Acceso directo a `localStorage` en componentes.
- Creación de backend no solicitado.
- Creación de módulos clásicos sin justificación.
- Manipulación manual del DOM.
- HTML demasiado largo y sin división en componentes.
