# Skill - Servicios Knowledge

## Objetivo

Recoger y resumir la teoría base de Angular sobre servicios e inyección de
dependencias para el proyecto `PREPARACION-EXAMEN`.

## Fuente

- Documento: `teoria.pdf`
- Alcance: páginas 52 a 62
- Tema: `Tema 06 - Servicios e Inyección de Dependencias`

## Qué cubre esta skill

- Qué es un servicio en Angular.
- Responsabilidad de los servicios frente a los componentes.
- Uso de servicios para consultar, almacenar y compartir datos.
- Patrón singleton en servicios.
- Inyección de dependencias.
- Uso de `@Injectable`.
- Uso del constructor para inyectar servicios.
- Registro de proveedores en servicio, componente y módulo.

## Cómo usar esta skill en este proyecto

Antes de diseñar lógica compartida o acceso a datos, consultar:

- `.codex/skills/05-servicios-knowledge/references/servicios-inyeccion.md`

Aplicar estas reglas:

- Mantener en componentes solo lógica de presentación e interacción.
- Mover acceso a datos, almacenamiento y compartición de estado a servicios.
- Inyectar servicios mediante constructor, sin crear instancias manuales.
- Priorizar `providedIn: 'root'` salvo que exista una razón clara para otro ámbito.
- Mantener una estructura coherente con Angular `standalone`.

## Contexto del proyecto actual

En este repositorio la aplicación usa componentes `standalone`, así que los
servicios deben integrarse principalmente con `@Injectable` e inyección por
constructor, evitando mover lógica de datos a los componentes.
