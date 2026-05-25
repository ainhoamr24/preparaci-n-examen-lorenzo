# AGENTS.md -- PREPARACION-EXAMEN-LORENZO

## 1. Principio general

- Trabaja con prudencia, orden y finalidad didáctica.
- No modifiques código, estructura, dependencias ni documentación sin tener al
  menos un 95% de confianza sobre el objetivo, el alcance y el impacto.
- Si falta contexto funcional, académico o visual, pregunta antes de cambiar
  archivos.
- No inventes requisitos, páginas, componentes, dependencias, contenido del PDF
  ni estructuras no verificadas.
- Mantén los cambios pequeños, justificables y fáciles de revisar.
- Diferencia siempre entre lo que propone el material del curso y lo que ya
  existe en el repositorio.

## 2. Proyecto

`preparacion-examen-lorenzo` es un proyecto Angular para preparar el examen de
Diseño de Interfaces Web (DIW) de forma práctica, simple y didáctica.

Objetivos técnicos del curso:

- Usar Angular 20 en los ejemplos y en la arquitectura objetivo del temario.
- Usar SCSS como formato de estilos.
- Mantener una aplicación cliente sin SSR/SSG.
- No crear una aplicación zoneless.
- Configurar idioma `es-ES` y moneda `EUR` cuando se implemente la configuración
  general de la aplicación.
- Usar Angular Material cuando el ejercicio o la implementación visual lo
  requiera.

Estado que debe verificarse antes de tocar código:

- El proyecto instalado puede no coincidir con la versión descrita por el PDF.
- A fecha de creación de este archivo, `package.json` contiene Angular 21, no
  Angular 20.
- No migres, rebajes ni añadas dependencias solo para ajustarte al temario sin
  una petición explícita del usuario.
- Cuando el código real y el temario difieran, explica la diferencia y aplica la
  solución compatible con el alcance aprobado.

## 3. Fuentes de verdad

Consulta las fuentes en este orden:

1. Las instrucciones explícitas del usuario para la tarea actual.
2. Las skills documentales dentro de `.codex/skills/`, **solo si están
   presentes**; verifica su existencia antes de citarlas.
3. El código real: `src/`, `package.json`, `angular.json`, configuraciones y
   pruebas.
4. `teoria.pdf`, como respaldo si `.codex/skills/` no cubre la información
   necesaria.
5. `README.md`, únicamente como apoyo secundario.

Reglas de consulta:

- `.codex/skills/` es la fuente principal del contenido académico; `teoria.pdf`
  es el respaldo cuando las skills no contienen la información requerida.
- No afirmes que una skill o carpeta dentro de `.codex/` existe sin verificarlo
  primero en el sistema de archivos.
- Si `.codex/skills/` no existe o no cubre la información necesaria, acude a
  `teoria.pdf` antes de recurrir a memoria o suposiciones.
- Comprueba el código real antes de afirmar que una configuración, carpeta,
  dependencia o componente ya existe.

## 4. Reglas Angular

- Mantén el enfoque Angular standalone.
- Crea componentes reutilizables, pequeños, tipados y con responsabilidad clara.
- Usa una carpeta propia para cada componente, con sus archivos `.ts`, `.html`
  y `.scss` cuando se cree un componente completo.
- Importa explícitamente las dependencias utilizadas por cada componente.
- Usa la sintaxis de control moderna de plantillas: `@if`, `@for` y `@switch`.
- Nunca uses `*ngIf`, `*ngFor` ni `*ngSwitch` en código nuevo o modificado.
- Mantén la aplicación sin SSR/SSG y sin modo zoneless, salvo petición expresa
  que revoque estas reglas.
- Configura `es-ES` y `EUR` cuando la tarea incluya la configuración regional.
- Usa Angular Material solo cuando proceda por el ejercicio o por un requisito
  visual concreto; comprueba antes si está instalado.
- Considera Angular 20 la referencia académica. Si el repositorio continúa en
  Angular 21, no fuerces una migración hacia atrás sin autorización explícita.

## 5. Reglas CSS/SCSS

- Usa SCSS para estilos globales y de componentes.
- Prioriza SASS modular con `@use` y `@forward`; no uses `@import`.
- Usa metodología BEM y estos prefijos:
  - `c-` para bloques de componentes visuales, por ejemplo `c-button`.
  - `l-` para layouts, por ejemplo `l-flex`.
  - `g--` para utilidades o modificadores globales, por ejemplo `g--margin-md`.
- Usa variables CSS del sistema con prefijo `--mlt-sys-*`.
- Evita números mágicos: extrae colores, espaciados, radios, sombras,
  tipografías y breakpoints repetidos a variables o tokens claros.
