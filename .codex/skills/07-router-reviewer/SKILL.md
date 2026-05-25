# Skill - Router Reviewer

## Objetivo

Usar esta skill para revisar cambios relacionados con el router de Angular.

Proyecto: `PREPARACION-EXAMEN`.

Tipo de aplicación: tienda Angular sin backend real.

## Archivos de referencia

Antes de revisar, consultar:

- `.codex/skills/07-router-knowledge/SKILL.md`
- `.codex/skills/07-router-knowledge/references/router.md`
- `.codex/skills/07-router-steps/SKILL.md`

## Checklist general

- [ ] El cambio afecta solo a navegación o acceso por ruta necesarios.
- [ ] No se ha modificado código no relacionado.
- [ ] La app sigue siendo una tienda Angular sin backend.

## Checklist de rutas

- [ ] Cada ruta apunta al componente correcto.
- [ ] El orden de rutas es correcto.
- [ ] La ruta comodín `**` queda al final si existe.
- [ ] Los nombres de ruta son claros.

## Checklist de configuración

- [ ] `provideRouter(routes)` está bien configurado.
- [ ] `app.routes.ts` mantiene una estructura clara.
- [ ] Existe `router-outlet` donde deben cargarse los componentes.

## Checklist de navegación

- [ ] `routerLink` se usa correctamente en plantilla.
- [ ] `RouterLink` está importado en componentes standalone que lo usan.
- [ ] `Router` se usa correctamente para navegación programática.
- [ ] Las rutas usadas en HTML y TS coinciden con las definidas en `routes`.

## Checklist de parámetros

- [ ] Los parámetros de ruta están bien definidos con `:param`.
- [ ] `ActivatedRoute` se usa correctamente para recuperarlos.
- [ ] El nombre del parámetro recuperado coincide con el definido en la ruta.
- [ ] Los datos recuperados se usan de forma clara en el componente.

## Checklist de `queryParams`

- [ ] `queryParams` se envían con formato correcto.
- [ ] `ActivatedRoute.queryParams` se usa correctamente.
- [ ] Los parámetros recuperados se vuelcan en variables claras.
- [ ] Si se usan para filtrar, el servicio o lógica receptora es coherente.

## Checklist de guards

- [ ] El guard está asociado a la ruta correcta.
- [ ] La lógica del guard devuelve `true` o `false` de forma coherente.
- [ ] Si hay redirección, el uso de `Router` es correcto.
- [ ] El tipo de guard elegido corresponde al caso real.

## Checklist de TypeScript

- [ ] No se usa `any` sin justificación.
- [ ] Los nombres de métodos de navegación son claros.
- [ ] `Router`, `ActivatedRoute` y guards están bien importados.

## Checklist de compilación

Antes de cerrar:

- [ ] Revisar errores de template Angular.
- [ ] Revisar errores TypeScript.
- [ ] Revisar imports faltantes.
- [ ] Verificar que la app sigue arrancando.

## Problemas frecuentes

Marcar como problema si aparece:

- Ruta mal ordenada por culpa de `**`.
- `routerLink` usado sin importar `RouterLink`.
- Parámetro de ruta definido con un nombre y leído con otro.
- Navegación programática hacia ruta incorrecta.
- Guard mal asociado o con lógica inconsistente.
