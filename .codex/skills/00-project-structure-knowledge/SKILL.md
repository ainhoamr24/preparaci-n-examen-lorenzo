# Project Structure Knowledge

## Objetivo

Explicar la **estructura oficial del proyecto Angular** `PREPARACION-EXAMEN` siguiendo el estilo del curso. Esta skill es fundamental para entender cómo se organizan componentes, servicios, modelos, rutas y guardias en el proyecto.

---

## Contenido

### Organización de Carpetas

El proyecto sigue una estructura clara y didáctica:

```
src/app/
├── Models/           # Interfaces y modelos de datos
├── Components/       # Componentes Angular
├── Services/         # Servicios con lógica de negocio
├── Guards/           # Guardias de rutas
├── app.routes.ts     # Definición de rutas
├── app.config.ts     # Configuración de la aplicación
├── app.ts            # Componente raíz
├── app.html          # Template del componente raíz
└── app.scss          # Estilos del componente raíz
```

### Convenciones de Nombres

- **Componentes**: `nombre.component.ts`, `nombre.component.html`, `nombre.component.scss`
- **Servicios**: `nombre.service.ts`
- **Modelos**: `nombre.ts` (interfaz o clase)
- **Guards**: `nombre.guard.ts`
- **Rutas**: `app.routes.ts`

Ejemplos reales del proyecto:
- `src/app/Components/fin/fin.component.ts`
- `src/app/Services/tareas-service.ts`
- `src/app/Models/tarea.ts`
- `src/app/Guards/panel-guard-guard.ts`

### Relación entre Componentes, Servicios y Modelos

```
Modelo (Interface/Clase)
    ↓
Servicio (HttpClient, datos)
    ↓
Componente (Suscripción, lógica de UI)
    ↓
Template (Visualización con @for, @if)
```

### Uso de Rutas y Guards

- **`app.routes.ts`**: Define todas las rutas de la aplicación.
- **`panel-guard.ts`**: Protege rutas que requieren validación.
- Los guards se aplican en `app.routes.ts` usando `canActivate`.

### Organización de Archivos en un Componente

Cada componente está en su propia carpeta:

```
Components/
├── fin/
│   ├── fin.component.ts          # Lógica
│   ├── fin.component.html        # Template
│   └── fin.component.scss        # Estilos
├── panel/
│   ├── panel.component.ts
│   ├── panel.component.html
│   └── panel.component.scss
└── ...
```

---

## Cuándo Usar Esta Skill

- **Antes de crear componentes**: Entender dónde colocar el nuevo componente.
- **Antes de crear servicios**: Saber dónde ir en `Services/` y cómo estructurarlo.
- **Antes de reorganizar carpetas**: Verificar que la nueva estructura sigue el patrón del curso.
- **Antes de crear nuevas funcionalidades**: Asegurar coherencia con estructura existente.
- **Antes de añadir rutas**: Entender cómo se declaran en `app.routes.ts`.
- **Antes de crear guards**: Saber dónde colocar y cómo aplicarlos a rutas.

---

## Restricciones

- ✅ **Mantener la estructura actual del proyecto**: No cambiar radicalmente.
- ✅ **No introducir arquitectura enterprise**: Mantenerlo simple y didáctico.
- ✅ **Mantener nombres simples y coherentes**: Seguir convenciones del curso.
- ✅ **Un componente = una carpeta**: Evitar mezclar componentes.
- ✅ **Servicios centralizados**: Todos en `Services/`.
- ✅ **Modelos explícitos**: Interfaces claras en `Models/`.
- ✅ **Guards dedicados**: Un archivo por guard en `Guards/`.

---

## Referencias Relacionadas

Para complementar esta skill, consulta:

- **01-componentes-knowledge** — Cómo crear un componente dentro de esta estructura.
- **05-servicios-knowledge** — Cómo crear un servicio dentro de `Services/`.
- **07-router-knowledge** — Cómo usar `app.routes.ts` y guards.
- **08-http-knowledge** — Cómo conectar servicios con HTTP en esta estructura.

---

## Ejemplo: Crear un Nuevo CRUD

### 1. Modelo
```
src/app/Models/producto.ts
```

### 2. Servicio
```
src/app/Services/producto.service.ts
```

### 3. Componentes (si es necesario)
```
src/app/Components/productos/
├── productos.component.ts
├── productos.component.html
└── productos.component.scss
```

### 4. Rutas (actualizar `app.routes.ts`)
```typescript
{ path: 'productos', component: ProductosComponent }
```

### 5. Guard (si es necesario)
```
src/app/Guards/producto.guard.ts
```

Aplicar en `app.routes.ts`:
```typescript
{ path: 'productos', component: ProductosComponent, canActivate: [ProductoGuard] }
```

---

## Estructura Visual Completa

```
PREPARACION-EXAMEN (Raíz)
├── .codex/                           # Documentación de proyecto
├── .codex-plugin/                    # Plugin manifest
├── public/
├── src/
│   ├── app/
│   │   ├── Models/
│   │   │   ├── tarea.ts
│   │   │   ├── tareas.json
│   │   │   └── tareas-copia.json
│   │   ├── Components/
│   │   │   ├── fin/
│   │   │   ├── panel/
│   │   │   ├── inicio/
│   │   │   ├── tarea/
│   │   │   ├── tareas/
│   │   │   ├── error/
│   │   │   └── header/
│   │   ├── Services/
│   │   │   └── tareas-service.ts
│   │   ├── Guards/
│   │   │   └── panel-guard-guard.ts
│   │   ├── app.routes.ts
│   │   ├── app.config.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.scss
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
│   └── ...
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## Principios de Organización

1. **Separación de responsabilidades**: Componentes, Servicios, Modelos en carpetas distintas.
2. **Simplicidad**: Nombres claros, sin abstracciones innecesarias.
3. **Escalabilidad académica**: Fácil agregar nuevas entidades sin reorganizar.
4. **Coherencia**: Todos los archivos siguen las mismas convenciones.
5. **Didactismo**: Un estudiante puede entender la estructura sin necesidad de explicación adicional.