- Mantén un sistema limitado y coherente de tamaños y espaciados.
- Conserva los estilos locales al componente salvo reglas realmente globales.
- No añadas Bootstrap, Tailwind u otras librerías CSS sin requisito explícito.

## 6. Reglas de diseño visual

Aplica las normas visuales del material DIW:

- Deja suficiente espacio en blanco para separar información no relacionada.
- Mantén alineaciones claras y una jerarquía visual legible.
- Resalta lo importante y desenfatiza lo secundario mediante contraste,
  tamaño, peso y espacio.
- No uses carruseles.
- Usa una escala limitada de tamaños y una paleta de colores coherente.
- Evita layouts innecesariamente extendidos en pantallas grandes cuando afecten
  a la lectura.
- Distingue las acciones por su importancia y por su función.

Los botones deben poder contemplar estas variantes cuando el diseño lo necesite:

- Importancia: `primaria`, `secundaria`, `terciaria`.
- Función: `normal`, `alternativa`, `peligrosa`.

Estas variantes deben expresarse con una API reutilizable y tipada en Angular y
con clases SCSS coherentes con BEM.

## 7. Estructura esperada

La arquitectura objetivo del curso, cuando la tarea justifique crearla, es:

```text
src/app/
|-- components/
|   |-- ui/          # Componentes reutilizables de interfaz
|   `-- paginas/     # Componentes específicos de páginas
|-- scss/            # Organización SASS global del proyecto
`-- styles/          # Estilos o tematización de Angular Material, si hace falta
```

Reglas para aplicar esta estructura:

- No describas estas carpetas como existentes hasta verificarlas en `src/app/`.
- No crees toda la arquitectura por adelantado si el ejercicio solo necesita una
  parte.
- Separa componentes reutilizables (`components/ui`) de páginas específicas
  (`components/paginas`).
- Usa `src/app/scss/` para la arquitectura SASS común cuando se implemente.
- Crea `src/app/styles/` únicamente si Angular Material o la tematización lo
  requieren.

## 8. Flujo de trabajo de Codex

1. Identifica el objetivo exacto de la petición y el tema DIW relacionado.
2. Consulta `teoria.pdf` y las skills de `.codex/skills/` pertinentes al tema
   de la tarea, verificando su existencia antes de citarlas.
3. Inspecciona el estado real del proyecto y sus dependencias.
4. Señala cualquier diferencia relevante entre el temario y el código actual.
5. Si no alcanzas el 95% de confianza, pregunta antes de modificar.
6. Divide por fases cualquier creación de archivos grandes o cambio de
   arquitectura.
7. Implementa el cambio mínimo que cumpla el objetivo.
8. Comprueba tipado, estructura, estilos y coherencia didáctica.
9. Ejecuta la verificación adecuada, por ejemplo build o tests, cuando el
   cambio afecte al código.
10. Después de cada cambio importante, resume:
    - qué has creado o modificado;
    - dónde está;
    - qué falta por hacer;
    - qué dudas o riesgos permanecen.

## 9. Prohibiciones

- No inventar contenido del PDF ni afirmar haberlo leído si no está disponible
  en las referencias del proyecto.
- No inventar requisitos funcionales o visuales.
- No modificar código, estructura o documentación con contexto insuficiente.
- No cambiar la versión de Angular ni añadir dependencias sin alcance explícito.
- No activar SSR/SSG ni crear una aplicación zoneless.
- No usar directivas estructurales antiguas (`*ngIf`, `*ngFor`, `*ngSwitch`).
- No usar `@import` en SASS.
- No añadir componentes, carpetas o capas arquitectónicas innecesarias.
- No decir que Angular Material, regionalización, páginas o componentes existen
  sin verificarlos en el repositorio.
- No sacrificar claridad didáctica por abstracciones innecesarias.

## 10. Checklist antes de finalizar

- [ ] La tarea tiene un objetivo claro y se alcanzó al menos un 95% de confianza
      antes de editar.
- [ ] Se consultó la documentación disponible en `.codex/references/`, o se
      indicó claramente que faltaba.
- [ ] No se inventaron requisitos ni contenido académico.
- [ ] Las diferencias entre Angular 20 del temario y la versión real del
      proyecto se han tenido en cuenta.
- [ ] El código nuevo o modificado usa componentes standalone y está tipado.
- [ ] Las plantillas modificadas usan `@if`, `@for` y `@switch` cuando procede.
- [ ] Los estilos usan SCSS, BEM, variables `--mlt-sys-*` y evitan números
      mágicos repetidos.
- [ ] No se añadieron dependencias, carpetas ni arquitectura sin necesidad.
- [ ] Se verificó el proyecto de forma proporcional al cambio realizado.
- [ ] El resumen final indica qué se cambió, dónde, qué falta y cualquier riesgo
      o duda abierta.
