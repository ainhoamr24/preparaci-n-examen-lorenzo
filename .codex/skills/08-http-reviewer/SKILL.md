# Skill - HTTP Reviewer

## Objetivo

Usar esta skill para revisar cambios relacionados con peticiones HTTP en Angular.

Proyecto: `PREPARACION-EXAMEN`.

Tipo de aplicación: tienda Angular sin backend real.

## Archivos de referencia

Antes de revisar, consultar:

- `.codex/skills/08-http-knowledge/SKILL.md`
- `.codex/skills/08-http-knowledge/references/http-client.md`
- `.codex/skills/08-http-steps/SKILL.md`

## Checklist general

- [ ] El cambio afecta solo a acceso HTTP o transformación de datos necesarios.
- [ ] No se ha modificado código no relacionado.
- [ ] La app sigue siendo una tienda Angular sin backend real.

## Checklist de configuración

- [ ] `provideHttpClient()` está configurado en el proyecto standalone.
- [ ] No se mezcla configuración antigua de módulos sin razón clara.

## Checklist de `HttpClient`

- [ ] Se usa `HttpClient` cuando corresponde.
- [ ] `HttpClient` se inyecta por constructor.
- [ ] No se duplican peticiones idénticas sin necesidad.
- [ ] Las respuestas están tipadas correctamente.

## Checklist de servicios HTTP

- [ ] Las peticiones viven en un servicio cuando deben reutilizarse.
- [ ] El componente no asume una responsabilidad HTTP que debería delegarse.
- [ ] La URL base y los métodos HTTP están organizados con claridad.

## Checklist de métodos HTTP

- [ ] `get`, `delete`, `post` y `put` están bien definidos.
- [ ] Cada método recibe solo los parámetros necesarios.
- [ ] El tipo devuelto del observable es coherente con la respuesta esperada.
- [ ] Si se usan opciones HTTP, `headers`, `params` o `responseType` son coherentes.
- [ ] Tras operaciones de escritura, la UI se actualiza cuando corresponde.

## Checklist de errores

- [ ] Los errores HTTP se gestionan explícitamente.
- [ ] Si hay `handleError`, centraliza correctamente los mensajes.
- [ ] `catchError` está encadenado correctamente.
- [ ] `retry` se usa con sentido y antes de `catchError`.

## Checklist de transformación

- [ ] `map` se usa cuando realmente hay que adaptar la respuesta.
- [ ] La transformación no rompe el tipado esperado.
- [ ] El formato final es útil para el componente consumidor.

## Checklist de TypeScript

- [ ] No se usa `any` sin justificación.
- [ ] `Observable` y los modelos como `Articulo` están bien tipados.
- [ ] Los métodos tienen nombres claros.

## Checklist de compilación

Antes de cerrar:

- [ ] Revisar errores TypeScript.
- [ ] Revisar imports faltantes de `HttpClient` y RxJS.
- [ ] Verificar que la app sigue arrancando.

## Problemas frecuentes

Marcar como problema si aparece:

- Peticiones HTTP metidas en el componente sin necesidad.
- Respuestas sin tipado claro.
- Falta de `provideHttpClient()` en standalone.
- Error HTTP sin gestionar.
- Reutilización deficiente de lógica de carga tras `post`, `put` o `delete`.
