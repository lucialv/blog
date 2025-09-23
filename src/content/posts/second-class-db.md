---
title: Segunda clase de Bases de Datos — Modelo Entidad-Relación
published: 2025-09-22
description: Apuntes de la segunda clase sobre el modelo entidad-relación usando el diagrama de ejemplo y términos originales en catalán.
tags: [Base de Datos, ER, Modelo, Tutorial]
category: Clases-Base-de-Datos
draft: false
lang: es
---

# Segunda clase: Modelo Entidad-Relación (ER)

El **modelo entidad-relación (ER)** es básicamente un dibujo que nos ayuda a pensar antes de crear tablas: qué cosas guardamos, qué datos tiene cada cosa y cómo se conectan entre sí.

## 1. Elementos básicos del diagrama

Lo que ves en el dibujo son formas que representan ideas muy simples:

- `Entitat` (Entidad): “Tipo de cosa” del mundo real. Ejemplos: `PRODUCTE`, `PERSONA`, `ALUMNE`, `ASSIGNATURA`, `PROFESSORS`, `POBLACIÓ`.
- `Atribut`: Datos que describen a la entidad: `nom`, `data_naix`, `estat_civil`...
- `PK` (Clave primaria): El atributo que diferencia a un registro del resto. En el dibujo está subrayado. Ej: `dni` en `PERSONA`.
- `Atribut calculable`: No lo guardamos tal cual; lo sacamos a partir de otros. Línea discontinua. Ej: `edat` se calcula con `data_naix`.
- `Relació`: Conexión entre entidades. Ej: un `ALUMNE` “està matriculat” en una `ASSIGNATURA`.

## 2. Ejemplo: Entidad PERSONA

`PERSONA` tiene:

- `dni`: su identificador único (PK)
- `nom`: nombre (ves valores de ejemplo como `lucia`, `lucy` para que se entienda)
- `data_naix`: fecha de nacimiento
- `estat_civil`: estado civil (casada, divorciada, soltera...)
- `edat`: no se guarda; se calcula (derivado de la fecha de nacimiento)

Idea clave: guarda lo “estable” (`data_naix`) y calcula lo variable (`edat`). Evitas que edades queden desactualizadas.

## 3. Relaciones y cardinalidades

Las líneas y rombos muestran cómo se conectan las entidades y las anotaciones (`1,1`, `0,N`, `M`) dicen “cuántos de cuántos”. Resumen rápido:

- `ALUMNE` — “està matriculat” — `ASSIGNATURA`: muchos alumnos en muchas asignaturas. La `nota` no pertenece a `ALUMNE` ni a `ASSIGNATURA`, sino a la matrícula (por eso cuelga de la relación).
- `ALUMNE` — “viu” — `POBLACIÓ`: cada alumno vive en una población; una población tiene muchos alumnos.
- `PROFESSORS` — “viu” — `POBLACIÓ`: parecido pero opcional del lado profesor (`0,N`): podría faltar el dato.
- `PROFESSORS` — “imparteix” — `ASSIGNATURA`: muchos a muchos (un profesor varias asignaturas y una asignatura varios profesores).
- `ALUMNE` — “és tutor” — `PROFESSORS`: relación para tutoría. Según la notación, podría implicar que cada alumno tiene tutor y cada tutor se asocia a uno (o a varios) — revisa siempre la convención del profesor.

Truco mental: si un dato depende de DOS entidades al mismo tiempo (ej: la `nota`), probablemente es atributo de la relación.

## 4. Atributos calculables y diseño limpio

`edat` = ahora - año de `data_naix`. No lo guardes, calcúlalo cuando lo necesites. Así no se “caduca”.

Regla rápida:
- ¿Depende de otros valores o del tiempo? → calcula.
- ¿Es un dato base que no se deriva de nada? → guarda.

## 5. Usa la imagen como mapa

Aquí está el diagrama para que lo vayas leyendo mientras repasas:

![Diagrama entidad-relación de ejemplo](/db02.png)

Checklist cuando analices una entidad:
1. ¿Clave primaria clara? (`dni` en `PERSONA`)
2. ¿Qué atributos son obligatorios? (`nom` seguramente sí)
3. ¿Hay derivados? (`edat`)
4. ¿Con quién se relaciona? ¿tipo de relación? (uno a muchos, muchos a muchos…)
5. ¿Algún dato que realmente cuelga de la relación y no de la entidad? (`nota`)
