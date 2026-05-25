# Skill - Servicios Steps

## Objetivo

Definir los pasos prácticos para aplicar la teoría de servicios e inyección de
dependencias del bloque 05 en `PREPARACION-EXAMEN`.

Proyecto: tienda Angular sin backend real.

Fuente teórica: `teoria.pdf`, páginas 52 a 62.

## Referencias obligatorias

Antes de implementar, revisar:

- `.codex/skills/05-servicios-knowledge/SKILL.md`
- `.codex/skills/05-servicios-knowledge/references/servicios-inyeccion.md`
- `.codex/skills/05-servicios-reviewer/SKILL.md`

## Cuándo usar esta skill

Usar esta guía cuando haya que:

- mover lógica de datos fuera de componentes
- compartir información entre varios componentes
- centralizar operaciones sobre una colección
- inyectar servicios en componentes o en otros servicios

## Procedimiento recomendado

### 1. Confirmar que el problema pertenece a un servicio

Antes de tocar código, comprobar si la necesidad es:

- consultar datos
- almacenarlos
- actualizarlos
- compartirlos entre componentes

Si la respuesta es sí, esa responsabilidad debe ir en un servicio.

### 2. Mantener al componente centrado en la presentación

El componente debe:

- mostrar datos
- reaccionar a eventos del usuario
- delegar acceso y manipulación de datos al servicio

Evitar poner en el componente lógica propia de una API local o remota.

### 3. Crear el servicio con CLI

Usar Angular CLI para generar el servicio:

```bash
ng g s /Services/articulos
```

Mantener una carpeta clara para servicios.

### 4. Definir el servicio con `@Injectable`

Usar:

```ts
@Injectable({
  providedIn: 'root'
})
```

Esto debe ser la opción por defecto salvo que exista una razón concreta para otro
ámbito.

### 5. Diseñar una API clara del servicio

El servicio debe exponer métodos con responsabilidad clara.

Ejemplos típicos:

- `getArticulos`
- `getArticulo`
- `postArticulo`
- `putArticulo`
- `deleteArticulo`

Si el servicio trabaja con una colección, mantener nombres consistentes.

### 6. Centralizar el estado compartido en el servicio

Si varios componentes necesitan la misma información:

- almacenar la colección en el servicio
- dejar que todos consuman la misma instancia

Esto aprovecha el comportamiento singleton del servicio.

### 7. Inyectar el servicio por constructor

Importar el servicio y pedirlo como dependencia:

```ts
constructor(private miServicio: ArticulosService) {}
```

No crear instancias manuales con `new`.

### 8. Elegir `private` o `public` con criterio

- `private` si el servicio se usa solo dentro del controlador
- `public` si también debe quedar accesible desde la plantilla

Por defecto, preferir `private` si no hace falta exponerlo.

### 9. Cargar datos iniciales en `ngOnInit`

Si el componente necesita datos al arrancar:

- pedirlos al servicio en `ngOnInit`
- asignarlos a una propiedad del componente

Ejemplo:

```ts
ngOnInit() {
  this.articulos = this.miServicio.getArticulos();
}
```

### 10. Usar `providers` solo cuando sea intencional

Si registras el servicio en `@Component`:

- cada instancia del componente tendrá su propia instancia del servicio

Si no es eso lo que quieres, usar `providedIn: 'root'`.

### 11. Mantener el contexto moderno del proyecto

Aunque la teoría mencione `@NgModule`, en este proyecto:

- priorizar componentes `standalone`
- priorizar servicios registrados con `@Injectable`
- usar `providers` de componente solo si el alcance local está justificado

### 12. Revisar antes de cerrar

Checklist mínima:

- la lógica de datos está en el servicio
- el servicio usa `@Injectable`
- el componente inyecta el servicio por constructor
- no se crean instancias manuales
- el ámbito del proveedor es coherente
- la plantilla sigue siendo clara y simple

## Resultado esperado

Al terminar este bloque, el proyecto debe quedar preparado para manejar acceso a
datos, compartición de estado e inyección de dependencias de forma clara,
didáctica y coherente con Angular `standalone`.
