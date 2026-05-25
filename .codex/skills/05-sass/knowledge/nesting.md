# Nesting

## Contenido confirmado

El tema presenta el selector padre `&`: permite componer el nombre de una clase hija o modificadora a partir de una clase principal. Esto encaja con clases BEM como componentes `c-`, layouts `l-` y utilidades globales `g--`.

## Uso limpio con BEM

- Parte de un bloque claramente identificado.
- Usa `&__elemento` para sus partes.
- Usa `&--modificador` cuando representa una variante.
- Mantiene cada bloque comprensible sin depender de selectores largos.

## Pseudoselectores

`&` tambien puede servir para asociar estados CSS al selector padre en SCSS. **Pendiente:** el bloque SASS consultado no desarrolla ejemplos especificos con pseudoclases o pseudoelementos.

## Evitar nesting excesivo

El objetivo del ejemplo es evitar repetir nombres, no crear jerarquias profundas. Al revisar SCSS:

- evita anidar por la estructura completa del HTML;
- conserva clases legibles y reutilizables;
- no acoples un componente a una pagina concreta;
- no ocultes la responsabilidad del selector tras varios niveles.

## Ejemplo

```scss
// El selector & se convierte en el nombre del padre (Tema 05)
AAA {
  color: red;

  &__BBB {
    padding: 5px;
  }
}

// Se transforma en:
// AAA { color: red; }
// AAA__BBB { padding: 5px; }
```

```scss
// Aplicacion en layout l-flex con BEM (Tema 06)
.l-flex {
  display: flex;

  &--direction-row {
    flex-direction: row;
  }

  &--justify-content-center {
    justify-content: center;
  }

  &__area {
    // Si tuvieras mas propiedades para el area, las pondrias aqui
    &--grow2 {
      flex-grow: 2;
    }
  }
}
// Genera: .l-flex, .l-flex--direction-row, .l-flex--justify-content-center,
//         .l-flex__area, .l-flex__area--grow2
```

```scss
// Aplicacion en grid l-columns con @for (Tema 06)
.l-columns {
  display: grid;

  &--4 {
    grid-template-columns: repeat(4, 1fr);
  }

  &__area {
    &--span2 {
      grid-column: span 2;
    }
  }
}
```

## Errores comunes

- Usar `&` sin respetar la nomenclatura del bloque.
- Mezclar en una utilidad global estilos propios de un componente.
- Crear selectores dificiles de reutilizar o revisar.

