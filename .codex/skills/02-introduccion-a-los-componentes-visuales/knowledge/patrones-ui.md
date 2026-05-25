# Patrones UI

## Patrones presentes en el tema

| Patron | Que desarrolla Tema 02 | Cuando consultarlo |
| --- | --- | --- |
| Botones | Uso de Angular Material y personalizacion mediante tokens. | Al preparar acciones visuales o tematizar botones. |
| Iconos | Introduccion al componente de iconos de Material. | Al necesitar representar una accion o concepto con el recurso Material. |

## Patrones solicitados no desarrollados

El archivo mantiene estos puntos visibles porque forman parte de la estructura
solicitada, pero las paginas 15-23 no enseñan su uso:

| Patron | Estado |
| --- | --- |
| Cards | Pendiente de fuente. |
| Headers | Pendiente de fuente; el ejemplo contiene un titulo, no un patron de cabecera. |
| Sidebars | Pendiente de fuente. |
| Navegacion | Pendiente de fuente; solo aparece el punto de salida del router. |
| Listas | Pendiente de fuente. |
| Modales | Pendiente de fuente. |
| Tabs | Pendiente de fuente. |
| Formularios visuales | Pendiente de fuente. |

## Ejemplo

```html
<!-- Botones Material: atributo matButton (Material 20) (Tema 02) -->
<button matButton="filled">Confirmar pedido</button>
<button matButton="outlined">Mantener version</button>
<button matButton="text">Vaciar carrito</button>

<!-- Icono Material como elemento de apoyo visual -->
<mat-icon>delete</mat-icon>
<mat-icon>home</mat-icon>
<mat-icon>check_circle</mat-icon>
```

```typescript
// Importar solo los dos modulos tratados en el tema
@Component({
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  // ...
})
```

## Regla para agentes

- Usar esta skill para botones, iconos y personalizacion Material confirmada.
- No recomendar cards, sidebars, tabs o formularios como teoria del Tema 02
  salvo que se incorpore una referencia adicional.
- No instalar Angular Material ni generar componentes mientras la tarea sea solo
  documental.
