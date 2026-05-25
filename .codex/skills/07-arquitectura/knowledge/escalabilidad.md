# Escalabilidad

## Como crece la arquitectura

- Añade componentes UI cuando una pieza visual se reutiliza.
- Añade paginas para flujos especificos.
- Añade tokens o utilidades solo si expresan patrones comunes.
- Agrupa SCSS con `@forward` para evitar imports dispersos.

## Reglas de mantenibilidad

- Sigue BEM y separacion de capas.
- Evita hojas globales sin responsabilidad identificable.
- No dupliques layouts como CSS y Angular sin evaluar el coste.
- Revisa que Material, si se incorpora, comparta decisiones visuales con el sistema propio.

## Ejemplo

```
// Anadir un componente nuevo sin romper lo existente:
//
// 1. Crear la carpeta del componente
//    src/app/components/ui/tarjeta/
//      tarjeta.component.ts
//      tarjeta.component.html
//      tarjeta.component.scss
//
// 2. Crear su parcial SCSS si tiene estilos globales
//    src/app/scss/03_components/_c-tarjeta.scss
//
// 3. Registrarlo en el barril de componentes CSS
//    03_components/_index.scss → @forward 'c-tarjeta';
//
// 4. Importarlo donde se necesite en Angular
//    pagina-productos.component.ts → imports: [TarjetaComponent]
```

```scss
// Agregar un token de espacio sin tocar los existentes
// 01_utilities/_variables.scss
$espacios: (
  xs: 0.25rem,
  sm: 0.5rem,
  md: 1rem,
  lg: 2rem,
  xl: 4rem,   // nuevo: se añade al mapa; los demas no cambian
);
```

## Riesgo

Convertir una arquitectura didactica en estructura fisica completa sin necesidad puede aumentar ficheros antes de que exista una interfaz que los use.

