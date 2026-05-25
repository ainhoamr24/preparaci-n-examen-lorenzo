# Skill - Servicios Reviewer

## Objetivo

Usar esta skill para revisar cambios relacionados con servicios e inyección de
dependencias en Angular.

Proyecto: `PREPARACION-EXAMEN`.

Tipo de aplicación: tienda Angular sin backend real.

## Archivos de referencia

Antes de revisar, consultar:

- `.codex/skills/05-servicios-knowledge/SKILL.md`
- `.codex/skills/05-servicios-knowledge/references/servicios-inyeccion.md`
- `.codex/skills/05-servicios-steps/SKILL.md`

## Checklist general

- [ ] El cambio afecta solo a servicios o a su consumo necesario.
- [ ] No se ha modificado código no relacionado.
- [ ] La app sigue siendo una tienda Angular sin backend.

## Checklist de responsabilidad

- [ ] El componente no asume lógica de acceso a datos que debería ir en un servicio.
- [ ] El servicio concentra consulta, almacenamiento o actualización de información.
- [ ] No hay lógica de servicio duplicada en varios componentes.

## Checklist de `@Injectable`

- [ ] El servicio usa `@Injectable`.
- [ ] El alcance del proveedor es coherente con la necesidad real.
- [ ] Si se quiere uso global, el servicio usa `providedIn: 'root'`.

## Checklist de inyección

- [ ] El servicio se inyecta por constructor.
- [ ] No se crean instancias manuales con `new`.
- [ ] El tipo del servicio está bien declarado en el constructor.
- [ ] El ámbito `private` o `public` está elegido con sentido.

## Checklist de API del servicio

- [ ] Los métodos del servicio tienen nombres claros.
- [ ] La API del servicio es coherente con su responsabilidad.
- [ ] Los métodos de lectura y escritura están bien separados.
- [ ] Los tipos de entrada y salida son claros.

## Checklist de consumo en componentes

- [ ] El componente usa el servicio para obtener datos iniciales.
- [ ] Si procede, la carga inicial se hace en `ngOnInit`.
- [ ] El componente no rompe la separación entre presentación y datos.
- [ ] La plantilla consume datos ya preparados por el componente o servicio.

## Checklist de `providers`

- [ ] Si se usa `providers` en `@Component`, es intencional.
- [ ] No se crea una nueva instancia por componente sin necesidad.
- [ ] Si se menciona `@NgModule`, es solo por contexto o compatibilidad.

## Checklist de TypeScript

- [ ] No se usa `any` sin justificación.
- [ ] Las propiedades y métodos tienen nombres claros.
- [ ] Los tipos de modelos como `Articulo` están bien usados.

## Checklist de compilación

Antes de cerrar:

- [ ] Revisar errores TypeScript.
- [ ] Revisar imports faltantes.
- [ ] Verificar que la app sigue arrancando.

## Problemas frecuentes

Marcar como problema si aparece:

- Lógica de acceso a datos dentro del componente.
- Servicio sin `@Injectable`.
- Servicio instanciado manualmente.
- Uso incorrecto de `providers` generando instancias innecesarias.
- Métodos del servicio poco claros o inconsistentes.
