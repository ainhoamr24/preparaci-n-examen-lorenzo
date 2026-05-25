# Botones

## Dos decisiones independientes

El tema clasifica un boton por dos ejes:

- **Importancia**: cuanto interesa que el usuario pulse esa accion.
- **Funcion**: que tipo de consecuencia comunica la accion.

Un boton no es peligroso por ser poco importante, ni principal por ser seguro:
ambos criterios deben decidirse por separado.

## Importancia

| Tipo | Criterio |
| --- | --- |
| `primaria` | Accion a la que se quiere dirigir al usuario. |
| `secundaria` | Accion valida, pero con menos prioridad. |
| `terciaria` | Accion que debe estar disponible sin atraer atencion. |

## Funcion

| Tipo | Criterio |
| --- | --- |
| `normal` | Accion habitual sin advertencia especial. |
| `alternativa` | Accion similar a la normal, diferenciada visualmente. |
| `peligrosa` | Accion con riesgo o consecuencia que exige precaucion. |

## Ejemplos del tema resumidos

| Contexto | Boton | Importancia | Funcion | Motivo |
| --- | --- | --- | --- | --- |
| Carrito | Pagar carrito | Primaria | Normal | Es la continuacion esperada. |
| Pago | Cancelar pago | Terciaria | Normal | Debe existir, pero no impulsarse. |
| Carrito | Vaciar carrito | Terciaria | Peligrosa | Elimina los productos. |
| Actualizacion | Actualizar version | Primaria | Peligrosa | Se impulsa una accion con consecuencias. |
| Actualizacion | Mantener version | Secundaria | Normal | Alternativa de menor prioridad. |
| Donacion | Donar 20 euros | Primaria | Normal | Opcion favorecida por la interfaz. |
| Donacion | Donar 5 euros | Secundaria | Normal | Opcion permitida con menor peso. |

## Reglas para elegir un boton

1. Preguntar cual es la accion que la pantalla debe facilitar.
2. Marcar como peligrosa cualquier accion destructiva o con consecuencia
   relevante, aunque sea primaria.
3. No dar la misma presencia a continuar y cancelar si su prioridad no es la
   misma.
4. No ocultar una accion peligrosa tras un estilo neutro.
5. Usar la variante alternativa para diferenciar acciones semejantes cuando la
   estetica lo requiera, sin confundirla con peligro.

## Ejemplo

```typescript
// API tipada del componente: dos ejes independientes
export type Importancia = 'primaria' | 'secundaria' | 'terciaria';
export type Funcion     = 'normal' | 'alternativa' | 'peligrosa';
```

```html
<!-- Uso en plantilla (Tema 03): selector 'boton', input 'funcion' -->
<!-- La importancia se expresa mediante la variante de matButton: filled / outlined / text -->
<button boton funcion="normal" matButton="filled">
  Pagar carrito
</button>

<button boton funcion="peligrosa" matButton="text">
  Vaciar carrito
</button>

<button boton funcion="peligrosa" matButton="filled">
  Actualizar version
</button>
```

```scss
/* Clases CSS del componente boton del PDF (Tema 03) */
/* Colores reales del ejercicio */
.funcion--normal {
  border-color: #0056b8;
  background-color: #0056b8;
  color: #ffffff;
}

.funcion--alternativa {
  border-color: #ed8936;
  background-color: #ed8936;
  color: #ffffff;
}

.funcion--peligrosa {
  border-color: #c53030;
  background-color: #c53030;
  color: #ffffff;
}

/* Con BEM (Tema 03: Atributos) — evita colisiones entre componentes */
.boton--funcion-normal     { border-color: #0056b8; background-color: #0056b8; color: #ffffff; }
.boton--funcion-alternativa { border-color: #ed8936; background-color: #ed8936; color: #ffffff; }
.boton--funcion-peligrosa  { border-color: #c53030; background-color: #c53030; color: #ffffff; }
```

## Aplicacion futura en Angular

Un componente de boton reutilizable debera poder expresar ambos ejes de forma
tipada: importancia (`primaria`, `secundaria`, `terciaria`) y funcion
(`normal`, `alternativa`, `peligrosa`). Su implementacion no forma parte de
esta documentacion.
